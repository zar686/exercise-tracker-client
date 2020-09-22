import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class UpdateProfile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userInfo: {
        firstName: ''
      },
      updated: false
    }
  }

  componentDidMount () {
    axios({
      url: `${apiUrl}/users/${this.props.user._id}`,
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(res => this.setState({ userInfo: res.data.user }))
      .catch(console.error)
  }

  handleChange = event => {
    event.persist()
    this.setState(prevState => {
      const updatedField = { [event.target.name]: event.target.value }
      const editedUser = Object.assign({}, prevState.user, updatedField)
      return { userInfo: editedUser }
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/user-info`,
      method: 'PATCH',
      data: {
        userInfo: {
          firstName: this.state.userInfo.firstName
        }
      },
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(res => this.setState({ updated: true }))
      .catch(console.error)
  }

  render () {
    const { firstName } = this.state.userInfo
    const { handleChange, handleSubmit } = this
    const { updated } = this.state
    if (updated) {
      return <Redirect to={`/users/${this.props.user._id}`} />
    }

    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h3 className='mb-4' style={{ textAlign: 'center' }}>Update Profile</h3>
          <div className="row">
            <div className="col-sm-10 col-md-8 mx-auto">
              <Form onSubmit={handleSubmit}>

                <Form.Group controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    required
                    name="firstName"
                    value={firstName}
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UpdateProfile
