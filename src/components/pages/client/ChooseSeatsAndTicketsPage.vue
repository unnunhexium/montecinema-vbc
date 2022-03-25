<template>
  <div class="choose-seats-and-tickets-page">
    <StepsNav class="choose-seats-and-tickets-page__nav" />
    <h2 class="choose-seats-and-tickets-page__title">Choose your seats</h2>
    <ScreeningCard
      class="choose-seats-and-tickets-page__card"
      :movie="selectedMovie.movie"
      :datetime="selectedMovie.datetime"
    />
    <div>
      <SeatsList
        class="choose-seats-and-tickets-page__seats"
        :hallId="selectedMovie.hall"
      />
      <BaseButton type="tertiary" class="choose-seats-and-tickets-page__button">
        <!-- TO DO v-if seats are chosen -->
        Choose <slot>4</slot> seats
      </BaseButton>
    </div>
    <div><ChooseTickets /></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import StepsNav from "@/components/navigation/StepsNav.vue";
import ScreeningCard from "@/components/ScreeningCard.vue";
import SeatsList from "@/components/SeatsList.vue";
import ChooseTickets from "@/components/ChooseTickets.vue";
import BaseButton from "@/components/base/BaseButton.vue";

export default {
  name: "ChooseSeatsAndTicketsPage",
  components: {
    StepsNav,
    ScreeningCard,
    SeatsList,
    ChooseTickets,
    BaseButton,
  },
  computed: {
    ...mapGetters(["selectedMovie"]),
  },
};
</script>

<style lang="scss" scoped>
.choose-seats-and-tickets-page {
  padding: 0 48px 64px;

  &__nav {
    margin-bottom: 4em;
  }

  &__title {
    font-family: "Eczar";
    font-weight: 600;
    font-size: 48px;
    line-height: 49px;
    margin-bottom: 1.35em;
  }

  &__card {
    box-shadow: 0px 24px 78px rgba(0, 0, 0, 0.08),
      0px 5.36071px 17.4223px rgba(0, 0, 0, 0.0238443),
      0px 1.59602px 5.18708px rgba(0, 0, 0, 0.0161557);
  }

  &__seats {
    margin-bottom: 4em;
  }

  &__button {
    color: #f7a0a1;
    border: 2px solid #f7a0a1;
    display: block;
    margin-left: auto;
    &:active,
    &:focus,
    &:hover {
      background: #f7a0a1;
    }
  }
}
</style>
