<script setup lang="ts">
import type { ControlDataSourceType } from '@/components/common/ControlBox.vue';
import type { HandlerBoxDataSourceType } from '@/components/common/HandlerBox.vue';

type BasicComponentBoxProps = {
  controlData: ControlDataSourceType[];
  eventsData?: HandlerBoxDataSourceType[];
};

const { controlData, eventsData } = defineProps<BasicComponentBoxProps>();
</script>

<template>
  <div class="control-div">
    <slot></slot>
    <ControlBox v-bind:dataSource="controlData" />
  </div>
  <div v-if="eventsData">
    <p class="emit-event-title">Events</p>
    <HandlerBox :dataSource="eventsData" />
  </div>
</template>

<style scoped lang="scss">
.control-div {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  color: $gray-13;
}

.emit-event-title {
  font-size: 1.4rem;
  font-weight: 600;
}
</style>
