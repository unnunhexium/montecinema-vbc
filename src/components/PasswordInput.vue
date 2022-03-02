<template>
  <label class="password-input">
    Password
    <input
      class="password-input__input"
      type="password"
      id="password"
      name="password"
      placeholder="Enter your password"
    />
    <button class="buttontest"><img src="@/assets/icons/view.svg" /></button>
    <button>
      <img src="@/assets/icons/view.svg" alt="hide password" />
    </button>
  </label>
</template>

<script>
export default {
  name: "PasswordInput",
  components: {},
};
</script>

<style lang="scss" scoped>
.buttontest {
  height: 50px;
  width: 50px;
}
.password-input {
  @include font-element--small-accent;

  &__input {
    @include input-element;
    display: block;
  }
}
</style>
