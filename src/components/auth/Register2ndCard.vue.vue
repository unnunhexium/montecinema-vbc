<template>
  <form @submit.prevent="" class="register-2nd-card">
    <BaseInput
      class="register-2nd-card__name"
      @input="$emit('set-form-field', { value: $event, key: 'name' })"
      type="text"
      placeholder="e.g. Jessica"
      :errorMessage="inputError"
      label="first name"
      @blur="checkInputError"
    /><BaseInput
      class="register-2nd-card__last-name"
      @input="$emit('set-form-field', { value: $event, key: 'lastName' })"
      type="text"
      placeholder="e.g. Walton"
      :errorMessage="inputError"
      label="last name"
      @blur="checkInputError"
    /><BaseInput
      class="register-2nd-card__date-of-birth"
      @input="$emit('set-form-field', { value: $event, key: 'dateOfBirth' })"
      type="date"
      placeholder="DD/MM/YYYY"
      :errorMessage="inputDateOfBirthError"
      label="date of birth"
      @blur="checkDateOfBirthError"
    />
    <p class="register-2nd-card__valid-flag">
      You should be minium 18 years old
    </p>
    <div class="register-2nd-card__checkbox-wrapper">
      <input type="checkbox" class="register-2nd-card__checkbox" />
      <p class="register-2nd-card__checkbox-description">
        I accept
        <a url="/" class="register-2nd-card__checkbox-link">Privacy Policy</a>
      </p>
    </div>
    <div class="register-2nd-card__buttons-wrapper">
      <router-link :to="{ name: 'Login' }" class="register-2nd-card__link">
        Log in instead
      </router-link>
      <BaseButton class="register-2nd-card__button">Register</BaseButton>
    </div>
  </form>
</template>

<script>
import BaseInput from "@/components/base/BaseInput.vue";
import BaseButton from "@/components/base/BaseButton.vue";

export default {
  name: "Register2ndCard",
  components: {
    BaseButton,
    BaseInput,
  },
  data() {
    return {
      inputError: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.register-2nd-card {
  box-shadow: 0px 4px 22px rgba(52, 53, 65, 0.15);
  border-radius: 24px;
  padding: 64px;

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

  &__button {
    margin-top: 40px;
  }
  .base-button {
    font-size: 18px;
    line-height: 18px;
    padding: 0.85em 3.4em;
    border-radius: 64px;
  }
}
</style>
