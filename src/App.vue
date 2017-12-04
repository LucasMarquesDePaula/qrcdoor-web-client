<template>
  <div id="app">
    <!-- Topbar -->
    <md-toolbar>
      <md-button class="md-icon-button" @click="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title">{{$route.name}}</h2>
      <img class="logo" src="/static/images/logo.png" />
    </md-toolbar>
    <!-- /Topbar -->

    <!-- Left Sidenav -->
    <md-sidenav class="md-left" ref="leftSidenav">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">Menu</h3>
        </div>
      </md-toolbar>
      <md-list>
        <md-list-item v-for="(route, index) in routes" v-if="!route.hidden" :key="index" :href="`#${route.path}`">
          <md-icon>{{route.icon}}</md-icon>
          <span>{{route.name}}</span>
        </md-list-item>
      </md-list>
    </md-sidenav>
    <!-- /Left Sidenav -->

    <!-- Router -->
    <div class="router-view">
      <md-layout md-align="center">
        <transition :name="transition">
          <router-view></router-view>
        </transition>
      </md-layout>
    </div>
    <!-- /Router -->
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import router from "@router"
import routes from "@router/routes"
import store from "@store"

export default {
  data() {
    return {
      routes,
      transition: "fade"
    }
  },
  store,
  router,
  computed: {
    ...mapGetters(["loggedIn"]),
    loginRoute() {
      return "/login"
    },
    currentRoute() {
      return this.$router.currentRoute
    }
  },
  methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle()
    },
    toggleRightSidenav() {
      this.$refs.rightSidenav.toggle()
    },
    closeRightSidenav() {
      this.$refs.rightSidenav.close()
    },
    open(ref) {
      console.log("Opened: $ref")
    },
    close(ref) {
      console.log("Closed: $ref")
    },
    isLoginRoute(route) {
      return route === this.loginRoute
    }
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length
      const fromDepth = from.path.split("/").length
      if (toDepth === fromDepth) {
        this.transition = "fade"
      } else if (toDepth < fromDepth) {
        this.transition = "slide-right"
      } else {
        this.transition = "slide-left"
      }
    }
  },
  mounted() {
    // const self = this
    // self.$router.beforeEach((from, to, next) => {
    //   const { loggedIn, loginRoute } = self
    //   const { path } = from
    //   const isLoginRoute = self.isLoginRoute(path)
    //   const route = isLoginRoute ? true : loggedIn ? true : loginRoute
    //   next(route)
    //   // next()
    //   // this.$router.push(route)
    // })
    // // TODO testar sessão
    // if (!self.isLoginRoute(self.currentRoute) && !this.loggedIn) {
    //   self.$router.push(self.loginRoute)
    // }
    const self = this

    self.$router.beforeEach((from, to, next) => {
      const { loginRoute } = self
      const { path } = from
      if (
        self.isLoginRoute(path) &&
        !self.isLoginRoute(window.location.pathname)
      ) {
        window.location = loginRoute
        return
      }
      next()
    })

    debugger
    if (self.isLoginRoute(window.location.pathname)) {
      self.$router.push(self.loginRoute)
    }
  }
}
</script>

<style lang="scss" scopped>
.router-view {
  position: absolute;
  min-height: calc(100% - 65px);
  width: 100%;
  background-color: #e0e0e0;
}
img.logo {
  height: 46px;
  position: absolute;
  right: 20px;
}
</style>
