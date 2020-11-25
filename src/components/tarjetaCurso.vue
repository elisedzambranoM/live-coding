<template>
  <v-container> 
        <v-card class="mx-auto" max-width="400">
        <v-img
          class="white--text align-end"
          height="200px"
          width="400px"
          :src="image"
        >
        </v-img>

        <v-card-subtitle class="pb-0"></v-card-subtitle>

        <v-card-text class="text--primary">
          <div><strong>{{name}}</strong></div>

          <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text>

        <v-card-actions>
          <v-btn @click="goToDetails" color="orange" text>
            Ver detalle del curso
          </v-btn>
        </v-card-actions>
      </v-card>
  </v-container>
</template>

<script>

export default {
  name: "tarjetaCurso",

  props: ["id", "name", "image"],

  methods: {
    goToDetails() {
      const path = "/info/guitarra"
      this.$router.push(path);
    },
  },
};
</script>

<style></style>
