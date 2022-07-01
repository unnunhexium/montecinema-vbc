<template>
  <div class="booking-confirmation-page">
    <template v-if="seatsAndTickets.length >= 1">
      <h3 class="booking-confirmation-page__title">Hell yeah!</h3>
      <h4
        class="booking-confirmation-page__subtitle"
        v-if="seatsAndTickets.length === 1"
      >
        You booked {{ seatsAndTickets.length }} ticket
      </h4>
      <h4 class="booking-confirmation-page__subtitle" v-else>
        You booked {{ seatsAndTickets.length }} tickets
      </h4>
      <BookingConfirmationCard
        v-for="reservation in seatsAndTickets"
        :key="reservation.seat"
        class="booking-confirmation-page__card"
        :reservation="reservation"
      />
      <BaseButton class="booking-confirmation-page__button" routeName="Home">
        Go to homepage
      </BaseButton>
    </template>
    <ErrorCard v-else />
  </div>
</template>

<script>
import BookingConfirmationCard from "@/components/BookingConfirmationCard.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import ErrorCard from "@/components/ErrorCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "BookingConfirmationPage",
  components: {
    BookingConfirmationCard,
    BaseButton,
    ErrorCard,
  },
  computed: {
    ...mapGetters("checkout", ["seatsAndTickets"]),
  },
};
</script>

<style lang="scss" scoped>
.booking-confirmation-page {
  padding: 0 48px;
  margin-top: 64px;

  &__title,
  &__subtitle {
    font-family: "Eczar";
    font-size: 48px;
    line-height: 49px;
    font-weight: 600;
    font-size: 48px;
    margin-bottom: 1.35em;
  }

  &__title {
    color: $text-dark;
    margin-bottom: 5px;
  }

  &__subtitle {
    color: $text-accent-b;
  }

  &__card {
    margin-bottom: 4em;
  }

  &__button {
    font-size: 18px;
    max-width: 240px;
    padding: 0.75em 2.2em;
    display: block;
    margin-left: auto;
  }
}
</style>
