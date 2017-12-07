<template>
  <div class="index">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Bem-vindo"
    }
  }
}
</script>

<style lang="scss" scoped>
div.index {
  width: 100%;
  height: 100%;
  position: absolute;
  background: url(/static/images/favicon/QRCDoor_logo.png);
  background-position: center;
  background-repeat: no-repeat;
  h1 {
    font-weight: normal;
    text-align: center;
  }
}
</style>
