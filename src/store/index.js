import { createStore } from 'vuex'

// Feel free to divide the store into modules as the app grows
export default createStore({
  state: {
    isLoggedIn: false,
  },
  mutations: {
    setLoginStatus(state, status) {
      state.isLoggedIn = status
    },
  },
  actions: {
    updateLoginStatus({ commit }, status) {
      commit('setLoginStatus', status)
    },
  },
})
