# Select

下拉列表模式



## 实例

<script setup>
import {
  RegionSelects,
  RegionFullSelects
} from 'v-region'

import { useDataChange, valuesFuzhou } from '@/script/region/data'

const {
  changedValues,
  changedModel,
  change,
  jsonFormat
} = useDataChange()
</script>

```js
import { RegionSelects, RegionFullSelects } from 'v-region'
```

### 3 级行政区划

```vue-html
<RegionSelects :city="false" />
```

<RegionSelects :city="false" />

```vue-html
<RegionSelects :area="false" />
```

<RegionSelects :area="false" />

```vue-html
<RegionSelects />
```

<RegionSelects />

### 4 级行政区划

```vue-html
<RegionFullSelects/>
```

<RegionFullSelects
  v-model="changedValues"
  @change="change"
/>

响应数据

<div class="rounded-3 my-3 border overflow-hidden d-flex">
  <div class="col-md-6 p-3">
    <h5>v-model values</h5>
    <pre class="m-0">{{ jsonFormat(changedValues) }}</pre>
  </div>
  <div class="col-md-6 p-3 bg-light">
    <h5>change 事件响应结果</h5>
    <pre class="m-0">{{ jsonFormat(changedModel) }}</pre>
  </div>
</div>

### 初始值绑定

```vue
<template>
  <RegionFullSelects v-model="region" />
</template>

<script setup>
import { ref } from 'vue'
import { RegionFullSelects } from 'v-region'
const region = ref({
  province: '350000',
  city: '350100',
  area: '350104',
  town: '350104008'
})
</script>
```

<RegionFullSelects
  class="mb-3"
  v-model="valuesFuzhou"
/>
