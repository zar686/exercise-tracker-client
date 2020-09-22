import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { signUp, signIn } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'
import SignUpForm from '../shared/SignUpForm'

class SignUp extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      firstName: '',
      username: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  handleSubmit = event => {
    event.preventDefault()

    const { msgAlert, history, setUser } = this.props
    console.log(setUser)
    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user))
      .then(() => msgAlert({
        heading: 'Sign Up Success',
        message: messages.signUpSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/sign-in'))
      .catch(error => {
        this.setState({ email: '', password: '', passwordConfirmation: '', firstName: '', username: '' })
        msgAlert({
          heading: 'Sign Up Failed with error: ' + error.message,
          message: messages.signUpFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { handleChange, handleSubmit } = this
    const { email, password, passwordConfirmation, firstName, username } = this.state
    return (
      <SignUpForm
        email={email}
        password={password}
        passwordConfirmation={passwordConfirmation}
        firstName={firstName}
        username={username}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    )
  }
}

export default withRouter(SignUp)
