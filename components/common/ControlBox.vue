tepmplate
<script setup lang="ts">
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    width: '27%'
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type'
  },
  {
    title: 'Default',
    dataIndex: 'default',
    key: 'default',
    width: '12%'
  },
  {
    title: 'Control',
    dataIndex: 'control',
    key: 'control',
    width: '18%'
  }
];

type SelectArgsType = {
  name: string | number;
  value: string | number;
};

export type ControlDataSourceType = {
  name: string;
  required?: boolean;
  description: string;
  type: string[];
  default?: string | number;
  control?: {
    type: 'Boolean' | 'Input' | 'Select' | 'NumberInput';
    value?: string | number | boolean;
    selectArgs?: SelectArgsType[];
    isError?: boolean;
  };
};

type ControlBoxPropsType = {
  dataSource: ControlDataSourceType[];
};

const props = defineProps<ControlBoxPropsType>();

const checkInvalid = (value: string, record: Record<string, any>): void => {
  record.control.isError = isValidNumber(value);
};
</script>

<template>
  <div class="control-box">
    <a-table
      sticky
      :scroll="{ x: '100%', y: 400 }"
      :scrollToFirstRowOnChange="true"
      :columns="columns"
      :data-source="props.dataSource"
      :pagination="false"
    >
      <template #headerCell="{ column }">
        <template v-if="column.key === 'name'">
          <div class="name-column">
            <span>Name</span>
            <span class="required"><b>*</b> 필수 입력값</span>
          </div>
        </template>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'name'">
          <b>{{ record.name }}</b
          ><b class="required-star">{{ record && record.required === true ? '*' : '' }}</b>
        </template>
        <template v-if="column.key === 'description'">
          {{ record.description }}
        </template>
        <template v-else-if="column.key === 'type'">
          <a-tag v-for="tag in record.type" :key="tag" :color="'geekblue'">
            {{ tag }}
          </a-tag>
        </template>
        <template v-else-if="column.key === 'default'">
          {{ record.default }}
        </template>
        <template v-else-if="column.key === 'control'">
          <a-switch
            v-if="record?.control?.type === 'Boolean'"
            checked-children="true"
            un-checked-children="false"
            v-model:checked="record.control.value"
          />
          <a-select v-else-if="record?.control?.type === 'Select'" style="width: 120px" v-model:value="record.control.value">
            <a-select-option v-for="select in record.control.selectArgs" :value="select?.value">
              {{ select?.name }}
            </a-select-option>
          </a-select>
          <a-input v-else-if="record?.control?.type === 'Input'" v-model:value="record.control.value" />
          <div class="number-input-div" v-else-if="record?.control?.type === 'NumberInput'">
            <a-input v-model:value="record.control.value" @change="(e) => checkInvalid(e.target.value || '', record)" />
            <p v-if="record.control.isError === false">number가 아닙니다</p>
          </div>
        </template>
      </template>
    </a-table>
  </div>
</template>

<style scoped lang="scss">
.control-box {
  display: flex;
  width: 65%;
  border-radius: 10px;
  margin-left: 10px;
  max-height: 500px;
  align-items: flex-start;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.control-box::-webkit-scrollbar {
  display: none;
}

.required-star {
  color: rgba(255, 0, 0, 0.841);
  margin-left: 0.05rem;
}
.required {
  align-self: flex-start;
  font-size: 9px;
  color: rgb(77, 76, 76);
  font-weight: 100;
  margin-top: -3px;
}
.name-column {
  display: flex;
  flex-direction: column;
  margin-top: 9px;
}
.number-input-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    display: flex;
    align-self: flex-end;
    color: rgba(255, 0, 0, 0.841);
    font-size: 9px;
    margin-top: -0.5px;
    height: 5px;
  }
}
</style>
