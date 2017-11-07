import * as actions from "./actions"
import * as getters from "./getters"
import Vue from "vue"
import Vuex from "vuex"
import auth from "./modules/auth"
import persistedState from "vuex-persistedstate"

Vue.use(Vuex)
export default new Vuex.Store({
  plugins: [persistedState()],
  modules: {
    auth
  },
  actions,
  getters
})
