<template>
  <div class="input">
    <label v-if="label" :for="`input${uuid}`" class="input__label">
      {{ label }}
    </label>
    <input
      class="input__field"
      :id="`input${uuid}`"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
      :aria-describedby="error ? `input-error${uuid}` : null"
      :aria-invalid="error ? true : null"
    />
    <p
      class="input__error"
      v-if="error"
      :id="`input-error${uuid}`"
      aria-live="assertive"
    >
      {{ error }}
    </p>
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
    error: {
      type: String,
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
.input {
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
