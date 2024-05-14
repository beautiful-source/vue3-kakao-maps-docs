<script setup lang="ts"></script>

<template>
  <p class="callout">📌 <ContentSlot :use="$slots.default" unwrap="p" /></p>
</template>

<style scoped lang="scss">
p.callout {
  padding: 1rem;
  background-color: $light-mode-code-bg;
  border-radius: 5px;
  border: 2px solid $gray-4;
  overflow-x: auto;
}

.dark-mode {
  p.callout {
    background-color: $dark-mode-code-bg;
    border-color: $dark-mode-border-color;
  }
}
</style>
