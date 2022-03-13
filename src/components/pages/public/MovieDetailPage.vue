<template>
  <div class="movie-detail-page">
    <MovieDetailCard :movieId="movieId" class="movie-detail-page__movie-card" />
    <div>
      <h2 class="movie-detail-page__screening-title">Screenings:</h2>
      <p class="movie-detail-page__screening-content">
        {{ getDayOfWeek() }} {{ getDate() }}
      </p>
      <ScreeningCard />
    </div>
    <DayTabsList />
  </div>
</template>

<script>
import MovieDetailCard from "@/components/MovieDetailCard.vue";
import DayTabsList from "@/components/DayTabsList.vue";
import ScreeningCard from "@/components/ScreeningCard.vue";
import { getDayOfWeek, getDate } from "@/helpers";

export default {
  name: "MovieDetailPage",
  components: { MovieDetailCard, DayTabsList, ScreeningCard },
  methods: {
    getDayOfWeek,
    getDate,
  },
  props: {
    movieId: {
      type: String,
      required: true,
    },
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
}
</style>
