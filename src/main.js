import "@fonts/material-design-icons/material-icons.css"
import "font-awesome/css/font-awesome.css"
import "roboto-fontface/css/roboto/roboto-fontface.css"
import "vue-material/dist/vue-material.css"

import App from "./App"
import Vue from "vue"
import VueMaterial from "vue-material"
import VueTheMask from "vue-the-mask"
import Vuelidate from "vuelidate"
import { mapGetters } from "vuex"
import router from "@router"
import store from "@store"
import { sync } from "vuex-router-sync"

Vue.config.productionTip = false

Vue.use(VueMaterial)
Vue.use(VueTheMask)
Vue.use(Vuelidate)

const unsync = sync(store, router)

console.log(store)

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  // vuex: {
  //   getters: {
  //     auth: ({ auth }) => auth.auth,
  //     route: ({ route }) => route
  //   }
  // },
  template: "<App/>",
  components: { App },
  computed: {
    ...mapGetters(["auth", "route"])
  },
  created() {
    const self = this
    const loginPath = "/login"
    self.$router.beforeEach((from, to, next) => {
      next(!self.auth && from.path !== loginPath ? loginPath : true)
    })
    if (!this.auth && this.route.path !== loginPath) {
      router.push({ name: "login" })
    }
  },
  destroyed() {
    unsync()
  }
})
