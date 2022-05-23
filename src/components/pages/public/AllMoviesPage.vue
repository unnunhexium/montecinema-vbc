<template>
  <div class="all-movies-page">
    <h2 class="all-movies-page__heading">All the movies</h2>
    <div class="all-movies-page__wrapper">
      <div class="all-movies-page__search-wrapper">
        <BaseInput
          v-model="query"
          class="all-movies-page__search-input"
          type="search"
          placeholder=" What are you looking for?"
          label="search"
        />
      </div>
      <BaseSelect
        @input="setOption"
        :selectedOption="selectedOption"
        :options="selectOptions"
        title="Category"
        placeholder="All categories"
      />
    </div>
    <div class="all-movies-page__movies-list">
      <MovieCard
        v-for="movie in filteredMovies"
        :movie="movie"
        :key="movie.id"
      />
    </div>
  </div>
</template>

<script>
import BaseInput from "@/components/base/BaseInput.vue";
import BaseSelect from "@/components/base/BaseSelect.vue";
import MovieCard from "@/components/MovieCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "AllMoviesPage",
  components: { BaseInput, BaseSelect, MovieCard },
  data() {
    return {
      query: "",
      selectedOption: "",
    };
  },
  computed: {
    ...mapGetters("movies", ["movies", "genres"]),
    selectOptions() {
      return ["All categories", ...this.genres];
    },
    searchedMovies() {
      return this.query
        ? this.movies.filter((movie) =>
            movie.title.toUpperCase().includes(this.query.toUpperCase())
          )
        : this.movies;
    },
    filteredMovies() {
      return this.selectedOption === "All categories"
        ? this.searchedMovies
        : this.searchedMovies.filter(
            (movie) => movie.genre.name === this.selectedOption
          );
    },
  },
  mounted() {
    this.selectedOption = this.selectOptions[0];
  },
  methods: {
    setOption(value) {
      this.selectedOption = value;
    },
  },
  metaInfo: {
    title: "All the movies",
  },
};
</script>

<style lang="scss" scoped>
.all-movies-page {
  padding: 0 48px;
  &__breadcrumb-nav {
    margin-bottom: 4em;
  }

  &__heading {
    @include font-heading--large;
    margin: 0.8em 0 0.4em;
  }

  &__wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 2.25em;
    margin-bottom: 4rem;
  }

  &__search-wrapper {
    display: flex;
    position: relative;
  }

  &__movies-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
    padding-bottom: 64px;
    @include lg {
      grid-template-columns: repeat(2, 1fr);
    }
    @include md {
      grid-template-columns: 1fr;
      padding-bottom: 9em;
    }
  }
}
</style>
