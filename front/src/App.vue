<template>
  <v-app>
    <v-app-bar app color="#E3C6A4" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Amparo Logo"
          class="shrink mr-2"
          contain
          src="@/assets/logo_amparo.png"
          transition="scale-transition"
          width="200"
        />
      </div>

      <v-spacer></v-spacer>
      <span class="mr-2">Atividades</span>
    </v-app-bar>

    <v-main>
      <v-card width="100%" height="100%">
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
            <v-btn color="success" class="mx-4">Nova Atividade</v-btn>
          </v-col>
        </v-toolbar>
        <v-row class="justify-center">
          <div>
            <div class="d-flex my-4" flat tile>
              <v-text-field
                label="CPF do Paciente"
                class="mx-2"
                outlined
                dense
              ></v-text-field>
              <v-text-field
                label="Status Aprazamento"
                class="mx-2"
                outlined
                dense
              ></v-text-field>
              <v-text-field
                label="Data"
                class="mx-2"
                outlined
                dense
              ></v-text-field>
              <v-btn color="success">Filtrar</v-btn>
            </div>
          </div>
        </v-row>
        <v-card-text>
          <v-data-table
            :headers="headers"
            :items="desserts"
            :page.sync="page"
            :items-per-page="itemsPerPage"
            class="elevation-1"
            @page-count="pageCount = $event"
            hide-default-footer
            @click:row="itemSelected"
          >
            <template v-slot:item.status="{ item }">
              <span class="red--text text--lighten-1"> {{ item.status }}</span>
            </template>
          </v-data-table>
        </v-card-text>
        <v-card-actions>
          <v-row class="justify-center">
            <v-pagination v-model="page" :length="pageCount"></v-pagination>
          </v-row>
        </v-card-actions>
      </v-card>

      <!-- <HelloWorld /> -->
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    // HelloWorld,
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
    headers: [
      {
        text: "Paciente",
        align: "start",
        sortable: false,
        value: "paciente",
      },
      { text: "CPF", value: "cpf" },
      { text: "Atividade", value: "atividade" },
      { text: "Data", value: "data" },
      { text: "Status", value: "status" },
    ],
    desserts: [
      {
        paciente: "Frozen Yogurt",
        cpf: 159,
        atividade: 6.0,
        data: "",
        status: 24,
      },
      {
        paciente: "Frozen Yogurt",
        cpf: 159,
        atividade: 6.0,
        data: "",
        status: 24,
      },
      {
        paciente: "Frozen Yogurt",
        cpf: 159,
        atividade: 6.0,
        data: "",
        status: 24,
      },
      {
        paciente: "Frozen Yogurt",
        cpf: 159,
        atividade: 6.0,
        data: "",
        status: 24,
      },
      {
        paciente: "Frozen Yogurt",
        cpf: 159,
        atividade: 6.0,
        data: "",
        status: 24,
      },
      {
        paciente: "Frozen Yogurt",
        cpf: 159,
        atividade: 6.0,
        data: "",
        status: 24,
      },
      {
        paciente: "Frozen Yogurt",
        cpf: 159,
        atividade: 6.0,
        data: "",
        status: 24,
      },
      {
        paciente: "Frozen Yogurt",
        cpf: 159,
        atividade: 6.0,
        data: "",
        status: 24,
      },
      {
        paciente: "Frozen Yogurt",
        cpf: 159,
        atividade: 6.0,
        data: "",
        status: 24,
      },
    ],
    page: 1,
    pageCount: 0,
    itemsPerPage: 5,
  }),
  methods: {
    itemSelected(ev) {
      console.log(ev);
    },
  },
};
</script>
