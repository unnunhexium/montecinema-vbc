<template>
  <div class="the-header" id="the-header">
    <img src="/assets/logo.svg" class="the-header__logo" />
    <div class="the-header__wrapper">
      <BaseButton href="/" type="secondary">Register</BaseButton>
      <BaseButton href="/">Login</BaseButton>
    </div>
    <img src="/assets/navigation-menu.svg" class="the-header__hamburger" />
  </div>
</template>

<script>
import BaseButton from "./base/BaseButton.vue";
export default {
  name: "TheHeader",
  components: {
    BaseButton,
  },
};
</script>

<style lang="scss" scoped>
.the-header {
  display: flex;
  justify-content: space-between;

  &__logo {
    cursor: pointer;
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
