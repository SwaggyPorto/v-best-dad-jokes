export default (inject) => {
    inject('getAllPosts', store.dispatch('posts/getPosts'))
  }