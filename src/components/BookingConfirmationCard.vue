<template>
  <div class="booking-confirmation">
    <div class="booking-confirmation__inner">
      <div class="booking-confirmation__wrapper">
        <p class="booking-confirmation__title">Movie</p>
        <p class="booking-confirmation__content">{{ reservation.title }}</p>
      </div>
      <div class="booking-confirmation__wrapper">
        <p class="booking-confirmation__title">Seat</p>
        <p class="booking-confirmation__content">{{ reservation.seat }}</p>
      </div>
      <div class="booking-confirmation__wrapper">
        <p class="booking-confirmation__title">Time</p>
        <p class="booking-confirmation__content">{{ reservation.datetime }}</p>
      </div>
      <div class="booking-confirmation__wrapper">
        <p class="booking-confirmation__title">Ticket type</p>
        <p class="booking-confirmation__content">
          {{ reservation.ticketType }}
        </p>
      </div>
    </div>
    <template v-if="allowRemove">
      <p
        :class="[
          'booking-confirmation__pill',
          {
            'booking-confirmation__pill--booked':
              reservation.reservationStatus === 'Booked',
          },
        ]"
      >
        {{ reservation.reservationStatus }}
      </p>
      <BaseButton
        class="booking-confirmation__button-remove"
        type="tertiary"
        @click="$emit('remove', reservation.id)"
      >
        Remove
      </BaseButton>
    </template>
  </div>
</template>

<script>
import BaseButton from "@/components/base/BaseButton.vue";

export default {
  name: "BookingConfirmationCard",
  components: {
    BaseButton,
  },
  props: {
    reservation: {
      type: Object,
      required: true,
    },
    allowRemove: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.booking-confirmation {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__inner {
    display: flex;
  }

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

  &__pill {
    @include filled-pill;

    &--booked {
      background: $bg-light;
      color: $text-light;
    }
  }

  &__button-remove {
    font-size: 16px;
    line-height: 16px;
    padding: 0.75em 2em;
    display: block;
  }
}
</style>
