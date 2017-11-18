<script>
import moment from "moment"
export default {
  props: {
    model: {
      default() {
        return {}
      }
    }
  },
  filters: {
    date(value) {
      return moment(value).format("DD/MM/YYYY")
    }
  }
}
</script>
