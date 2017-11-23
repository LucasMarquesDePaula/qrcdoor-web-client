<template>
  <section>
    <md-layout>
      <md-layout>
        <md-checkbox v-model="model.abre">Abre</md-checkbox>
      </md-layout>
      <md-layout>
        <md-checkbox v-model="model.fecha">Fecha</md-checkbox>
      </md-layout>
      <md-layout>
        <md-checkbox v-model="model.herda">Herda</md-checkbox>
      </md-layout>
      <md-layout>
        <md-checkbox v-model="model.gerencia">Gerencia</md-checkbox>
      </md-layout>
      <md-layout>
        <md-checkbox v-model="model.monitora">Monitora</md-checkbox>
      </md-layout>
    </md-layout>

    <label>Período de Vigência</label>
    <md-layout :md-gutter="true">
      <md-layout>
        <md-input-container :class="{ 'md-input-invalid': $v.model.dataInicio.$error }">
          <label>Inicio</label>
          <md-input type="date" v-model="model.dataInicio" @blur="$v.model.dataInicio.$touch"></md-input>
          <span class="md-error" v-show="$v.model.dataInicio.$error">Valor inválido</span>
        </md-input-container>
      </md-layout>
      <md-layout>
        <md-input-container :class="{ 'md-input-invalid': $v.model.dataFim.$error }">
          <label>Fim</label>
          <md-input type="date" v-model="model.dataFim" @blur="$v.model.dataFim.$touch"></md-input>
          <span class="md-error" v-show="$v.model.dataFim.$error">Valor inválido</span>
        </md-input-container>
      </md-layout>
    </md-layout>

    <label>Horário Permitido</label>
    <md-layout :md-gutter="true">
      <md-layout>
        <md-input-container :class="{ 'md-input-invalid': $v.model.horaInicio.$error }">
          <label>Inicio</label>
          <md-input type="time" v-model="model.horaInicio" @blur="$v.model.horaInicio.$touch"></md-input>
          <span class="md-error" v-show="$v.model.horaInicio.$error">Valor inválido</span>
        </md-input-container>
      </md-layout>
      <md-layout>
        <md-input-container :class="{ 'md-input-invalid': $v.model.horaFim.$error }">
          <label>Fim</label>
          <md-input type="time" v-model="model.horaFim" @blur="$v.model.horaFim.$touch"></md-input>
          <span class="md-error" v-show="$v.model.horaFim.$error">Valor inválido</span>
        </md-input-container>
      </md-layout>
    </md-layout>

    <label>Meses</label>
    <md-layout :md-gutter="true">
      <md-layout md-flex="80">
        <md-input-container>
          <md-select v-model="meses" multiple>
            <md-option v-for="(item, index) in mesesOptions" :key="index" :value="`${index}`">{{item}}</md-option>
          </md-select>
        </md-input-container>
      </md-layout>
      <md-layout>
        <div>
          <md-button class="md-icon-button md-dense" @click="setAll(meses, mesesOptions)" v-show="meses.length !== mesesOptions.length">
            <md-tooltip md-direction="top">Selecionar Todos</md-tooltip>
            <md-icon>{{ meses.length === mesesOptions.length ? 'check_box' : meses.length ? 'indeterminate_check_box' : 'check_box_outline_blank' }}</md-icon>
          </md-button>
          <md-button class="md-icon-button md-dense" @click="clearAll(meses)" v-show="meses.length">
            <md-tooltip md-direction="top">Limpar</md-tooltip>
            <md-icon>clear</md-icon>
          </md-button>
        </div>
      </md-layout>
    </md-layout>
    <label>Dias Semana</label>
    <md-layout :md-gutter="true">
      <md-layout md-flex="80">
        <md-input-container>
          <md-select v-model="diasSemana" multiple>
            <md-option v-for="(item, index) in diasSemanaOptions" :key="index" :value="`${index}`">{{item}}</md-option>
          </md-select>
        </md-input-container>
      </md-layout>
      <md-layout>
        <div>
          <md-button class="md-icon-button md-dense" @click="setAll(diasSemana, diasSemanaOptions)" v-show="diasSemana.length !== diasSemanaOptions.length">
            <md-tooltip md-direction="top">Selecionar Todos</md-tooltip>
            <md-icon>{{ diasSemana.length === diasSemanaOptions.length ? 'check_box' : diasSemana.length ? 'indeterminate_check_box' : 'check_box_outline_blank' }}</md-icon>
          </md-button>
          <md-button class="md-icon-button md-dense" @click="clearAll(diasSemana)" v-show="diasSemana.length">
            <md-tooltip md-direction="top">Limpar</md-tooltip>
            <md-icon>clear</md-icon>
          </md-button>
        </div>
      </md-layout>
    </md-layout>
  </section>
</template>

<script>
import AbstractFormTab from "@/components/abstract/crud/form-tab"

import Vue from "vue"
import fill from "lodash/fill"

import { minLength, required } from "vuelidate/lib/validators"

const diasSemanaOptions = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]

const mesesOptions = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez"
]

export default {
  extends: AbstractFormTab,
  data() {
    return {
      diasSemanaOptions,
      mesesOptions,
      diasSemana: [],
      meses: []
    }
  },
  methods: {
    setAll(target, options) {
      target.splice(0)
      for (let i = 0, { length } = options; i < length; i++) {
        target.push(`${i}`)
      }
    },
    clearAll(target) {
      target.splice(0)
    }
  },
  watch: {
    model(value) {
      value.abre = Boolean(value.abre)
      value.fecha = Boolean(value.fecha)
      value.herda = Boolean(value.herda)
      value.gerencia = Boolean(value.gerencia)
      value.monitora = Boolean(value.monitora)
      value.diasSemana = value.diasSemana || "000000"
      value.meses = value.meses || "000000000000"
    },
    diasSemana(value) {
      const diasSemana = fill(new Array(7), 0)

      for (let i = 0, { length } = value; i < length; i++) {
        diasSemana[value[i]] = 1
      }

      this.model.diasSemana = diasSemana.join("")
    },
    meses(value) {
      const meses = fill(new Array(12), 0)

      for (let i = 0, { length } = value; i < length; i++) {
        meses[value[i]] = 1
      }

      this.model.meses = meses.join("")
    }
  }
}
</script>
