import VueRouter from "vue-router";

import HomePage from "@/components/pages/public/HomePage.vue";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/screenings",
    name: "Screenings",
    component: () => import("@/components/pages/public/ScreeningsPage.vue"),
  },
  {
    path: "/movies",
    name: "Movies",
    component: () => import("@/components/pages/public/AllMoviesPage.vue"),
  },
  {
    path: "/movies/:movieId",
    name: "SingleMovie",
    props: true,
    component: () => import("@/components/pages/public/MovieDetailPage.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/components/pages/public/ContactPage.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/components/pages/public/LoginPage.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/components/pages/public/RegisterFirstPage.vue"),
  },
  {
    path: "/register-2",
    name: "RegisterSecondStep",
    component: () => import("@/components/pages/public/RegisterSecondPage.vue"),
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
