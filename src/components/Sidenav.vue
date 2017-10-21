<template>
  <div class="sidebar" :class="{ 'is-collapse': isCollapse }">
    <div class="overlay" @click="toggle"></div>
    <el-button type="primary" class="toggle" @click="toggle">
      <i class="el-icon-menu"></i>
    </el-button>
    <div class="menu">
      <el-menu :collapse="isCollapse">
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-message"></i>
            <span slot="title">Navigator One</span>
          </template>
          <el-menu-item-group>
            <span slot="title">Group One</span>
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">item four</span>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3">
          <i class="el-icon-menu"></i>
          <span slot="title">Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">Navigator Three</span>
        </el-menu-item>
      </el-menu>
    </div>
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
    toggle() {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style lang="scss">
@import "~@/styles/conf.scss";

.sidebar {
  /* 100% Full-height */
  height: 100%;
  width: 100%;
  /* Stay on top */
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  /* 0.5 second transition effect to slide in the sidenav */
  // transition: 0.5s;
  &.is-collapse {
    .overlay {
      display: none;
    }
  }
}

button.toggle {
  border-radius: 0;
  height: $topbar-height;
  width: $sidebar-width;
}

.menu {
  max-width: calc(4 * #{$sidebar-width});
}

.menu,
.el-menu {
  height: 100%;
}

.overlay {
  width: 100%;
  height: 100%;
  background-color: rgba(40, 40, 40, 0.4);
  position: fixed;
  top: $topbar-height;
  z-index: -1;
}
</style>
