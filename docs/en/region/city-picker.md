# CityPicker

City picker mode

## Component reference

Referencing components in your project

```js
import { RegionCityPicker, RegionDropdown } from 'v-region'
```

## Examples

<script setup>
import { useData } from 'vitepress'
import { CityPickerDropdown } from '@/script/region/city-picker'
import { useRegionCustomTrigger } from '@/script/region'
import RegionCityPicker from '@/views/region/RegionCityPicker.vue'

const { lang } = useData()

const { RegionCityPickerCustomTrigger } = useRegionCustomTrigger(lang)
</script>

City picker core module

<RegionCityPicker />

::: code-group

```vue-html
<RegionCityPicker
  v-model="selected"
  @change="change"
/>
<button
  class="btn btn-dark"
  @click="selected = ['130500', '140200', '150200']"
>
  Change cities
</button>
<button
  class="btn btn-dark"
  @click="selected = []"
>
  Clear
</button>
```

```ts
import { ref } from 'vue'
import { RegionCityPicker } from 'v-region'
import type { RegionItem } from 'v-region'

const selected = ref<string[]>(['110000', '130200', '140100'])
function change (data: RegionItem[]): void {
  console.log(data)
}
```

:::

### Clear/Reset

Pass an empty array to clear the selection

```js
selected.value = []
```

### Dropdown selection mode

Combine `RegionDropdown` components to use the city selector in a drop-down selection form

<CityPickerDropdown :language="lang" />

```vue-html
<RegionDropdown>
  <RegionCityPicker />
</RegionDropdown>
```

### Custom dropdown trigger object

If the built-in trigger button of the component does not meet the needs of the application scenario, you can customize the trigger through the `trigger` slot

::: code-group

```vue-html
<RegionDropdown>
  <template #trigger="{ visible }">
    <button
      type="button"
      class="btn btn-primary"
    >
      data:{{ resultText() }},
      visible: {{ visible }}
    </button>
  </template>
  <RegionCityPicker @change="change" />
</RegionDropdown>
```

```js
const model = ref()

function resultText() {
  ...
}
function change(data) {
  model.value = data
}
```

:::

<RegionCityPickerCustomTrigger />

## Props

```ts
interface CityPickerProps {
  /**
   * v-model input value, selected region code list
   */
  modelValue?: string[]
  /**
   * Component language
   * @default `cn`
   */
  language?: 'cn' | 'en'
  /**
   * Separator
   * 
   * @default ''
   */
  separator?: string
}
```

## Events

Various operation response events of the city selector component

### update:modelValue

In response to the change of city selection, the response content is the coded value of the selected city

```ts
update:modelValue: (data: string[]) => void
```

### update:names

In response to the change of city selection, the response content is the name of the selected city

```ts
update:names: (data: string[]) => void
```

### change

In response to changes in city selection, the response content is the model of the selected city

```ts
change: (data: RegionItem[]) => void
```
