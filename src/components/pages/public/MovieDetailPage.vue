<template>
  <div class="movie-detail-page">
    <MovieDetailCard
      :movieDetails="movieDetails"
      class="movie-detail-page__movie-card"
    />
    <div>
      <h2 class="movie-detail-page__screening-title">Screenings:</h2>
      <p class="movie-detail-page__screening-content">
        {{ selectedWeekday }} {{ formattedDate }}
      </p>
      <DayTabsList
        class="movie-detail-page__day-tabs-list"
        @set-date="setDate"
      />
      <ScreeningCard
        class="movie-detail-page__screening-card"
        :movie="movieDetails"
        :filteredScreenings="filterByDay(movieId, selectedDate)"
      />
    </div>
  </div>
</template>

<script>
import MovieDetailCard from "@/components/MovieDetailCard.vue";
import DayTabsList from "@/components/DayTabsList.vue";
import ScreeningCard from "@/components/ScreeningCard.vue";
import dayTabsMixin from "@/mixins/dayTabs.js";
import { getDayOfWeek, getDate, getTime } from "@/helpers";
import { getMovieDetails } from "@/api/movies";
import screeningsList from "@/mixins/screeningsList.js";
import { mapActions } from "vuex";

export default {
  name: "MovieDetailPage",
  components: { MovieDetailCard, DayTabsList, ScreeningCard },
  data() {
    return {
      movieDetails: {},
    };
  },
  mixins: [dayTabsMixin, screeningsList],
  methods: {
    getDayOfWeek,
    getDate,
    getTime,
    ...mapActions(["setMovieTitle"]),
  },
  props: {
    movieId: {
      type: String,
      required: true,
    },
  },
  async created() {
    const { data } = await getMovieDetails(this.movieId);
    this.movieDetails = data;
    this.setMovieTitle(this.movieDetails.title);
  },
};
</script>

<style lang="scss" scoped>
.movie-detail-page {
  padding: 0 48px;
  margin-top: 4em;
  &__movie-card {
    padding-bottom: 4em;
  }

  &__screening-title,
  &__screening-content {
    font-family: "Eczar";
    font-weight: 600;
    font-size: 32px;
    line-height: 32px;
  }

  &__screening-content {
    color: $text-lighter;
    padding-bottom: 0.5em;
    display: flex;
  }

  &__day-tabs-list,
  &__screening-card {
    margin-bottom: 4em;
  }
}
</style>
