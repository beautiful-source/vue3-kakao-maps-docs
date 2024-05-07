<script setup lang="ts">
import { VCodeBlock } from "@wdns/vue-code-block";
import { computed, ref } from "vue";

type CodeBoxPropsType = {
  tsCode: string;
  jsCode: string;
};

const props = defineProps<CodeBoxPropsType>();

const isTypeScript = ref<boolean>();
const selectedCode = computed(() => {
  return isTypeScript.value ? props.tsCode : props.jsCode;
});

const onClickChangeLanguage = () => {
  isTypeScript.value = !isTypeScript.value;
};
</script>

<template>
  <div class="code-box">
    <div class="demo-wrap">
      <ClientOnly> <slot name="demo"> </slot></ClientOnly>
    </div>
    <div>
      <a-button @click="onClickChangeLanguage" type="primary">{{
        isTypeScript ? "TS" : "JS"
      }}</a-button>
      <ClientOnly>
        <VCodeBlock lang="html" highlightjs :code="selectedCode" />
      </ClientOnly>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.code-box {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.demo-wrap {
  width: 100%;
  padding: 1rem 0;
}
</style>
