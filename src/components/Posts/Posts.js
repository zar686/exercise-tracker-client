import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Image, Modal, Button, Container, Row, Col, DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap'
import { indexPosts, deletePost, editPost } from '../../api/post'
import apiUrl from '../../apiConfig'
import axios from 'axios'

class Posts extends Component {
  constructor (props) {
    super(props)

    this.state = {
      posts: [],
      deleted: false,
      show: false,
      currentPostId: '',
      editedPost: ''
    }
  }

  componentDidMount () {
    indexPosts(this.props.user)
      // .then(res => this.setState({ posts: res.data.posts.reverse() }))
      .then(res => this.props.setPosts(res.data.posts.reverse()))
      .catch(console.error)
  }

  onDeletePost = event => {
    deletePost(this.props.user, event.target.dataset.postid)
      // After successful delete, call another index request to re-render posts
      .then(() => indexPosts(this.props.user)
        .then(res => this.props.setPosts(res.data.posts.reverse()))
        .catch(console.error)
      )
      .catch(console.error)
  }

  onEditPost = event => {
    console.log('User object: ', this.props.user)
    console.log('Post ID: ', this.state.currentPostId)
    console.log('Edited post ', this.state.editedPost)

    editPost(this.props.user, this.state.currentPostId, this.state.editedPost)
      // After successful update, call another index request to re-render posts
      .then(() => indexPosts(this.props.user)
        .then(res => this.props.setPosts(res.data.posts.reverse()))
        .catch(console.error)
      )
      .then(() => this.setState({ show: false }))
      .catch(console.error)
  }

  // Trigger to show modal and autopopulates text field with contents of current post
  handleShow = event => {
    console.log('this is the post ID: ', event.target.dataset.postid)
    this.setState({ currentPostId: event.target.dataset.postid })
    axios({
      url: apiUrl + '/posts/' + event.target.dataset.postid,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      // .then(res => console.log(res) && res)
      .then(res => this.setState({ editedPost: res.data.post.body }))
      .then(() => this.setState({ show: true }))
      .catch(console.error)
  }

  handleClose = () => this.setState({ show: false });

  handleChange = event => {
    event.persist()
    this.setState({ [event.target.name]: event.target.value })
  }

  render () {
    const { handleClose, handleShow, handleChange, onEditPost, onDeletePost } = this
    const { editedPost } = this.state
    const postsStyling = {
      border: '1px solid rgba(255, 255, 255, 0.5)',
      width: '600px',
      color: 'white'
    }

    const posts = this.props.posts.map(post => (
      <React.Fragment key={post._id}>
        <Container style={postsStyling} className='post-hover pb-5 pt-2'>
          <Row>
            <Col xs={2}>
              <Link to={`/users/${post.owner._id}`}>
                <div className='proPicContainer'>
                  <Image className='proPic' src={post.owner.proPic} alt="proPic"/>
                </div>
              </Link>
            </Col>
            <Col>
              <Link to={`/users/${post.owner._id}`}>
                <div style={{ display: 'inline-block' }}><span style={{ fontWeight: 'Bold' }} className='name'>{post.owner.firstName} {post.owner.lastName}</span> <span className='username' style={{ color: 'grey' }}>@{post.owner.username}</span></div>
              </Link>
              { this.props.user._id === post.owner._id
                ? <div style={{ display: 'inline-block', float: 'right' }}>
                  <DropdownButton
                    as={ButtonGroup}
                    id='posts-dropdown'
                    size="sm"
                    variant="secondary"
                    title=""
                  >
                    <Dropdown.Item onClick={handleShow} data-postid={post._id} eventKey="1">Edit</Dropdown.Item>
                    <Dropdown.Item onClick={onDeletePost} data-postid={post._id} eventKey="2">Delete</Dropdown.Item>
                  </DropdownButton>
                </div>
                : null }
              <div>{post.body}</div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    ))

    return (
      <div style={{ color: 'white' }}>
        {posts}
        <Modal centered show={this.state.show} onHide={handleClose}>
          <Modal.Header className='textCenter' closeButton>
            <Modal.Title className='textCenter'>Edit Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input type="text" value={editedPost} onChange={handleChange} name='editedPost'></input>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={onEditPost}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default withRouter(Posts)
