const GET_POSTS = (state, obj) => {
  state.posts = obj.posts
}

const GET_POST = (state, obj) => {
  // console.log('mutations posts: ', obj)
  state.post = obj
}

export default {
  GET_POSTS, GET_POST
}
