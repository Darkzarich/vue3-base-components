<template>
  <div class="select">
    <label class="select__label" v-if="label">{{ label }}</label>
    <select
      class="select__field"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    >
      <option
        v-for="option in options"
        :value="option"
        :key="option"
        :selected="option === modelValue"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  emits: ["update"],
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    options: {
      type: [Array],
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
.select {
  position: relative;

  &__label {
    position: absolute;
    font-size: 13px;
    background: var(--color-white);
    top: -7px;
    left: 10px;
    color: var(--color-border);
    padding: 0 3px;
  }

  &__field {
    padding: 12px;
    border-radius: 3px;
    border: 1px solid var(--color-active);
    color: var(--color-text);

    &:focus,
    &:hover {
      border: 1px solid var(--color-active);
      outline: none;
    }

    &:focus {
      border-bottom: 2px solid var(--color-active);
      padding-bottom: 11px;
    }
  }
}
</style>
