# Fit Tracker Client
Fit Tracker is built using React, React-Bootstrap, HTML, and CSS. There are two main resources in the backend that the client connects to: Users and Posts. Both of these resources are modelled using Mongoose and stored as collections of documents in a non-relational database (MongoDB). Supported user features include sign in, sign up, creating a post, seeing all posts, seeing all users, seeing other people's posts, sign out, change password and update profile (routes can be found in the API repo).
Token authentication is incorporated into the app with the help of crypto (to generate the tokens) and Passport (authentication middleware used with Express). I wrote routes for creating, reading, updating and deleting (CRUD) Posts with Express. Additionally, there were routes for creating, signing in to, and updating User profiles.

# Important Links
Deployed API
Fit Tracker API GitHub Repo
Fit Tracker App
Fit Tracker Client GitHub Repo

# Planning Story
The vision for Fit Tracker is to be the Twitter for workouts, where people can share their workouts, favorite exercises, victories, struggles, things in fitness that interest them.

# User Stories

As an unregistered user, I would like to sign up with email and password.
As a registered user, I would like to sign in with email and password.
As a signed in user, I would like to change password.
As a signed in user, I would like to sign out.
As a signed in user, I would like to add a post to my wall.
As a signed in user, I would like to update a post on my wall.
As a signed in user, I would like to delete a post on my wall.
As a signed in user, I would like to see all my posts.
As a signed in user, I would like to view a list of other users and view their walls.

# Technologies Used
React
React-Bootstrap
React-Router-Dom
Babel
HTML
CSS
JavaScript
Future Iterations
Some of the features of future iterations will, adding video workouts, live stream workouts, buy fitness products directly from site. A future iteration of the app would support image upload of profile pictures as well picture uploads with posts using AWS.

# Wire Frame Planning

https://imgur.com/gallery/QpA1LKW
