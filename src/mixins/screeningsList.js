import { getDate } from "@/helpers";

export default {
  methods: {
    getDate,
    filterByMovie(id) {
      return this.screenings.filter((screening) => screening.movie == id);
    },
    filterByDay(id, date) {
      return this.filterByMovie(id).filter(
        (screening) => getDate(screening.datetime) === getDate(date)
      );
    },
  },
  computed: {
    screenings() {
      return this.$store.state.screenings;
    },
  },
};
