<template>
  <div class="base-checkbox">
    <input
      type="checkbox"
      class="base-checkbox__input"
      :checked="value"
      @change="$emit('input', $event.target.checked)"
    />
    <p class="base-checkbox__description">
      I accept
      <a url="" class="base-checkbox__link">{{ text }}</a>
    </p>
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
  display: flex;
  @include font-element--medium;
  color: $text-dark;
  align-items: center;

  &__input {
    margin-right: 0.75em;
    width: 24px;
    height: 24px;
  }

  &__description {
  }

  &__link {
    text-decoration: underline;
  }
}
</style>
