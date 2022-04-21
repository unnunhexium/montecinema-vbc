<template>
  <div class="screenings-section">
    <h2 class="screenings-section__title">Screenings:</h2>
    <p class="screenings-section__content">
      {{ selectedWeekday }} {{ formattedDate }}
    </p>
    <div class="screenings-section__input-wrapper">
      <DayTabsList @set-date="setDate" />
      <BaseSelect
        title="Movie"
        :options="selectOptions"
        :selectedOption="selectedOption"
        @input="setOption"
        placeholder="All categories"
      />
    </div>
    <div class="screenings-section__cards-wrapper" v-if="filteredMovies.length">
      <ScreeningCard
        v-for="movie in filteredMovies"
        :movie="movie"
        :key="movie.id"
        :filteredScreenings="filterByDay(movie.id, selectedDate)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import BaseSelect from "./base/BaseSelect.vue";
import ScreeningCard from "./ScreeningCard.vue";
import dayTabsMixin from "@/mixins/dayTabs.js";
import { useScreeningsList } from "@/composables/screeningsList.js";
import {
  defineComponent,
  ref,
  computed,
  onMounted,
} from "@vue/composition-api";
import { useGetters } from "vuex-composition-helpers";
import { Movie, Screening } from "@/api/interfaces";

export default defineComponent({
  components: { BaseSelect, ScreeningCard },
  mixins: [dayTabsMixin],

  setup() {
    const { filterByDay } = useScreeningsList();
    const selectedOption = ref("");
    const query = ref("");

    const { movies, screenings } = useGetters(["movies", "screenings"]);
    const selectOptions = computed(() => {
      return ["All movies", ...movies.value.map((movie: Movie) => movie.title)];
    });
    const filteredMovies = computed(() => {
      return selectedOption.value === "All movies"
        ? movies.value
        : movies.value.filter(
            (movie: Movie) => movie.title === selectedOption.value
          );
    });

    function getSeances(id: number) {
      return screenings.value.filter(
        (screening: Screening) => screening.movie === id
      );
    }
    function setOption(value: string) {
      selectedOption.value = value;
    }

    onMounted(() => {
      selectedOption.value = selectOptions.value[0];
    });

    return {
      filterByDay,
      selectedOption,
      query,
      selectOptions,
      movies,
      screenings,
      filteredMovies,
      getSeances,
      setOption,
    };
  },
});
</script>

<style lang="scss" scoped>
.screenings-section {
  padding: 4em 3em 11.75em;

  &__title,
  &__content {
    @include font-heading--big;
  }

  &__content {
    color: $text-lighter;
    padding-bottom: 0.25em;
    display: flex;
  }

  &__input-wrapper {
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    padding-bottom: 6.125em;
  }

  .day-tabs-list {
    width: 70%;
  }
}
</style>
