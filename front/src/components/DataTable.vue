<template>
  <v-card width="100%" height="100%">
    <v-card-text>
      <v-data-table
        :headers="headers"
        :items="itens"
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
</template>

<script>
export default {
  name: "DataTable",
  props: {
    itens: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    headers: [
      {
        text: "Paciente",
        align: "start",
        value: "paciente",
      },
      { text: "CPF", value: "cpf" },
      { text: "Atividade", value: "atividade" },
      { text: "Data", value: "data" },
      { text: "Status", value: "status" },
    ],
    page: 1,
    pageCount: 0,
    itemsPerPage: 10,
  }),
  methods: {
    itemSelected(ev) {
      this.$emit("selected", ev);
    },
  },
};
</script>

<style>
</style>