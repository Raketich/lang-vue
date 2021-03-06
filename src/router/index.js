import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Books from "../views/Books";
import Words from "../views/Words";
import Login from "../views/Login";
import Logout from "../views/Logout";
import Register from "../views/Register";
import Profile from "../views/Profile";
import Store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/books",
    name: "Books",
    component: Books
  },
  {
    path: "/words",
    name: "Words",
    component: Words
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/profile",
    name: "Profile",
    comppnent: Profile,
    beforeEnter: AuthGuard
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

function AuthGuard(from, to, next) {
  if (Store.getters.isUserAuthenticated) next();
  else next("/login");
}

export default router;
