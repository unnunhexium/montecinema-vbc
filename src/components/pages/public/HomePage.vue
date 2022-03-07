<template>
  <div class="index">
    <TheHero />
    <MoviesList />
    <ScreeningsSection />
    <ContactCard />
  </div>
</template>

<script>
import TheHero from "@/components/TheHero.vue";
import MoviesList from "@/components/MoviesList.vue";
import ScreeningsSection from "@/components/ScreeningsSection.vue";
import ContactCard from "@/components/ContactCard.vue";

export default {
  components: {
    MoviesList,
    TheHero,
    ScreeningsSection,
    ContactCard,
  },
};
</script>

<style lang="scss">
@import "src/styles/reset.scss";
@import "src/styles";

.index {
  background: $bg-white;
  padding: 0 0 7.75em;
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
