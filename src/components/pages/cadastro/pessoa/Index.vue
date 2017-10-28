<script>
import VForm from "./Form"
import VGrid from "./Grid"
import VIndex from "../Index"

export default {
  extends: VIndex,
  components: {
    VForm,
    VGrid
  },
  data() {
    return {
      title: "Cadastro Pessoa"
    }
  }
}
</script>

