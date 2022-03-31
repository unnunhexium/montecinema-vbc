<template>
  <div class="base-checkbox">
    <label class="base-checkbox__description">
      <input
        type="checkbox"
        class="base-checkbox__input"
        :checked="value"
        @change="$emit('input', $event.target.checked)"
      />
      I accept
      <a url="" class="base-checkbox__link">{{ text }}</a>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.base-checkbox {
  @include font-element--medium;
  color: $text-dark;

  &__input {
    margin-right: 0.75em;
    width: 24px;
    height: 24px;
  }

  &__description {
    display: flex;
    align-items: center;
  }

  &__link {
    text-decoration: underline;
    margin-left: 0.25em;
    cursor: pointer;
  }
}
</style>
