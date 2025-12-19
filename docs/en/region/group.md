# Group

Use grouping to switch the selection mode of displaying administrative areas

## Component reference

Referencing components in your project

```js
import { RegionGroup, RegionFullGroup, RegionDropdown } from 'v-region'
```

## Examples

<script setup>
import { useData } from 'vitepress'
import { useRegionGroupExamples } from '@/script/region/group'
import { useRegionCustomTrigger } from '@/script/region'

const { lang } = useData()

const {
  RegionGroupCore,
  RegionGroupDropdown,
  RegionGroupReset
} = useRegionGroupExamples(lang)
const { RegionGroupCustomTrigger } = useRegionCustomTrigger(lang)
</script>

### Core modules

The core module can be freely matched with other interactive forms

<RegionGroupCore />

```vue-html
<RegionGroup v-model="region" />
<RegionFullGroup v-model="region" />
```

### Dropdown mode

Dropdown selection mode using built-in buttons as trigger elements

<RegionGroupDropdown />

<RegionGroupReset />

```vue-html
<RegionDropdown>
  <RegionFullGroup v-model="region" separator="-" />
</RegionDropdown>
```

### Custom dropdown trigger object

If the built-in trigger button of the component does not meet the needs of the application scenario, you can customize the trigger through the `trigger` slot

<RegionGroupCustomTrigger />

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
  <RegionGroup @change="change" />
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
