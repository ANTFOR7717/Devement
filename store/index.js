export const state = () => ({
  user: {
    uid: null,
    login: false,
    activity: '',
  }


})

export const getters = {

  uid(state) {
    return state.user.uid
  },

  login(state) {
    return state.user.login
  },

  activity(state) {
    return state.user.activity
  }

}

export const mutations = {

  uid(state, uid) {
    state.user.uid = uid
  },

  login(state, login) {
    state.user.login = login
  },

  activity(state, activity) {
    state.user.activity = activity
  }




}
