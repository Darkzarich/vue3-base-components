<template>
  <div class="components-list">
    <div class="input-block">
      <div class="input-block__input">
        <BaseInput
          v-model="formData.title"
          label="Title"
          type="text"
          maxlength="20"
        />
      </div>
    </div>
  </div>
  <div class="result">
    <div class="result__page">
      <div class="result__title">
        {{ formData.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import BaseInput from "@/components/BaseInput.vue";

export default {
  name: "App",
  components: {
    BaseInput,
  },
  setup() {
    const formData = reactive({
      title: "",
    });

    return {
      formData,
    };
  },
};
</script>

<style lang="scss">
:root {
  --color-white: #fff;
  --color-border: #8c92ac;
  --color-active: #a8b8ff;
  --color-result-page: #f2ffff;
  --color-text: #2c3e50;
}

body {
  margin: 20px;
  box-sizing: border-box;
}

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-text);
  margin-top: 60px;
  display: flex;
}

.result {
  width: 50%;
  border: 1px solid var(--color-border);
  border-left: none;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  &__page {
    width: 140px;
    height: 190px;
    border: 1px solid var(--color-border);
    background: var(--color-result-page);
    padding: 10px;
    border-radius: 5px;
  }

  &__title {
    font-size: 12px;
    text-align: center;
  }
}

.components-list {
  width: 50%;
  border: 1px solid var(--color-border);
  padding: 20px;
}
</style>
