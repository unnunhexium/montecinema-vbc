<template>
  <header class="the-header" id="the-header">
    <a class="the-header__logo" href="/">
      <img src="@/assets/logo.svg" />
    </a>
    <NavBar />
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
      <BaseButton class="the-header__button" v-else @click="logoutUser">
        Logout
      </BaseButton>
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
  },
  methods: {
    ...mapActions(["logout"]),
    logoutUser() {
      this.$router.push("/");
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
