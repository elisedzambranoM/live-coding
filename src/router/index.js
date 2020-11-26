import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Cursos from "../views/Cursos.vue";
import Info from "../views/Info.vue";
import Register from "../views/Register.vue";
import NotFound from "../views/NotFound.vue";

import firebase from "firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/cursos",
    name: "Cursos",
    component: Cursos,
    meta: {
      login: true,
    },
  },
  {
    path: "/info/:banana",
    name: "Info",
    component: Info,
    meta: {
      login: true,
    },
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  let user = firebase.auth().currentUser;
  let authRequired = to.matched.some((route) => route.meta.login);

  if (!user && authRequired) {
    next("/");
  } else {
    next();
  }
});

export default router;
