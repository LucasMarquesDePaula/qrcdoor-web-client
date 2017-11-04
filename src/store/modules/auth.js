import { LOGIN, LOGOUT } from "../mutation-types"

const state = {
  auth: null
}

const mutations = {
  [LOGIN](state, auth) {
    state.auth = auth
  },
  [LOGOUT](state) {
    state.auth = null
  }
}

export default {
  state,
  mutations
}
