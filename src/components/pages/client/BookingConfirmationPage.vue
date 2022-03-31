<template>
  <div class="booking-confirmation-page">
    <h3 class="booking-confirmation-page__title">Hell yeah!</h3>
    <h4 class="booking-confirmation-page__subtitle">You booked 3 tickets</h4>
    <BookingConfirmationCard />
  </div>
</template>

<script>
import BookingConfirmationCard from "@/components/BookingConfirmationCard.vue";
export default {
  components: {
    BookingConfirmationCard,
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
}
</style>
