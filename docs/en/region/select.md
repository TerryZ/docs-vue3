# Select

Select mode, the most traditional and classic application form

## Component reference

Referencing components in your project

```js
import { RegionSelects, RegionFullSelects } from 'v-region'
```

## Examples

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

Close city level, only select province

```vue-html
<RegionSelects language="en" :city="false" />
```

<RegionSelects language="en" :city="false" />

Close area level

```vue-html
<RegionSelects language="en" :area="false" />
```

<RegionSelects language="en" :area="false" />

```vue-html
<RegionSelects language="en" />
```

<RegionSelects language="en" />

Use full 4-level administrative divisions

```vue-html
<RegionFullSelects language="en" />
```

<RegionFullSelects
  language="en"
  v-model="changedValues"
  @change="change"
/>

Response Data

<RegionDataResult
  language="en"
  :values="changedValues"
  :model="changedModel"
/>

### Initial value binding

Specify a set of region code values ​​so that the component displays those regions by default

```vue
<template>
  <RegionFullSelects language="en" v-model="region" />
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
  language="en"
  class="mb-3"
  v-model="values"
/>

### Clear/Reset

Specify an object with the value of `undefined` at each level to clear it

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
  >Clear/Reset</button>
</div>

::: warning
Passing an `undefined` value or an empty object `{}` does not clear
:::

### Disabled state

```vue-html
<RegionFullSelects
  v-model="values"
  :disabled="true"
/>
```

<RegionFullSelects
  language="en"
  class="mb-3"
  disabled
  v-model="values"
/>
