<template>
  <div class="base-input">
    <label class="base-input__label">
      {{ label }}
      <input
        class="base-input__input"
        :value="value"
        @input="$emit('input', $event.target.value)"
        @blur="$emit('blur')"
        :type="type"
        :placeholder="placeholder"
      />
      <template v-if="type === 'search'">
        <img
          src="@/assets/icons/search.svg"
          class="base-input__search-icon"
          v-if="value.length == 0"
        />
        <img
          src="@/assets/icons/close.svg"
          class="base-input__close-icon"
          v-if="value.length > 0"
        />
      </template>
    </label>
    <p class="base-input__error" v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
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
  width: 100%;

  &__label,
  &__input {
    display: block;
  }

  &__label {
    @include font-element--small-accent;
  }

  &__input {
    @include input-element;
    position: relative;
    margin-bottom: 0.5em;
  }
  &::-webkit-search-cancel-button {
    right: 1rem;
    bottom: 0.2rem;
    position: relative;
    transform: scale(175%);
    z-index: 2;
    opacity: 0;
  }

  &:focus {
    border: 1px solid $inp-active--border;
  }

  &__search-icon,
  &__close-icon {
    position: absolute;
    top: 30%;
    right: 0.5rem;
    transform: translate(0, 50%);
  }

  &__error {
    @include font-paragraph--smaller;
    color: $text-accent;
  }
}
</style>
