<template>
  <header class="the-header" id="the-header">
    <router-link class="the-header__logo" to="/">
      <img src="@/assets/logo.svg" />
    </router-link>
    <NavBar v-if="!hideNavBar" />
    <div class="the-header__wrapper">
      <template v-if="!isLoggedIn">
        <BaseButton
          class="the-header__button"
          routeName="Register"
          type="secondary"
        >
          Register
        </BaseButton>
        <BaseButton class="the-header__button" routeName="Login">
          Login
        </BaseButton>
      </template>
      <template v-else>
        <BaseButton
          class="the-header__button--lighter"
          :class="[
            'the-header__button',
            { 'the-header__button--lighter': !hideNavBar },
            { 'the-header__button--bordered': hideNavBar },
          ]"
          routeName="Account"
          type="primary"
        >
          My account
        </BaseButton>
        <BaseButton class="the-header__button" @click="logoutUser">
          Logout
        </BaseButton>
      </template>
    </div>
    <img src="@/assets/navigation-menu.svg" class="the-header__hamburger" />
  </header>
</template>

<script>
import BaseButton from "../base/BaseButton.vue";
import NavBar from "./NavBar.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TheHeader",
  components: {
    BaseButton,
    NavBar,
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
    // employeeButton() {
    //   return this.$route.path.startsWith("/employee");
    // },
    hideNavBar() {
      return this.$route.path.startsWith("/employee");
    },
  },
  methods: {
    ...mapActions(["logout"]),
    logoutUser() {
      this.$route.name === "Home" ? "" : this.$router.push("/");
      this.logout();
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

  &__button {
    &--lighter {
      background: $btn-medium;
      color: $text-accent;
    }
    &--bordered {
      background: transparent;
      border: solid 2px $btn-default;
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
    margin: 35px 10px 25px 0;
    padding: 0.75em 1.875em;
  }
}
</style>
