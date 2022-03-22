<template>
  <div>
    <TheHeader v-if="showTheHeaderNav" />
    <SimpleNav v-if="showSimpleNav" />
    <BreadcrumbNav v-if="showBreadcrumbNav" />
    <StepsNav v-if="showStepsNav" />
    <router-view />
  </div>
</template>

<script>
import TheHeader from "@/components/navigation/TheHeader.vue";
import SimpleNav from "@/components/navigation/SimpleNav.vue";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav.vue";
import StepsNav from "@/components/navigation/StepsNav.vue";

export default {
  components: {
    TheHeader,
    SimpleNav,
    BreadcrumbNav,
    StepsNav,
  },
  computed: {
    // register and login
    showSimpleNav() {
      return this.$route.name === "Register" || this.$route.name === "Login";
    },
    // all but register and login not
    showTheHeaderNav() {
      return this.$route.name !== "Register" && this.$route.name !== "Login";
    },
    // all movies, movie detail, screenings, contact
    showBreadcrumbNav() {
      const breadcrumbsRoutes = ["Movie", "Screenings", "Contact"];
      return (
        this.$route.path.startsWith("/movies") ||
        breadcrumbsRoutes.includes(this.$route.name)
      );
    },
    // booking pages: choose seats, choose tickets
    showStepsNav() {
      const stepsNavRoutes = ["ChooseSeats", "ChooseTickets"];
      return stepsNavRoutes.includes(this.$route.name);
    },
  },
  async created() {
    this.$store.dispatch("fetchMovies");
    this.$store.dispatch("fetchScreenings");
  },
};
</script>

<style lang="scss">
router-view {
  max-width: $layout-width;
}
</style>
