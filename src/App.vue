<template>
  <div id="app">
    <div class="topbar">
      <topbar/>
    </div>
    <div class="sidebar">
      <sidebar/>
    </div>
    <div class="router-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import "font-awesome/css/font-awesome.css"
import "roboto-fontface/css/roboto/roboto-fontface.css"


import Sidebar from "@/components/Sidebar"
import Topbar from "@/components/Topbar"

export default {
  components: {
    Sidebar, Topbar
  },
  data() {
    return {
      msg: "Want something new?"
    }
  },
  methods: {
    startHacking() {
      this.$notify({
        title: "Shhh",
        message: "Just be patient...",
        duration: 6000
      })
    }
  }
}
</script>

<style lang="scss">
@import "~@/styles/conf.scss";

* {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

#app {
  position: absolute;

  .sidebar,
  .topbar {
    position: fixed;
  }

  .sidebar {
    height: 100%;
  }

  .topbar {
    width: calc(100% - #{$sidebar-width});
    left: $sidebar-width;
  }

  .router-view {
    margin-left: $sidebar-width;
    margin-top: $topbar-height;
  }
}
</style>