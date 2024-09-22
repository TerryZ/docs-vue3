# Group

使用分组切换显示行政区域的选择模式

## 组件引用

在项目中引入组件

```js
import {
  RegionGroupCore,
  RegionFullGroupCore,
  RegionGroup,
  RegionFullGroup
} from 'v-region'
```

## 实例

<script setup>
import { ref } from 'vue'
import {
  RegionGroupCore,
  RegionFullGroupCore,
  RegionGroup,
  RegionFullGroup
} from 'v-region'

import { useRegionChange, resultText } from '@/script/region/data'
const { values, change } = useRegionChange()
</script>

### 核心模块

核心模块可自由搭配其他交互形式

```vue-html
<RegionGroupCore v-model="region" />
<RegionFullGroupCore v-model="region" />
```

<RegionFullGroupCore
  v-model="values"
  class="border rounded-3 shadow-sm"
/>

### 选择器模式

使用内置按钮作为触发对象的选择器模式

```vue-html
<RegionGroup v-model="region" />
<RegionFullGroup v-model="region" />
```

<RegionFullGroup
  v-model="values"
/>

<div class="mt-3">
  <button
    type="button"
    class="btn btn-dark"
    @click="change"
  >换一个地区</button>
</div>

### 自定义选择器触发对象

若组件内置的触发器按钮不满足应用场景需求，可使用作用域插槽 `Scoped slots` 自定义选择器触发对象，另外同时可以配合 `custom-trigger-class` 和 `custom-container-class` props 对选择器触发对象以及下拉容器的样式进行自定义

```vue-html
<RegionGroup
  custom-trigger-class="border border-secondary-subtle border-4 rounded-3"
  custom-container-class="border-0"
>
  <template #default="{ data, visible }">
    <button
      type="button"
      class="btn btn-primary"
    >
      data:{{ resultText(data) }},
      visible: {{ visible }}
    </button>
  </template>
</RegionGroup>
```

<RegionGroup
  custom-trigger-class="border border-secondary-subtle border-4 rounded-3"
  custom-container-class="border-0"
>
  <template #default="{ data, visible }">
    <button
      type="button"
      class="btn btn-primary"
    >
      data:{{ resultText(data) }},
      visible: {{ visible }}
    </button>
  </template>
</RegionGroup>

选择器作用域插槽数据格式

```ts
interface RegionItem {
  key: string
  value: string
}
interface RegionModel {
  province?: RegionItem
  city?: RegionItem
  area?: RegionItem
  town?: RegionItem
}
interface RegionTriggerSlotData {
  /**
   * 当前选择的行政区域数据模型
   */
  data?: RegionModel
  /**
   * 当前选择器是否可见
   */
  visible?: boolean
}
```
