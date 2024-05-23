<script setup lang="ts">
import { codeToHtml, type BundledLanguage, type SpecialLanguage, type StringLiteralUnion } from 'shiki';
import { COLORS_BUTTON } from '~/assets/colors';
const props = defineProps<{
  lang: StringLiteralUnion<BundledLanguage | SpecialLanguage, string>;
  code: string;
}>();

const html = await codeToHtml(props.code, {
  lang: props.lang,
  themes: { light: 'github-light', dark: 'github-dark' }
});
</script>

<template>
  <div class="component-code-wrap">
    <div v-html="html"></div>
    <div class="copy-button-wrap">
      <CopyButton
        :code="props.code"
        font-size="18px"
        :colors="{ dark: COLORS_BUTTON.SKYBLUE, light: COLORS_BUTTON.NAVY }"
      ></CopyButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.component-code-wrap {
  position: relative;
  font-size: 14px;

  :deep(pre.shiki) {
    background-color: $light-mode-code-bg !important;
    padding: 1rem;
    overflow-x: auto;
    &,
    code {
      margin: initial;
    }
    span {
      margin-bottom: -16px;
    }
  }
  .copy-button-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
  }
}

.dark-mode {
  .component-code-wrap {
    :deep(.shiki) {
      color: var(--shiki-dark) !important;
      background-color: $dark-mode-code-bg !important;
      span {
        color: var(--shiki-dark) !important;
      }
    }
  }
}
</style>
