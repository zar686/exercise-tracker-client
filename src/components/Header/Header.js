import React, { Fragment } from 'react'
// import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link className='navbar' href='#posts' activeClassName="active">Show Workouts</Nav.Link>
    <Nav.Link className='navbar' href="#users" activeClassName="active">Users</Nav.Link>
    <Nav.Link className='navbar' href="#change-password" activeClassName="active">Change Password</Nav.Link>
    <Nav.Link className='navbar' href="#sign-out" activeClassName="active">Sign Out</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link className='navbar' href="#sign-up" activeClassName="active">Sign Up</Nav.Link>
    <Nav.Link className='navbar' href="#sign-in" activeClassName="active">Sign In</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar variant='dark' className='navbarBorder' expand="xl">
    <Navbar.Brand className='navbar navbar-title' href="#posts">
      DevSpot
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2 navbar">Welcome, {user.firstName}</span>}
        {/* alwaysOptions */}
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
