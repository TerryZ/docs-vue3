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

## 模式

`v-selectpage` 提供了选择器模式的项目选择组件

### 选择器模式

常规下拉选择模式

```js
import { SelectPageList, SelectPageTable } from 'v-selectpage'
```

### 核心模块组件

核心模块是具备搜索与分页功能的列表、表格模块，不论是直接使用、置于其他容器或组合其他组件，均可大大拓展功能的使用形式与场景

```js
import { SelectPageListCore, SelectPageTableCore } from 'v-selectpage'
```

## 实例

### 列表视图

```vue
<template>
  <SelectPageList
    language="zh-chs"
    @fetch-data="fetchData"
  />
</template>

<script setup>
import { SelectPageList } from 'v-selectpage'

// local data list for example
const list = [
  { id: 1, name: 'Chicago Bulls', desc: '芝加哥公牛' },
  { id: 2, name: 'Cleveland Cavaliers', desc: '克里夫兰骑士' },
  { id: 3, name: 'Detroit Pistons', desc: '底特律活塞' },
  { id: 4, name: 'Indiana Pacers', desc: '印第安纳步行者' },
  ...
]

function fetchData (data, callback) {
  const { search, pageNumber, pageSize } = data

  const start = (pageNumber - 1) * pageSize
  const end = start + pageSize - 1
  // filter by search keyword
  const filtered = search
    ? list.filter(val => val.name.includes(search))
    : list

  callback(
    // get current page items
    filtered.filter((val, index) => index >= start && index <= end),
    filtered.length
  )
}
</script>
```

<SelectPageList
  :language="language"
  label-prop="desc"
  @fetch-data="fetchList"
/>

### 表格视图

### 核心模块

### 多选模式

### 其他设置选项

### 实用案例

一些实际业务应用可能会使用到的案例，以供参考

#### 世界国家列表

