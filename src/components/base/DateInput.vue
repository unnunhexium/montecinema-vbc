<template>
  <div class="date-input">
    <label class="date-input__label">Date of Birth</label>
    <button class="date-input__button" @click="openPicker">
      <slot class="date-input__slot"> {{ value ? getDate(value) : "" }}</slot>
      <IconCalendar
        src="@/assets/calendar.svg"
        class="date-input__icon"
        alt="calendar"
      />
    </button>
    <Datepicker
      :format="customFormatter"
      @input="$emit('input', $event)"
      :value="value"
      input-class="date-input__input"
      calendar-class="date-input__picker"
      ref="datePicker"
      monday-first
      :disabled-dates="{ from: new Date() }"
    />
    <p
      class="date-input__validation"
      :class="{
        valid: isOver18 && value,
        invalid: !isOver18 && value,
      }"
    >
      You should be minium 18 years old
    </p>
  </div>
</template>

<script>
import IconCalendar from "../svg/icon-calendar.vue";
import Datepicker from "vuejs-datepicker";
import { getDate } from "@/helpers";

export default {
  name: "DateInput",
  components: {
    IconCalendar,
    Datepicker,
  },
  data() {
    return {
      inputError: "",
      selectedDate: new Date(),
      formattedDate: "",
      checkboxValue: false,
    };
  },
  props: {
    value: {
      type: [Date, String],
      required: true,
    },
  },
  watch: {
    selectedDate(newVal) {
      this.$emit("set-date", newVal);
    },
    checkboxValue(newVal) {
      this.$emit("set-checkbox-value", newVal);
    },
  },
  methods: {
    openPicker() {
      this.$refs.datePicker.showCalendar();
    },
    customFormatter(date) {
      if (!this.dateInput) {
        return "";
      }
      return new Date(date);
    },
    getDate,
  },
  computed: {
    isOver18() {
      if (!this.value) return;
      const date18YearsAgo = new Date();
      date18YearsAgo.setFullYear(date18YearsAgo.getFullYear() - 18);
      return new Date(this.value).getTime() <= date18YearsAgo.getTime();
    },
  },
};
</script>

<style lang="scss" scoped>
.date-input {
  font-family: Arial;
  cursor: pointer;
  margin-bottom: 40px;

  &:focus-visible {
    color: $text-dark;
    outline: none;
    border: 2px dotted $btn-pressed;
  }

  &__label {
    @include font-element--small-accent;
  }

  ::v-deep &__button {
    @include input-element;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  ::v-deep &__slot {
    color: $text-dark;
  }

  ::v-deep &__icon {
    position: absolute;
    right: 12px;
  }

  ::v-deep &__picker {
    right: 0;
  }
  ::v-deep &__input {
    display: none;
  }

  &__validation {
    margin-top: 0.5em;
  }
}

::v-deep span.cell.selected {
  background: $btn-default;
  color: $text-white;
}

::v-deep .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover {
  border: 2px solid $btn-default;
}

::v-deep .vdp-datepicker {
  font-family: Arial;
}

::v-deep .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day,
::v-deep .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month,
::v-deep .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year {
  background: none;
  border: 2px solid transparent;
}

::v-deep .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover,
::v-deep .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover,
::v-deep .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year:hover {
  background: none;
  color: black;
  border: 2px solid $text-accent;
}

.button {
  margin-top: 40px;
}
.base-button {
  font-size: 18px;
  line-height: 18px;
  padding: 12px 30px;
}

.invalid {
  color: $text-accent;
}

.valid {
  color: #27ae60;
}
</style>
