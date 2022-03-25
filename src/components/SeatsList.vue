<template>
  <div class="seats-list">
    <div v-for="row in rowList" :key="row" class="seats-list__row">
      <span class="seats-list__row-letter--left">{{ row }}</span>
      <button class="seats-list__seat" v-for="seat in seatsInRow" :key="seat">
        {{ seat }}
      </button>
      <span class="seats-list__row-letter--right">{{ row }}</span>
    </div>
  </div>
</template>

<script>
import { getHallDetails } from "@/api/movies";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default {
  name: "SeatsList",
  data() {
    return {
      hall: {},
    };
  },
  props: {
    hallId: {
      type: String,
      required: true,
    },
  },
  computed: {
    seats() {
      return this.hall.seats;
    },
    seatsInRow() {
      return +this.seats < 100 ? 10 : 25;
    },
    rowsCount() {
      return this.seats / this.seatsInRow;
    },
    rowList() {
      return alphabet.slice(0, this.rowsCount).split("");
    },
  },
  async created() {
    const { data } = await getHallDetails(this.hallId);
    this.hall = data;
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
}

.taken {
  background: $text-light;
  color: $text-white;
}

.chosen {
  background: $btn-default;
  color: $text-white;
}
</style>
