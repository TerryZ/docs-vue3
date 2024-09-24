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

Manually install components globally

```js
import { RegionSelects } from 'v-region'

const app = createApp(App)
app.component('v-region-selects', RegionSelects)
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

## Level separation

Due to the large amount of town level data, in order to avoid the situation where the project does not need to use the town level but packs the massive data at this level, resulting in a waste of resources and a large project package size, the `v-region` series components only provide 3-level administrative division selection from the `v3.2.0` version, and the newly added `Full` series components provide a complete 4-level administrative division selection. Projects can choose to use it according to their needs

New components list

- `RegionFullSelects`
- `RegionFullText`
- `RegionFullGroupCore`
- `RegionFullGroup`
- `RegionFullColumnsCore`
- `RegionFullColumns`

The following is an example of the Select mode

### 3 levels region selector

```vue
<template>
  <RegionSelects />
</template>

<script setup>
import { RegionSelects } from 'v-region'
</script>
```

In the 3-level administrative region selection component, regardless of setting `town` prop to `true` or `false`, the component only provides 3-level administrative division selection. If you need to use 4-level administrative division selection, please use the `RegionFullSelects` component

### 4 levels region selector

```vue
<template>
  <RegionFullSelects />
</template>

<script setup>
import { RegionFullSelects } from 'v-region'
</script>
```

## Modules

- [Select](./select.md)
- [Group](./group.md)
- [Column](./column.md)
- [CityPicker](./city-picker.md)
- [Text](./text.md)

## Props

Core module component props arguments

```ts
interface RegionBaseProps {
  /**
   * v-model input value, each level of administrative division
   * selection item binding value
   */
  modelValue?: RegionValues
  /**
   * City level
   * @default true
   */
  city?: boolean
  /**
   * Area level
   * @default true
   */
  area?: boolean
  /**
   * Town level
   * @default true
   */
  town?: boolean
  /**
   * Component language
   * @default `cn`
   */
  language?: 'cn' | 'en'
  /**
   * When no selection is made, the prompt text `Please select` is displayed.
   * This is only applicable to
   * 
   * - `RegionSelects`
   * - `RegionFullSelects`
   * 
   * modes
   * 
   * @default true
   */
  blank?: boolean
  /**
   * Region level separator, only applicable to
   * 
   * - `RegionText`
   * - `RegionFullText`
   * 
   * modes
   * @default ''
   */
  separator?: string
}
```

Selector module component props arguments

```ts
interface RegionSelectorProps extends RegionBaseProps {
  /**
   * Disabled component
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
}
```

## Events

Component response events for various types of operations

### update:modelValue

The response of `v-model` to the administrative area selection changes, and the response content is the coded value of the selected administrative area

```ts
update:modelValue: (data: RegionValues) => void
```

```ts
interface RegionValues {
  province?: string
  city?: string
  area?: string
  town?: string
}
```

### change

Responding to administrative division changes

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
import type { RegionValues, RegionModel } from 'v-region'

const region = ref<RegionValues>({
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

In response to the completion of all valid region selections, only available on

- `RegionGroupCore`
- `RegionFullGroupCore`
- `RegionColumnsCore`
- `RegionFullColumnsCore`

Core modules

```ts
complete: () => void
```

### visibleChange

Respond for dropdown layer state change(display / close)

```ts
visibleChange: (visible: boolean) => void
```
