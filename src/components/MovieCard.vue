<template>
  <div class="movie-card">
    <h3 class="movie-card__title">{{ movie.title }}</h3>
    <img :src="movie.image" class="movie-card__image" :alt="imageAlt" />
    <p class="movie-card__description">
      {{ movie.description }}
    </p>
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  computed: {
    imageAlt() {
      return `An image from ${this.movie.title} film.`;
    },
  },
};
</script>

<style lang="scss" scoped>
.movie-card {
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
    padding-bottom: 0.45em;
  }

  &__description {
    @include font-paragraph--small;
  }

  &__image {
    width: 100%;
    padding-bottom: 1em;
  }
}
</style>
