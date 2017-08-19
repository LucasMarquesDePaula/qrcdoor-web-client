<template>
  <div id="app">
    <sidebar/>
    <topbar/>
    <router-view></router-view>
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

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>