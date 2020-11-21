<template>
  <v-dialog
    v-model="dialog"
    :overlay="false"
    max-width="800px"
    transition="dialog-transition"
  >
    <v-card>
      <v-toolbar flat>
        Nova Atividade
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn icon @click="fechar">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-card-text>
        <v-row no-gutters>
          <v-col cols="12">
            <v-autocomplete
              v-model="atividade.paciente"
              :items="pacientes"
              :loading="isLoading"
              :search-input.sync="search"
              hide-no-data
              hide-selected
              item-text="nome"
              item-value="codigo"
              label="Nome/CPF"
              placeholder="Digite o nome ou CPF do paciente"
              return-object
              outlined
              dense
            >
              <template v-slot:item="data">
                <template v-if="typeof data.item !== 'object'">
                  <v-list-item-content v-text="data.item"></v-list-item-content>
                </template>
                <template v-else>
                  <v-list-item-content>
                    <v-list-item-title v-html="data.item.nome"></v-list-item-title>
                    <v-list-item-subtitle v-html="data.item.cpf"></v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </template>
            </v-autocomplete>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12" sm="6">
            <v-menu
              v-model="menu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="dataFormatada"
                  label="Data"
                  readonly
                  outlined
                  v-bind="attrs"
                  v-on="on"
                  dense
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                @input="menu = false"
                locale="pt-BR"
              ></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="12" sm="6" class="pl-1 block">
            <v-select
              v-model="atividade.status"
              :items="status"
              label="Status"
              dense
              outlined
            ></v-select>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col
            cols="12"
          >
            <v-textarea
              outlined
              v-model="atividade.atividade"
              label="Atividade"
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row no-gutters class="justify-end" >
          <v-col cols="12" sm="6" class="pl-1 block text-end">
            <v-btn color="success" @click="cadastrar" block>Cadastrar</v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import Atividade from "../classes/Atividade";
import PacienteController from '../controllers/PacienteController'
import AtividadesController from '../controllers/AtividadesController'
import {mask} from 'vue-the-mask'
export default {
  directives: {
    mask
  },
  props:{
    abrir:{
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    dialog: false,
    atividade: {},
    isLoading: false,
    search: null,
    pacientes:[],
    menu: false,
    date: new Date().toISOString().substr(0, 10),
    status: ['Aberto', 'Finalizado', 'Atrasado']
  }),
  computed: {
    dataFormatada() {
      const [ano, mes, dia] = this.date.split("-");
      return `${dia}/${mes}/${ano}`;
    }
  },
  watch:{
    abrir(newValue){
      if (newValue) {
        this.dialog = true
        this.atividade = new Atividade()
        return
      }
      this.dialog = false
    },

    async search(newValue){
      if (!newValue) return

      if (newValue.length > 3) {
        try {
          const paciente = new PacienteController()
          this.isLoading = true
          const resultado = await paciente.buscarPaciente(newValue)
          this.pacientes = resultado.data
        } catch (error) {
          console.error(error.message)
        } finally{
          this.isLoading = false
        }
      }
    }
  },
  methods:{
    
    async cadastrar() {
      try {
        const controller = new AtividadesController()
        this.atividade.dataVencimento = new Date(this.dataFormatada.split('/').reverse().join('-')).toISOString().substr(0, 10)
        this.atividade.codigoPaciente = this.atividade.paciente.codigo
        delete this.atividade.codigo
        await controller.gravarAtividade(this.atividade)

        this.$emit('refresh')
      } catch (error) {
        console.error(error.message)
      } finally {
        this.fechar()
      }
    },

    fechar(){
       this.$emit('update:abrir', false)
    }
  }
}
</script>
