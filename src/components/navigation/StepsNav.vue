<template>
  <div class="steps-nav">
    <button
      class="steps-nav__button"
      :class="{ active: isActive }"
      @click="$emit('go-to-choose-seats')"
    >
      <p class="steps-nav__button-num" :class="{ active: isActive }">1</p>
      Choose seats
    </button>
    <button class="steps-nav__button" :class="{ active: !isActive }">
      <p class="steps-nav__button-num" :class="{ active: !isActive }">2</p>
      Book tickets
    </button>
  </div>
</template>

<script>
export default {
  name: "StepsNav",
  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.steps-nav {
  background: $bg-accent;
  padding: 1.25em 0 1.25em 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;

  &__button:first-child {
    margin-right: 16px;
  }

  &__button {
    @include bordered-pill;
    font-size: 16px;
    line-height: 16px;
    color: $text-dark;
    padding: 0.375em 1.375em 0.375em 0.375em;
    border: 2px solid $btn-pressed;
    display: flex;
    align-items: center;

    &:hover {
      background: $btn-pressed;
    }

    &:focus-visible {
      outline: none;
      border: 2px dotted $btn-pressed;
      color: $text-dark;
    }
  }

  &__button-num {
    color: $text-white;
    background: $btn-pressed;
    max-width: 24px;
    min-width: 24px;
    max-height: 24px;
    min-height: 24px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 12px;
  }

  &__button-num.active {
    background: $text-dark;
  }
}

.active {
  border: 2px solid $text-dark;
  &:hover {
    background: $text-dark;
  }
}
</style>
