<template>
  <form @submit.prevent="" class="login-card">
    <BaseInput @input="setInput" class="login-card__email" />
    <PasswordInput class="login-card__password" />
    <div class="login-card__buttons-wrapper">
      <a class="login-card__link">Register instead</a>
      <button class="login-card__button">Log in</button>
    </div>
  </form>
</template>

<script>
import BaseInput from "@/components/base/BaseInput.vue";
import PasswordInput from "@/components/PasswordInput.vue";

export default {
  name: "LoginCard",
  components: {
    BaseInput,
    PasswordInput,
  },
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    setInput(event) {
      this.inputValue = event.target.value;
    },
  },
};
</script>

<style lang="scss" scoped>
.login-card {
  max-width: 600px;
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
}
</style>
