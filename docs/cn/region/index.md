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

全局安装组件

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

局部使用组件，这是更推荐的使用方式，而且这也更有利于项目打包时的代码拆分，达到更好的资源按需引用的效果

```vue
<template>
  <RegionSelects />
</template>

<script setup>
import { RegionSelects } from 'v-region'
</script>
```

## Props

### v-model/modelValue

- 类型 `RegionKeys | string[]`

```ts
interface RegionInputModel {
  province: string
  city: string
  area: string
  town: string
}
```

各级别行政区划选择项目绑定值

::: tip 格式
`RegionCityPicker` 城市选择器的选择项目绑定通过 `string[]` 数组格式进行绑定
:::

### city

- 类型 `boolean`
- 默认 `true`

使用城市行政级别，若关闭该级别，则所有下级行政级别均不可用

### area

- 类型 `boolean`
- 默认 `true`

使用区/县行政级别，若关闭该级别，则所有下级行政级别均不可用

### town

- 类型 `boolean`
- 默认 `false`

使用乡/镇/街道行政级别

### blank

- 类型 `boolean`
- 默认 `false`

在下拉选项中增加 `请选择` 选项，该功能仅适用于 `RegionSelects`

### disabled

- 类型 `boolean`
- 默认 `false`

设置插件禁用状态，适用于 `RegionSelects`、`RegionGroup` 与 `RegionColumns` 模式

### language

- 类型 `string`
- 默认 `'cn'`

插件使用语言

- `cn` 中文
- `en` 英文

### separator

- 类型 `string`
- 默认 `''`

行政区域名称间的分隔符，适用于 `RegionText` 模式

### overflow

- 类型 `boolean`
- 默认 `false`

选择的城市较多时，超出 2 个的城市仅以数量显示，仅适用于 `RegionCityPicker` 模式

- `true` 显示所有选中城市名称
- `false` 选中的城市多于两个时，仅显示前两个城市名称，其他城市会被收起

### customTriggerClass

- 类型 `string`
- 默认 `''`

添加自定义样式类名至触发对象容器，作用于下拉选择的模块

### customContainerClass

- 类型 `string`
- 默认 `''`

添加自定义样式类名至下拉容器中，作用于下拉选择的模块

## 事件

组件各类操作响应事件

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

响应所有有效的行政区划选择完成，该事件仅适用于 `RegionGroupCore` 与 `RegionColumnsCore` 核心功能模块

```ts
complete: () => void
```

### visible-change

响应下拉栏打开 / 关闭的状态变化

```ts
'visible-change': (visible: boolean) => void
```
