<template>
  <div class="screenings-page">
    <ScreeningsSection />
  </div>
</template>

<script>
import ScreeningsSection from "@/components/ScreeningsSection.vue";

export default {
  components: {
    ScreeningsSection,
  },
};
</script>

<style lang="scss" scoped>
.screenings-page {
  max-width: $layout-width;
}
</style>
