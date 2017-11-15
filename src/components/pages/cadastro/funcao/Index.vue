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
    service: {
      get() {
        return service
      }
    },
    title: {
      get() {
        return "Cadastro Função"
      }
    }
  }
}
</script>

