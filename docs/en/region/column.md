# Column

Lane mode, a selection mode that uses multiple data columns to display administrative regions side by side

## Component reference

Referencing components in your project

```js
import {
  RegionColumnsCore,
  RegionFullColumnsCore,
  RegionColumns,
  RegionFullColumns
} from 'v-region'
```

## Examples

<script setup>
import { ref } from 'vue'
import {
  RegionColumnsCore,
  RegionFullColumnsCore,
  RegionColumns,
  RegionFullColumns
} from 'v-region'

import { useRegionChange, resultText } from '@/script/region/data'
const { values, change } = useRegionChange()
</script>

### Core Modules

The core module can be freely matched with other interactive forms

```vue-html
<RegionColumnsCore v-model="region" />
<RegionFullColumnsCore v-model="region" />
```

<RegionFullColumnsCore
  v-model="values"
  class="border rounded-3 shadow-sm d-inline-flex"
/>

### Selector mode

Selector mode using built-in buttons as trigger elements

```vue-html
<RegionColumns language="en" v-model="region" />
<RegionFullColumns language="en" v-model="region" />
```

<RegionFullColumns
  language="en"
  v-model="values"
/>

<div class="mt-3">
  <button
    type="button"
    class="btn btn-dark"
    @click="change"
  >Change a region</button>
</div>

### Custom selector trigger element

If the built-in trigger button of the component does not meet the needs of the application scenario, you can use the scoped slot `Scoped slots` to customize the selector trigger element. In addition, you can also customize the style of the selector trigger element and the drop-down container with `custom-trigger-class` and `custom-container-class` props

```vue-html
<RegionColumns
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
</RegionColumns>
```

<RegionColumns
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
</RegionColumns>

Selector scoped slot data format

```ts
interface RegionTriggerSlotData {
  /**
   * The currently selected administrative area data model
   */
  data?: RegionModel
  /**
   * Current selector visibility
   */
  visible?: boolean
}
```
