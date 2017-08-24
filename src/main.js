import "vue-material/dist/vue-material.css"
import "roboto-forn"

import App from "./App"
import Vue from "vue"
import VueMaterial from "vue-material"

import router from "./router"

Vue.config.productionTip = false

Vue.use(VueMaterial)

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
})
