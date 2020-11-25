<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title>{{title}}</v-card-title>
          </v-img>
          <v-card-subtitle class="pb-0">
             {{id}}
          </v-card-subtitle>
          <v-card-text class="text--primary">
            <div></div>
            <div>{{description}}</div>
          </v-card-text>

          <v-card-actions> </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "cardExamples",

  props:["id", "title", "description"]
};
</script>

<style></style>
