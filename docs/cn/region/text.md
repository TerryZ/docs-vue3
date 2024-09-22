# Text

纯文本模式，行政区域信息以纯文本方式展示

## 组件引用

在项目中引入组件

```js
import { RegionText, RegionFullText } from 'v-region'
```

## 实例

<script setup>
import { RegionText, RegionFullText } from 'v-region'

import { useRegionChange } from '@/script/region/data'
const { values, change } = useRegionChange()
</script>

快速应用

```vue
<template>
  <RegionText v-model="region" />
  <RegionFullText v-model="region" />
</template>
<script setup>
import { ref } from 'vue'
import { RegionText } from 'v-region'
const region = ref({
  province: '350000',
  city: '350100',
  area: '350104',
  town: '350104008'
})
</script>
```

<div class="border rounded-3 shadow-sm p-3 mb-3">
  <div>
    <RegionText v-model="values" />
  </div>
  <div>
    <RegionFullText v-model="values" />
  </div>
</div>

### 分隔符

在各级别行政区域名称间应用指定的分隔符，增加信息可读性

```vue-html
<RegionText
  v-model="region"
  separator="-"
/>
```

<div class="border rounded-3 shadow-sm p-3 mb-3">
  <div>
    <RegionText v-model="values" separator="-" />
  </div>
  <div>
    <RegionFullText v-model="values" separator="-" />
  </div>
</div>

<div>
  <button
    type="button"
    class="btn btn-dark"
    @click="change"
  >换一个地区</button>
</div>
