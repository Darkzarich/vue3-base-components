<template>
  <form class="login-form" @submit.prevent="onSubmit">
    <h3 class="login-form__title">Login</h3>
    <BaseInput
      class="login-form__field"
      label="Email"
      type="email"
      v-model="email"
      :error="emailError"
    />
    <BaseInput
      v-model="password"
      class="login-form__field"
      label="Password"
      type="password"
      :error="passwordError"
    />
    <BaseButton class="login-form__field" type="submit"> Submit </BaseButton>
  </form>
</template>

<script>
import { useField } from "vee-validate";

export default {
  setup() {
    async function onSubmit() {
      const [res1, res2] = await Promise.all([
        email.validate(),
        password.validate(),
      ]);

      if (res1.errors.length || res2.errors.length) {
        alert("The form is invalid and cannot be submitted.");
      } else {
        alert("Submitted.");
      }
    }

    const email = useField("email", (value) => {
      if (!value) return "This field is required";

      if (value.indexOf("@") === -1) return "Email is invalid";

      return true;
    });

    const password = useField("password", (value) => {
      if (!value) return "This field is required";

      if (value.length < 8) {
        return "Must be at least 8 characters long";
      }

      return true;
    });

    return {
      onSubmit,
      email: email.value,
      emailError: email.errorMessage,
      password: password.value,
      passwordError: password.errorMessage,
    };
  },
};
</script>

<style lang="scss">
.login-form {
  padding: 30px;
  border: 1px solid var(--color-border);

  &__title {
    margin: 0;
    margin-bottom: 20px;
    text-align: center;
    color: var(--color-active);
  }

  &__field {
    margin-bottom: 10px;
  }
}
</style>
