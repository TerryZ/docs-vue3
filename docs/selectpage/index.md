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



## 事件

### update:modelValue

### fetch-data

响应数据列表获取与内容搜索

```ts
`fetch-data`: (data: PageParameters, callback: FetchDataCallback) => void

interface PageParameters {
  // 搜索关键字
  search: string
  // 当前页码
  pageNumber: number
  // 每页记录数
  pageSize: number
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
function (data, callback) {
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
`fetch-selected-data`: (keys: ItemKey[], callback) => void

type ItemKey = string | number
```

### selection-change

### remove

### close-dropdown

### adjust-dropdown

### visible-change

## API

### removeItem

### removeAll
