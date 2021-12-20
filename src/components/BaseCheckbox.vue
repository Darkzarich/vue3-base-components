<template>
  <label class="checkbox">
    <input
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', !modelValue)"
      class="checkbox__field"
    />
    <span class="checkbox__mark" />
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
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.checkbox {
  position: relative;
  color: var(--color-border);
  display: flex;
  align-items: center;
  padding: 10px 0;

  &__field {
    appearance: none;
    margin: 0;

    &:checked ~ .checkbox__mark {
      background: rgb(255, 255, 255);

      &:before {
        content: "✓";
        color: var(--color-text);
        font-weight: bold;
      }
    }
  }

  &__mark {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border: 1px solid var(--color-border);
    margin-right: 10px;
  }
}
</style>
