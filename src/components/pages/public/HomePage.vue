<template>
  <div class="index">
    <TheHero />
    <MoviesList />
    <BookingSection />
    <ScreeningsSection />
    <router-view />
  </div>
</template>

<script>
import TheHero from "@/components/TheHero.vue";
import MoviesList from "@/components/MoviesList.vue";
import BookingSection from "@/components/BookingSection.vue";
import ScreeningsSection from "@/components/ScreeningsSection.vue";

export default {
  components: {
    MoviesList,
    TheHero,
    BookingSection,
    ScreeningsSection,
  },
};
</script>

<style lang="scss">
@import "src/styles/reset.scss";
@import "src/styles";

.index {
  background: $bg-white;
  padding: 0 0 10.75em;
  max-width: $layout-width;
  margin: 0 auto;
  @include sm {
    padding-bottom: 5em;
  }
}
.the-header,
.movies-list,
.booking-section {
  padding: 0 48px;
  @include sm {
    padding: 0 32px;
  }
}
</style>
