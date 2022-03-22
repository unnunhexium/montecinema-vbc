<template>
  <div class="register-page">
    <div class="register-page__wrapper">
      <h1 class="register-page__heading">Ahoy you!</h1>
      <h2 class="register-page__subheading">Care to register?</h2>
      <RegisterCard
        v-if="!secondStepActive"
        :formData="formData"
        @set-form-field="setFormField"
        @go-to-next-step="secondStepActive = true"
      />
      <Register2ndCard
        v-else
        :formData="formData"
        @set-form-field="setFormField"
        @register-user="registerUser"
      />
    </div>
  </div>
</template>

<script>
import RegisterCard from "@/components/auth/RegisterCard.vue";
import Register2ndCard from "@/components/auth/Register2ndCard.vue";

export default {
  name: "RegisterFirstPage",
  components: {
    RegisterCard,
    Register2ndCard,
  },
  data() {
    return {
      formData: {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        checkbox: false,
      },
      secondStepActive: false,
    };
  },
  methods: {
    setFormField({ value, key }) {
      this.formData[key] = value;
    },
    async registerUser() {
      try {
        await this.$store.dispatch("register", this.formData);
        this.$router.push("/choose-seats");
      } catch (error) {
        alert(error);
        console.error(error);
      }
    },
  },
  metaInfo: {
    title: "Sign up",
  },
};
</script>

<style lang="scss" scoped>
.register-page {
  padding: 124px 48px;
  &__wrapper {
    max-width: 624px;
    margin: 0 auto;
  }

  &__heading,
  &__subheading {
    @include font-heading--large;
  }

  &__subheading {
    color: $text-light;
    padding-bottom: 0.5em;
  }

  &__description-wrapper {
    display: flex;
    padding-top: 2.5em;
  }

  &__info,
  &__link {
    @include font-paragraph--smaller;
    line-height: 1.75em;
  }

  &__info {
    padding-right: 0.25em;
  }

  &__link {
    color: $text-accent;
  }
}
</style>
