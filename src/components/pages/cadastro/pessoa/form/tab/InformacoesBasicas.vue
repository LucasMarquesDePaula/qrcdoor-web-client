<template>
  <div>
    <md-layout :md-gutter="true">
      <md-layout>
        <md-input-container :class="{ 'md-input-invalid': messages.documento }">
          <label>Documento (CPF / CNPJ)</label>
          <md-input v-model="model.documento" required></md-input>
          <span class="md-error">{{messages.documento}}</span>
        </md-input-container>
      </md-layout>

      <md-layout>
        <md-input-container :class="{ 'md-input-invalid': $v.model.fisicaJuridica.$error }">
          <label>Natureza</label>
          <md-select v-model="model.fisicaJuridica" required @closed="$v.model.fisicaJuridica.$touch">
            <md-option value="F">Física</md-option>
            <md-option value="J">Jurídica</md-option>
          </md-select>
          <span class="md-error" v-show="$v.model.fisicaJuridica.required">Valor Obrigatório</span>
        </md-input-container>
      </md-layout>
    </md-layout>

    <md-layout :md-gutter="true">
      <md-layout>
        <md-input-container :class="{ 'md-input-invalid': messages.email }">
          <label>Email</label>
          <md-input v-model="model.email" required></md-input>
          <span class="md-error">{{messages.email}}</span>
        </md-input-container>
      </md-layout>

      <md-layout>
        <md-chips v-model="telefoneFixo" v-mask="['####-####', '(##) ####-####']" md-input-placeholder="Telefone Fixo..." :class="{ 'md-input-invalid': messages.telefoneFixo }">
          <span class="md-error">{{messages.telefoneFixo}}</span>
          <md-icon>phone</md-icon>
        </md-chips>
        </md-chips>
      </md-layout>
      <md-layout>
        <md-chips v-model="telefoneCelular" v-mask="['####-####', '#####-####', '(##) ####-####', '(##) #####-####']" md-input-placeholder="Telefone Celular..." :class="{ 'md-input-invalid': messages.telefoneCelular }">
          <span class="md-error">{{messages.telefoneCelular}}</span>
          <md-icon>smartphone</md-icon>
        </md-chips>
      </md-layout>
    </md-layout>

    <md-layout :md-gutter="true">
      <md-layout>
        <md-input-container :class="{ 'md-input-invalid': messages.login }">
          <md-icon>account_circle</md-icon>
          <label>Login</label>
          <md-input v-model="model.login" required></md-input>
          <span class="md-error">{{messages.login}}</span>
        </md-input-container>
      </md-layout>

      <md-layout>
        <md-input-container md-has-password :class="{ 'md-input-invalid': messages.senha }">
          <label>Senha</label>
          <md-input v-model="model.senha" type="password"></md-input>
          <span class="md-error">{{messages.senha}}</span>
        </md-input-container>
      </md-layout>
    </md-layout>
  </div>
</template>

<script>
export default {
  props: { model: {}, $v: {} },
  data() {
    return {
      telefoneCelular: [],
      telefoneFixo: [],
      messages: {}
    }
  },
  watch: {
    model() {
      try {
        this.telefoneCelular = this.model.telefoneCelular.split(";")
      } catch (error) {
        this.telefoneCelular = []
      }

      try {
        this.telefoneFixo = this.model.telefoneFixo.split(";")
      } catch (error) {
        this.telefoneFixo = []
      }
    },
    telefoneCelular() {
      this.model.telefoneCelular = this.telefoneCelular.join(";") || null
    },
    telefoneFixo() {
      this.model.telefoneFixo = this.telefoneFixo.join(";") || null
    }
  }
}
</script>
