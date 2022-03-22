<template>
  <div class="login-page">
    <div class="login-page__wrapper">
      <h1 class="login-page__heading">Hi there!</h1>
      <h2 class="login-page__subheading">Care to log in?</h2>
      <LoginCard />
      <div class="login-page__description-wrapper">
        <p class="login-page__info">Did you forget your password?</p>
        <a url="/" class="login-page__link"> Reset it now</a>
      </div>
    </div>
  </div>
</template>

<script>
import LoginCard from "@/components/auth/LoginCard.vue";

export default {
  name: "LoginPage",
  components: {
    LoginCard,
  },
  metaInfo: {
    title: "Log in or sign up",
    titleTemplate: "%s | montecinema",
  },
};
</script>

<style lang="scss" scoped>
.login-page {
  margin: 124px 0;
  &__wrapper {
    max-width: 600px;
    margin: 0 auto;
  }

  &__heading,
  &__subheading {
    @include font-heading--large;
  }

  &__subheading {
    color: $text-light;
    padding-bottom: 0.5em;
  }

  &__description-wrapper {
    display: flex;
    padding-top: 2.5em;
  }

  &__info,
  &__link {
    @include font-paragraph--smaller;
    line-height: 1.75em;
  }

  &__info {
    padding-right: 0.25em;
  }

  &__link {
    color: $text-accent;
    cursor: pointer;
  }
}
</style>
