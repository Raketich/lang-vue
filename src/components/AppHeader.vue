<template>
  <div>
    <v-navigation-drawer
      absolute
      temporary
      v-model="drawer"
      class="hidden-md-and-up"
    >
      <v-list>
        <v-list-item v-for="(item, i) in menuItems" :key="`navdrawer${i}`">
          <v-list-item-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
      <router-link to="/" tag="span" style="cursor:pointer">
        <v-toolbar-title v-text="'Learning'"></v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="(item, i) in menuItems"
          text
          :key="`menuItems${i}`"
          :to="item.route"
        >
          <v-icon left v-html="item.icon"></v-icon>
          {{ item.title }}
        </v-btn>
        <v-btn text @click.prevent="signout" v-if="isUserAuthenticated">
          <v-icon left>mdi-logout-variant</v-icon>
          Log Out
        </v-btn>
      </v-toolbar-items>
      <div class="d-flex align-center"></div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  },
  computed: {
    isUserAuthenticated() {
      return this.$store.getters.isUserAuthenticated;
    },
    menuItems() {
      return this.isUserAuthenticated
        ? [
            {
              icon: "mdi-eye",
              title: "Books",
              route: "/books"
            },
            {
              icon: "mdi-puzzle",
              title: "Learn words",
              route: "/words"
            },
            {
              icon: "mdi-account-circle",
              title: "Profile",
              route: "/profile"
            }
          ]
        : [
            {
              icon: "mdi-login-variant",
              title: "Log In",
              route: "/login"
            },
            {
              icon: "mdi-lock-open",
              title: "Register",
              route: "/register"
            }
          ];
    }
  },
  methods: {
    signout() {
      this.$confirm("Are you leaving?").then((res) => {
        if (res) this.$store.dispatch("SIGNOUT");
      });
    }
  }
};
</script>

<style scoped></style>
