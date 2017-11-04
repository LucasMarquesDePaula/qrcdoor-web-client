import * as actions from "./actions"
import * as getters from "./getters"
import Vue from "vue"
import Vuex from "vuex"
import auth from "./modules/auth"

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    auth
  },
  actions,
  getters
})
