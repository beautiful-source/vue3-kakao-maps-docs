<script setup lang="ts">
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
const iconStyle = computed<CSSProperties>(() => {
  return { color: colorMode.value === 'dark' ? 'white' : 'black' };
});
const codeWrapElement = ref<HTMLDivElement>();
const showMoreButton = ref<boolean>(false);
const isShowMoreButtonClicked = ref<boolean>(false);
const showMoreButtonMessage = computed<string>(() => (isShowMoreButtonClicked.value ? '접기' : '더보기'));
const codeWrapMaxHeight = '700px';
const darkGray = '#1f1f1f';
const lightGray = '#f5f5f5';

/**
 * 임의로 들어온 코드의 높이(`clientHeight`)를 평가해 더보기 버튼을 보일지 말지 결정합니다.
 */
const decideShowMore = () => {
  if (codeWrapElement.value !== undefined && codeWrapElement.value.children.length > 0) {
    const childElement = [...codeWrapElement.value.children][0];
    const childHeight = childElement.clientHeight;
    if (childHeight > codeWrapElement.value.clientHeight) {
      showMoreButton.value = true;
    }
  }
};

const onClickShowMoreButton = () => {
  if (codeWrapElement.value !== undefined) {
    if (isShowMoreButtonClicked.value) {
      codeWrapElement.value.style.maxHeight = codeWrapMaxHeight;
    } else {
      codeWrapElement.value.style.maxHeight = 'initial';
    }
    isShowMoreButtonClicked.value = !isShowMoreButtonClicked.value;
  }
};

onMounted(() => {
  decideShowMore();
});
</script>

<template>
  <div class="code-box">
    <div class="demo-wrap"><slot name="demo"> </slot></div>
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
          <CopyButton :code="selectedCode"></CopyButton>
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

      <div class="code-wrap" v-show="showCode" ref="codeWrapElement">
        <CodeHighlighter lang="vue" :code="selectedCode"></CodeHighlighter>
        <div class="blur-layer" v-if="showMoreButton && !isShowMoreButtonClicked"></div>
        <a-tooltip placement="right" :color="colorMode.value === 'dark' ? darkGray : lightGray" style="opacity: 0.6">
          <template #title>
            <span :style="{ color: colorMode.value === 'dark' ? 'white' : 'black' }">{{ showMoreButtonMessage }}</span>
          </template>
          <button v-if="showMoreButton" @click="onClickShowMoreButton" class="btn-show-more">
            <DownOutlined v-show="!isShowMoreButtonClicked" />
            <UpOutlined v-show="isShowMoreButtonClicked" />
          </button>
        </a-tooltip>
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
    :deep(*:first-child) {
      /* 지도 내부 인포윈도우 등에서 폰트 색상 적용 */
      color: $gray-13;
    }
  }
  .block {
    display: flex;
    flex-direction: column;
    .list-btn {
      all: initial;
      list-style: none;
      display: flex;
      justify-content: center;
      li {
        width: 48px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      button {
        all: initial;
        img {
          width: 20px;
          height: 20px;
          vertical-align: text-top;
        }
      }
    }
    .code-wrap {
      border-radius: 5px;
      border: 2px solid $gray-4;
      max-height: v-bind(codeWrapMaxHeight);
      overflow: hidden;
      position: relative;
      background-color: $light-mode-code-bg;

      .blur-layer {
        width: 100%;
        height: 250px;
        background: linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255));
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: 10;
      }

      .btn-show-more {
        position: absolute;
        bottom: 1rem;
        left: 50%;
        transform: translateX(-50%);
        z-index: 20;
        font-size: 1rem;

        display: flex;
        padding: 12px;
        cursor: pointer;
        border-radius: 100%;
        border: none;
        box-shadow: 2px 2px 30px rgba(51, 51, 51, 0.4);
        background-color: $gray-1;
        opacity: 0.6;
        transition: all 0.2s ease-in;
        &:hover {
          background-color: $gray-3;
        }
      }
    }
  }

  @media (min-width: $media-breakpoint-xlarge) {
    flex-direction: row;
    justify-content: space-evenly;
  }
}

.dark-mode {
  .code-box {
    border-color: $dark-mode-border-color;
    .code-wrap {
      border-color: $dark-mode-border-color;
      background-color: $dark-mode-code-bg;
      .blur-layer {
        background: linear-gradient(rgba(255, 255, 255, 0), #202a39);
      }
      .btn-show-more {
        box-shadow: 2px 2px 20px rgba(108, 108, 108, 0.9);
        background-color: $gray-13;
        color: $gray-1;
        &:hover {
          background-color: $gray-12;
        }
      }
    }
  }
}
</style>
