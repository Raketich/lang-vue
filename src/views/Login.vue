<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Login Form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-alert type="warning" :value="error">
              {{ error }}
            </v-alert>
            <v-form v-model="valid">
              <v-text-field
                label="e-mail"
                name="login"
                prepend-icon="mdi-account"
                type="email"
                required
                v-model="email"
                :rules="emailRules"
              ></v-text-field>

              <v-text-field
                id="password"
                label="password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                v-model="password"
                :rules="passwordRules"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              @click.prevent="login"
              :disabled="processing || !valid"
              >Login</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
      valid: false,
      emailRules: [
        (v) => !!v || "Please, type in you email",
        (v) =>
          /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(
            v
          ) || "Неправильный email"
      ],
      passwordsRules: [
        (v) => !!v || "Please, type in you password",
        (v) =>
          (v && v.length >= 6) ||
          "Password should contain at least 6 characters"
      ]
    };
  },
  computed: {
    error() {
      return this.$store.getters.getError;
    },
    processing() {
      return this.$store.getters.getProcessing;
    },
    isUserAuthenticated() {
      return this.$store.getters.isUserAuthenticated;
    }
  },
  methods: {
    login() {
      this.$store.dispatch("LOGIN", {
        email: this.email,
        password: this.password
      });
    }
  },
  watch: {
    isUserAuthenticated(val) {
      if (val === true) this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped></style>