数据源: [country-list](https://github.com/umpirsky/country-list/blob/master/data/en_US/country.json)

<SelectPageList
  key-prop="key"
  :label-prop="countryLabel"
  :language="language"
  placeholder="Countries of the world"
  @fetch-data="fetchCountries"
/>

::: details 示例代码

```vue
<template>
  <SelectPageList
    key-prop="key"
    :label-prop="countryLabel"
    placeholder="Countries of the world"
    @fetch-data="fetchCountries"
  />
</template>

<script setup>
import { SelectPageList } from 'v-selectpage'

function countryLabel (data) {
  return `(${data.key}) ${data.name}`
}
function fetchCountries (data, callback) {
  ...
}
</script>
```

:::

#### 世界时区表

数据源: [timezones](https://gist.github.com/TerryZ/4ddab237f80ef7e27e5eb206d9e66e24)

<SelectPageTable
  key-prop="key"
  label-prop="name"
  :language="language"
  :columns="timezonesColumn"
  placeholder="World time zone"
  @fetch-data="fetchTimezones"
/>

::: details 示例代码

```vue
<template>
  <SelectPageTable
    key-prop="key"
    label-prop="name"
    :columns="timezonesColumn"
    placeholder="World time zone"
    @fetch-data="fetchTimezones"
  />
</template>

<script setup>
import { SelectPageTable } from 'v-selectpage'
const timezonesColumn = [
  {title: 'area',data: 'key'},
  {title: 'time zone',data: 'name'}
]
function fetchTimezones (data, callback) {
  ...
}
</script>
```

:::

<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'
import {
  SelectPageList,
  SelectPageListCore,
  SelectPageTable,
  SelectPageTableCore
} from 'v-selectpage'
import { countries, timezones } from './data'
import { useSelectPageHandle } from './handle'

const { lang } = useData()

const language = computed(() => lang.value === 'cn' ? 'zh-chs' : 'en')

const { fetchData: fetchList } = useSelectPageHandle()
const { fetchData: fetchCountries } = useSelectPageHandle(countries)
const { fetchData: fetchTimezones } = useSelectPageHandle(timezones)

const countriesColumn = [
  { title: 'abbr', data: 'key' },
  { title: 'country', data: 'name' }
]
const timezonesColumn = [
  {title: 'area',data: 'key'},
  {title: 'time zone',data: 'name'}
]
function countryLabel (data) {
  return `(${data.key}) ${data.name}`
}
</script>

## Props

### v-model/modelValue

- 类型 `(string | number)[]`
- 默认 `undefined`

绑定选中项目的键值，项目的键值须与 [keyProp](#keyprop) 指定的字段内容匹配

### placeholder

- 类型 `string`
- 默认 `''`

未选择项目时显示的占位符文本内容，若不设置该参数，插件则默认使用多语言中设置的占位符

该选项仅适用于 [选择器模式](#选择器模式)

### multiple

- 类型 `boolean`
- 默认 `false`

多选模式

::: info 展现形式
单选模式下，选中项目内容在触发对象中直接被显示出来。多选模式下，选中的项目将以标签的形式展现在触发对象中
:::

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
- 默认 `'id'`

指定一个属性作为键值列，它将作为 `v-model/modelValue` 及数据匹配的依据字段

### labelProp

- 类型 `string | function`
- 默认 `'name'`

指定一个数据列或一个函数来处理列表项目显示的文本内容

::: info 作用范围

- 列表视图的行项目显示文本内容
- [选择器模式](#选择器模式) 的触发对象中展示选中项目的文本内容
- [选择器模式](#选择器模式) 多选方式时展示在触发对象的标签中的文本内容
:::

### columns

- 类型 `TableColumn[]`
- 默认 `undefined`

表格形式的数据列设置模型

```ts
interface TableColumn {
  title: string           // 标题栏文本
  data: string | function // 数据列或数据处理函数
  width?: number | string // 列宽度
}
```

该属性仅适用于表格形式 `SelectPageTable` 与 `SelectPageTableCore`

### pageSize

- 类型 `number`
- 默认 `10`

每页显示记录数，当关闭分页栏时，则固定应用 `0`

### max

- 类型 `number`
- 默认 `0`

可选中项目的最大数量，设置为 `0` 则不限制

> 该选项依赖于 [multiple](#multiple) prop 设置为 `true`

### pagination

- 类型 `boolean`
- 默认 `true`

数据列表使用分页栏

当关闭分页栏时，[fetch-data 事件](#fetch-data) 的数据请求参数中的 `pageNumber` 与 `pageSize` 数据项固定输出为以下内容

```js
{
  pageNumber: 1,
  pageSize: 0
}
```

### rtl

- 类型 `boolean`
- 默认 `false`

文字渲染方向从右向左

### width

- 类型 `string | number`
- 默认 `undefined`

指定内容容器宽度，指定 `number` 格式内容，则自动使用像素 `px` 为单位；`string` 格式内容将直接应用

```vue
<!-- number type -->
<SelectPageListCore :width="500" />
  ⇩
<div style="width: 500px;" />

<!-- string type -->
<SelectPageListCore width="50%" />
  ⇩
<div style="width: 50%;" />
```

### debounce

- 类型 `number`
- 默认 `300`

输入搜索内容的去抖延迟时间，单位为毫秒

### disabled

- 类型 `boolean`
- 默认 `false`

组件禁用状态，仅使用于 [选择器模式](#选择器模式)

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

::: tip 关闭分页栏
当关闭分页栏时，事件响应时输出的参数将变成固定值，具体请查看 [pagination](#pagination) props 设置
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

该事件仅适用于 [核心模块组件](#核心模块组件)

### adjust-dropdown

触发事件用于自动调整下拉容器位置

```ts
`adjust-dropdown`: () => void
```

该事件仅适用于 [核心模块组件](#核心模块组件)

### visible-change

响应下拉容器状态变更

```ts
`visible-change`: (visible: boolean) => void
```

该事件仅适用于 [选择器模式](#选择器模式)

## API

使用插件的 API 前，需为组件声明 `ref` 属性，并使用 `ref()` 声明对应名称的响应式变量以调用 API 方法

```vue
<template>
  <SelectPageListCore ref="selectPage" />
</template>

<script setup>
import { ref } from 'vue'
import { SelectPageListCore } from 'v-selectpage'

const selectPage = ref()
// call api
selectPage.value.removeAll()
</script>
```

### removeItem

移除指定数据的选中状态

```ts
removeItem: (item: Record<string, unknown>) => void
```

该 API 仅适用于 [核心模块组件](#核心模块组件)

### removeAll

移除所有选中的项目

```ts
removeAll: () => void
```

该 API 仅适用于 [核心模块组件](#核心模块组件)
