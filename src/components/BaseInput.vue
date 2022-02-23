<template>
  <div class="base-input">
    <label class="base-input__label">
      Email
      <input
        class="base-input__input"
        type="email"
        id="email"
        name="email"
        placeholder=" e.g. mynameislaura@mail.com"
        @input="$emit('input', $event)"
      />
    </label>
    <p class="base-input__error" v-if="error">Please enter a valid email.</p>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  emits: ["input"],
  props: {
    error: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.base-input {
  &__label,
  &__input {
    display: block;
  }

  &__label {
    font-family: "Roboto Mono";
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-transform: uppercase;
    color: $text-accent;
  }

  &__input {
    width: 100%;
    margin: 1em 0;
    padding: 17px 0 17px 24px;
    border: 1px solid transparent;
    border-radius: 8px;
    outline: 0;
    background: $inp-default;
    transition: background-color 0.2s, border-color 0.2s;
    &:hover {
      background: $inp-hover;
    }
    &:active,
    &:focus {
      border: 1px solid $inp-active--border;
      background: $inp-active;
      caret-color: $inp-active--border;
    }
  }

  &__error {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: $text-accent;
  }

  ::placeholder {
    font-family: "Roboto";
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    color: $text-light;
  }
}
</style>
