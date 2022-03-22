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
  metaInfo: {
    title: "Screenings",
    titleTemplate: "%s | montecinema",
  },
};
</script>

<style lang="scss" scoped></style>
