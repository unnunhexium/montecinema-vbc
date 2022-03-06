<template>
  <div class="day-tabs-list">
    <p class="day-tabs-list__title">Day</p>
    <div class="day-tabs-list__wrapper">
      <DayTab
        v-for="tab in mappedTabs"
        :key="tab.id"
        :value="tab.day"
        class="day-tabs-list__tab"
      >
        {{ displayToday(tab) }}
      </DayTab>
      <button class="day-tabs-list__tab--calendar">
        <IconCalendar
          src="@/assets/calendar.svg"
          class="day-tabs-list__tab--icon"
          alt="calendar"
        />
      </button>
    </div>
  </div>
</template>

<script>
import DayTab from "./base/DayTab.vue";
import IconCalendar from "./svg/icon-calendar.vue";

export default {
  components: { DayTab, IconCalendar },
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
    };
  },
  methods: {
    displayToday(tab) {
      return this.todayIs === tab.id ? "Today" : tab.day;
    },
  },

  computed: {
    todayIs() {
      const d = new Date();
      let day = d.getDay();
      return day;
    },
    mappedTabs() {
      const filteredTabs = this.tabs.filter((tab) => tab.id !== this.todayIs);
      const index = this.tabs.findIndex((tab) => tab.id === this.todayIs);
      return [
        { day: "Today", id: -1 },
        ...filteredTabs.slice(index),
        ...filteredTabs.slice(0, index),
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.day-tabs-list {
  overflow: auto;
  &__wrapper {
    display: flex;
  }
  &__title {
    @include font-heading--the-smallest;
    color: $text-accent-b;
    padding-bottom: 1em;
  }
  &__tab {
    margin-right: 8px;
    &--calendar {
      background: transparent;
      padding: 0.75em 1em;
      cursor: pointer;
      border: 2px solid $btn-dark;
      border-radius: 64px;
      transition: background-color 0.4s, border-color 0.2s;
      &:active,
      &:focus,
      &:hover {
        background: $btn-dark;

        ::v-deep svg path {
          stroke: $text-white;
        }
      }
    }
  }
}
</style>
