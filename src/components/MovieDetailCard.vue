<template>
  <div v-if="movieDetails && movieDetails.title" class="movie-detail-card">
    <div class="movie-detail-card__wrapper">
      <h2 class="movie-detail-card__title">
        {{ movieDetails.title }}
      </h2>
      <div class="movie-detail-card__data-wrapper">
        <p class="movie-detail-card__genre">{{ movieDetails.genre.name }}</p>
        <p class="movie-detail-card__year">
          {{ getYear(movieDetails.release_date) }}
        </p>
        <p class="movie-detail-card__length">
          {{ getFormattedLength(movieDetails.length) }}
        </p>
      </div>
      <p class="movie-detail-card__description">
        {{ movieDetails.description }}
      </p>
    </div>
    <div class="movie-detail-card__image-wrapper">
      <img
        :src="movieDetails.poster_url"
        class="movie-detail-card__image"
        :alt="imageAlt(movieDetails.title)"
      />
    </div>
  </div>
</template>

<script>
import { imageAlt, getFormattedLength, getYear } from "@/helpers";

export default {
  name: "MovieDetailCard",
  components: {},
  props: {
    movieDetails: {
      type: Object,
      required: true,
    },
  },

  methods: {
    imageAlt,
    getFormattedLength,
    getYear,
  },
};
</script>

<style lang="scss" scoped>
.movie-detail-card {
  display: grid;
  grid-template-columns: 1.5fr minmax(340px, 1fr);
  grid-template-rows: 1fr;
  gap: 28px;
  margin-top: 4em;
  &__title {
    @include font-heading--large;
    padding-bottom: 0.4em;
  }

  &__data-wrapper {
    display: flex;
    align-items: center;
    padding-bottom: 2em;
  }

  &__genre {
    @include filled-pill;
  }

  &__genre,
  &__year {
    margin-right: 1.15em;
  }

  &__length,
  &__year {
    @include font-paragraph--the-smallest;
    color: $text-light;
  }

  &__description {
    @include font-paragraph--medium;
  }

  &__image-wrapper {
    overflow: hidden;
    height: 100%;
    position: relative;
  }

  &__image {
    position: absolute;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
}
</style>
