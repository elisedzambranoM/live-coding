<template>
  <v-container>
    <h1 class="d-flex justify-center">
      <strong>Nombre: {{ $route.params.banana }}</strong>
    </h1>
      <v-btn @click="goBack" class="ml-7">
        <v-icon
          dark
          left
        >
          mdi-arrow-left
        </v-icon>REGRESAR
      </v-btn>
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
  methods:{
    goBack(){
      this.$router.push("/cursos")
    }
  }
};
</script>

<style></style>
