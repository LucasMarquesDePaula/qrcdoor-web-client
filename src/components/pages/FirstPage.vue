<template>
  <div>
    First Page #
    <p>{{msg}}</p>
  </div>
</template>

<script>
const msg = "Olá"

export default {
  data() {
    return {
      msg: `Mensagem ${msg}`
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>
