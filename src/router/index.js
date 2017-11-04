import Router from "vue-router"
import Vue from "vue"
import routes from "./routes"

Vue.use(Router)

const router = new Router({
  routes,
  saveScrollPosition: true,
  history: true
})

export default router
