<template>
  <section>
  </section>
</template>

<script>
import service from "@service"
import { mapActions, mapGetters } from "vuex"
import { minLength, required } from "vuelidate/lib/validators"

// TODO
export default {
  computed: {
    ...mapGetters(["logout"])
  },
  methods: {
    ...mapActions(["logout"]),
    submit() {
      const self = this
      const auth = {
        username: "admin",
        password: "1234"
      }
      service
        .request({
          url: "/logout",
          method: "get",
          auth
        })
        .then((response) => {
          self.logout()
          self.$router.push({ path: "/" })
        })
        .catch((error) => {
          console.error(error)
          self.logout()
        })
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  min-width: 420px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  > * {
    width: 100%;
  }
}
</style>
