import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VuetifyConfirm from "vuetify-confirm";
import firebaseConfig from "./config/firebase";
import firebase from "firebase";

Vue.config.productionTip = false;

Vue.use(VuetifyConfirm, {
  vuetify,
  buttonTrueText: "Accept",
  buttonFalseText: "Discard"
});

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
  created() {
    let vm = this;
    firebase.auth().onAuthStateChanged(function(user) {
      vm.$store.dispatch("STATE_CHANGED", user);
    });
  }
}).$mount("#app");
