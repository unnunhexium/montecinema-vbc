<template>
  <form class="login-card" @submit.prevent="onSubmit" novalidate>
    <BaseInput
      v-model="formData.email"
      class="login-card__email"
      type="email"
      placeholder="Please enter your email."
      label="email"
    />
    <PasswordInput v-model="formData.password" class="login-card__password" />
    <p class="login-card__error-message" v-if="error">
      Incorrect email or password.
    </p>
    <div class="login-card__buttons-wrapper">
      <router-link :to="{ name: 'Register' }" class="login-card__link">
        Register instead
      </router-link>
      <BaseButton class="login-card__button" :disabled="buttonDisabled">
        Log in
      </BaseButton>
    </div>
  </form>
</template>

<script>
import BaseInput from "@/components/base/BaseInput.vue";
import PasswordInput from "@/components/base/PasswordInput.vue";
import BaseButton from "@/components/base/BaseButton.vue";

export default {
  name: "LoginCard",
  components: {
    BaseInput,
    PasswordInput,
    BaseButton,
  },
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
      loading: false,
      error: false,
    };
  },
  methods: {
    setInput(event) {
      this.inputValue = event.target.value;
    },
    async onSubmit() {
      this.error = false;
      this.loading = true;
      try {
        await this.$store.dispatch("user/login", this.formData);
        this.$router.push("/screenings");
      } catch (error) {
        this.error = true;
      } finally {
        this.loading = false;
      }
    },
  },
  computed: {
    buttonDisabled() {
      return !(this.formData.email && this.formData.password) || this.loading;
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

  &__email {
    margin-bottom: 1.7em;
  }

  &__error-message {
    @include font-element--small-thin;
    color: $text-accent;
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
    outline: none;
    border: 2px dotted transparent;
    border-radius: 44px;
    padding: 13px 9px;

    &:focus-visible {
      outline: none;
      border: 2px dotted $btn-pressed;
      border-radius: 44px;
      padding: 13px 9px;
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
