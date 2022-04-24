<template>
  <div class="booking-confirmation">
    <div class="booking-confirmation__inner">
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
    <template v-if="allowRemove">
      <p
        :class="[
          'booking-confirmation__pill',
          {
            'booking-confirmation__pill--booked':
              reservationStatus === 'Booked',
          },
        ]"
      >
        {{ reservationStatus }}
      </p>
      <BaseButton
        class="booking-confirmation__button-remove"
        type="tertiary"
        @click="$emit('remove', id)"
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
    id: {
      type: Number,
      required: true,
    },
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
    reservationStatus: {
      type: String,
      default: "",
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
