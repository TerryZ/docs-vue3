# Text

Plain text mode, administrative area information is displayed in plain text

## Component reference

Referencing components in your project

```js
import { RegionText, RegionFullText } from 'v-region'
```

## Examples

<script setup>
import { RegionText, RegionFullText } from 'v-region'

import { useRegionChange } from '@/script/region/data'
const { values, change } = useRegionChange()
</script>

Quick use

::: code-group

```vue-html
<!-- Three-level administrative division -->
<RegionText v-model="region" />
<!-- Four-level administrative division -->
<RegionFullText v-model="region" />
```

```ts
import { ref } from 'vue'
import { RegionText, RegionFullText } from 'v-region'
import type { RegionValues } from 'v-region'
const region = ref<RegionValues>({
  province: '350000',
  city: '350100',
  area: '350104',
  town: '350104008'
})
```

:::

<div class="border rounded-3 shadow-sm p-3 mb-3">
  <div>
    <RegionText v-model="values" />
  </div>
  <div>
    <RegionFullText v-model="values" />
  </div>
</div>

### Separator

Apply specified separators between administrative region names at all levels to increase information readability

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
  >Change a region</button>
</div>
