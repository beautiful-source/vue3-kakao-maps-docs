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
  margin-top: 10vh;
}
</style>
