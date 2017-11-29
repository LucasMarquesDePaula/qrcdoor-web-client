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
import routes from "./router/routes"

export default {
  data() {
    return {
      routes,
      transition: "fade"
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
    }
  },
  watch: {
    $route(to, from) {
      console.log(this.$router)
      console.log(this.$route)
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
