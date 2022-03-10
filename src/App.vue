<template>
  <div>
    <!--<TheHeader v-if="!$route.name.startsWith('User')" />-->
    <TheHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "@/components/navigation/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
  async created() {
    this.$store.dispatch("fetchMovies");
    this.$store.dispatch("fetchScreenings");
  },
};
</script>

<style lang="scss" scoped></style>
