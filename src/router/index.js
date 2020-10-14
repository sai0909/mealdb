import Vue from "vue";
import VueRouter from "vue-router";
import Randommeal from "../views/Randommeal.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Randommeal",
    component: Randommeal
  },
  {
    path: '/404',
    alias: '*',
    name: 'notFound',
    component: () =>
      import(/* webpackChunkName: "notfound" */ '../views/NotFound.vue'),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
