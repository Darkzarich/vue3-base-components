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
        <div class="input-block__input">
          <BaseSelect
            :options="['Blue', 'Pink', 'Green']"
            v-model="formData.backgroundColor"
            label="Page color"
          />
        </div>
      </div>
    </div>
    <div class="result">
      <div class="result__page" :class="`result__page--${pageColorClass}`">
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
import { reactive, computed } from "vue";

export default {
  name: "App",
  setup() {
    const formData = reactive({
      title: "A Tale...",
      backgroundColor: "Blue",
      desc: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.

Separated they live in Bookmarksgrove right at the coast of the Semantics, a large`,
    });

    const pageColorClass = computed(() => {
      return formData.backgroundColor.toLowerCase();
    });

    return {
      formData,
      pageColorClass,
    };
  },
};
</script>

<style lang="scss">
:root {
  --color-white: #fff;
  --color-border: #8c92ac;
  --color-active: #a8b8ff;
  --color-result-page-1: #ebffff;
  --color-result-page-2: #fff0f5;
  --color-result-page-3: #eaffe4;
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
  align-items: center;

  @media (min-width: 1200px) {
    width: 1000px;
    flex-direction: row;
    align-items: unset;
  }
}

.result {
  width: 100%;
  border: 1px solid var(--color-border);
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1200px) {
    width: 50%;
    flex-direction: row;
    align-items: unset;
    border-left: none;
  }

  &__page {
    width: 140px;
    height: 190px;
    border: 1px solid var(--color-border);
    padding: 10px;
    border-radius: 5px;
    border-radius: 5px;
    box-shadow: 2px 2px 6px #d5d5d5;

    &--blue {
      background: var(--color-result-page-1);
    }
    &--pink {
      background: var(--color-result-page-2);
    }
    &--green {
      background: var(--color-result-page-3);
    }
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
  width: 100%;
  border: 1px solid var(--color-border);
  padding: 20px;

  @media (min-width: 1200px) {
    width: 50%;
    flex-direction: row;
    align-items: unset;
  }
}

.input-block {
  &__input {
    margin-bottom: 20px;
  }
}
</style>
