<script setup lang="ts">
import { VCodeBlock } from '@wdns/vue-code-block';
import type { CSSProperties } from 'vue';
import { computed, ref } from 'vue';

type CodeBoxPropsType = {
  tsCode: string;
  jsCode: string;
};

const props = defineProps<CodeBoxPropsType>();
const colorMode = useColorMode();

const isTypeScript = ref<boolean>(true);
const selectedCode = computed<string>(() => (isTypeScript.value ? props.tsCode : props.jsCode));
const langImage = computed<{ src: string; alt: string }>(() =>
  isTypeScript.value
    ? { src: '/images/tsLogo.png', alt: '타입스크립트입니다.' }
    : { src: '/images/jsLogo.png', alt: '자바스크립트입니다.' }
);
const showCode = ref<boolean>(true);
const isCodeCopied = ref<boolean>(false);
const iconStyle = computed<CSSProperties>(() => {
  return { color: colorMode.value === 'dark' ? 'white' : 'black' };
});

const onClickCopyCode = async () => {
  if (window) {
    try {
      await navigator.clipboard.writeText(selectedCode.value);
      isCodeCopied.value = true;
    } catch (e: unknown) {
      console.error('unknown error: ', e);
    }
  } else {
    console.error('window 객체 로드되지 않음');
  }
};
</script>

<template>
  <div class="code-box">
    <div class="demo-wrap"><slot name="demo"> </slot></div>

    <!-- <div class="separator"></div> -->

    <div class="block">
      <ul class="list-btn">
        <li>
          <a-tooltip>
            <template #title>Switch to {{ isTypeScript ? 'JavaScript' : 'TypeScript' }}</template>
            <button @click="isTypeScript = !isTypeScript" size="large" class="btn-lang">
              <NuxtImg v-bind="langImage" />
            </button>
          </a-tooltip>
        </li>

        <li>
          <a-tooltip>
            <template #title>{{ isCodeCopied ? 'Copied!' : 'Copy code' }}</template>
            <button @click="onClickCopyCode" @mouseout="isCodeCopied = false" size="large">
              <ClientOnly>
                <CheckOutlined v-show="isCodeCopied" :style="iconStyle" />
                <CopyOutlined v-show="!isCodeCopied" :style="iconStyle" />
              </ClientOnly>
            </button>
          </a-tooltip>
        </li>

        <li>
          <a-tooltip>
            <template #title>{{ showCode ? 'Hide' : 'Show' }} code</template>
            <button @click="showCode = !showCode" size="large">
              <ClientOnly>
                <CaretUpOutlined v-show="showCode" :style="iconStyle" />
                <CaretDownOutlined v-show="!showCode" :style="iconStyle" />
              </ClientOnly>
            </button>
          </a-tooltip>
        </li>
      </ul>

      <div class="code-wrap" v-show="showCode">
        <ClientOnly>
          <VCodeBlock
            lang="html"
            highlightjs
            :code="selectedCode"
            :theme="colorMode.value === 'dark' ? 'github-dark' : 'github'"
          />
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.code-box {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid $light-mode-border-color;
  border-radius: 10px;
  padding: 1rem;
  box-sizing: border-box;
  .demo-wrap {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .block {
    display: flex;
    flex-direction: column;
    .list-btn {
      all: initial;
      list-style: none;
      display: flex;
      justify-content: center;
      button {
        all: initial;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 48px;
        height: 40px;
        img {
          width: 20px;
          height: 20px;
          vertical-align: text-top;
        }
      }
    }
    .code-wrap {
      :deep(pre),
      :deep(code) {
        background-color: $light-mode-code-bg;
        font-size: 14px;
      }
      :deep(pre) {
        padding: 1rem;
        border-radius: 5px;
        border: 2px solid $gray-4;
        overflow-x: auto;

        :deep(code) {
          padding: initial;
          margin: initial;
          display: inline-block;
          height: max-content;
          border: initial;
        }
      }
    }
  }

  @media (min-width: 1800px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
}

.dark-mode {
  .code-box {
    border-color: $dark-mode-border-color;
    .separator {
      background-color: $dark-mode-border-color;
    }
    .code-wrap {
      :deep(pre),
      :deep(code) {
        background-color: $dark-mode-code-bg;
      }
      :deep(pre) {
        border-color: $dark-mode-border-color;
      }
    }
  }
}
</style>
