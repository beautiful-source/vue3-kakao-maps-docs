<script setup lang="ts">
type LayoutMenuControlButtonProps = {
  isClosed: boolean;
};
const props = defineProps<LayoutMenuControlButtonProps>();
const emits = defineEmits(['onClicked']);
</script>

<template>
  <a-tooltip placement="right" color="blue">
    <template #title>
      <span>{{ props.isClosed ? '메뉴 열기' : '메뉴 닫기' }}</span>
    </template>
    <div class="control-button" :class="{ closed: props.isClosed }" @click="$emit('onClicked')">
      <div class="arrow top"></div>
      <div class="arrow bottom"></div>
    </div>
  </a-tooltip>
</template>

<style scoped lang="scss">
.control-button {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  cursor: pointer;
  .arrow {
    width: 0.25rem;
    height: 0.75rem;
    background-color: $gray-6;
    transition: all 0.2s ease-in;
    border-radius: 9999px;
  }
  .top {
    transform: translateY(0.15rem) rotate(0);
  }
  .bottom {
    transform: translateY(-0.15rem) rotate(0);
  }
  &:hover {
    .arrow {
      background-color: $primary;
    }
    .top {
      transform: translateY(0.15rem) rotate(15deg);
    }
    .bottom {
      transform: translateY(-0.15rem) rotate(-15deg);
    }
  }
}
.closed {
  &:hover {
    .top {
      transform: translateY(0.15rem) rotate(-15deg);
    }
    .bottom {
      transform: translateY(-0.15rem) rotate(15deg);
    }
  }
}
</style>
