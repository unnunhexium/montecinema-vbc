<template>
  <div class="choose-tickets">
    <div
      class="choose-tickets__wrapper"
      v-for="(seat, index) in selectedSeats"
      :key="seat"
    >
      <div class="choose-tickets__seat">
        <p class="choose-tickets__seat-label">Seat</p>
        <div class="choose-tickets__seat-description">
          Row
          <span class="choose-tickets__seat-description--bold">{{
            seat[0]
          }}</span
          >, Seat
          <span class="choose-tickets__seat-description--bold">{{
            seat.slice(1)
          }}</span>
        </div>
      </div>
      <div class="choose-tickets__ticket">
        <BaseSelect
          class="choose-tickets__ticket-select"
          title="Ticket type"
          placeholder="Select ticket type"
          label="name"
          :options="ticketTypes"
          :selectedOption="ticketsData[index].ticket"
          @input="setOption($event, index)"
        />
      </div>
      <BaseButton
        class="choose-tickets__button-remove"
        type="tertiary"
        @click="$emit('remove', index)"
      >
        Remove
      </BaseButton>
    </div>
    <BaseCheckbox
      class="choose-tickets__checkbox"
      v-model="checkboxValue"
      text="Terms & Conditions"
    />
    <div class="choose-tickets__buttons-wrapper">
      <BaseButton
        class="choose-tickets__button-back"
        type="tertiary"
        @click="$emit('go-back')"
      >
        Go back
      </BaseButton>
      <BaseButton
        class="choose-tickets__button-book"
        type="primary"
        :disabled="buttonDisabled"
        @click="bookReservation"
      >
        Book tickets - ${{ totalPrice }}
      </BaseButton>
    </div>
  </div>
</template>

<script>
import BaseSelect from "@/components/base/BaseSelect.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import BaseCheckbox from "@/components/base/BaseCheckbox.vue";
import { mapGetters, mapActions } from "vuex";
import { postReservation } from "@/api/movies";
import { getDayOfWeek, getDate, getTime } from "@/helpers";

export default {
  name: "ChooseTickets",
  components: {
    BaseSelect,
    BaseButton,
    BaseCheckbox,
  },
  data() {
    return {
      checkboxValue: false,
      ticketsData: this.selectedSeats.map((seat) => ({
        seat,
        ticket: "",
      })),
      ticketTypes: [
        { id: 1, name: "Adult - $20", price: 20 },
        { id: 2, name: "Child - $10", price: 10 },
        { id: 3, name: "Senior - $15", price: 15 },
        { id: 4, name: "Student - $12", price: 12 },
      ],
    };
  },
  watch: {
    selectedSeats(newVal) {
      this.ticketsData = newVal.map((seat, index) => ({
        seat,
        ticket: this.ticketsData[index].ticket,
      }));
    },
  },
  computed: {
    ...mapGetters(["selectedMovie", "seatsAndTickets"]),
    reservationBody() {
      return {
        seance_id: this.selectedMovie.seanceId,
        tickets: this.ticketsData.map((data) => ({
          seat: data.seat,
          ticket_type_id: data.ticket?.id,
        })),
      };
    },
    bookingData() {
      return this.ticketsData.map((ticket) => ({
        title: this.selectedMovie.movie.title,
        seat: `Row ${ticket.seat[0]}, Seat ${ticket.seat.slice(1)}`,
        datetime: `${getDayOfWeek(this.selectedMovie.datetime)}
           ${getDate(this.selectedMovie.datetime)} -
           ${getTime(this.selectedMovie.datetime)}`,
        ticketType: ticket.ticket.name,
      }));
    },
    buttonDisabled() {
      return !(this.selectedSeats.length && this.checkboxValue);
    },
    totalPrice() {
      const prices = this.ticketsData.map((item) =>
        item.ticket.price ? item.ticket.price : 0
      );
      return prices.reduce((prev, curr) => prev + curr);
    },
  },
  props: {
    selectedSeats: {
      type: Array,
      required: true,
    },
  },
  methods: {
    ...mapActions(["setSeatsAndTickets"]),
    setOption(value, index) {
      this.ticketsData[index].ticket = value;
    },
    async bookReservation() {
      try {
        await postReservation(this.reservationBody);
        this.setSeatsAndTickets(this.bookingData);
      } catch (error) {
        console.error(error);
      } finally {
        this.$router.push("/booking-confirmation");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.choose-tickets {
  &__wrapper {
    display: flex;
    align-items: flex-end;
    padding-bottom: 4em;
  }

  &__seat-label {
    @include font-element--small-accent;
    padding-bottom: 0.85em;
  }

  &__seat-description {
    margin-right: 1.35em;
  }

  &__seat-description {
    background: $bg-accent;
    font-family: "Roboto";
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    padding: 1em 0.8em;
    border-radius: 8px;
  }

  &__button-remove {
    display: block;
    margin-left: auto;
  }

  &__checkbox {
    margin-bottom: 3.55em;
  }

  &__buttons-wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__button-book {
    font-size: 18px;
    line-height: 18px;
    padding: 0.95em 2em;
  }
}

::v-deep .base-select .multiselect__tags {
  padding: 0.8em 1em;
  line-height: 27px;
}
</style>
