# Select

Select mode, the most traditional and classic application form

## Component reference

Referencing components in your project

```js
import { RegionSelects, RegionFullSelects } from 'v-region'
```

## Examples

<script setup>
import { useData } from 'vitepress'
import { useRegionSelectsExamples } from '@/script/region/selects'
import RegionFullLevelSelects from '@/views/region/RegionFullLevelSelects.vue'

const { lang } = useData()
const {
  RegionSelectsProvince,
  RegionSelectsCity,
  RegionSelectsArea,
  RegionSelectsInit,
  RegionSelectsDisabled
} = useRegionSelectsExamples(lang)
</script>

Close city level, only select province

<RegionSelectsProvince />

```vue-html
<RegionSelects language="en" :city="false" />
```

Close area level

<RegionSelectsCity />

```vue-html
<RegionSelects language="en" :area="false" />
```

3-level administrative divisions

<RegionSelectsArea />

```vue-html
<RegionSelects language="en" />
```

Use full 4-level administrative divisions

<RegionFullLevelSelects :lang="lang" />

```vue-html
<RegionFullSelects language="en" :auto-select-first="false" />
```

### Initial value binding

Specify a set of region code values ​​so that the component displays those regions by default

<RegionSelectsInit />

::: code-group

```vue-html
<RegionFullSelects v-model="region" />
```

```ts
import { ref } from 'vue'
import { RegionFullSelects } from 'v-region'
import type { RegionValues } from 'v-region'
const region = ref<RegionValues>({
  province: '350000',
  city: '350100',
  area: '350104',
  town: '350104008'
})
```

:::

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

::: warning
Passing an `undefined` value or an empty object `{}` does not clear
:::

### Disabled state

Disable a component so that it cannot be interacted with

<RegionSelectsDisabled />

```vue-html
<RegionFullSelects
  v-model="values"
  :disabled="true"
/>
```
