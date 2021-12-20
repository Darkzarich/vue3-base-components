<template>
  <label class="radio">
    <input
      type="radio"
      :checked="modelValue === value"
      @change="$emit('update:modelValue', value)"
      class="radio__field"
      v-bind="$attrs"
    />
    <span class="radio__mark" />
    {{ label }}
  </label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    value: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>

<style lang="scss">
.radio {
  position: relative;
  color: var(--color-border);
  display: flex;
  align-items: center;
  padding: 10px 0;

  &__field {
    appearance: none;
    margin: 0;

    &:checked ~ .radio__mark:before {
      background: var(--color-text);
      content: "";
      width: 50%;
      height: 50%;
      border-radius: 50%;
    }
  }

  &__mark {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border: 1px solid var(--color-border);
    border-radius: 50%;
    margin-right: 10px;
  }
}
</style>
