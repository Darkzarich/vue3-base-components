<template>
  <div class="container">
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
        <div class="input-block__input">
          <BaseTextarea
            resizable="false"
            v-model="formData.desc"
            label="Body"
            maxlength="200"
          />
        </div>
      </div>
    </div>
    <div class="result">
      <div class="result__page">
        <div class="result__title">
          {{ formData.title }}
        </div>
        <div class="result__desc">
          <pre>{{ formData.desc }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "App",
  setup() {
    const formData = reactive({
      title: "Request...",
      desc: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.

Separated they live in Bookmarksgrove right at the coast of the Semantics, a large`,
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

.container {
  display: flex;
  margin: 20px auto;
  width: 100%;
  flex-direction: column;

  @media (min-width: 1200px) {
    width: 1000px;
    flex-direction: row;
  }
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
    border-radius: 5px;
    box-shadow: 2px 2px 6px #d5d5d5;
  }

  &__desc {
    font-size: 10px;
    max-height: 130px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 10px;

    pre {
      margin: 0;
      white-space: pre-wrap;
    }
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

.input-block {
  &__input {
    margin-bottom: 20px;
  }
}
</style>
