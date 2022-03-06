<template>
  <div class="base-input">
    <label class="base-input__label">
      {{ label }}
      <input
        class="base-input__input"
        :type="type"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input', $event.target.value)"
        @blur="$emit('blur')"
      />
    </label>
    <p class="base-input__error" v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  emits: ["input", "blur"],
  props: {
    label: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    errorMessage: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
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
