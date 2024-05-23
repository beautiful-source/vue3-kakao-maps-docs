<script setup lang="ts">
import type { CSSProperties } from 'vue';

const props = defineProps<{
  code: string;
  fontSize?: string;
  colors?: {
    dark: string;
    light?: string;
  };
}>();
const emit = defineEmits(['mounted']);

const showCopyButton = ref<boolean>(true);
const colorMode = useColorMode();
const iconStyle = computed<CSSProperties>(() => {
  return {
    color: colorMode.value === 'dark' ? props.colors?.dark ?? 'white' : props.colors?.light ?? 'black',
    fontSize: props.fontSize ?? '16px'
  };
});
const COPY_DELAY = 2000;
const buttonElement = ref<HTMLButtonElement>();

watch(buttonElement, () => {
  emit('mounted', buttonElement.value);
});
const onClickCopyCode = async () => {
  if (!window) {
    console.error('window 객체 로드되지 않음');
    return;
  }

  try {
    await navigator.clipboard.writeText(props.code);
    showCopyButton.value = false;
    setTimeout(() => {
      showCopyButton.value = true;
    }, COPY_DELAY);
  } catch (e: unknown) {
    console.error('unknown error: ', e);
  }
};
const throttledOnClickCopycode = throttle(onClickCopyCode, COPY_DELAY);
</script>

<template>
  <a-tooltip>
    <template #title>{{ showCopyButton ? 'Copy code' : 'Copied!' }}</template>
    <button @click="throttledOnClickCopycode" ref="buttonElement">
      <ClientOnly>
        <CopyOutlined v-show="showCopyButton" :style="iconStyle" />
        <CheckOutlined v-show="!showCopyButton" :style="iconStyle" />
      </ClientOnly>
    </button>
  </a-tooltip>
</template>

<style lang="scss" scoped>
button {
  all: initial;
  width: max-content;
  height: max-content;
}
</style>
