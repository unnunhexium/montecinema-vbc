<template>
  <div class="base-input">
    <label class="base-input__label">
      Email
      <input
        class="base-input__input"
        type="email"
        id="email"
        name="email"
        placeholder=" Something ending with monterail.com"
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
  margin: 1em 0;

  &__label,
  &__input {
    display: block;
  }

  &__label {
    @include font-element--small-accent;
  }

  &__input {
    @include input-element;
  }

  &__error {
    @include font-paragraph--small;
    color: $text-accent;
  }
}
</style>
