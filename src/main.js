import "@fonts/material-design-icons/material-icons.css"
import "font-awesome/css/font-awesome.css"
import "roboto-fontface/css/roboto/roboto-fontface.css"
import "vue-material/dist/vue-material.css"
import "flatpickr/dist/flatpickr.min.css"

import App from "./App"
import Vue from "vue"
import VueMaterial from "vue-material"
import VueTheMask from "vue-the-mask"
import Vuelidate from "vuelidate"
import flatpickr from "flatpickr"
import isEmpty from "lodash/isEmpty"
import { mapGetters } from "vuex"
import router from "@router"
import store from "@store"

Vue.config.productionTip = false

Vue.use(VueMaterial)
Vue.use(VueTheMask)
Vue.use(Vuelidate)

Vue.directive("datepicker", {
  bind: function (el) {
    const config = { dateFormat: "d/m/Y" }
    if (el.tagName.toLocaleLowerCase() !== "input") {
      const els = el.getElementsByTagName("input")
      flatpickr(els[0], config)
      return
    }
    flatpickr(el, config)
  }
})

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
    const loginPath = "/login"
    const auth = isEmpty(this.auth)
    const currentPath = this.$router.currentRoute.path

    this.$router.beforeEach((from, to, next) => {
      if (from.path === loginPath) {
        // Se estiver logado então desloga
        next(auth ? "/logout" : true)
        return
      }
      next(auth ? true : loginPath)
      // next()
    })

    if (!auth && currentPath !== loginPath) {
      router.push({ name: "login" })
    }
  }
})
