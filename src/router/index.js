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
    meta: {
      breadcrumb: "Movie",
    },
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
    component: () => import("@/components/pages/public/RegisterPage.vue"),
  },
  {
    path: "*",
    redirect: "/",
  },
  {
    meta: { requiresAuth: true },
    path: "/choose-seats",
    name: "ChooseSeats",
    component: () => import("@/components/pages/client/ChooseSeatsPage.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

router.beforeEach((to, from, next) => {
  if (!router.app.$store.getters["isLoggedIn"] && to.meta.requiresAuth) {
    next({
      path: "/login",
    });
  } else {
    next();
  }
});

export default router;
