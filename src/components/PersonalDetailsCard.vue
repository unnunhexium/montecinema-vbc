<template>
  <form
    @submit.prevent="$emit('personal-details')"
    class="personal-details-card"
  >
    <div class="personal-details-card__wrapper">
      <BaseInput
        @input="$emit('set-form-field', { value: $event, key: 'email' })"
        :value="formData.email"
        class="personal-details-card__input"
        type="email"
        :errorMessage="emailError"
        label="email"
      />
      <BaseButton
        class="personal-details-card__button--password"
        type="tertiary"
      >
        Change password
      </BaseButton>
      <BaseInput
        class="personal-details-card__input"
        @input="$emit('set-form-field', { value: $event, key: 'firstName' })"
        :value="formData.firstName"
        type="text"
        label="first name"
      />
      <BaseInput
        class="personal-details-card__input"
        @input="$emit('set-form-field', { value: $event, key: 'lastName' })"
        :value="formData.lastName"
        type="text"
        label="last name"
      />
      <DateInput
        class="personal-details-card__input-date"
        @input="$emit('set-form-field', { value: $event, key: 'dateOfBirth' })"
        :value="formData.dateOfBirth"
      />
      <!-- there is no endpoint to change user data, so the button does not POST any data -->
      <!-- TODO: PREVENT DOUBLE CLICK -->
      <BaseButton
        class="personal-details-card__button--submit"
        type="tertiary"
        :disabled="buttonDisabled"
        @click="changeButtonText"
      >
        {{ buttonText }}
      </BaseButton>
    </div>
  </form>
</template>

<script>
import BaseInput from "@/components/base/BaseInput.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import { getDate } from "@/helpers";
import DateInput from "@/components/base/DateInput.vue";

export default {
  name: "PersonalDetailCard",
  components: { BaseInput, BaseButton, DateInput },
  data() {
    return {
      emailError: "",
      buttonText: "Save changes",
    };
  },
  props: {
    formData: {
      type: Object,
      required: true,
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
        this.formData.email &&
        this.formData.firstName &&
        this.formData.lastName &&
        this.isOver18
      );
    },
  },
  methods: {
    customFormatter(date) {
      if (!this.formData.dateOfBirth) {
        return "";
      }
      return new Date(date);
    },
    checkEmailError() {
      const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      if (this.formData.email === "" || !emailRegex.test(this.formData.email)) {
        this.emailError = "Please enter a valid email.";
      } else {
        this.emailError = "";
      }
    },
    getDate,
    changeButtonText() {
      return (
        (this.buttonText = "Changes saved!"),
        setTimeout(() => (this.buttonText = "Save changes"), 5000)
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.personal-details-card {
  width: 100%;
  box-shadow: 0px 4px 22px rgba(52, 53, 65, 0.15);
  border-radius: 24px;
  padding: 64px;
  margin-bottom: 64px;

  &__wrapper {
    max-width: 470px;
    min-width: 330px;
  }

  &__input {
    margin-bottom: 1.35em;
  }

  &__button--password,
  &__button--submit {
    color: $btn-default;
    border-color: $btn-default;

    &:active,
    &:hover {
      background: $btn-default;
      color: $text-white;
    }

    &:focus-visible {
      @include outline-focus;
      padding: 0.75em 1.375em;
    }
  }

  &__button--password {
    font-size: 16px;
    line-height: 16px;
    padding: 0.75em 1.375em;
    margin-bottom: 1.35em;
  }

  &__button--submit {
    width: 100%;
    padding: 0.75em 1.375em;

    &[disabled] {
      border-color: #f7a0a1;
      background: transparent;
      color: #f7a0a1;
      cursor: not-allowed;
      :hover,
      :focus {
        background: #f7a0a1;
        color: $text-white;
      }
    }
  }
}
</style>
