<template>
  <label class="password-input">
    Password
    <div class="password-input__wrapper">
      <input
        class="password-input__input"
        :type="type"
        id="password"
        name="password"
        placeholder="Enter your password"
      />
      <button class="password-input__button" @click="showPassword">
        <img
          v-show="passwordHidden"
          src="@/assets/icons/view.svg"
          alt="show password"
        />
        <img
          v-show="!passwordHidden"
          src="@/assets/icons/view-off.svg"
          alt="hide password"
        />
      </button>
    </div>
  </label>
</template>

<script>
export default {
  name: "PasswordInput",
  components: {},
  data() {
    return {
      type: "password",
    };
  },
  computed: {
    passwordHidden() {
      return this.type === "password";
    },
  },
  methods: {
    showPassword() {
      if (this.type === "password") {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.password-input {
  @include font-element--small-accent;

  &__wrapper {
    display: flex;
    position: relative;
  }

  &__input {
    @include input-element;
    display: block;
  }

  &__button {
    background: transparent;
    border: none;
    outline: none;
    display: block;
    cursor: pointer;
    position: absolute;
    transform: translate(0, -50%);
    z-index: 2;
    right: 8px;
    top: 50%;
  }
}
</style>
