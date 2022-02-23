<template>
  <div class="index">
    <TheHeader />
    <TheHero />
    <MoviesList />
    <BookingSection />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheHero from "./components/TheHero.vue";
import MoviesList from "./components/MoviesList.vue";
import BookingSection from "./components/BookingSection.vue";

export default {
  components: {
    TheHeader,
    MoviesList,
    TheHero,
    BookingSection,
  },
};
</script>

<style lang="scss">
@import "src/styles";
@import "src/styles/reset.scss";

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
