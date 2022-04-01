<template>
  <div class="booking-confirmation-page">
    <h3 class="booking-confirmation-page__title">Hell yeah!</h3>
    <h4 class="booking-confirmation-page__subtitle">You booked 3 tickets</h4>
    <BookingConfirmationCard class="booking-confirmation-page__card" />
    <BaseButton class="booking-confirmation-page__button" routeName="Home">
      Go to homepage
    </BaseButton>
  </div>
</template>

<script>
import BookingConfirmationCard from "@/components/BookingConfirmationCard.vue";
import BaseButton from "@/components/base/BaseButton.vue";

export default {
  components: {
    BookingConfirmationCard,
    BaseButton,
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
