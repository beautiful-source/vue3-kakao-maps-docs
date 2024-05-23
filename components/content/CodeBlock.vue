<script setup lang="ts">
import { useSlots } from 'vue';
import { COLORS_BUTTON } from '~/assets/colors';

const slots = useSlots();
const code = computed<string>(() => {
  const receivedCodeBySlot = slots.default !== undefined ? slots.default()[0].props?.code : '';
  return receivedCodeBySlot;
});
</script>

<template>
  <div class="code-wrap">
    <slot />
    <div class="copy-button-wrap">
      <CopyButton :code="code" :colors="{ dark: COLORS_BUTTON.SKYBLUE, light: COLORS_BUTTON.NAVY }" font-size="18px"></CopyButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.code-wrap {
  position: relative;
  .copy-button-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
}
</style>
