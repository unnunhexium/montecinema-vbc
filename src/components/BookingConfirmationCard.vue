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
      <template v-if="allowRemove">
        <div class="booking-confirmation__wrapper">
          <p class="booking-confirmation__title">Email</p>
          <p class="booking-confirmation__content">
            {{ reservation.email }}
          </p>
        </div>
      </template>
    </div>
    <div class="booking-confirmation__actions">
      <template
        v-if="allowRemove && reservation.reservationStatus === 'Booked'"
      >
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
      <template v-if="isEmployee && reservation.reservationStatus === 'Booked'">
        <BaseButton
          class="booking-confirmation__button-confirm"
          type="tertiary"
          @click="$emit('confirm', reservation.id)"
          :disabled="reservation.reservationStatus === 'Confirmed'"
        >
          Confirm
        </BaseButton>
      </template>
    </div>
    <template
      v-if="isEmployee && reservation.reservationStatus === 'Confirmed'"
    >
      <div class="booking-confirmation__confirmation-label">Confirmed</div>
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
  data() {
    return {
      reservations: [
        {
          id: 1,
          title: "Predator",
          seat: "Row G, Seat 11",
          datetime: "Wednesday 16/02/2022 — 22:30",
          ticketType: "Adult — $13",
          reservationStatus: "Booked",
          email: "darthvader@mail.com",
        },
        {
          id: 2,
          title: "Predator",
          seat: "Row G, Seat 12",
          datetime: "Wednesday 16/02/2022 — 22:30",
          ticketType: "Child — $13",
          reservationStatus: "Confirmed",
          email: "darthvader@mail.com",
        },
        {
          id: 3,
          title: "Predator",
          seat: "Row G, Seat 13",
          datetime: "Wednesday 16/02/2022 — 22:30",
          ticketType: "Senior — $7",
          reservationStatus: "Booked",
          email: "darthvader@mail.com",
        },
        {
          id: 4,
          title: "Predator",
          seat: "Row G, Seat 14",
          datetime: "Wednesday 16/02/2022 — 22:30",
          ticketType: "Student — $9",
          reservationStatus: "Booked",
          email: "darthvader@mail.com",
        },
      ],
    };
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
    isEmployee: {
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
    min-width: 80px;
  }

  &__pill {
    @include filled-pill;
    justify-self: center;

    &--booked {
      background: $bg-light;
      color: $text-light;
    }
  }

  &__actions {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    gap: 20px;
  }

  &__button-remove,
  &__button-confirm {
    font-size: 16px;
    line-height: 16px;
    padding: 0.75em 2em;
    display: block;
  }

  &__button-confirm {
    border-color: $btn-default;
    color: $btn-default;

    &:hover {
      background: $btn-default;
      color: $text-white;
    }
  }

  &__confirmation-label {
    background: $bg-accent;
    color: $text-accent;
    @include font-button;
    padding: 0.75em 2em;
    border-radius: 64px;
  }
}
</style>
