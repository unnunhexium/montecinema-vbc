<template>
  <label class="password-input">
    Password
    <div class="password-input__wrapper">
      <input
        class="password-input__input"
        :type="inputType"
        placeholder="Please enter your password."
        :value="value"
        @input="$emit('input', $event.target.value)"
        @blur="$emit('blur')"
      />
      <button class="password-input__button" @click="showPassword">
        <img
          v-show="isPasswordHidden"
          src="@/assets/icons/view.svg"
          alt="show password"
        />
        <img
          v-show="!isPasswordHidden"
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
  emits: ["input", "blur"],
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isPasswordHidden: true,
    };
  },
  computed: {
    inputType() {
      return this.isPasswordHidden ? "password" : "text";
    },
  },
  methods: {
    showPassword() {
      this.isPasswordHidden = !this.isPasswordHidden;
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
