<template>
  <div class="topbar">
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">Processing Center</el-menu-item>
      <el-submenu index="2">
        <template slot="title">Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
        <a href="https://www.ele.me" target="_blank">Orders</a>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  data() {
    return {
      isCollapse: true
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebarx {
  /* 100% Full-height */
  height: 100%;
  /* 0 width - change this with JavaScript */
  // width: 0;
  /* Stay on top */
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  /* 0.5 second transition effect to slide in the sidenav */
  transition: 0.5s;
}
</style>
