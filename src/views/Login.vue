<template>
  <v-container>
    <v-row>
      <v-col>
        <v-img src="" min-height="100%">
          <v-card width="400px" class="mx-auto my-5">
            <v-card-title class="pb-0">
              <h4 class="mx-auto mb-5">
                <strong>ACADEMIA LIVE CODING</strong>
              </h4>
            </v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Usuario"
                  prepend-icon="mdi-account-circle"
                  v-model="user"
                />
                <v-text-field
                  label="Contraseña"
                  :type="showPassword ? 'text' : 'password'"
                  prepend-icon="mdi-lock"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                  v-model="password"
                />
              </v-form>
            </v-card-text>
            <v-card-actions class="d-flex justify-center">
              <v-btn color="info" @click.prevent="login">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Login",

  data() {
    return {
      user: "",
      password: "",
      showPassword: false,
    };
  },

  methods: {
    login() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.user, this.password)
        .then(() => {
          this.user = ""
          this.password= ""
          this.$router.push("/cursos");
        })
        .catch(() => {
          alert("Todos los campos son requeridos");
        });
    },
  },
};
</script>

<style></style>
