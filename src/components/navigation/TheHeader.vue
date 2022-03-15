<template>
  <header class="the-header" id="the-header">
    <a class="the-header__logo" href="/">
      <img src="@/assets/logo.svg" />
    </a>
    <NavBar />
    <div class="the-header__wrapper">
      <BaseButton class="the-header__button" @click="register" type="secondary"
        >Register</BaseButton
      >
      <BaseButton class="the-header__button" @click="login">Login</BaseButton>
    </div>
    <img src="@/assets/navigation-menu.svg" class="the-header__hamburger" />
  </header>
</template>

<script>
import BaseButton from "../base/BaseButton.vue";
import NavBar from "./NavBar.vue";
export default {
  name: "TheHeader",
  components: {
    BaseButton,
    NavBar,
  },
  methods: {
    register() {
      this.$router.push("/register");
    },
    login() {
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
.the-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__logo {
    cursor: pointer;
    @include outline-transparent;

    &:focus-visible {
      @include outline-focus;
    }
    @include sm {
      padding: 30px 0 30px;
    }
  }

  &__wrapper {
    @include sm {
      display: none;
    }
  }

  &__hamburger {
    display: none;
    @include sm {
      display: flex;
    }
  }

  .base-button {
    font-size: 16px;
    line-height: 16px;
    margin: 25px 0;
    padding: 0.75em 1.875em;
  }
}
</style>
