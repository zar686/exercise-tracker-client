import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import Posts from '../Posts/Posts'
import PostCreate from '../PostCreate/PostCreate'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      msgAlerts: [],
      posts: []
    }
  }

  setPosts = posts => {
    this.setState({
      posts: posts
    })
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  msgAlert = ({ heading, message, variant }) => {
    this.setState({ msgAlerts: [...this.state.msgAlerts, { heading, message, variant }] })
  }

  render () {
    const { msgAlerts, user, posts } = this.state

    return (
      <React.Fragment>
        <Header className='navbar' user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
          />
        ))}
        <main className="container">
          <Route exact path='/' render={() => (
            <React.Fragment>
              <p style={{ textAlign: 'center', marginTop: '50px' }}>Welcome to <span style={{ color: '#FDB927' }}>DevSpot</span>, the social network for software developers.</p>
            </React.Fragment>
          )} />

          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />

          <AuthenticatedRoute exact path='/posts' user={user} render={() => (
            <React.Fragment>
              <h3 className='mt-5' style={{ textAlign: 'center' }}>Live Feed</h3>
              <PostCreate setPosts={this.setPosts} user={user}/>
              <Posts posts={posts} setPosts={this.setPosts} user={user}/>
            </React.Fragment>

          )}/>
        </main>
      </React.Fragment>
    )
  }
}

export default App
