<template>
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
</template>

<script>
export default {
  name: "Navbar",
};
</script>
