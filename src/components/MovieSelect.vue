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
        <ArrowDown class="movie-select__input-image"></ArrowDown>
      </template>
    </Multiselect>
    <!-- <pre class="language-json"><code>{{ value  }}</code></pre> -->
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import ArrowDown from "@/assets/icons/arrows/arrow-down.svg";

export default {
  components: { Multiselect, ArrowDown },
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
    padding-bottom: 1em;
  }

  &__input-image {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }

  &__input {
    background: transparent;
    padding: 0;
    width: 200px;
    @include font-paragraph--small;
    background: $bg-light;
    color: $text-dark;
    border-radius: 8px;
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
      background: $bg-light;
      border: none;
      font-size: 18px;
      padding: 1rem 2.725rem;
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
