<template>
  <form novalidate @submit.prevent="" class="register-card">
    <BaseInput
      @input="$emit('set-form-field', { value: $event, key: 'email' })"
      :value="formData.email"
      class="register-card__email"
      type="email"
      placeholder="Please enter your email."
      :errorMessage="emailError"
      label="email"
      @blur="checkEmailError"
    />
    <PasswordInput
      @input="$emit('set-form-field', { value: $event, key: 'password' })"
      :value="formData.password"
      class="register-card__password"
      @blur="checkPasswordError"
    />
    <p class="register-card__valid-flag">At least 8 characters</p>
    <p class="register-card__valid-flag">At least one letter</p>
    <p class="register-card__valid-flag">At least one digit</p>
    <div class="register-card__buttons-wrapper">
      <router-link :to="{ name: 'Login' }" class="register-card__link">
        Log in instead
      </router-link>
      <BaseButton
        @click="$emit('go-to-next-step')"
        class="register-card__button"
        :disabled="buttonDisabled"
        >Next step</BaseButton
      >
    </div>
  </form>
</template>

<script>
import BaseInput from "@/components/base/BaseInput.vue";
import PasswordInput from "@/components/base/PasswordInput.vue";
import BaseButton from "@/components/base/BaseButton.vue";

export default {
  name: "RegisterCard",
  components: {
    BaseInput,
    PasswordInput,
    BaseButton,
  },
  data() {
    return {
      emailError: "",
    };
  },
  props: {
    formData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    buttonDisabled() {
      return !(this.formData.email.length && this.formData.password.length);
    },
  },
  methods: {
    checkEmailError() {
      const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      if (this.formData.email === "" || !emailRegex.test(this.formData.email)) {
        this.emailError = "Please enter a valid email.";
      } else {
        this.emailError = "";
      }
    },
    checkPasswordError() {},
  },
};
</script>

<style lang="scss" scoped>
.register-card {
  box-shadow: 0px 4px 22px rgba(52, 53, 65, 0.15);
  border-radius: 24px;
  padding: 64px;

  &__email {
    margin-bottom: 1.5em;
  }

  &__password {
    margin-bottom: 0.5em;
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
  }

  &__valid-flag {
    @include font-element--small-thin;
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
