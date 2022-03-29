<template>
  <div>
    <div class="seats-list">
      <div v-for="row in rowList" :key="row" class="seats-list__row">
        <span class="seats-list__row-letter--left">{{ row }}</span>
        <button
          :class="seatClasses(row, seat)"
          v-for="seat in seatsInRow"
          :key="seat"
          @click="$emit('select-seat', row, seat)"
        >
          {{ seat }}
        </button>
        <span class="seats-list__row-letter--right">{{ row }}</span>
      </div>
    </div>
    <BaseButton
      type="tertiary"
      class="seats-list__button"
      @click="$emit('go-to-next-step')"
      :disabled="buttonDisabled"
    >
      Choose {{ selectedSeats.length }} seats
    </BaseButton>
  </div>
</template>

<script>
// import { getReservationDetails } from "@/api/movies";
import BaseButton from "@/components/base/BaseButton.vue";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default {
  name: "SeatsList",
  components: {
    BaseButton,
  },
  data() {
    return {
      reservation: {},
      seatsInRow: 10,
    };
  },
  props: {
    hall: {
      type: Object,
      required: true,
    },
    selectedSeats: {
      type: Array,
      required: true,
    },
    takenSeats: {
      type: Array,
      required: true,
    },
  },
  computed: {
    seats() {
      return this.hall.seats;
    },
    rowsCount() {
      return this.seats / this.seatsInRow;
    },
    rowList() {
      return alphabet.slice(0, this.rowsCount).split("");
    },
    buttonDisabled() {
      return this.selectedSeats.length == 0;
    },
  },
  methods: {
    seatClasses(row, seat) {
      return [
        "seats-list__seat",
        { taken: this.takenSeats.includes(`${row}${seat}`) },
        { selected: this.selectedSeats.includes(`${row}${seat}`) },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.seats-list {
  box-shadow: 0px 24px 78px rgba(0, 0, 0, 0.08),
    0px 5.36071px 17.4223px rgba(0, 0, 0, 0.0238443),
    0px 1.59602px 5.18708px rgba(0, 0, 0, 0.0161557);
  border-radius: 8px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 4em;
  overflow-x: auto;

  &__row,
  &__seat {
    color: $text-dark;
    font-family: "Roboto Mono";
    font-size: 16px;
    line-height: 16px;
    align-items: center;
  }

  &__row {
    display: flex;
    flex-direction: row;
    gap: 5px;
    margin: 0 auto;
  }

  &__row-letter {
    &--left {
      margin-right: 40px;
    }

    &--right {
      margin-left: 40px;
    }
  }

  &__seat {
    all: unset;
    cursor: pointer;
    height: 32px;
    min-width: 32px;
    background: $btn-medium;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover,
    &:active,
    &:focus-visible {
      background: $btn-default;
      color: $text-white;
    }
  }
  &__button {
    display: block;
    margin-left: auto;
    &:not([disabled]) {
      color: #f7a0a1;
      border: 2px solid #f7a0a1;
      &:active,
      &:hover {
        background: #f7a0a1;
        color: $text-white;
      }
      &:focus-visible {
        padding: 0.95em 2em;
        border: 2px dotted $btn-pressed;
      }
    }
  }
}

.taken {
  background: $text-light;
  color: $text-white;
  pointer-events: none;
}

.selected {
  background: $btn-default;
  color: $text-white;
}
</style>
