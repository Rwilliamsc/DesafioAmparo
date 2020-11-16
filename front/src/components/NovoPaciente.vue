<template>
  <v-dialog
    v-model="dialog"
    :overlay="false"
    max-width="800px"
    transition="dialog-transition"
  >
    <v-card>
      <v-toolbar flat>
        Novo Paciente
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn icon @click="fechar">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-card-text>
        <v-row no-gutters>
          <v-col cols="12" sm="4" class="pr-1">
            <v-text-field 
            v-model="paciente.cpf"
            label="CPF" 
            v-mask="'###.###.###-##'" 
            dense 
            outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4" class="pl-1">
            <v-text-field
              v-model="paciente.nome"
              label="Nome"
              dense
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4" class="pl-1 block">
            <v-btn color="success" @click="cadastrar" block>Cadastrar</v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import Paciente from "../classes/Paciente";
import PacienteController from "../controllers/PacienteController";
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
    paciente: {}
  }),
  watch:{
    abrir(newValue){
      if (newValue) {
        this.dialog = true
        this.paciente = new Paciente()
        return
      }
      this.dialog = false
    }
  },
  methods:{
    async cadastrar() {
      try {
        delete this.paciente.codigo
        const controller = new PacienteController()
        await controller.gravarPaciente(this.paciente)
        this.fechar()
      } catch (error) {
        console.error(error.message);
      }
    },

    fechar(){
       this.$emit('update:abrir', false)
    }
  }
}
</script>
