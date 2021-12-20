<template>
  <BaseRadio
    v-bind="$attrs"
    v-for="option in options"
    :key="option.value"
    :value="option.value"
    :label="option.label"
    :name="name"
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
  />
</template>

<script>
export default {
  props: {
    options: {
      type: Array, // {value, label}
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>
