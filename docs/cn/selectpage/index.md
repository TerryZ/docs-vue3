# SelectPage

带有分页的项目列表的项目选择组件

[![GitHub Repo stars](https://img.shields.io/github/stars/terryz/v-selectpage?style=social)](https://github.com/TerryZ/v-selectpage) [![GitHub forks](https://img.shields.io/github/forks/terryz/v-selectpage?style=social)](https://github.com/TerryZ/v-selectpage)

项目状态

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/TerryZ/v-selectpage/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/TerryZ/v-selectpage/tree/master) [![code coverage](https://codecov.io/gh/TerryZ/v-selectpage/branch/master/graph/badge.svg?token=FmdV7kVgIp)](https://codecov.io/gh/TerryZ/v-selectpage) [![npm version](https://img.shields.io/npm/v/v-selectpage.svg)](https://www.npmjs.com/package/v-selectpage) [![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://mit-license.org/) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

版本更新内容请访问 [Changelog](https://github.com/TerryZ/v-selectpage/blob/dev/CHANGELOG-CN.md)

如果您的项目正在使用 [vue 2.x](https://v2.vuejs.org/v2/guide/) 版本生态，请使用 [v-selectpage 2.x](https://github.com/TerryZ/v-selectpage/tree/dev-vue2) 版本

## 安装

将 `v-selectpage` 组件安装到项目中

```sh
# use npm
npm i v-selectpage
# use yarn
yarn add v-selectpage
# use pnpm
pnpm add v-selectpage
```

## 实例

## Props

### v-model/modelValue

- 类型 `(string | number)[]`
- 默认 `undefined`

binding selected item keys, it must be match 'keyProp' option value

### placeholder

- 类型 `string`
- 默认 `''`

### multiple

- 类型 `boolean`
- 默认 `false`

multiple selection

### language

- 类型 `string`
- 默认 `'en'`

组件应用的语言，其他可选语言如下

| 语言编码 | 语言名称 |
| - | - |
| `zh-chs` | Chinese Simplified |
| `en` | English |
| `ja` | Japanese |
| `ar` | Arabic |
| `es` | Spanish |
| `de` | German |
| `ro` | Romanian |
| `fr` | French |
| `pt-br` | Portuguese-Brazil |
| `pl` | Polish |
| `nl` | Dutch |
| `zh-cht` | Chinese Traditional |
| `ru` | Russian |
| `tr` | Turkish |

### keyProp

- 类型 `string`
- 默认 `id`

specify property to be key field, the value will return by v-model

### labelProp

- 类型 `string`
- 默认 `name`

specify property to display in data row

### pageSize

- 类型 `number`
- 默认 `10`

### max

- 类型 `number`
- 默认 `0`

maximum number of selection, set 0 to unlimited

depend on `multiple` prop set to true

### pagination

- 类型 `boolean`
- 默认 `true`

pagination bar

### rtl

- 类型 `boolean`
- 默认 `false`

text written from right to left

### width

- 类型 `string | number`
- 默认 `undefined`

the width of drop down menu

### debounce

- 类型 `number`
- 默认 `300`

debounce delay when typing, in milliseconds

### disabled

- 类型 `boolean`
- 默认 `false`

组件禁用状态，仅使用于 `SelectPageList` 与 `SelectPageTable` 选择器模式

## 事件

组件各类操作的响应事件

### update:modelValue

项目选中状态变更后，响应该事件输出项目 key 集合

```ts
update:modelValue: (keys: (string | number)[]) => void
```

将 `v-model` 进行手动绑定的处理

```vue
<template>
  <SelectPageListCore
    :modelValue="selected"
    @update:modelValue="keys => selected = keys"
  />
</template>
```

### fetch-data

响应数据列表获取与内容搜索

```ts
`fetch-data`: (data: PageParameters, callback: FetchDataCallback) => void

interface PageParameters {
  search: string // 搜索关键字
  pageNumber: number // 当前页码
  pageSize: number // 每页记录数
}
type FetchDataCallback = (
  // 列表数据，注意必须是一个对象列表
  dataList: Record<string, unknown>[]
  // 总记录条数
  resultCount: number
) => void
```

响应函数根据 `data` 提供的分页与搜索信息，将数据查询结果通过 `callback` 函数提交给组件

```js
function fetchData (data, callback) {
  const params = { ... }
  search(params).then(resp => callback(resp.list, resp.count))
}
```

::: tip 关闭分页
在 `pagination` props 设置为 `false` 时（关闭分页栏），`pageNumber` 与 `pageSize` 数据项固定输出为以下内容

```js
{
  pageNumber: 1,
  pageSize: 0
}
```

:::

### fetch-selected-data

通过 `v-model/modelValue` 变更选中项目时，响应该事件获取选中项目数据模型

```ts
`fetch-selected-data`: (
  keys: (string | number)[],
  callback: FetchSelectedDataCallback
) => void

type FetchSelectedDataCallback = (
  dataList: Record<string, unknown>[]
) => void
```

事件响应函数根据 key 集合，获得对应的数据模型，并通过 `callback` 函数提交给组件

```js
function fetchSelectedData (keys, callback) {
  search({ keys }).then(resp => callback(resp.list))
}
```

### selection-change

项目选中状态变更时响应的事件

```ts
`selection-change`: (items: Record<string, unknown>[]) => void
```

### remove

响应选中的项目被移除

```ts
remove: (items: Record<string, unknown>[]) => void
```

### close-dropdown

触发事件用于关闭下拉容器

```ts
`close-dropdown`: () => void
```

该事件仅适用于 `SelectPageListCore` 与 `SelectPageTableCore` 核心模块

### adjust-dropdown

触发事件用于自动调整下拉容器位置

```ts
`adjust-dropdown`: () => void
```

该事件仅适用于 `SelectPageListCore` 与 `SelectPageTableCore` 核心模块

### visible-change

响应下拉容器状态变更

```ts
`visible-change`: (visible: boolean) => void
```

该事件仅适用于 `SelectPageList` 与 `SelectPageTable` 选择器模式

## API

### removeItem

### removeAll
