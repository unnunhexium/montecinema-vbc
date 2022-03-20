<template>
  <form @submit.prevent="" class="register-2nd-card">
    <BaseInput
      class="register-2nd-card__input"
      @input="$emit('set-form-field', { value: $event, key: 'firstName' })"
      :value="formData.firstName"
      type="text"
      placeholder="e.g. Jessica"
      label="first name"
    /><BaseInput
      class="register-2nd-card__input"
      @input="$emit('set-form-field', { value: $event, key: 'lastName' })"
      :value="formData.lastName"
      type="text"
      placeholder="e.g. Walton"
      label="last name"
    />
    <label class="register-2nd-card__datepicker-label">Date of Birth</label>
    <button class="register-2nd-card__datepicker-button" @click="openPicker">
      <slot class="register-2nd-card__datepicker-slot">
        {{ formData.dateOfBirth ? getDate(formData.dateOfBirth) : "" }}</slot
      >
      <IconCalendar
        src="@/assets/calendar.svg"
        class="register-2nd-card__datepicker-icon"
        alt="calendar"
      />
    </button>
    <Datepicker
      :format="customFormatter"
      @input="$emit('set-form-field', { value: $event, key: 'dateOfBirth' })"
      :value="formData.dateOfBirth"
      input-class="register-2nd-card__datepicker-input"
      calendar-class="register-2nd-card__datepicker-picker"
      ref="datePicker"
      monday-first
      :disabled-dates="{ from: new Date() }"
    />
    <p
      class="register-2nd-card__valid-flag"
      :class="{
        valid: isOver18 && formData.dateOfBirth,
        invalid: !isOver18 && formData.dateOfBirth,
      }"
    >
      You should be minium 18 years old
    </p>
    <div class="register-2nd-card__checkbox-wrapper">
      <input
        type="checkbox"
        class="register-2nd-card__checkbox"
        @input="emitCheckboxValue"
        :value="formData.checkbox"
        :checked="false"
      />
      <p class="register-2nd-card__checkbox-description">
        I accept
        <a url="" class="register-2nd-card__checkbox-link">Privacy Policy</a>
      </p>
    </div>
    <div class="register-2nd-card__buttons-wrapper">
      <router-link :to="{ name: 'Login' }" class="register-2nd-card__link">
        Log in instead
      </router-link>
      <BaseButton
        class="register-2nd-card__button"
        @click="$emit('register-user')"
        :disabled="buttonDisabled"
      >
        Register
      </BaseButton>
    </div>
  </form>
</template>

<script>
import BaseInput from "@/components/base/BaseInput.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import IconCalendar from "../svg/icon-calendar.vue";
import Datepicker from "vuejs-datepicker";
import { getDate } from "@/helpers";

export default {
  name: "Register2ndCard",
  components: {
    BaseButton,
    BaseInput,
    Datepicker,
    IconCalendar,
  },
  data() {
    return {
      inputError: "",
      selectedDate: new Date(),
      formattedDate: "",
    };
  },
  props: {
    formData: {
      type: Object,
      required: true,
    },
  },
  watch: {
    selectedDate(newVal) {
      this.$emit("set-date", newVal);
    },
  },
  methods: {
    openPicker() {
      this.$refs.datePicker.showCalendar();
    },
    customFormatter(date) {
      if (!this.formData.dateOfBirth) {
        return "";
      }
      return new Date(date);
    },
    getDate,
    emitCheckboxValue(event) {
      console.log(event.target.value);
      this.$emit("set-form-field", {
        value: event.target.value !== "true",
        key: "checkbox",
      });
    },
  },
  computed: {
    isOver18() {
      if (!this.formData.dateOfBirth) return;
      const date18YearsAgo = new Date();
      date18YearsAgo.setFullYear(date18YearsAgo.getFullYear() - 18);
      return (
        new Date(this.formData.dateOfBirth).getTime() <=
        date18YearsAgo.getTime()
      );
    },
    buttonDisabled() {
      return !(
        this.formData.firstName.length &&
        this.formData.lastName.length &&
        this.isOver18 &&
        this.formData.checkbox
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.register-2nd-card {
  box-shadow: 0px 4px 22px rgba(52, 53, 65, 0.15);
  border-radius: 24px;
  padding: 64px;

  &__input {
    margin-bottom: 1.7em;
  }

  &__valid-flag {
    @include font-element--small-thin;
    padding-bottom: 1.7em;
  }

  &__checkbox-wrapper {
    display: flex;
    @include font-element--medium;
    color: $text-dark;
    align-items: center;
  }

  &__checkbox {
    margin-right: 0.75em;
    width: 24px;
    height: 24px;
  }

  &__checkbox-link {
    text-decoration: underline;
  }

  &__buttons-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
    align-items: baseline;
    margin-top: 40px;
  }

  &__link {
    @include font-button;
    font-size: 18px;
    color: $text-accent;
    text-decoration: none;
    justify-self: center;
    @include outline-transparent;

    &:focus-visible {
      @include outline-focus;
    }
  }
  &__datepicker {
    font-family: Arial;
    padding: 0.7em 1em;
    cursor: pointer;
    &:focus-visible {
      color: $text-dark;
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
    &-label {
      @include font-element--small-accent;
    }

    ::v-deep &-button {
      @include input-element;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.35em;
      position: relative;
    }
    ::v-deep &-slot {
      color: $text-dark;
    }
    ::v-deep &-icon {
      position: absolute;
      right: 12px;
    }

    ::v-deep &-picker {
      right: 0;
    }
    ::v-deep &-input {
      display: none;
    }
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
  border-radius: 64px;
}
.invalid {
  color: $text-accent;
}

.valid {
  color: #27ae60;
}
</style>
