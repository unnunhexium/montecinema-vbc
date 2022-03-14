import DayTabsList from "@/components/DayTabsList.vue";
import { getDayOfWeek } from "@/helpers";

export default {
  data() {
    return {
      selectedDate: new Date(),
    };
  },
  components: { DayTabsList },
  methods: {
    getDayOfWeek,
    setDate(date) {
      this.selectedDate = date;
    },
  },
  computed: {
    selectedWeekday() {
      return getDayOfWeek(this.selectedDate);
    },
    formattedDate() {
      return this.selectedDate.toLocaleDateString("en-GB");
    },
  },
};
