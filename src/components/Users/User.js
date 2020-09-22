import React, { Component } from 'react'
import { getUser } from '../../api/post'
import { withRouter } from 'react-router-dom'
import styles from './user.css.js'
import UserPosts from '../Posts/UserPosts.js'

const profile = {
  border: styles.profile.border,
  margin: styles.profile.margin,
  padding: styles.profile.padding
}

const userInfo = {
  color: styles.userInfo.color
}

const newsFeed = {
  margin: styles.newsFeed.margin
}

class User extends Component {
  constructor (props) {
    super(props)

    console.log('these are the props ', props)

    this.state = {
      user: ''
    }
  }

  componentDidMount () {
    getUser(this.props.match.params.id)
      .then(res => this.setState({ user: res.data.user }))
      .catch(console.error)
  }

  render () {
    const { user } = this.state

    return (
      <div className="container mt-5" style={profile}>
        <div className="row">
        </div>
        <div className="row">
          <div className="col-9" style={userInfo}>
            <h4>{user.firstName}</h4>
            <h6>@{user.username}</h6>
          </div>
        </div>
        <UserPosts style={newsFeed} user={this.props.user} userId={user._id} />
      </div>
    )
  }
}

export default withRouter(User)
