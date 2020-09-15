<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title v-text="'Learning'"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn v-for="(item, i) in menuItems" text :key="`menuItems${i}`" :to="item.route">
          <v-icon left v-html="item.icon"></v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
      <div class="d-flex align-center"></div>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  computed: {
    menuItems() {
      return [
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
        },
        {
          icon: "mdi-logout-variant",
          title: "Log Out",
          route: "/logout"
        },
        {
          icon: "mdi-login-variant",
          title: "Log In",
          route: "/signin"
        },
        {
          icon: "mdi-lock-open",
          title: "Register",
          route: "/signup"
        }
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
</style>