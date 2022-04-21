<template>
  <div class="booking-confirmation">
    <div class="booking-confirmation__wrapper">
      <p class="booking-confirmation__title">Movie</p>
      <p class="booking-confirmation__content">{{ title }}</p>
    </div>
    <div class="booking-confirmation__wrapper">
      <p class="booking-confirmation__title">Seat</p>
      <p class="booking-confirmation__content">{{ seat }}</p>
    </div>
    <div class="booking-confirmation__wrapper">
      <p class="booking-confirmation__title">Time</p>
      <p class="booking-confirmation__content">{{ datetime }}</p>
    </div>
    <div class="booking-confirmation__wrapper">
      <p class="booking-confirmation__title">Ticket type</p>
      <p class="booking-confirmation__content">{{ ticketType }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookingConfirmationCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    seat: {
      type: String,
      required: true,
    },
    datetime: {
      type: String,
      required: true,
    },
    ticketType: {
      type: String,
      required: true,
    },
  },
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
