<template>
  <div class="textarea">
    <label v-if="label" :for="`input${uuid}`" class="textarea__label">
      {{ label }}
    </label>
    <textarea
      :id="`input${uuid}`"
      class="textarea__field"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
import getID from "@/UniqueId.js";

export default {
  emits: ["update:modelValue"],
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
  setup() {
    const uuid = getID();

    return {
      uuid,
    };
  },
};
</script>

<style lang="scss">
.textarea {
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
    resize: none;
    min-width: 300px;
    min-height: 120px;

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
