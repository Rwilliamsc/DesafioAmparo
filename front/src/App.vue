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
            <v-btn color="success" class="mx-2">Novo Paciente</v-btn>
            <v-btn color="success" class="mx-2">Nova Atividade</v-btn>
          </v-col>
        </v-toolbar>
      </v-card>

      <v-row class="justify-center">
        <div>
          <div class="d-flex my-4" flat tile>
            <v-text-field
              label="CPF do Paciente"
              class="mx-2"
              outlined
              dense
              mask="###.###.###-##"
            ></v-text-field>
            <v-text-field
              label="Status Aprazamento"
              class="mx-2"
              outlined
              dense
            ></v-text-field>
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
                  class="mx-2"
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
            <v-btn color="success">Filtrar</v-btn>
          </div>
        </div>
      </v-row>

      <data-table />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import DataTable from "./components/DataTable";

export default {
  name: "App",
  components: {
    NavBar,
    DataTable,
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
    date: new Date().toISOString().substr(0, 10),
  }),
  computed: {
    dataFormatada() {
      const [ano, mes, dia] = this.date.split("-");
      return `${dia}/${mes}/${ano}`;
    },
  },
};
</script>
