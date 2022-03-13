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
import { getMovieDetails } from "@/api/movies";

export default {
  name: "MovieDetailCard",
  components: {},
  props: {
    movieId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      movieDetails: null,
    };
  },
  methods: {
    imageAlt,
    getFormattedLength,
    getYear,
  },
  async created() {
    const { data } = await getMovieDetails(this.movieId);
    this.movieDetails = data;
    this.$store.dispatch("setMovieTitle", this.movieDetails.title);
  },
};
</script>

<style lang="scss" scoped>
.movie-detail-card {
  display: flex;
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
  }

  &__image {
  }
}
</style>
