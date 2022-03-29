<template>
  <div class="choose-seats-and-tickets-page">
    <StepsNav
      class="choose-seats-and-tickets-page__nav"
      :isActive="!secondStepActive"
      @go-to-choose-seats="secondStepActive = false"
    />
    <h2
      class="choose-seats-and-tickets-page__title"
      v-if="secondStepActive == false"
    >
      Choose your seats
    </h2>
    <h2 class="choose-seats-and-tickets-page__title" v-else>
      Choose your tickets
    </h2>
    <ScreeningCard
      class="choose-seats-and-tickets-page__card"
      :movie="selectedMovie.movie"
      :datetime="selectedMovie.datetime"
    />
    <SeatsList
      v-if="!secondStepActive"
      class="choose-seats-and-tickets-page__seats"
      @go-to-next-step="secondStepActive = true"
      @select-seat="selectSeat"
      :selectedSeats="selectedSeats"
      :takenSeats="takenSeats"
      :hall="hall"
    />
    <ChooseTickets
      v-else
      @go-back="goBack"
      :selectedSeats="selectedSeats"
      @remove="removeItem"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import StepsNav from "@/components/navigation/StepsNav.vue";
import ScreeningCard from "@/components/ScreeningCard.vue";
import SeatsList from "@/components/SeatsList.vue";
import ChooseTickets from "@/components/ChooseTickets.vue";
import { getScreeningDetails, getHallDetails } from "@/api/movies";

export default {
  name: "ChooseSeatsAndTicketsPage",
  components: {
    StepsNav,
    ScreeningCard,
    SeatsList,
    ChooseTickets,
  },
  data() {
    return {
      secondStepActive: false,
      selectedSeats: [],
      takenSeats: [],
      hall: {},
    };
  },
  computed: {
    ...mapGetters(["selectedMovie"]),
  },
  methods: {
    selectSeat(row, seat) {
      const selectedSeat = `${row}${seat}`;
      if (this.selectedSeats.includes(selectedSeat)) {
        const index = this.selectedSeats.indexOf(selectedSeat);
        this.selectedSeats.splice(index, 1);
      } else {
        this.selectedSeats = [...this.selectedSeats, selectedSeat];
      }
    },
    goBack() {
      this.secondStepActive = false;
    },
    removeItem(index) {
      this.selectedSeats.splice(index, 1);
    },
  },
  async created() {
    try {
      if (!this.selectedMovie.hall) {
        this.$router.push("/screenings");
        return;
      } else {
        const { data } = await getHallDetails(this.selectedMovie.hall);
        this.hall = data;
      }
      const { data } = await getScreeningDetails(this.selectedMovie.seanceId);
      this.takenSeats = data.taken_seats;
    } catch (error) {
      alert(error);
    }
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
}
</style>
