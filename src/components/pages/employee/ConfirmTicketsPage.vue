<template>
  <div class="confirm-tickets-page">
    <div class="confirm-tickets-page__wrapper">
      <h2 class="confirm-tickets-page__title">Do your work</h2>
      <BaseButton
        class="confirm-tickets-page__button"
        @click="$router.push('/employee/create-a-reservation')"
      >
        Create a reservation
      </BaseButton>
    </div>
    <BaseInput
      v-model="query"
      class="confirm-tickets-page__search-input"
      type="search"
      placeholder=" What are you looking for?"
      label="search by email"
    />
    <div class="confirm-tickets-page__card-wrapper">
      <BookingConfirmationCard
        class="confirm-tickets-page__card"
        v-for="reservation in sortedReservations"
        :key="reservation.id"
        :reservation="reservation"
        @remove="removeItem"
        @confirm="confirmReservation"
        allowRemove
        isEmployee
      />
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/base/BaseButton.vue";
import BaseInput from "@/components/base/BaseInput.vue";
import BookingConfirmationCard from "@/components/BookingConfirmationCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "ConfirmTicketsPage",
  components: {
    BaseButton,
    BaseInput,
    BookingConfirmationCard,
  },
  data() {
    return {
      query: "",
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
        {
          id: 5,
          title: "Commando",
          seat: "Row G, Seat 11",
          datetime: "Wednesday 16/02/2022 — 22:30",
          ticketType: "Adult — $13",
          reservationStatus: "Booked",
          email: "lukeskywalker@mail.com",
        },
        {
          id: 6,
          title: "Commando",
          seat: "Row G, Seat 12",
          datetime: "Wednesday 16/02/2022 — 22:30",
          ticketType: "Child — $13",
          reservationStatus: "Confirmed",
          email: "lukeskywalker@mail.com",
        },
        {
          id: 7,
          title: "Commando",
          seat: "Row G, Seat 13",
          datetime: "Wednesday 16/02/2022 — 22:30",
          ticketType: "Senior — $7",
          reservationStatus: "Booked",
          email: "lukeskywalker@mail.com",
        },
        {
          id: 8,
          title: "Commando",
          seat: "Row G, Seat 14",
          datetime: "Wednesday 16/02/2022 — 22:30",
          ticketType: "Student — $9",
          reservationStatus: "Booked",
          email: "lukeskywalker@mail.com",
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
    confirmReservation(id) {
      const index = this.reservations.findIndex((item) => item.id == id);
      this.reservations[index].reservationStatus = "Confirmed";
    },
  },
  computed: {
    ...mapGetters("checkout", ["seatsAndTickets"]),
    searchedBookings() {
      return this.query
        ? this.reservations.filter((reservation) =>
            reservation.email.startsWith(this.query)
          )
        : this.reservations;
    },
    sortedReservations() {
      return [
        ...this.searchedBookings.filter(
          (reservation) => reservation.reservationStatus == "Booked"
        ),
        ...this.searchedBookings.filter(
          (reservation) => reservation.reservationStatus == "Confirmed"
        ),
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.confirm-tickets-page {
  padding: 0 48px;
  margin-top: 64px;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 64px;
  }

  &__title {
    color: $text-dark;
    font-family: "Eczar";
    font-weight: 600;
    font-size: 48px;
    line-height: 49px;
  }

  &__button {
    padding: 0.75em 2em;
    font-size: 16px;
    line-height: 16px;
  }

  &__search-input {
    width: 70%;
    margin-bottom: 64px;
  }

  &__card-wrapper {
    margin-bottom: 64px;
  }

  &__card {
    margin-bottom: 24px;
  }
}

.base-input {
  position: relative;
}
</style>
