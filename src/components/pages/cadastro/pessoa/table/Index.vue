<script>
import model from "./Model"
import AbstractTable from "@/components/abstract/crud/table"
import CrudTableBody from "./Body"
import CrudTableHeader from "./Header"

export default {
  extends: AbstractTable,
  components: {
    CrudTableFilter,
    CrudTableBody,
    CrudTableHeader
  }
}
</script>

