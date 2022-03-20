<template>
  <div>
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
  },
  async created() {
    this.$store.dispatch("fetchMovies");
    this.$store.dispatch("fetchScreenings");
    this.$store.dispatch("restoreAuthSession");
  },
};
</script>

<style lang="scss" scoped></style>
