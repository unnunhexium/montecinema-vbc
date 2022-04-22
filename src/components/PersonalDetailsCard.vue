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
        placeholder="Please enter your email."
        :errorMessage="emailError"
        label="email"
      />
      <BaseButton
        class="personal-details-card__button--password"
        type="tertiary"
        >Change password</BaseButton
      >
      <BaseInput
        class="personal-details-card__input"
        @input="$emit('set-form-field', { value: $event, key: 'firstName' })"
        :value="formData.firstName"
        type="text"
        placeholder="e.g. Jessica"
        label="first name"
      />
      <BaseInput
        class="personal-details-card__input"
        @input="$emit('set-form-field', { value: $event, key: 'lastName' })"
        :value="formData.lastName"
        type="text"
        placeholder="e.g. Walton"
        label="last name"
      />
      <DateInput
        v-model="dateOfBirth"
        class="personal-details-card__input-date"
      />
      <BaseButton
        class="personal-details-card__button--submit"
        type="tertiary"
        :disabled="!buttonDisabled"
      >
        Save changes
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
      formData: {
        email: "",
        firstName: "",
        lastName: "",
      },
      emailError: "",
      dateOfBirth: "",
    };
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
  },
  computed: {
    buttonDisabled() {
      return !(
        this.formData.email &&
        this.formData.firstName &&
        this.formData.lastName &&
        this.dateOfBirth
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
    padding: 1em 0;

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
