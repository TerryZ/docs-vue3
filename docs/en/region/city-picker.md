# CityPicker

City picker mode

## Component reference

Referencing components in your project

```js
import { RegionCityPicker } from 'v-region'
```

## Examples

<script setup>
import { RegionCityPicker } from 'v-region'

import { values } from '@/script/region/city-picker'
import { useUIDataChange, valuesFuzhou } from '@/script/region/data'

import RegionDataResult from '@/views/region/RegionDataResult.vue'

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

Quick use

```vue
<template>
  <RegionCityPicker
    language="en"
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
  language="en"
  v-model="changedValues"
  @change="change"
/>

Response Data

<RegionDataResult
  :values="changedValues"
  :model="changedModel"
/>

### Clear/Reset

Pass an empty array to clear the selection

```js
selected.value = []
```

<div class="mt-3">
  <button
    type="button"
    class="btn btn-dark"
    @click="reset"
  >Clear/Reset</button>
</div>

### Collapse items

By default, if you select more than 2 city items, they will be stored and displayed in a unified manner, and the number of folded storage will be displayed

After setting overflow to true, the selected item will be fully displayed in the trigger object without collapsing

```vue-html
<RegionCityPicker
  language="en"
  v-model="selected"
  :overflow="true"
/>
```

<RegionCityPicker
  language="en"
  v-model="changedValues"
  overflow
/>

## Props

```ts
interface CityPickerProps {
  /**
   * Component language
   * @default `cn`
   */
  language?: string
  /**
   * Whether to disable the component
   * @default false
   */
  disabled?: boolean
  /**
   * Add custom class to trigger container, work on dropdown selection mode
   */
  customTriggerClass?: string
  /**
   * Add custom class to dropdown container, work on dropdown selection mode
   */
  customContainerClass?: string
  /**
   * Input values as a list of area codes
   */
  modelValue?: string[]
  /**
   * Display mode for the selected city in the button
   * true: Display all selected city names
   * false: When more than two cities are selected, only the
   *        names of the first two cities will be displayed,
   *        and other cities will be collapsed
   *
   * @default false
   */
  overflow?: boolean
}
```

## Events

Various operation response events of the city selector component

### update:modelValue

In response to the change of city selection, the response content is the coded value of the selected city

```ts
update:modelValue: (data: string[]) => void
```

### change

In response to changes in city selection, the response content is the model of the selected city

```ts
change: (data: RegionItem[]) => void
```

### visible-change

Respond for dropdown layer state change(display / close)

```ts
visibleChange: (visible: boolean) => void
```
