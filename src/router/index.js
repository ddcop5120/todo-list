import Vue from "vue";
import VueRouter from "vue-router";
import All from "../views/All.vue";
import Finished from "../views/Finished.vue";
import Undone from "../views/Undone.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "All",
    component: All,
  },
  {
    path: "/undone",
    name: "Undone",
    component: Undone,
  },
  
  {
    path: "/finished",
    name: "Finished",
    component: Finished,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
