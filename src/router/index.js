import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import( "../views/About.vue"),
  },
  {
    path: "/rooms",
    name: "RoomSearch",
    component: () =>
      import("../views/RoomSearch.vue"),
  },
  {
    path: "/hotels",
    name: "HotelSearch",
    component: () =>
      import("../views/HotelSearch.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
