import axios from 'axios'

const getPosts = ({ commit }) => {
  return new Promise((resolve, reject) => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        const posts = response.data
        setTimeout(() => {
          commit('GET_POSTS', { posts })
          resolve(true)
        }, 2000)
      })
      .catch(() => reject)
  })
}

const getPost = ({ commit }, id) => {
  // console.log('action getPost: ', id)
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => {
      commit('GET_POST', res.data)
    })
}

export default {
  getPosts, getPost
}
