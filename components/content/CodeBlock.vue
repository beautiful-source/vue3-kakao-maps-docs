<script setup lang="ts">
import { useSlots } from 'vue';

const slots = useSlots();
const code = slots.default !== undefined ? slots.default()[0].props?.code : undefined;
const isCodeCopied = ref<boolean>(false);

const onClickCopyCode = async () => {
  if (window) {
    try {
      await navigator.clipboard.writeText(code);
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
  <div class="code-wrap">
    <slot />
    <a-tooltip>
      <template #title>{{ isCodeCopied ? 'Copied!' : 'Copy code' }}</template>
      <button @click="onClickCopyCode" @mouseout="isCodeCopied = false" size="large">
        <CheckOutlined v-show="isCodeCopied" />
        <CopyOutlined v-show="!isCodeCopied" />
      </button>
    </a-tooltip>
  </div>
</template>

<style scoped lang="scss">
.code-wrap {
  position: relative;
  button {
    all: initial;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 40px;
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
