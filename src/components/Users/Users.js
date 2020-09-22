import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getUsers } from '../../api/post'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import styles from './user.css.js'

const userCard = {
  height: styles.userCard.height
}

class Users extends Component {
  // show all the users
  // map over each user and display their username as a link
  constructor (props) {
    super(props)

    this.state = {
      users: []
    }
  }

  componentDidMount () {
    getUsers(this.state)
      .then(res => this.setState({ users: res.data.users }))
      .catch(console.error)
  }

  render () {
    const users = this.state.users.map(user => (
      <div key={user._id} xs={12} md={6} lg={3} xl={2} className="col d-flex align-items-stretch">
        <Card className="card-color" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>@{user.username}</Card.Title>
            <Card.Text>
              <p>{user.firstName}</p>
            </Card.Text>
            <Link to={`/users/${user._id}`}>
              <Button variant="primary">Profile</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
      // <li key={user._id}>
      //   <Link to={`/users/${user._id}`}>{user.username}</Link>
      // </li>
    ))

    return (
      <div>
        <h3 style={{ textAlign: 'center' }} className='mt-5 mb-4'>Users</h3>
        <div style={userCard} className="container">
          <div style={userCard} className="row">
            {users}
          </div>
        </div>
      </div>
    )
  }
}

export default Users
