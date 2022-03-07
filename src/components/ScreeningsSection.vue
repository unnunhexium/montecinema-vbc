<template>
  <div class="screenings-section">
    <h2 class="screenings-section__title">Screenings:</h2>
    <p class="screenings-section__content">{{ getDayOfWeek }} {{ getDate }}</p>
    <div class="screenings-section__input-wrapper">
      <DayTabsList />
      <MovieSelect />
    </div>
    <div class="screenings-section__cards-wrapper">
      <ScreeningCard
        v-for="movie in movies"
        :movie="movie"
        :key="movie.id"
        :seances="getSeances(movie.id)"
      />
    </div>
  </div>
</template>

<script>
import DayTabsList from "./DayTabsList.vue";
import MovieSelect from "./base/MovieSelect.vue";
import ScreeningCard from "./ScreeningCard.vue";
import { mapGetters } from "vuex";

export default {
  components: { DayTabsList, MovieSelect, ScreeningCard },
  computed: {
    ...mapGetters(["movies", "screenings"]),
    imageAlt() {
      return `An image from ${this.movie.title} film.`;
    },
    getDayOfWeek() {
      const dayOfWeek = new Date().getDay();
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      return days[dayOfWeek];
    },
    getDate() {
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = `0${today.getMonth() + 1}`.slice(-2);
      const dd = `0${today.getDate()}`.slice(-2);
      return `${dd}/${mm}/${yyyy}`;
    },
  },
  async created() {
    this.$store.dispatch("fetchScreenings");
  },
  methods: {
    getSeances(id) {
      return this.screenings.filter((screening) => screening.movie === id);
    },
  },
};
</script>

<style lang="scss" scoped>
.screenings-section {
  padding: 4em 3em 11.75em;

  &__title,
  &__content {
    @include font-heading--big;
  }

  &__content {
    color: $text-lighter;
    padding-bottom: 0.25em;
    display: flex;
  }

  &__input-wrapper {
    display: flex;
    justify-content: space-between;
    padding-bottom: 6.125em;
  }
}
</style>
