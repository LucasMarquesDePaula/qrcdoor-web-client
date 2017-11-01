import "@fonts/material-design-icons/material-icons.css"
import "font-awesome/css/font-awesome.css"
import "roboto-fontface/css/roboto/roboto-fontface.css"
import "vue-material/dist/vue-material.css"

import App from "./App"
import Vue from "vue"
import VueMaterial from "vue-material"
import VueTheMask from "vue-the-mask"
import router from "./router"

Vue.config.productionTip = false

Vue.use(VueMaterial)
Vue.use(VueTheMask)

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
})
