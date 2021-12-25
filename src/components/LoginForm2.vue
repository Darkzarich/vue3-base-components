<template>
  <!-- .prevent modifier can be left out vee-validate will handle it for us -->
  <form class="login-form" @submit="onSubmit">
    <h3 class="login-form__title">Login</h3>
    <BaseInput
      class="login-form__field"
      label="Email"
      type="email"
      v-model="email"
      :error="errors.email"
    />
    <BaseInput
      v-model="password"
      class="login-form__field"
      label="Password"
      type="password"
      :error="errors.password"
    />
    <BaseButton class="login-form__field" type="submit"> Submit </BaseButton>
  </form>
</template>

<script>
import { useField, useForm } from "vee-validate";

export default {
  setup() {
    // Full Form validation

    // Schema

    const required = (value) => {
      if (!value) return "This field is required";
      return true;
    };

    const minLength = (value, number) => {
      if (value.length < number) {
        return `Must be at least ${number} characters long`;
      }

      return true;
    };

    const isEmail = (value) => {
      if (value.indexOf("@") === -1) return "Email is invalid";

      return true;
    };

    const validation = {
      email: (value) => {
        const req = required(value);
        if (req !== true) return req;

        const email = isEmail(value);
        if (email !== true) return email;

        return true;
      },
      password: (value) => {
        const req = required(value);
        if (req !== true) return req;

        const min = minLength(value, 8);
        if (min !== true) return min;

        return true;
      },
    };

    // errors will contain all errors in Record<string, string>
    const { handleSubmit, errors } = useForm({
      validationSchema: validation,
    });

    const email = useField("email");
    const password = useField("password");

    // Callback will not be executed if there are errors present
    const submit = handleSubmit((values) => {
      console.log("submit", values);
    });

    return {
      onSubmit: submit,
      email: email.value,
      password: password.value,
      errors,
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
