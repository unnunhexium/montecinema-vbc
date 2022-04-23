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
    />
    <PasswordInput
      @input="$emit('set-form-field', { value: $event, key: 'password' })"
      :value="formData.password"
      class="register-card__password"
    />
    <p
      class="register-card__valid-flag"
      :class="{ valid: !containsEightChars, invalid: changeColor }"
    >
      At least 8 characters
    </p>
    <p
      class="register-card__valid-flag"
      :class="{ valid: !containsLetter, invalid: changeColor }"
    >
      At least one letter
    </p>
    <p
      class="register-card__valid-flag"
      :class="{ valid: !containsDigit, invalid: changeColor }"
    >
      At least one digit
    </p>
    <div class="register-card__buttons-wrapper">
      <router-link :to="{ name: 'Login' }" class="register-card__link">
        Log in instead
      </router-link>
      <BaseButton
        class="register-card__button"
        @click="$emit('go-to-next-step')"
        :disabled="buttonDisabled"
      >
        Next step
      </BaseButton>
    </div>
  </form>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import BaseInput from "@/components/base/BaseInput.vue";
import PasswordInput from "@/components/base/PasswordInput.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import { Credentials } from "@/api/auth";

export default Vue.extend({
  name: "RegisterCard",
  components: {
    BaseInput,
    PasswordInput,
    BaseButton,
  },
  data() {
    return {
      emailError: "",
      validPassword: false,
    };
  },
  props: {
    formData: {
      type: Object as PropType<Credentials>,
      required: true,
    },
  },
  computed: {
    buttonDisabled(): boolean {
      return !(this.formData.email.length && this.formData.password.length);
    },
    changeColor(): boolean {
      return this.formData.password.length >= 1;
    },
    containsEightChars(): boolean {
      return this.formData.password === "" || this.formData.password.length < 8;
    },
    containsDigit(): boolean {
      return (
        this.formData.password === "" || !/\d/.test(this.formData.password)
      );
    },
    containsLetter(): boolean {
      return (
        this.formData.password === "" ||
        !/[A-Za-z]/.test(this.formData.password)
      );
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
  },
});
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
    color: $text-dark;
  }

  &__button {
    margin-top: 40px;
  }
  .base-button {
    font-size: 18px;
    line-height: 18px;
    padding: 0.85em 3.4em;
  }
}
.invalid {
  color: $text-accent;
}

.valid {
  color: #27ae60;
}
</style>
