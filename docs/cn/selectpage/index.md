# SelectPage

带有分页的项目列表的项目选择组件

[![GitHub Repo stars](https://img.shields.io/github/stars/terryz/v-selectpage?style=social)](https://github.com/TerryZ/v-selectpage) [![GitHub forks](https://img.shields.io/github/forks/terryz/v-selectpage?style=social)](https://github.com/TerryZ/v-selectpage)

项目状态

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/TerryZ/v-selectpage/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/TerryZ/v-selectpage/tree/master) [![code coverage](https://codecov.io/gh/TerryZ/v-selectpage/branch/master/graph/badge.svg?token=FmdV7kVgIp)](https://codecov.io/gh/TerryZ/v-selectpage) [![npm version](https://img.shields.io/npm/v/v-selectpage.svg)](https://www.npmjs.com/package/v-selectpage) [![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://mit-license.org/) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

版本更新内容请访问 [Changelog](https://github.com/TerryZ/v-selectpage/blob/dev/CHANGELOG-CN.md)

如果您的项目正在使用 [vue 2.x](https://v2.vuejs.org/v2/guide/) 版本生态，请使用 [v-selectpage 2.x](https://github.com/TerryZ/v-selectpage/tree/dev-vue2) 版本

## 安装

将 `v-selectpage` 组件安装到项目中

::: code-group

```sh [npm]
npm i v-selectpage
```

```sh [yarn]
yarn add v-selectpage
```

```sh [pnpm]
pnpm add v-selectpage
```

:::

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
  language="zh-chs"
  label-prop="desc"
  @fetch-data="fetchList"
/>

上例中使用了本地静态数据作为示例，而更的时候我们需要应用远端数据进行加载与查询

```js
function fetchData (data, callback) {
  const params = { ... }
  // get current page items from remote api
  axios.post('some-api-address', params).then(resp => {
    callback(resp.list, resp.count)
  })
}
```

### 表格视图

```vue
<template>
  <SelectPageTable
    label-prop="desc"
    :columns="teamColumns"
    @fetch-data="fetchData"
  />
</template>

<script setup>
import { SelectPageTable } from 'v-selectpage'

// local data list for example
const list = [
  { id: 1, name: 'Chicago Bulls', desc: '芝加哥公牛', abbr: 'CHI' },
  { id: 2, name: 'Cleveland Cavaliers', desc: '克里夫兰骑士', abbr: 'CLE' },
  { id: 3, name: 'Detroit Pistons', desc: '底特律活塞', abbr: 'DET' },
  ...
]
const teamColumns = [
  { title: 'Id', data: 'id' },
  { title: '球队名称', data: row => `${row.abbr} - ${row.name}`, width: 250 },
  { title: '中文名', data: 'desc' }
]

function fetchData (data, callback) {
  ...
}
</script>
```

<SelectPageTable
  label-prop="desc"
  language="zh-chs"
  :columns="teamColumns"
  @fetch-data="fetchList"
/>

`teamColumns` 定义了表格了数据列，列模型中的 `data` 属性与 [labelProp](#labelprop) 功能一致，即可以指定某一个数据列作为内容字段，也可以提供一函数，自定义单元格渲染内容

在表格视图里，[labelProp](#labelprop) 仅用于指定选中项目在触发对象中呈现的内容

### 核心模块

列表视图核心模块

```vue
<template>
  <SelectPageListCore @fetch-data="fetchData" />
</template>

<script setup>
import { SelectPageListCore } from 'v-selectpage'
</script>
```

<SelectPageListCore
  language="zh-chs"
  class="border rounded-3 shadow-sm"
  @fetch-data="fetchList"
/>

表格视图核心模块

```vue
<template>
  <SelectPageTableCore @fetch-data="fetchData" />
</template>

<script setup>
import { SelectPageTableCore } from 'v-selectpage'
</script>
```

<SelectPageTableCore
  language="zh-chs"
  class="border rounded-3 shadow-sm"
  :columns="teamColumns"
  @fetch-data="fetchList"
/>

### 多选模式

设置 `multiple` prop 以启用多项目选择功能

```vue
<template>
  <SelectPageList
    multiple
    v-model="selected"
    @fetch-data="fetchData"
    @fetch-selected-data="fetchSelectedData"
  />
</template>

<script setup>
import { ref } from 'vue'
import { SelectPageList } from 'v-selectpage'
// local data list for example
const list = [
  { id: 1, name: 'Chicago Bulls', desc: '芝加哥公牛' },
  { id: 2, name: 'Cleveland Cavaliers', desc: '克里夫兰骑士' },
  { id: 3, name: 'Detroit Pistons', desc: '底特律活塞' },
  ...
]
const selected = ref([1, 2, 4])

function fetchData (data, callback) { ... }
function fetchSelectedData (keys, callback) {
  // get items model by keys when v-model is set to a non-empty value
  callback(list.filter(val => keys.includes(val.id)))
}
</script>
```

<div class="mb-3">
  <SelectPageList
    language="zh-chs"
    label-prop="desc"
    multiple
    v-model="selected"
    @fetch-data="fetchList"
    @fetch-selected-data="fetchSelectedData"
  />
</div>

#### v-model 与 fetch-selected-data

上面举例了设置默认选中项目的场景，`v-model` 与 `fetch-selected-data` 事件是配套使用的，当使用 `v-model` 设置一个或多个 key 时（key 值内容应与 `keyProp` 指定的数据列对应 ），组件会响应 `fetch-selected-data` 事件用于获取 key 对应的数据，而通过组件交互操作完成的项目选择不会触发该事件

#### 限制最大选择数量

设置 `max` 值以限制最大可选择数量

```html
<SelectPageList
  multiple
  v-model="selected"
  :max="3"
  @fetch-data="fetchData"
  @fetch-selected-data="fetchSelectedData"
/>
```

<SelectPageList
  language="zh-chs"
  label-prop="desc"
  multiple
  v-model="selected"
  :max="3"
  @fetch-data="fetchList"
  @fetch-selected-data="fetchSelectedData"
/>

### 其他设置选项

组件的其它设置选项

#### 禁用

```html
<SelectPageList disabled />
<SelectPageList :disabled="true" />
```

<div class="row">
  <div class="col-md-6">
  <SelectPageList
    label-prop="desc"
    disabled
    v-model="oneSelected"
    @fetch-data="fetchList"
    @fetch-selected-data="fetchSelectedData"
  />
  </div>
  <div class="col-md-6">
  <SelectPageList
    label-prop="desc"
    disabled
    multiple
    v-model="selected"
    @fetch-data="fetchList"
    @fetch-selected-data="fetchSelectedData"
  />
  </div>
</div>

<!-- <div class="mb-3">
  <SelectPageList
    label-prop="desc"
    disabled
    v-model="oneSelected"
    @fetch-data="fetchList"
    @fetch-selected-data="fetchSelectedData"
  />
</div>

<div class="mb-3">
  <SelectPageList
    label-prop="desc"
    disabled
    multiple
    v-model="selected"
    @fetch-data="fetchList"
    @fetch-selected-data="fetchSelectedData"
  />
</div> -->

#### 关闭分页栏

```html
<SelectPageList :pagination="false" />
```

<div class="mb-3">
  <SelectPageList
    label-prop="desc"
    :pagination="false"
    @fetch-data="fetchList"
  />
</div>

#### 文字从右至左的书写与对齐

部分语言有文字从右向左的书写习惯，例如希伯来语 `he` 与阿拉伯语 `ar` 等语言

```html
<SelectPageList :rtl="true" />
```

<div class="mb-3">
  <SelectPageList
    label-prop="desc"
    :rtl="true"
    @fetch-data="fetchList"
  />
</div>

#### 内容区域宽度

```html
<SelectPageList :width="500" />
<SelectPageList width="20rem" />
```

<SelectPageList
  label-prop="desc"
  :width="500"
  @fetch-data="fetchList"
/>

### 实用案例

一些实际业务应用可能会使用到的案例，以供参考

#### 世界国家列表

数据源: [country-list](https://github.com/umpirsky/country-list/blob/master/data/en_US/country.json)

<SelectPageList
  key-prop="key"
  language="zh-chs"
  :label-prop="countryLabel"
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
  language="zh-chs"
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
import { ref, computed } from 'vue'
import {
  SelectPageList,
  SelectPageListCore,
  SelectPageTable,
  SelectPageTableCore
} from 'v-selectpage'
import { countries, timezones } from './data'
import { useSelectPageHandle } from './handle'

const { fetchData: fetchList, fetchSelectedData } = useSelectPageHandle()
const { fetchData: fetchCountries } = useSelectPageHandle(countries)
const { fetchData: fetchTimezones } = useSelectPageHandle(timezones)

const oneSelected = ref([1])
const selected = ref([1, 2, 4])

const teamColumns = [
  { title: 'Id', data: 'id' },
  { title: '球队名称', data: row => `${row.abbr} - ${row.name}`, width: 250 },
  { title: '中文名', data: 'desc' }
]
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
