<script>
// import VForm from "./Form"
// import VGrid from "./Grid"
// import VIndex from "../Index"

export default {
  extends: VIndex,
  components: {
    VForm,
    VGrid
  },
  data() {
    return {
      title: "Cadastro Função"
    }
  }
}
</script>
<style lang="scss" scoped>
.index {
  max-width: 800px;
  margin: 12px auto;
}
</style>
