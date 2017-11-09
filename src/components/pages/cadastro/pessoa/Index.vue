<script>
import VForm from "./Form"
import VGrid from "./Grid"
import VIndex from "../Index"

import service from "@service/pessoa"

export default {
  extends: VIndex,
  components: {
    VForm,
    VGrid
  },
  computed: {
    service: {
      get() {
        return service
      }
    },
    title: {
      get() {
        return "Cadastro Pessoa"
      }
    }
  }
}
</script>

