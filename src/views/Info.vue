<template>
  <v-container>
     <h1 class="d-flex justify-center"><strong>Nombre: {{ $route.params.banana }}</strong></h1>
    <list-examples />
  </v-container>
</template>

<script>
import listExamples from "@/components/listExamples.vue";

export default {
  name: "info",
  components: {
    listExamples,
  },
};
</script>

<style></style>
