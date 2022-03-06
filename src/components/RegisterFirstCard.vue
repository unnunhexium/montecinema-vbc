<template>
  <form novalidate @submit.prevent="" class="register-card">
    <BaseInput
      v-model="formData.email"
      class="register-card__email"
      type="email"
      placeholder="Please enter your email."
      :errorMessage="emailError"
      label="Email"
      @blur="checkEmailError"
    />
    <PasswordInput
      v-model="formData.password"
      class="register-card__password"
      @blur="checkPasswordError"
    />
    <p class="register-card__valid-flag">At least 8 characters</p>
    <p class="register-card__valid-flag">At least one letter</p>
    <p class="register-card__valid-flag">At least one digit</p>
    <div class="register-card__buttons-wrapper">
      <a class="register-card__link">Log in instead</a>
      <button class="register-card__button">Next step</button>
    </div>
  </form>
</template>

<script>
import BaseInput from "@/components/base/BaseInput.vue";
import PasswordInput from "@/components/PasswordInput.vue";

export default {
  name: "RegisterCard",
  components: {
    BaseInput,
    PasswordInput,
  },
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
      emailError: "",
    };
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

  &__password {
  }

  &__buttons-wrapper {
  }

  &__link {
    @include font-button;
    font-size: 18px;
    color: $text-accent;
  }

  &__valid-flag {
    @include font-element--small-thin;
  }

  &__button {
    margin-top: 40px;
  }
}
</style>
