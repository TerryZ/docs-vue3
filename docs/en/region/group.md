# Group

Use grouping to switch the selection mode of displaying administrative areas

## Component reference

Referencing components in your project

```js
import {
  RegionGroupCore,
  RegionFullGroupCore,
  RegionGroup,
  RegionFullGroup
} from 'v-region'
```

## Examples

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

### Core modules

The core module can be freely matched with other interactive forms

```vue-html
<RegionGroupCore v-model="region" />
<RegionFullGroupCore v-model="region" />
```

<RegionFullGroupCore
  v-model="values"
  class="border rounded-3 shadow-sm"
/>

### Selector mode

Selector mode using built-in buttons as trigger elements

```vue-html
<RegionGroup language="en" v-model="region" />
<RegionFullGroup language="en" v-model="region" />
```

<RegionFullGroup
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
<RegionGroup
  language="en"
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
  language="en"
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
