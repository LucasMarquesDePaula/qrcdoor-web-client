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

<style lang="scss" scoped>
#app {
  position: absolute;

  .sidebar, .topbar {
    position: fixed;
  }

  .sidebar {
    top: 60px;
  }
  .topbar {
    width: 100%;
  }

  .router-view {
    margin-left: 60px;
    margin-top: 60px;
  }
}
</style>