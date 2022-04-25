<template>
  <div class="reservations-card">
    <div class="reservations-card__wrapper-first">
      <h2 class="reservations-card__title">Upcoming</h2>
      <BookingConfirmationCard
        class="reservations-card__card"
        v-for="reservation in reservations"
        :key="reservation.id"
        :id="reservation.id"
        :title="reservation.title"
        :seat="reservation.seat"
        :datetime="reservation.datetime"
        :ticketType="reservation.ticketType"
        :reservationStatus="reservation.reservationStatus"
        @remove="removeItem"
        allowRemove
      />
    </div>
    <div class="reservations-card__wrapper-second">
      <h2 class="reservations-card__title">Past</h2>
      <BookingConfirmationCard
        class="reservations-card__card"
        v-for="reservation in reservations"
        :key="reservation.id"
        v-bind="reservation"
      />
    </div>
  </div>
</template>

<script>
import BookingConfirmationCard from "@/components/BookingConfirmationCard.vue";
// import { mapGetters } from "vuex";

export default {
  name: "ReservationsCard",
  components: {
    BookingConfirmationCard,
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
        },
        {
          id: 2,
          title: "Predator",
          seat: "Row G, Seat 12",
          datetime: "Wednesday 16/02/2022 — 22:30",
          ticketType: "Child — $13",
          reservationStatus: "Confirmed",
        },
        {
          id: 3,
          title: "Predator",
          seat: "Row G, Seat 13",
          datetime: "Wednesday 16/02/2022 — 22:30",
          ticketType: "Senior — $7",
          reservationStatus: "Booked",
        },
        {
          id: 4,
          title: "Predator",
          seat: "Row G, Seat 14",
          datetime: "Wednesday 16/02/2022 — 22:30",
          ticketType: "Student — $9",
          reservationStatus: "Booked",
        },
      ],
    };
  },
  methods: {
    removeItem(id) {
      this.reservations = this.reservations.filter(
        (reservation) => reservation.id != id
      );
    },
  },
  // this endpoint appears to be not full and there is no endpoint with data
  // about both movie, seat, time, ticket type and reservation status.
  // this card could be done by requesting data in loop firstly with user id, then in movie id,
  // but I am not sure if it is correct, so I mocked some data for now
  //
  // computed: {
  //   ...mapGetters(["reservations"]),
  // },
  //
  // async created() {
  //   try {
  //     this.$store.dispatch("fetchReservations");
  //   } catch (error) {
  //     alert(error);
  //   }
  // },
};
</script>

<style lang="scss" scoped>
.reservations-card {
  width: 100%;
  box-shadow: 0px 4px 22px rgba(52, 53, 65, 0.15);
  border-radius: 24px;
  padding: 64px;
  margin-bottom: 64px;

  &__title {
    color: $text-dark;
    font-family: "Eczar";
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 1.65em;
  }

  &__wrapper-first {
    margin-bottom: 5em;
  }

  &__card {
    margin-bottom: 1.5em;
  }
}
</style>
