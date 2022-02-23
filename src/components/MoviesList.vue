<template>
  <div class="movies-list">
    <div class="movies-list__wrapper">
      <h2 class="movies-list__heading">Soon in the cinema</h2>
      <h2 class="movies-list__heading--mobile">Soon</h2>
      <button class="movies-list__details">See all</button>
    </div>
    <div class="movies-list__content-wrapper">
      <MovieCard v-for="movie in movies" :movie="movie" :key="movie.id" />
    </div>
  </div>
</template>

<script>
import MovieCard from "./MovieCard.vue";
import movies from "../data/movies";

export default {
  name: "MoviesList",
  components: { MovieCard },
  data() {
    return {
      movies,
    };
  },
};
</script>

<style lang="scss" scoped>
.movies-list {
  &__heading,
  &__heading--mobile,
  &__details {
    @include font-heading--small;
  }

  &__heading {
    @include md {
      display: none;
    }
    &--mobile {
      display: none;
      @include md {
        display: flex;
      }
    }
  }

  &__details {
    color: $text-accent;
    cursor: pointer;
    background: transparent;
    border: none;
  }

  &__content-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
    padding-bottom: 11.75em;
    @include lg {
      grid-template-columns: repeat(2, 1fr);
    }
    @include md {
      grid-template-columns: 1fr;
      padding-bottom: 9em;
    }
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5em;
  }
}

.movie-card:nth-last-child(3) {
  @include lg {
    display: none;
  }
  @include sm {
    display: block;
  }
}
</style>
