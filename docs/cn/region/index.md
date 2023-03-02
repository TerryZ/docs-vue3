# Region

行政区划选择器组件

[![GitHub Repo stars](https://img.shields.io/github/stars/terryz/v-region?style=social) ![GitHub forks](https://img.shields.io/github/forks/terryz/v-region?style=social)](https://github.com/TerryZ/v-region)

项目状态

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/TerryZ/v-region/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/TerryZ/v-region/tree/master) [![code coverage](https://codecov.io/gh/TerryZ/v-region/branch/master/graph/badge.svg?token=FmdV7kVgIp)](https://codecov.io/gh/TerryZ/v-region) [![npm version](https://img.shields.io/npm/v/v-region.svg)](https://www.npmjs.com/package/v-region) [![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://mit-license.org/) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

版本更新内容请访问 [Changelog](https://github.com/TerryZ/v-region/blob/dev/CHANGELOG-CN.md)

如果您的项目正在使用 [vue 2.x](https://v2.vuejs.org/v2/guide/) 版本生态，请使用 [v-region 2.x](https://github.com/TerryZ/v-region/tree/dev-vue2) 版本

## 安装

将 `v-region` 组件安装到项目中

```sh
# use npm
npm i v-region
# use yarn
yarn add v-region
# use pnpm
pnpm add v-region
```

## Props

### v-model/modelValue

- 类型 `RegionCodes | string[]`

```ts
interface RegionCodes {
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

区域文本间的分隔符，适用于 `RegionText` 模式

### overflow

- 类型 `boolean`
- 默认 `false`

选择的城市较多时，超出 2 个的城市仅以数量显示，仅适用于 `RegionCityPicker` 模式

- `true` 显示所有选中城市名称
- `false` 选中的城市多于两个时，仅显示前两个城市名称，其他城市会被收起

## 事件

组件各类操作响应事件

### change

响应行政区划变化

```ts
change: (data: RegionModel) => void

interface RegionLevel {
  key: string
  value: string
}

interface RegionModel {
  province: RegionLevel
  city: RegionLevel
  area: RegionLevel
  town: RegionLevel
}
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

## API

使用插件的 API 前，需为组件声明 `ref` 属性，并使用 `ref()` 声明对应名称的响应式变量以调用 API 方法

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

重置并清空所有级别的数据

```ts
reset: () => void
```
