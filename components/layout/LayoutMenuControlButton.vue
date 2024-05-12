<script setup lang="ts">
const emits = defineEmits(['onClicked']);
</script>

<template>
  <div>
    <button @click="$emit('onClicked')">얍</button>
  </div>
</template>

<style scoped lang="scss"></style>
