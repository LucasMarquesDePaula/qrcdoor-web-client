<script>
export default {
  props: {
    model: {
      default() {
        return {}
      }
    },
    v: {
      default() {
        return {}
      }
    }
  },
  computed: {
    $v() {
      return this.v
    }
  }
}
</script>
