<script setup lang="ts">
import { VCodeBlock } from "@wdns/vue-code-block";
import { computed, ref } from "vue";

type CodeBoxPropsType = {
  tsCode: string;
  jsCode: string;
};

const props = defineProps<CodeBoxPropsType>();
const colorMode = useColorMode();

const isTypeScript = ref<boolean>(true);
const selectedCode = computed<string>(() =>
  isTypeScript.value ? props.tsCode : props.jsCode
);
const langImage = computed<{ src: string; alt: string }>(() =>
  isTypeScript.value
    ? { src: "/images/tsLogo.png", alt: "타입스크립트입니다." }
    : { src: "/images/jsLogo.png", alt: "자바스크립트입니다." }
);
const showCode = ref<boolean>(true);
const isCodeCopied = ref<boolean>(false);

const onClickCopyCode = async () => {
  if (window) {
    try {
      await navigator.clipboard.writeText(selectedCode.value);
      isCodeCopied.value = true;
    } catch (e: unknown) {
      console.error("unknown error: ", e);
    }
  } else {
    console.error("window 객체 로드되지 않음");
  }
};
</script>

<template>
  <div class="code-box">
    <div class="demo-wrap"><slot name="demo"> </slot></div>

    <div class="separator"></div>

    <div class="block">
      <ul class="list-btn">
        <li>
          <a-tooltip>
            <template #title
              >Switch to
              {{ isTypeScript ? "JavaScript" : "TypeScript" }}</template
            >
            <button
              @click="isTypeScript = !isTypeScript"
              size="large"
              class="btn-lang"
            >
              <NuxtImg v-bind="langImage" />
            </button>
          </a-tooltip>
        </li>

        <li>
          <a-tooltip>
            <template #title>{{
              isCodeCopied ? "Copied!" : "Copy code"
            }}</template>
            <button
              @click="onClickCopyCode"
              @mouseout="isCodeCopied = false"
              size="large"
            >
              <CheckOutlined v-if="isCodeCopied" />
              <CopyOutlined v-else />
            </button>
          </a-tooltip>
        </li>

        <li>
          <a-tooltip>
            <template #title>{{ showCode ? "Hide" : "Show" }} code</template>
            <button @click="showCode = !showCode" size="large">
              <CaretUpOutlined v-if="showCode" />
              <CaretDownOutlined v-else />
            </button>
          </a-tooltip>
        </li>
      </ul>

      <div class="code-wrap">
        <ClientOnly v-if="showCode">
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
  justify-content: space-around;
  max-height: 75vh;
  border: 1px solid $gray-5;
  border-radius: 10px;
  padding: 1rem;
  box-sizing: border-box;
  .demo-wrap {
    overflow: hidden;
    flex: 0 0 55%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .separator {
    flex: 0 0 1px;
    background-color: $gray-4;
  }
  .block {
    flex: 0 0 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
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
      width: 100%;
      overflow-y: auto;
    }
  }

  @media (max-width: 1080px) {
    flex-direction: column;
    max-height: 100%;
    gap: 1rem;
    .demo-wrap {
      flex: 0 0 400px;
      overflow: hidden;
    }
    .block {
      flex: 0 0 100%;
      max-height: 300px;
    }
  }
}
</style>
