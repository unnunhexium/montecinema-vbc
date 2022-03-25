<template>
  <button :class="['day-tab', { active }]" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: "DayTab",
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.day-tab {
  @include bordered-pill;
  font-size: 18px;
  line-height: 18px;
  color: $text-dark;
  max-height: 56px;
  padding: 0 39px;
  border: 2px solid $btn-dark;

  &:focus-visible {
    color: $text-dark;
    outline: none;
    border: 2px dotted $btn-pressed;
  }
  &:hover {
    background: darken($btn-dark, 20);
  }
}

.active {
  background: $btn-dark;
  color: $text-white;
}
</style>
