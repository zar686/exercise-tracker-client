# Fit Tracker Client
Fit Tracker is built using React, React-Bootstrap, HTML, and CSS. There are two main resources in the backend that the client connects to: Users and Posts. Both of these resources are modelled using Mongoose and stored as collections of documents in a non-relational database (MongoDB). Supported user features include sign in, sign up, creating a post, seeing all posts, seeing all users, seeing other people's posts, sign out, change password and update profile (routes can be found in the API repo).
Token authentication is incorporated into the app with the help of crypto (to generate the tokens) and Passport (authentication middleware used with Express). I wrote routes for creating, reading, updating and deleting (CRUD) Posts with Express. Additionally, there were routes for creating, signing in to, and updating User profiles.

<<<<<<< HEAD
https://imgur.com/vDgIrQ8

https://imgur.com/rbKqa32
=======
![image](https://user-images.githubusercontent.com/28852632/94065959-b720b900-fde3-11ea-8484-4160090a24ab.png)

![image](https://user-images.githubusercontent.com/28852632/94066015-cc95e300-fde3-11ea-85d1-9bcab05e8e54.png)
>>>>>>> 2f14ab4... updates

# Important Links

- Deployed API - https://blooming-island-23928.herokuapp.com/
- Fit Tracker App - https://zar686.github.io/exercise-tracker-client/
- Fit Tracker Client GitHub Repo - https://github.com/zar686/exercise-tracker-client
- Fit Tracker API GitHub Repo - https://github.com/zar686/exercise-tracker-api


# Planning Story
The vision for Fit Tracker is to be the Twitter for workouts, where people can share their workouts, favorite exercises, victories, struggles, things in fitness that interest them.

# User Stories

- As an unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change password.
- As a signed in user, I would like to sign out.
- As a signed in user, I would like to add a post to my wall.
- As a signed in user, I would like to update a post on my wall.
- As a signed in user, I would like to delete a post on my wall.
- As a signed in user, I would like to see all my posts.
- As a signed in user, I would like to view a list of other users and view their walls.

# Technologies Used
- React
- React-Bootstrap
- React-Router-Dom
- Babel
- HTML
- CSS
- JavaScript
- Future Iterations
- Some of the features of future iterations will, adding video workouts, live stream workouts, buy fitness products directly from site. A future iteration of the app would support image upload of profile pictures as well picture uploads with posts using AWS.

# Wire Frame Planning

https://imgur.com/gallery/QpA1LKW

# Setup & Installation:

- Download this template.
- Unzip and rename the template directory (unzip ~/Downloads/p4-client-master.zip).
- Move into the new project and git init.
- Empty README.md and fill with your own content.
- Replace react-auth-template in package.json with your projects name.
- Replace the "homepage" field in package.json with your (public) Github account name and repository name.
- Install dependencies with npm install. git add and git commit your changes.
- Run the development server with npm start.
