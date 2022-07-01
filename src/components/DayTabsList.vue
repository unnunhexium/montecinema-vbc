<template>
  <div class="day-tabs-list">
    <p class="day-tabs-list__title" v-if="showLabel">Day</p>
    <div class="day-tabs-list__wrapper">
      <DayTab
        class="day-tabs-list__tab"
        v-for="(tab, index) in mappedTabs"
        @click="setDate(index)"
        :key="tab.id"
        :value="tab.day"
        :active="isTabActive(index)"
      >
        {{ displayToday(tab) }}
      </DayTab>
      <button class="day-tabs-list__tab--button" @click="openPicker">
        <IconCalendar
          src="@/assets/calendar.svg"
          class="day-tabs-list__tab--icon"
          alt="calendar"
        />
        <Datepicker
          :format="customFormatter"
          v-model="selectedDate"
          input-class="day-tabs-list__tab--input"
          calendar-class="day-tabs-list__tab--picker"
          ref="datePicker"
          monday-first
          :disabled-dates="{ to: new Date() }"
        />
      </button>
    </div>
  </div>
</template>

<script>
import DayTab from "./base/DayTab.vue";
import IconCalendar from "./svg/icon-calendar.vue";
import Datepicker from "vuejs-datepicker";

export default {
  name: "DayTabsList",
  components: { DayTab, IconCalendar, Datepicker },
  data() {
    return {
      tabs: [
        { day: "Sun", id: 0 },
        { day: "Mon", id: 1 },
        { day: "Tue", id: 2 },
        { day: "Wed", id: 3 },
        { day: "Thu", id: 4 },
        { day: "Fri", id: 5 },
        { day: "Sat", id: 6 },
      ],
      selectedDate: new Date(),
    };
  },
  watch: {
    selectedDate(newVal) {
      this.$emit("set-date", newVal);
    },
  },
  methods: {
    displayToday(tab) {
      return this.todayIs === tab.id ? "Today" : tab.day;
    },
    customFormatter(date) {
      return new Date(date);
    },
    setDate(index) {
      let today = new Date();
      this.selectedDate = new Date(today.setDate(today.getDate() + index));
    },
    openPicker() {
      this.$refs.datePicker.showCalendar();
    },
    getTabDate(index) {
      const today = new Date();
      return new Date(today.setDate(today.getDate() + index));
    },
    isTabActive(index) {
      return (
        this.selectedDate.getDate() === this.getTabDate(index).getDate() &&
        this.selectedDate.getMonth() === this.getTabDate(index).getMonth() &&
        this.selectedDate.getFullYear() === this.getTabDate(index).getFullYear()
      );
    },
  },

  computed: {
    todayIs() {
      const d = new Date();
      let day = d.getDay();
      return day;
    },
    selectedDateMonth() {
      return new Date(this.selectedDate).getMonth();
    },
    mappedTabs() {
      const filteredTabs = this.tabs.filter((tab) => tab.id !== this.todayIs);
      const index = this.tabs.findIndex((tab) => tab.id === this.todayIs);
      return [
        { day: "Today", id: -1 },
        ...filteredTabs.slice(index),
        ...filteredTabs.slice(0, index),
        // this gives us today +5 next days
      ].slice(0, -1);
    },
    showLabel() {
      const inputLabelRoutes = ["Home", "Screenings", "CreateAReservation"];
      return inputLabelRoutes.includes(this.$route.name);
    },
  },
};
</script>

<style lang="scss" scoped>
.day-tabs-list {
  &__wrapper {
    display: flex;
  }
  &__title {
    @include font-heading--the-smallest;
    text-transform: uppercase;
    color: $text-accent-b;
    padding-bottom: 1em;
  }
  &__tab {
    margin-right: 8px;
    &--button {
      background: transparent;
      padding: 0.7em 1em;
      cursor: pointer;
      border: 2px solid $btn-dark;
      border-radius: 64px;
      transition: background-color 0.4s, border-color 0.2s;
      &:focus-visible {
        outline: none;
        border: 2px dotted $btn-pressed;
      }
      &:active,
      &:hover {
        background: $btn-dark;
        ::v-deep svg path {
          stroke: $text-white;
        }
      }
    }
    ::v-deep &--picker {
      right: 0;
    }
    ::v-deep &--input {
      display: none;
    }
  }
  ::v-deep span.cell.selected {
    background: $btn-default;
  }
  ::v-deep
    .vdp-datepicker__calendar
    .cell:not(.blank):not(.disabled).day:hover {
    border: 2px solid $btn-default;
  }
}
</style>
