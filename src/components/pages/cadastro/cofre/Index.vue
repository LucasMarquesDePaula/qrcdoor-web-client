<script>
import AbstractCrud from "@/components/abstract/crud"
import CrudForm from "./form"
import CrudTable from "./table"

import service from "@service/cofre"

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
      return "Cadastro Ambiente"
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  max-width: 1000px;
}
</style>
