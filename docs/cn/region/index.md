# Region

行政区划选择器组件

[![GitHub Repo stars](https://img.shields.io/github/stars/terryz/v-region?style=social)](https://github.com/TerryZ/v-region) [![GitHub forks](https://img.shields.io/github/forks/terryz/v-region?style=social)](https://github.com/TerryZ/v-region)

项目状态

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/TerryZ/v-region/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/TerryZ/v-region/tree/master) [![code coverage](https://codecov.io/gh/TerryZ/v-region/branch/master/graph/badge.svg?token=FmdV7kVgIp)](https://codecov.io/gh/TerryZ/v-region) [![npm version](https://img.shields.io/npm/v/v-region.svg)](https://www.npmjs.com/package/v-region) [![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://mit-license.org/) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

版本更新内容请访问 [Changelog](https://github.com/TerryZ/v-region/blob/dev/CHANGELOG-CN.md)

如果您的项目正在使用 [vue 2.x](https://v2.vuejs.org/v2/guide/) 版本生态，请使用 [v-region 2.x](https://github.com/TerryZ/v-region/tree/dev-vue2) 版本

## 安装

将 `v-region` 组件安装到项目中

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

全局注册组件

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

手动全局注册组件

```js
import { RegionSelects } from 'v-region'

const app = createApp(App)
app.component('v-region-selects', RegionSelects)
```

局部使用组件，这是更推荐的使用方式，而且这也更有利于项目打包时的代码拆分，达到更好的资源按需引用的效果

```vue
<template>
  <RegionSelects />
</template>

<script setup>
import { RegionSelects } from 'v-region'
</script>
```

## 级别分离

由于乡镇级别数据量较大，为避免项目需求并不需要使用乡镇级别，却打包了该级别的海量数据，造成资源浪费、项目打包体积过大的情况，`v-region` 从 `v3.2.0` 版本开始，原有系列组件仅提供 3 级行政区划选择，新增的 `Full` 系列组件提供完整的 4 级行政区划选择，项目可根据需求选择使用

新增组件清单

- `RegionFullSelects`
- `RegionFullText`
- `RegionFullGroupCore`
- `RegionFullGroup`
- `RegionFullColumnsCore`
- `RegionFullColumns`

以下拉列表模式为例

### 3 级行政区划选择

```vue
<template>
  <RegionSelects />
</template>

<script setup>
import { RegionSelects } from 'v-region'
</script>
```

在 3 级行政区域选择组件中，不论设置 `town` prop 为 `true` 还是 `false`，组件均只提供 3 级行政区划选择，如果需要使用 4 级行政区划选择，请使用 `RegionFullSelects` 组件

### 4 级行政区划选择

```vue
<template>
  <RegionFullSelects />
</template>

<script setup>
import { RegionFullSelects } from 'v-region'
</script>
```

## 功能模块

- [Select](./select.md)
- [Group](./group.md)
- [Column](./column.md)
- [CityPicker](./city-picker.md)
- [Text](./text.md)

## Props

核心模块组件 props 参数

```ts
interface RegionBaseProps {
  /**
   * v-model 输入值，各级别行政区划选择项目绑定值
   */
  modelValue?: RegionValues
  /**
   * 启用城市级别
   * @default true
   */
  city?: boolean
  /**
   * 启用区、县级别
   * @default true
   */
  area?: boolean
  /**
   * 启用村、镇级别
   * @default true
   */
  town?: boolean
  /**
   * 语言
   * @default `cn`
   */
  language?: 'cn' | 'en'
  /**
   * 未选择时显示 `请选择` 的提示文本，仅适用于
   * 
   * - `RegionSelects`
   * - `RegionFullSelects`
   * 
   * 模式
   * 
   * @default true
   */
  blank?: boolean
  /**
   * 分隔符，仅适用于
   * 
   * - `RegionText`
   * - `RegionFullText`
   * 
   * 模式
   * @default ''
   */
  separator?: string
}
```

选择器模式组件 props 参数

```ts
interface RegionSelectorProps extends RegionBaseProps {
  /**
   * 禁用组件
   * @default false
   */
  disabled?: boolean
  /**
   * 为触发对象添加自定义样式类
   */
  customTriggerClass?: string
  /**
   * 为下拉容器添加自定义样式类
   */
  customContainerClass?: string
}
```

## 事件

组件各类操作响应事件

### update:modelValue

`v-model` 的响应行政区域选择变化，响应内容为选择行政区域的编码值

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

响应行政区划变化

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

你也可直接使用组件提供的类型定义

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

响应所有有效的行政区划选择完成，该事件仅适用于

- `RegionGroupCore`
- `RegionFullGroupCore`
- `RegionColumnsCore`
- `RegionFullColumnsCore`

等核心功能模块

```ts
complete: () => void
```

### visibleChange

响应下拉栏打开 / 关闭的状态变化

```ts
visibleChange: (visible: boolean) => void
```
