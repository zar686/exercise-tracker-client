import apiUrl from '../apiConfig'
import axios from 'axios'

export const getUsers = () => {
  return axios(apiUrl + '/users')
}

export const getUser = (id) => {
  return axios(apiUrl + '/users/' + id)
}

export const indexPosts = user => {
  return axios({
    url: apiUrl + '/posts',
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const deletePost = (user, postId) => {
  return axios({
    url: `${apiUrl}/posts/${postId}`,
    method: 'DELETE',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const editPost = (user, postId, editedPost) => {
  return axios({
    url: `${apiUrl}/posts/${postId}`,
    method: 'PATCH',
    data: { post: {
      body: editedPost
    }
    },
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}
