<template>
  <div class="screenings-section">
    <h2 class="screenings-section__title">Screenings:</h2>
    <p class="screenings-section__content">
      {{ selectedWeekday }} {{ formattedDate }}
    </p>
    <div class="screenings-section__input-wrapper">
      <DayTabsList @set-date="setDate" />
      <MovieSelect
        :options="selectOptions"
        :selectedOption="selectedOption"
        @input="setOption"
        placeholder="All categories"
      />
    </div>
    <div class="screenings-section__cards-wrapper">
      <ScreeningCard
        v-for="movie in filteredMovies"
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
import { getDayOfWeek } from "@/helpers";

export default {
  components: { DayTabsList, MovieSelect, ScreeningCard },
  computed: {
    ...mapGetters(["movies", "screenings"]),
    imageAlt() {
      return `An image from ${this.movie.title} film.`;
    },
    movies() {
      return this.$store.state.movies;
    },
    // WIP
    // selectOptions() {
    //   return ["All categories", ...this.movies.map((movie) => movie.title)];
    // },
    filteredMovies() {
      return this.selectedOption === "All categories"
        ? this.movies
        : this.movies.filter(
            (movie) => movie.genre.name === this.selectedOption
          );
    },
    ...mapGetters(["movies", "genres", "screenings"]),
    selectOptions() {
      return ["All categories", ...this.genres];
    },
    selectedWeekday() {
      return getDayOfWeek(this.selectedDate);
    },
    formattedDate() {
      return this.selectedDate.toLocaleDateString("en-GB");
    },
  },
  methods: {
    getSeances(id) {
      return this.screenings.filter((screening) => screening.movie === id);
    },
    getDayOfWeek,
    setOption(value) {
      this.selectedOption = value;
    },
    setDate(date) {
      this.selectedDate = date;
    },
  },
  data() {
    return {
      query: "",
      selectedOption: "",
      selectedDate: new Date(),
    };
  },
  mounted() {
    this.selectedOption = this.selectOptions[0];
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
