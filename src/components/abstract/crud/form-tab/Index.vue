<script>
import moment from "moment"
export default {
  props: {
    $v: {
      default() {
        return {}
      }
    },
    model: {
      default() {
        return {}
      }
    }
  },
  // computed: {
  //   $v() {
  //     return this.validation
  //   }
  // },
  filters: {
    date(value) {
      return moment(value).format("DD/MM/YYYY")
    }
  }
}
</script>
