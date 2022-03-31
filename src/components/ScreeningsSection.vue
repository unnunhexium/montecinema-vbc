<template>
  <div class="screenings-section">
    <h2 class="screenings-section__title">Screenings:</h2>
    <p class="screenings-section__content">
      {{ selectedWeekday }} {{ formattedDate }}
    </p>
    <div class="screenings-section__input-wrapper">
      <DayTabsList @set-date="setDate" />
      <BaseSelect
        title="Movie"
        :options="selectOptions"
        :selectedOption="selectedOption"
        @input="setOption"
        placeholder="All categories"
      />
    </div>
    <div class="screenings-section__cards-wrapper" v-if="filteredMovies.length">
      <ScreeningCard
        v-for="movie in filteredMovies"
        :movie="movie"
        :key="movie.id"
        :filteredScreenings="filterByDay(movie.id, selectedDate)"
      />
    </div>
  </div>
</template>

<script>
import BaseSelect from "./base/BaseSelect.vue";
import ScreeningCard from "./ScreeningCard.vue";
import { mapGetters } from "vuex";
import dayTabsMixin from "@/mixins/dayTabs.js";
import screeningsList from "@/mixins/screeningsList.js";

export default {
  components: { BaseSelect, ScreeningCard },
  mixins: [dayTabsMixin, screeningsList],
  data() {
    return {
      query: "",
      selectedOption: "",
    };
  },
  computed: {
    ...mapGetters(["movies", "screenings"]),
    imageAlt() {
      return `An image from ${this.movie.title} film.`;
    },
    movies() {
      return this.$store.state.movies;
    },
    selectOptions() {
      return ["All movies", ...this.movies.map((movie) => movie.title)];
    },
    filteredMovies() {
      return this.selectedOption === "All movies"
        ? this.movies
        : this.movies.filter((movie) => movie.title === this.selectedOption);
    },
    ...mapGetters(["movies", "genres", "screenings"]),
  },
  methods: {
    getSeances(id) {
      return this.screenings.filter((screening) => screening.movie === id);
    },
    setOption(value) {
      this.selectedOption = value;
    },
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
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 40px;
    justify-content: space-between;
    padding-bottom: 6.125em;
  }
}
</style>
