<template>
  <a v-if="href" :href="href" :class="buttonClasses"><slot /></a>
  <button v-else :class="buttonClasses" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  emits: ["click"],
  props: {
    href: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "primary",
    },
  },
  computed: {
    buttonClasses() {
      return [
        "base-button",
        { "base-button--primary": this.type === "primary" },
        { "base-button--secondary": this.type === "secondary" },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.base-button {
  @include font-button;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  border: 4px solid transparent;
  border-radius: 24px;
  transition: background-color 0.2s, border-color 0.2s;

  &--primary {
    background: $btn-default;
    color: $text-white;
    &:active,
    &:focus,
    &:hover {
      background: $btn-hover;
    }
    &:active,
    &:focus {
      border: 4px solid $btn-pressed;
    }
  }

  &--secondary {
    color: $text-accent;
    background: transparent;
  }
}
</style>
