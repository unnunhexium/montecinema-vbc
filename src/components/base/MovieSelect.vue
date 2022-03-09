<template>
  <div class="movie-select">
    <p class="movie-select__title">Movie</p>
    <Multiselect
      v-model="value"
      :options="options"
      :searchable="false"
      :close-on-select="false"
      :show-labels="false"
      :allow-empty="false"
      placeholder=""
      class="movie-select__input"
    >
      <template slot="caret">
        <img
          src="@/assets/icons/arrows/arrow-down-small.svg"
          class="movie-select__input-image"
          alt="arrow"
        />
      </template>
    </Multiselect>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";

export default {
  components: { Multiselect },
  data() {
    return {
      value: "",
      options: [
        "All movies",
        "options",
        "selected",
        "mulitple",
        "label",
        "searchable",
        "clearOnSelect",
        "hideSelected",
        "maxHeight",
        "allowEmpty",
        "showLabels",
        "onChange",
        "touched",
      ],
    };
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss" scoped>
.movie-select {
  &__input-wrapper {
    display: flex;
  }

  &__title {
    @include font-heading--the-smallest;
    color: $text-accent-b;
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
    width: 100%;
    padding: 0;
    @include font-paragraph--small;
    background: $bg-light;
    color: $text-dark;
  }
  ::v-deep .multiselect {
    &__option {
      background: $bg-light;
      vertical-align: center;
    }
    &__single {
      background: transparent;
      font-size: 18px;
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
