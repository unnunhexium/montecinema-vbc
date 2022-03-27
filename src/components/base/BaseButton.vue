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
        { "base-button--tertiary": this.type === "tertiary" },
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
  border-radius: 64px;
  transition: background-color 0.2s, border-color 0.2s;

  &--primary {
    background: $btn-default;
    color: $text-white;
    border: 3px solid transparent;

    &:hover {
      background: $btn-hover;
    }

    &:active {
      outline: none;
      background: darken($btn-default, 20);
    }

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

  &--tertiary {
    @include font-button;
    font-size: 18px;
    line-height: 18px;
    max-height: 57px;
    padding: 0.95em 2em;
    background: transparent;
    color: $btn-dark;
    border: 2px solid $btn-dark;
    cursor: pointer;
    text-decoration: none;
    border-radius: 64px;
    transition: background-color 0.4s, border-color 0.2s;

    &:active,
    &:hover {
      background: $btn-dark;
      color: $text-white;
    }

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
