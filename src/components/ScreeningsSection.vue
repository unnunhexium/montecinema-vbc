<template>
  <div class="screening-section">
    <h2 class="screening-section__title">Screenings:</h2>
    <p class="screening-section__content">Friday 11/02/2022</p>
    <div>
      <DayTabsList></DayTabsList>
    </div>
  </div>
</template>

<script>
import DayTabsList from "./DayTabsList.vue";

export default {
  components: { DayTabsList },
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
  }
}
</style>
