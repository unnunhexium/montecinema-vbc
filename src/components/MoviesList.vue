<template>
  <div class="movies-list">
    <div class="movies-list__wrapper">
      <h2 class="movies-list__heading">Soon in the cinema</h2>
      <h2 class="movies-list__heading--mobile">Soon</h2>
      <button
        class="movies-list__details"
        @click="listExpanded = !listExpanded"
      >
        See all
      </button>
    </div>
    <div class="movies-list__card-wrapper">
      <MovieCard
        v-for="movie in moviesToDisplay"
        :movie="movie"
        :key="movie.id"
      />
    </div>
  </div>
</template>

<script>
import MovieCard from "./MovieCard.vue";

export default {
  name: "MoviesList",
  components: { MovieCard },
  data() {
    return {
      listExpanded: false,
    };
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    },
    moviesToDisplay() {
      return this.listExpanded
        ? this.movies.slice(0, 6)
        : this.movies.slice(0, 3);
    },
  },
  methods: {
    showAllMovies() {
      return this.movies.slice(0, 5);
    },
  },
  async created() {
    this.$store.dispatch("fetchMovies");
  },
};
</script>

<style lang="scss" scoped>
.movies-list {
  &__wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5em;
  }

  &__heading,
  &__heading--mobile,
  &__details {
    @include font-heading--smaller;
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
    &:active,
    &:focus,
    &:hover {
      color: $btn-hover;
    }
  }
  &__card-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
    @include lg {
      grid-template-columns: repeat(2, 1fr);
    }
    @include md {
      grid-template-columns: 1fr;
      padding-bottom: 9em;
    }
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
