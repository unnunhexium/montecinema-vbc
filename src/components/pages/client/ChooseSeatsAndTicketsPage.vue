<template>
  <div class="choose-seats-and-tickets-page">
    <StepsNav class="choose-seats-and-tickets-page__nav" />
    <h2 class="choose-seats-and-tickets-page__title">Choose your seats</h2>
    <ScreeningCard
      class="choose-seats-and-tickets-page__card"
      :movie="selectedMovie.movie"
      :datetime="selectedMovie.datetime"
    />
  </div>
</template>

<script>
import StepsNav from "@/components/navigation/StepsNav.vue";
import ScreeningCard from "@/components/ScreeningCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "ChooseSeatsAndTicketsPage",
  components: {
    StepsNav,
    ScreeningCard,
  },
  computed: {
    ...mapGetters(["selectedMovie"]),
  },
};
</script>

<style lang="scss" scoped>
.choose-seats-and-tickets-page {
  padding: 0 48px;

  &__nav {
    margin-bottom: 4em;
  }

  &__title {
    font-family: "Eczar";
    font-weight: 600;
    font-size: 48px;
    line-height: 49px;
    margin-bottom: 1.35em;
  }

  &__card {
    box-shadow: 0px 24px 78px rgba(0, 0, 0, 0.08),
      0px 5.36071px 17.4223px rgba(0, 0, 0, 0.0238443),
      0px 1.59602px 5.18708px rgba(0, 0, 0, 0.0161557);
  }
}
</style>
