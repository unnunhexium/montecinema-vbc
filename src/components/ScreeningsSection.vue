<template>
  <div class="screening-section">
    <h2 class="screening-section__title">Screenings:</h2>
    <p class="screening-section__content">Friday 11/02/2022</p>
    <div class="screening-section__input-wrapper">
      <DayTabsList></DayTabsList>
      <MovieSelect></MovieSelect>
    </div>
  </div>
</template>

<script>
import DayTabsList from "./DayTabsList.vue";
import MovieSelect from "./MovieSelect.vue";

export default {
  components: { DayTabsList, MovieSelect },
};
</script>

<style lang="scss" scoped>
.screening-section {
  padding: 4em 3em 0;
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
    justify-content: space-between;
  }
}
</style>
