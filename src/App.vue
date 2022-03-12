<template>
  <div>
    <TheHeader v-if="hideSimpleNav" />
    <SimpleNav v-if="showSimpleNav" />
    <BreadcrumbNav v-if="hideSimpleNav" />
    <router-view></router-view>
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
      return this.$route.name === "Register";
    },
    hideSimpleNav() {
      return this.$route.name !== "Register";
    },
  },
  async created() {
    this.$store.dispatch("fetchMovies");
    this.$store.dispatch("fetchScreenings");
  },
};
</script>

<style lang="scss" scoped></style>
