<template>
  <div id="app">
    <!-- Topbar -->
    <md-toolbar>
      <md-button class="md-icon-button" @click="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title">QRC Door</h2>
    </md-toolbar>
    <!-- /Topbar -->

    <!-- Left Sidenav -->
    <md-sidenav class="md-left" ref="leftSidenav">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">Sidenav content</h3>
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
      <transition :name="transition">
        <router-view></router-view>
      </transition>
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

<style lang="scss">
.router-view {
  padding: 12px;
}
</style>
