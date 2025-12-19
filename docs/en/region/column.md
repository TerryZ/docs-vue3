# Column

Lane mode, a selection mode that uses multiple data columns to display administrative regions side by side

## Component reference

Referencing components in your project

```js
import { RegionColumns, RegionFullColumns, RegionDropdown } from 'v-region'
```

## Examples

<script setup>
import { useData } from 'vitepress'
import { useRegionColumnsExamples } from '@/script/region/columns'
import { useRegionCustomTrigger } from '@/script/region'
import RegionFullLevelColumns from '@/views/region/RegionFullLevelColumns.vue'

const { lang } = useData()

const {
  RegionColumnsCore
} = useRegionColumnsExamples(lang)
const { RegionColumnsCustomTrigger } = useRegionCustomTrigger(lang)
</script>

### Core Modules

The core module can be freely matched with other interactive forms

<RegionColumnsCore />

```vue-html
<RegionColumnsCore v-model="region" />
<RegionFullColumnsCore v-model="region" />
```

### Dropdown mode

Dropdown selection mode using built-in buttons as trigger elements

<RegionFullLevelColumns />

```vue-html
<RegionDropdown>
  <RegionFullColumns language="en" v-model="region" separator="-" />
</RegionDropdown>
```

### Custom dropdown trigger object

If the built-in trigger button of the component does not meet the needs of the application scenario, you can customize the trigger through the `trigger` slot

<RegionColumnsCustomTrigger />

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
  <RegionColumns @change="change" />
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
