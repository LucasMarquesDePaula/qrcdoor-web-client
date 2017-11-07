import { LOGIN, LOGOUT } from "../mutation-types"

const state = {
  auth: null
}

const mutations = {
  [LOGIN](state, auth) {
    // console.log("Login")
    state.auth = auth
  },
  [LOGOUT](state) {
    // console.log("Logout")
    state.auth = null
  }
}

export default {
  state,
  mutations
}
