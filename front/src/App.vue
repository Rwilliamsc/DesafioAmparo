<template>
  <v-app>
    <nav-bar />

    <v-main>
      <v-card flat>
        <v-toolbar flat color="grey lighten-3">
          <div class="d-block pa-0 ma-0">
            <span>Lista de Atividades</span>
            <v-breadcrumbs
              class="pa-0 ma-0"
              :items="itemsBreadcrumbs"
              divider=">"
            />
          </div>

          <v-spacer></v-spacer>
          <v-col cols="6" class="text-end">
            <v-btn color="success" class="mx-2" @click="novoPaciente">
              Novo Paciente
            </v-btn>
            <v-btn color="success" class="mx-2" @click="novaAtividade">
              Nova Atividade
            </v-btn>
          </v-col>
        </v-toolbar>
      </v-card>

      <v-row class="justify-center">
        <div>
          <div class="d-flex my-4" flat tile>
            <v-text-field
              v-model="cpfFiltro"
              label="CPF do Paciente"
              class="mx-2"
              outlined
              dense
              v-mask="'###.###.###-##'" 
            ></v-text-field>
            
            <v-select
              v-model="statusFiltro"
              :items="status"
              label="Status"
              dense
              outlined
            ></v-select>

             <v-text-field
              v-model="date"
              label="Data"
              class="mx-2"
              outlined
              dense
              v-mask="'##/##/####'" 
            ></v-text-field>

            <v-btn color="success" @click="filtrar" class="mr-1">Filtrar</v-btn>
            <v-btn color="success" @click="limpar" v-if="isFiltro">Limpar</v-btn>
          </div>
        </div>
      </v-row>

      <data-table :itens="itensTabela" />
    </v-main>

    <novo-paciente :abrir.sync="abrirNovoPaciente"/>
    <nova-atividade :abrir.sync="abrirNovaAtividade" @refresh="atualizar"/>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import DataTable from "./components/DataTable";
import NovoPaciente from "./components/NovoPaciente";
import NovaAtividade from "./components/NovaAtividade";
import AtividadesController from "./controllers/AtividadesController";
import ListaAtividades from "./classes/ListaAtividades";
import { filter, cloneDeep } from 'lodash'
import {mask} from 'vue-the-mask'

export default {
  name: "App",
  components: {
    NavBar,
    DataTable,
    NovoPaciente,
    NovaAtividade
  },
  directives: {
    mask
  },
  data: () => ({
    itemsBreadcrumbs: [
      {
        text: "Inicio",
        disabled: false,
        href: "breadcrumbs_Inicio",
      },
      {
        text: "Lista de Atividade",
        disabled: true,
        href: "breadcrumbs_link_1",
      },
    ],

    menu: false,
    abrirNovoPaciente: false,
    abrirNovaAtividade: false,
    status: ['Aberto', 'Finalizado', 'Atrasado'],
    itensTabela: [],

    date: '',
    cpfFiltro: '',
    statusFiltro: '',
    cloneItens: [],
    isFiltro: false
  }),
  mounted(){
    this.atualizar()
  },
  methods: {
    novoPaciente() {
      this.abrirNovoPaciente = true;
    },

    novaAtividade() {
      this.abrirNovaAtividade = true;
    },
    
    async atualizar() {
      try {
        const atividadesController = new AtividadesController()
        const resultado = await atividadesController.BuscarAtividades()
        const atividades = new ListaAtividades()
        atividades.lista= resultado.data
        this.itensTabela = atividades.itens
      } catch (error) {

        console.error(error.message)
      }
    },

    filtrar (){
      this.cloneItens = cloneDeep(this.itensTabela)
      this.isFiltro = true
      const obj = {}
      if (this.cpfFiltro) obj['cpf']= this.cpfFiltro
      if (this.statusFiltro) obj['status']= this.statusFiltro 
      if (this.date) obj['data']= this.date

      this.itensTabela = filter(this.itensTabela, obj)
    },

    limpar(){
      this.atualizar()
      this.cpfFiltro = ''
      this.statusFiltro = ''
      this.date = ''
      this.isFiltro = false
    }
  },
};
</script>
