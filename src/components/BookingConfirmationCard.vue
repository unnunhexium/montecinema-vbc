<template>
  <div class="booking-confirmation">
    <div class="booking-confirmation__wrapper">
      <p class="booking-confirmation__title">Movie</p>
      <p class="booking-confirmation__content">Predator</p>
    </div>
    <div class="booking-confirmation__wrapper">
      <p class="booking-confirmation__title">Seat</p>
      <p class="booking-confirmation__content">Row G, Seat 11</p>
    </div>
    <div class="booking-confirmation__wrapper">
      <p class="booking-confirmation__title">Time</p>
      <p class="booking-confirmation__content">Wednesday 16/02/2022 — 22:30</p>
    </div>
    <div class="booking-confirmation__wrapper">
      <p class="booking-confirmation__title">Ticket type</p>
      <p class="booking-confirmation__content">Adult —$13</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookingConfirmationCard",
};
</script>

<style lang="scss" scoped>
.booking-confirmation {
  display: flex;

  &__wrapper {
    margin-right: 2em;
  }

  &__title {
    @include font-element--small-accent;
    padding-bottom: 0.5em;
  }

  &__content {
    @include font-paragraph--smaller;
  }
}
</style>
