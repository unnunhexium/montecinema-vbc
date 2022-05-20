<template>
  <div class="app">
    <TheHeader v-if="showTheHeaderNav" />
    <SimpleNav v-if="showSimpleNav" />
    <BreadcrumbNav v-if="showBreadcrumbNav" />
    <router-view />
  </div>
</template>

<script>
import TheHeader from "@/components/navigation/TheHeader.vue";
import SimpleNav from "@/components/navigation/SimpleNav.vue";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav.vue";

export default {
  components: {
    TheHeader,
    SimpleNav,
    BreadcrumbNav,
  },
  computed: {
    showSimpleNav() {
      return this.$route.name === "Register" || this.$route.name === "Login";
    },
    showTheHeaderNav() {
      return this.$route.name !== "Register" && this.$route.name !== "Login";
    },
    showBreadcrumbNav() {
      const breadcrumbsRoutes = [
        "Movie",
        "ConfirmTickets",
        "CreateAReservation",
      ];
      return (
        this.$route.path.startsWith("/movies") ||
        breadcrumbsRoutes.includes(this.$route.name)
      );
    },
  },
  async created() {
    this.$store.dispatch("fetchMovies");
    this.$store.dispatch("fetchScreenings");
    this.$store.dispatch("fetchUserData");
  },
  metaInfo: {
    title: "montecinema",
    titleTemplate: "%s | montecinema",
  },
};
</script>

<style lang="scss">
.app {
  max-width: $layout-width;
  margin: 0 auto;
}
</style>
