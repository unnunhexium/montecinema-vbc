<template>
  <form novalidate @submit.prevent="" class="register-card">
    <BaseInput @input="setInput" class="register-card__email" />
    <PasswordInput class="register-card__password" />
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
.register-card {
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

  &__valid-flag {
    @include font-element--small-thin;
  }

  &__button {
    margin-top: 40px;
  }
}
</style>
