<template>
  <div class="movie-card">
    <h3 class="movie-card__title">{{ movie.title }}</h3>
    <p class="movie-card__length">{{ getFormattedLength(movie.length) }}</p>
    <img
      :src="movie.poster_url"
      class="movie-card__image"
      :alt="imageAlt(movie.title)"
    />
    <p class="movie-card__genre">
      {{ movie.genre.name }}
    </p>
  </div>
</template>

<script>
import { imageAlt, getFormattedLength } from "@/helpers";

export default {
  name: "MovieCard",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  methods: {
    imageAlt,
    getFormattedLength,
  },
};
</script>

<style lang="scss" scoped>
.movie-card {
  display: flex;
  flex-flow: column;
  padding: 2.5em;
  border-radius: 8px;
  box-shadow: 0px 24px 78px rgba(0, 0, 0, 0.08),
    0px 5.36071px 17.4223px rgba(0, 0, 0, 0.0238443),
    0px 1.59602px 5.18708px rgba(0, 0, 0, 0.0161557);
  @include sm {
    padding: 1.5em;
  }

  &__title {
    @include font-heading--medium;
    color: $text-dark;
    padding-bottom: 0.25em;
  }

  &__length {
    @include font-paragraph--the-smallest;
    color: $text-light;
    padding-bottom: 1em;
  }

  &__image {
    height: 190px;
    width: 100%;
    object-fit: cover;
    padding-bottom: 1em;
    margin-top: auto;
  }

  &__genre {
    @include light-pill;
    margin-right: auto;
  }
}
</style>
