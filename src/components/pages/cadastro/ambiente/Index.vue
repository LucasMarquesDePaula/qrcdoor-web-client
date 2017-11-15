<script>
import AbstractCrud from "@/components/abstract/crud"
import CrudForm from "./form"
import CrudTable from "./table"

import service from "@service/funcao"

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
      return "Cadastro Função"
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  max-width: 750px;
}
</style>
