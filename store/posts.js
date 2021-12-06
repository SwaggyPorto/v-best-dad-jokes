export const actions = {
  async getPosts ({ commit }) {
    try {
      const res = await this.$axios.get('http://localhost:3001/posts')
      commit('setPosts', res.data)
    } catch (error) {

    }
  }
}

export const mutations = {
  setPosts (state, posts) {
    state.posts = posts
  }
}

export const state = () => ({
  id: 1,
  posts: []
});
