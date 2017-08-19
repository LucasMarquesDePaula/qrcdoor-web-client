<template>
  <div id="app">
    <sidebar-navigation/>
  </div>
</template>

<script>
import SidebarNavigation from "@/components/SidebarNavigation"
export default {
  components: {
    SidebarNavigation
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