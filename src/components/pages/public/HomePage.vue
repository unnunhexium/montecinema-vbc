<template>
  <div class="index">
    <TheHero />
    <MoviesList />
    <ScreeningsSection />
    <h2 class="contact-card__heading">Contact us</h2>
    <div class="contact-card__background">
      <ContactCard />
    </div>
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
.contact-card {
  &__heading {
    @include font-heading--big;
    color: $text-dark;
    text-align: center;
    padding-bottom: 0.75em;
  }
  &__background {
    background: $bg-light;
    border-radius: 24px;
    max-width: 600px;
    max-height: 400px;
    margin: 0 auto;
  }
}
</style>
