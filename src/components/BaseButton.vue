<template>
  <button
    class="button"
    :class="{ 'button--loading': loading }"
    v-bind="$attrs"
  >
    <slot> Button </slot>
  </button>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.button {
  padding: 10px;
  background: var(--color-white);
  border: 1px solid var(--color-border);
  min-width: 100px;
  border-radius: 5px;

  @keyframes sparkle {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }

  &--loading {
    animation: sparkle 1s ease-in-out infinite;
    animation-direction: alternate;
    pointer-events: none;
    user-select: none;
    background: var(--color-active);
  }

  &:hover {
    background: var(--color-active);
    cursor: pointer;
  }
}
</style>
