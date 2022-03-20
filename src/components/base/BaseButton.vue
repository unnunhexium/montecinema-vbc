<template>
  <a v-if="href" :href="href" :class="buttonClasses">
    <slot />
  </a>
  <router-link
    v-else-if="routeName"
    :to="{ name: routeName }"
    :class="buttonClasses"
  >
    <slot />
  </router-link>
  <button
    v-else
    :class="buttonClasses"
    @click="$emit('click')"
    :disabled="disabled"
    type="button"
  >
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
    routeName: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "primary",
    },
    disabled: {
      type: Boolean,
      default: false,
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
    border: 3px solid transparent;

    &:hover {
      background: $btn-hover;
    }

    &:active,
    &:focus-visible {
      outline: none;
      border: 3px solid $btn-pressed;
      background: darken($btn-default, 20);
    }
  }

  &--secondary {
    color: $text-accent;
    background: transparent;
    @include outline-transparent;

    &:focus-visible {
      @include outline-focus;
    }
  }

  &[disabled] {
    background: $text-lighter;
    cursor: not-allowed;
    &:hover {
      border-color: $text-lighter;
    }
  }
}
</style>
