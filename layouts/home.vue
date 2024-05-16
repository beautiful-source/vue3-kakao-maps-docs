<script setup lang="ts"></script>

<template>
  <div>
    <LayoutHeader />
    <div class="main">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.main {
  padding-top: 10vh;
}
</style>
