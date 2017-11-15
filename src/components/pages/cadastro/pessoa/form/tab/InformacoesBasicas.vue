<template>
  <div>
    <md-layout :md-gutter="true">
      <md-layout>
        <md-input-container :class="{ 'md-input-invalid': $v.model.documento.$error }">
          <label>Documento (CPF / CNPJ)</label>
          <md-input v-model="model.documento" v-mask="['###.###.##-##', '##.###.###/####-##']" @blur="$v.model.documento.$touch" required></md-input>
          <span class="md-error" v-show="$v.model.documento.$error">Valor inválido</span>
        </md-input-container>
      </md-layout>

      <md-layout>
        <md-input-container :class="{ 'md-input-invalid': $v.model.fisicaJuridica.$error }">
          <label>Natureza</label>
          <md-select v-model="model.fisicaJuridica" required @closed="$v.model.fisicaJuridica.$touch">
            <md-option value="F">Física</md-option>
            <md-option value="J">Jurídica</md-option>
          </md-select>
          <span class="md-error" v-show="$v.model.fisicaJuridica.$error">Valor inválido</span>
        </md-input-container>
      </md-layout>
    </md-layout>

    <md-layout :md-gutter="true">
      <md-layout>
        <md-input-container :class="{ 'md-input-invalid': $v.model.email.$error }">
          <label>Email</label>
          <md-input v-model="model.email" @blur="$v.model.email.$touch" required></md-input>
          <span class="md-error" v-show="$v.model.email.$error">Valor inválido</span>
        </md-input-container>
      </md-layout>

      <md-layout>
        <md-chips v-model="telefoneFixo" v-mask="['####-####', '(##) ####-####']" @blur="$v.model.telefoneFixo.$touch" md-input-placeholder="Telefone Fixo..." :class="{ 'md-input-invalid': $v.model.telefoneFixo.$error }">
          <span class="md-error" v-show="$v.model.telefoneFixo.$error">Valor inválido</span>
          <md-icon>phone</md-icon>
        </md-chips>
      </md-layout>
      <md-layout>
        <md-chips v-model="telefoneCelular" v-mask="['####-####', '#####-####', '(##) ####-####', '(##) #####-####']" md-input-placeholder="Telefone Celular..." :class="{ 'md-input-invalid': $v.model.telefoneCelular.$error }">
          <span class="md-error" v-show="$v.model.telefoneCelular.$error">Valor inválido</span>
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
          <span class="md-error" v-show="$v.model.login.$error">Valor inválido</span>
        </md-input-container>
      </md-layout>

      <md-layout>
        <md-input-container md-has-password :class="{ 'md-input-invalid': $v.model.senha.$error }">
          <label>Senha</label>
          <md-input v-model="model.senha" type="password"></md-input>
          <span class="md-error" v-show="$v.model.senha.$error">Valor inválido</span>
        </md-input-container>
      </md-layout>
    </md-layout>
  </div>
</template>

<script>
import AbstractTab from "@/components/abstract/crud/form-tab"
export default {
  extends: AbstractTab,
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
