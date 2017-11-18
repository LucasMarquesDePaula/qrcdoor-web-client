<script>
import AbstractCrud from "@/components/abstract/crud"
import CrudForm from "./form"
import CrudTable from "./table"

import service from "@service/permissao"

export default {
  extends: AbstractCrud,
  components: {
    CrudForm,
    CrudTable
  },
  computed: {
    service() {
      return service
    },
    title() {
      return "Cadastro Permissão"
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  max-width: 900px;
}
</style>
