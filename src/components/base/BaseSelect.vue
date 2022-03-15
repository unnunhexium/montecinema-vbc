<template>
  <div class="base-select">
    <p class="base-select__title">Movie</p>
    <Multiselect
      class="base-select__input"
      :value="selectedOption"
      @input="$emit('input', $event)"
      :options="options"
      :searchable="false"
      :close-on-select="false"
      :show-labels="false"
      :allow-empty="false"
      open-direction="bottom"
    >
      <template slot="caret">
        <img
          src="@/assets/icons/arrows/arrow-down-small.svg"
          class="base-select__input-image"
          alt="arrow"
        />
      </template>
    </Multiselect>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";

export default {
  name: "BaseSelect",
  components: { Multiselect },
  props: {
    selectedOption: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss" scoped>
.base-select {
  &:active {
    background: $bg-white;
    color: $text-dark;
  }
  &__input-wrapper {
    display: flex;
  }

  &__title {
    @include font-element--small-accent;
    padding-bottom: 0.75rem;
  }

  &__input-image {
    right: 1rem;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }

  &__input {
    border-radius: 8px;
    min-width: 300px;
    max-width: 400px;
    padding: 0;
    @include font-paragraph--small;
    background: $bg-light;
    color: $text-dark;
    &:active {
      border-radius: 8px 8px 0 0;
    }
  }

  ::v-deep .multiselect {
    &__input:hover,
    &__single:hover {
      border: none;
    }

    &__option {
      background: $bg-white;
      vertical-align: center;

      &--highlight {
        background: $bg-light;
        color: $text-dark;
        vertical-align: center;
      }
    }

    &__single {
      background: transparent;
      font-size: 18px;
      line-height: 1.5rem;
      padding: 0px;
      margin: 0px;
    }

    &__tags {
      border-radius: 8px;
      height: 56px;
      background: $bg-light;
      border: none;
      font-size: 18px;
      padding: 1rem 1.5rem;
    }

    &__placeholder {
      color: $text-dark;
      font-size: 18px;
      padding: 0;
      margin: 0;
    }
  }
}
</style>
