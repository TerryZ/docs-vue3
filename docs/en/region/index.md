# Region

Chinese administrative divisions selector component

[![GitHub Repo stars](https://img.shields.io/github/stars/terryz/v-region?style=social)](https://github.com/TerryZ/v-region) [![GitHub forks](https://img.shields.io/github/forks/terryz/v-region?style=social)](https://github.com/TerryZ/v-region)

Repository status

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/TerryZ/v-region/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/TerryZ/v-region/tree/master) [![code coverage](https://codecov.io/gh/TerryZ/v-region/branch/master/graph/badge.svg?token=FmdV7kVgIp)](https://codecov.io/gh/TerryZ/v-region) [![npm version](https://img.shields.io/npm/v/v-region.svg)](https://www.npmjs.com/package/v-region) [![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://mit-license.org/) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Detailed changes for each release are documented in [Changelog](https://github.com/TerryZ/v-region/blob/dev/CHANGELOG.md)

If you are using [vue 2.x](https://v2.vuejs.org/v2/guide/) version, please use [v-region 2.x](https://github.com/TerryZ/v-region/tree/dev-vue2) version instead

## Installation

Install `v-region` component in to your project

::: code-group

```sh [npm]
npm i v-region
```

```sh [yarn]
yarn add v-region
```

```sh [pnpm]
pnpm add v-region
```

:::

Globally install component

```js
import { createApp } from 'vue'
import App from './app.vue'
import Region from 'v-region'

const app = createApp(App)
/**
 * Globally register region components
 * v-region-group
 * v-region-selects
 * v-region-columns
 * v-region-city-picker
 * v-region-text
 */
app.use(Region)
app.mount('#app')
```

Partial use of components is the more recommended way to use them, and it is also more conducive to code splitting during project packaging, to achieve better resource reference on demand

```vue
<template>
  <RegionSelects />
</template>

<script setup>
import { RegionSelects } from 'v-region'
</script>
```

## Examples

### Select menus mode

```vue-html
<RegionSelects :city="false" language="en" />
```

<RegionSelects :city="false" language="en" />

```vue-html
<RegionSelects :area="false" language="en" />
```

<RegionSelects :area="false" language="en" />

```vue-html
<RegionSelects language="en" />
```

<RegionSelects language="en" />

```vue-html
<RegionSelects :town="true" language="en" />
```

<RegionSelects
  :town="true"
  language="en"
  @change="selectChange"
/>

The response data for [change](#change) event

<div class="bg-light rounded-3 p-3 my-3">
{{ selectSelectedData }}
</div>

#### Selected items value binding

```vue
<template>
  <RegionSelects
    :town="true"
    language="en"
    v-model="region"
  />
</template>

<script setup>
import { ref } from 'vue'
import { RegionSelects } from 'v-region'
const region = ref({
  province: '350000',
  city: '350100',
  area: '350104',
  town: '350104008'
})
</script>
```

<RegionSelects
  class="mb-3"
  language="en"
  :town="true"
  v-model="region"
/>

#### Disabled state

```vue-html
<RegionSelects
  :town="true"
  :disabled="true"
  language="en"
  v-model="region"
/>
```

<RegionSelects
  :town="true"
  :disabled="true"
  language="en"
  v-model="region"
/>

### Plain text mode

Administrative area information displayed by plain text

```vue
<template>
  <RegionText
    v-model="region"
    language="en"
  />
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

<div class="border rounded-3 shadow-sm p-3 my-3">
  <RegionText language="en" v-model="region" />
</div>

#### Separator

Apply specified separators between administrative level names at each level to increase the readability of information

```vue-html
<RegionText
  v-model="region"
  separator="-"
/>
```

<div class="border rounded-3 shadow-sm p-3 mt-3">
  <RegionText
    v-model="region"
    separator="-"
  />
</div>

### Group mode

Use grouping to toggle the selection mode for displaying administrative regions

#### Group selector mode

```vue-html
<RegionGroup v-model="region" language="en" />
```

<RegionGroup language="en" />

Group selector mode using built-in buttons as trigger objects

#### Group core module

```vue-html
<RegionGroupCore language="en" v-model="region" />
```

<RegionGroupCore language="en" class="border rounded-3 shadow-sm" />

The core module can be freely matched with other interactive forms

#### Group mode custom trigger objects

Use scoped slots to custom trigger objects

```vue-html
<RegionGroup language="en" :town="true">
  <template #default="{ region, visible }">
    <button
      type="button"
      class="btn btn-success"
    >
      region: <span v-text="resultText(region)" />,
      visible: <span v-text="visible" />
    </button>
  </template>
</RegionGroup>
```

<RegionGroup language="en" :town="true">
  <template #default="{ region, visible }">
    <div class="bg-success px-3 py-2 rounded-3 text-white" >
      region: <span v-text="resultText(region)" />,
      visible: <span v-text="visible" />
    </div>
  </template>
</RegionGroup>

Two data fields are output in the scoped slots

- `region` current Region Selection Data Model
- `visible` the dropdown container open state

### Columns mode

Selection mode to display administrative regions side by side using multiple data columns

#### Columns selector mode

```vue-html
<RegionColumns language="en" v-model="region" />
```

<RegionColumns language="en" />

Group selector mode using built-in buttons as trigger objects

#### Columns core module

```vue-html
<RegionColumnsCore language="en" v-model="region" />
```

<RegionColumnsCore language="en" class="border rounded-3 shadow-sm" />

The core module can be freely matched with other interactive forms

#### Columns mode custom trigger objects

Use scoped slots to custom trigger objects

```vue-html
<RegionColumns language="en" :town="true">
  <template #default="{ region, visible }">
    <button
      type="button"
      class="btn btn-success"
    >
      region: <span v-text="resultText(region)" />,
      visible: <span v-text="visible" />
    </button>
  </template>
</RegionColumns>
```

<RegionColumns language="en" :town="true">
  <template #default="{ region, visible }">
    <div class="bg-success px-3 py-2 rounded-3 text-white" >
      region: <span v-text="resultText(region)" />,
      visible: <span v-text="visible" />
    </div>
  </template>
</RegionColumns>

Two data fields are output in the scoped slots

- `region` current Region Selection Data Model
- `visible` the dropdown container open state

### City Picker mode

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
  v-model="citySelected"
  @change="cityChange"
/>

The response data for [change](#change) event

<div class="bg-light rounded-3 p-3 my-3">
  {{ citySelectedData }}
</div>

#### collapsing items

By default, if you select more than 2 city items, they will be stored and displayed in a unified manner, and the number of folded storage will be displayed

After setting `overflow` to `true`, the selected item will be fully displayed in the trigger object without collapsing

```vue-html
<RegionCityPicker
  language="en"
  v-model="selected"
  :overflow="true"
/>
```

<RegionCityPicker
  language="en"
  v-model="citySelected"
  :overflow="true"
/>

<script setup>
import { ref } from 'vue'
import {
  RegionSelects,
  RegionText,
  RegionGroup,
  RegionGroupCore,
  RegionColumns,
  RegionColumnsCore,
  RegionCityPicker
} from 'v-region'

const selectSelectedData = ref({})
const region = ref({
  province: '350000',
  city: '350100',
  area: '350104',
  town: '350104008'
})
const citySelected = ref(['110000', '130200', '140100'])
const citySelectedData = ref([])

function cityChange (data) {
  citySelectedData.value = data
}
function selectChange (data) {
  selectSelectedData.value = data
}
function resultText (region) {
  if (!region) return 'No data'
  if (!Object.values(region).some(val => val) || !region) {
    return 'No data'
  }
  return Object
    .values(region)
    .filter(val => val)
    .map(val => val.value)
    .join(',')
}
</script>

## Props

### v-model/modelValue

- type `RegionKeys | string[]`

```ts
interface RegionInputModel {
  province: string
  city: string
  area: string
  town: string
}
```

Binding value of selection items for administrative divisions at each level

::: tip Data format
The selection item binding of the city picker `RegionCityPicker` is bound through the `string[]` array format
:::

### city

- type `boolean`
- default `true`

Use city level, if this level is turned off, all subordinate administrative levels are unavailable

### area

- type `boolean`
- default `true`

Use area level, if this level is turned off, all subordinate administrative levels are unavailable

### town

- type `boolean`
- default `false`

Use town level

### blank

- type `boolean`
- default `false`

Add `Please select` option in select menus, available on `RegionSelects` module

### disabled

- type `boolean`
- default `false`

Enabled / Disabled component, available on `RegionSelects`、`RegionGroup` and `RegionColumns` modules

### language

- type `string`
- default `'cn'`

The language used by the component

- `cn` 中文
- `en` English

### separator

- type `string`
- default `''`

Separator between administrative region names, available on `RegionText` mode

### overflow

- type `boolean`
- default `false`

When more cities are selected, more than 2 cities are only displayed by quantity, only available on `RegionCityPicker` mode

- `true` Display all selected city names
- `false` When more than two cities are selected, only the names of the first two cities will be displayed, and other cities will be collapsed

### customTriggerClass

- type `string`
- default `''`

Add custom class to trigger container, work on dropdown selection mode

### customContainerClass

- type `string`
- default `''`

Add custom class to dropdown container, work on dropdown selection mode

## Events

Component response events for various types of operations

### change

Respond for level selection change

```ts
change: (data: RegionModel) => void
```

```ts
interface RegionItem {
  key: string
  value: string
}

interface RegionModel {
  province: RegionItem
  city: RegionItem
  area: RegionItem
  town: RegionItem
}
```

You can also directly use the type definition provided by the component

```vue
<template>
  <RegionSelects
    v-model="region"
    @change="change"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RegionSelects } from 'v-region'
import type { RegionInputModel, RegionModel } from 'v-region'

const region = ref<RegionInputModel>({
  province: '350000',
  city: '350100',
  area: '350104',
  town: '350104008'
})

function change (data: RegionModel): void {
  console.log(data)
}
</script>
```

### complete

In response to the completion of all valid region selections, only available on `RegionGroupCore` and `RegionColumnsCore` modules

```ts
complete: () => void
```

### visible-change

Respond for dropdown layer state change(display / close)

```ts
'visible-change': (visible: boolean) => void
```

## API

Before using component's API, need to declare a ref attribute for the component, declare a ref variable by ref() to hold the element reference(the name must match template ref value) and use it to call API methods

```vue
<template>
  <RegionSelects ref="region" />
</template>

<script setup>
import { ref } from 'vue'
import { RegionSelects } from 'v-region'

const region = ref()
// call api
region.value.reset()
</script>
```

### reset

Reset all level data

```ts
reset: () => void
```
