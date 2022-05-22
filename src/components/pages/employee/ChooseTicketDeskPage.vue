<template>
  <div class="choose-ticket-desk-page">
    <h2 class="choose-ticket-desk-page__title">Choose your ticket desk</h2>
    <div class="choose-ticket-desk-page__wrapper">
      <button
        class="choose-ticket-desk-page__desk"
        v-for="desk in desks"
        :key="desk"
        @click="$router.push(`/employee/confirm-tickets?desk=${desk}`)"
      >
        {{ desk }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChooseTicketDeskPage",
  data() {
    return {
      desks: [1, 2, 3, 4],
    };
  },
};
</script>

<style lang="scss" scoped>
.choose-ticket-desk-page {
  padding: 0 48px;
  margin-top: 64px;

  &__title {
    color: $text-dark;
    font-family: "Eczar";
    font-weight: 600;
    font-size: 48px;
    line-height: 49px;
    margin: 0 0.75em 1.35em 0;
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    gap: 64px;
  }

  &__desk {
    all: unset;
    cursor: pointer;
    background: $btn-medium;
    font-family: "Roboto";
    font-weight: 500;
    font-size: 85px;
    line-height: 85px;
    width: 100%;
    padding: 42px 0;
    text-align: center;
    border: solid 2px transparent;

    &:focus-visible {
      border: solid 2px $btn-default;
      color: $text-accent;
    }
  }
}
</style>
