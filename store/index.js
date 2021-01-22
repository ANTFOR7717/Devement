export const state = () => ({
  user: {
    uid: null,
    login: false,
  }


})

export const getters = {

  uid(state) {
    return state.user.uid
  },

  login(state) {
    return state.user.login
  }

}

export const mutations = {

  uid(state, uid) {
    state.user.uid = uid
  },

  login(state, login) {
    state.user.login = login
  }



}
