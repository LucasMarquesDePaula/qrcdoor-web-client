<template>
  <section>
    <md-card>
      <md-card-header>
        <div class="md-title">Login</div>
      </md-card-header>

      <md-card-content>
        <form @submit.prevent="submit">
          <md-input-container :class="{ 'md-input-invalid': $v.username.$error }">
            <md-icon>person
              <md-tooltip>Usuário</md-tooltip>
            </md-icon>
            <label>Usuário</label>
            <md-input v-model.trim="username" @input="$v.username.$touch()" type="text" name="username" required />
            <span class="md-error">
              <span v-if="!$v.username.required">Campo Obrigatório</span>
              <span v-if="!$v.username.minLength">Login deve possuír no mínimo {{$v.username.$params.minLength.min}} caracteres</span>
            </span>
          </md-input-container>
          <md-input-container :class="{ 'md-input-invalid': $v.password.$error }">
            <md-icon>lock
              <md-tooltip>Senha</md-tooltip>
            </md-icon>
            <label>Senha</label>
            <md-input v-model.trim="password" @input="$v.password.$touch()" type="password" name="password" required />
            <span class="md-error">
              <span v-if="!$v.password.required">Campo Obrigatório</span>
              <span v-if="!$v.password.minLength">Senha deve possuír no mínimo {{$v.password.$params.minLength.min}} caracteres</span>
            </span>
          </md-input-container>
          <md-card-actions>
            <md-button type="submit" class="md-raised md-primary bt-align">Logar</md-button>
          </md-card-actions>
        </form>
      </md-card-content>
    </md-card>
  </section>
</template>

<script>
import service from "@service"
import { mapActions } from "vuex"
import { minLength, required } from "vuelidate/lib/validators"

export default {
  data() {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    ...mapActions(["login", "logout"]),
    submit() {
      const self = this
      const auth = {
        username: "admin",
        password: "1234"
      }
      service
        .request({
          url: "/login",
          method: "get",
          auth
          // data: auth
        })
        .then(response => {
          self.login(auth)
          // self.$store.dispatch("login", auth)
          self.$router.push({ path: "/" })
        })
        .catch(error => {
          console.error(error)
          self.logout()
          // self.$store.dispatch("logout")
        })
    }
  },
  validations: {
    username: {
      required,
      minLength: minLength(4)
    },
    password: {
      required,
      minLength: minLength(4)
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
