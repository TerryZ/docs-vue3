# CityPicker

城市选择器模式

## 组件引用

在项目中引入组件

```js
import { RegionCityPicker } from 'v-region'
```

## 实例

<script setup>
import { RegionCityPicker } from 'v-region'

import { values } from '@/script/region/city-picker'
import { useUIDataChange, valuesFuzhou } from '@/script/region/data'

import RegionDataResult from './RegionDataResult.vue'

const {
  changedValues,
  changedModel,
  change
} = useUIDataChange()

changedValues.value = ['110000', '130200', '140100']

const reset = () => {
  changedValues.value = []
}
</script>

快速应用

```vue
<template>
  <RegionCityPicker
    v-model="selected"
    @change="change"
  />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { RegionCityPicker } from 'v-region'
import type { RegionItem } from 'v-region'

const selected = ref<string[]>(['110000', '130200', '140100'])
function change (data: RegionItem[]): void {
  console.log(data)
}
</script>
```

<RegionCityPicker
  v-model="changedValues"
  @change="change"
/>

响应数据

<RegionDataResult
  :values="changedValues"
  :model="changedModel"
/>

### 清空/重置

传递一个空数组即可清空选择

```js
selected.value = []
```

<div class="mt-3">
  <button
    type="button"
    class="btn btn-dark"
    @click="reset"
  >清除/重置</button>
</div>

### 折叠项目

在默认情况下，选择超过 2 个城市项目，将会被统一收纳显示，并显示折叠收纳数量

设置 `overflow` props 为 `true` 后，选择项目将被完整显示在触发对象中，不再进行折叠

```vue-html
<RegionCityPicker
  v-model="selected"
  :overflow="true"
/>
```

<RegionCityPicker
  v-model="changedValues"
  overflow
/>

## Props

```ts
interface CityPickerProps {
  /**
   * 语言
   * @default `cn`
   */
  language?: string
  /**
   * 禁用组件
   * @default false
   */
  disabled?: boolean
  /** 为触发对象添加自定义样式类 */
  customTriggerClass?: string
  /** 为下拉容器添加自定义样式类 */
  customContainerClass?: string
  /** 输入区域编码列表 */
  modelValue?: string[]
  /**
   * 按钮中显示选中城市模式
   * true: 显示所有选中城市名称
   * false: 选中的城市多于两个时，仅显示前两个城市名称，其他城市会被收起
   *
   * @default false
   */
  overflow?: boolean
}
```
