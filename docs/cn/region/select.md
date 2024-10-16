# Select

下拉列表模式，最传统，经典的应用形式

## 组件引用

在项目中引入组件

```js
import { RegionSelects, RegionFullSelects } from 'v-region'
```

## 实例

<script setup>
import { ref } from 'vue'
import {
  RegionSelects,
  RegionFullSelects
} from 'v-region'

import {
  useUIDataChange, useRegionChange, valuesFuzhou
} from '@/script/region/data'
import RegionDataResult from '@/views/region/RegionDataResult.vue'

const {
  changedValues,
  changedModel,
  change
} = useUIDataChange()
const { values, reset } = useRegionChange()
</script>

关闭城市级别，仅选择省份

```vue-html
<RegionSelects :city="false" />
```

<RegionSelects :city="false" />

关闭区县级别

```vue-html
<RegionSelects :area="false" />
```

<RegionSelects :area="false" />

```vue-html
<RegionSelects />
```

<RegionSelects />

使用完整的 4 级行政区划

```vue-html
<RegionFullSelects />
```

<RegionFullSelects
  v-model="changedValues"
  @change="change"
/>

响应数据

<RegionDataResult
  :values="changedValues"
  :model="changedModel"
/>

### 初始值绑定

指定一套地区编码值，使组件默认显示这些地区

```vue
<template>
  <RegionFullSelects v-model="region" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { RegionFullSelects } from 'v-region'
import type { RegionValues } from 'v-region'
const region = ref<RegionValues>({
  province: '350000',
  city: '350100',
  area: '350104',
  town: '350104008'
})
</script>
```

<RegionFullSelects
  class="mb-3"
  v-model="values"
/>

### 清空/重置

指定一个各级别的值为 `undefined` 的对象，即可清空

```js
region.value = {
  province: undefined,
  city: undefined,
  area: undefined,
  town: undefined
}
```

<div class="mt-3">
  <button
    type="button"
    class="btn btn-dark"
    @click="reset"
  >清除/重置</button>
</div>

::: warning 注意
传递 `undefined` 值或是一个空对象 `{}`，无法清空
:::

### 禁用状态

```vue-html
<RegionFullSelects
  v-model="values"
  :disabled="true"
/>
```

<RegionFullSelects
  class="mb-3"
  disabled
  v-model="values"
/>
