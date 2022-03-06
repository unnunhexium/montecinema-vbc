<template>
  <div class="screening-card">
    <img
      :src="movie.poster_url"
      class="screening-card__image"
      :alt="imageAlt(movie.title)"
    />
    <div class="screening-card__content-wrapper">
      <h4 class="screening-card__title">{{ movie.title }}</h4>
      <div class="screening-card__info-wrapper">
        <p class="screening-card__genre">{{ movie.genre.name }}</p>
        <p class="screening-card__length">{{ movieLength(movie.length) }}</p>
      </div>
      <div class="screening-card__hour-list">
        <HourTab>20:00</HourTab>
      </div>
    </div>
  </div>
</template>

<script>
import { imageAlt, movieLength } from "@/helpers";
import HourTab from "./base/HourTab.vue";

export default {
  name: "ScreeningCard",
  components: {
    HourTab,
  },
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  methods: {
    imageAlt,
    movieLength,
  },
};
</script>

<style lang="scss" scoped>
.screening-card {
  display: flex;
  padding: 2.5em;
  border-radius: 8px;
  margin-bottom: 2.5em;
  box-shadow: 0px 24px 78px rgba(0, 0, 0, 0.08),
    0px 5.36071px 17.4223px rgba(0, 0, 0, 0.0238443),
    0px 1.59602px 5.18708px rgba(0, 0, 0, 0.0161557);
  &__image {
    width: 98px;
    object-fit: cover;
    margin-right: 2.5em;
  }

  &__title {
    @include font-heading--small;
    color: $text-dark;
    padding-bottom: 0.35em;
  }
  &__info-wrapper {
    display: flex;
    align-items: baseline;
  }
  &__genre {
    @include light-pill;
    margin: 0 0.875em 1.75em 0;
  }
  &__length {
    @include font-paragraph--the-smallest;
    text-transform: none;
    color: $text-light;
    padding-bottom: 1em;
  }
}
</style>
