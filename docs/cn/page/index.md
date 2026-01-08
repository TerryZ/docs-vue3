# Pagination

分页栏组件

[![GitHub Repo stars](https://img.shields.io/github/stars/terryz/v-page?style=social)](https://github.com/TerryZ/v-page) [![GitHub forks](https://img.shields.io/github/forks/terryz/v-page?style=social)](https://github.com/TerryZ/v-page)

项目状态

[![test](https://github.com/TerryZ/v-page/actions/workflows/npm-publish.yml/badge.svg?branch=master)](https://github.com/TerryZ/v-page/actions/workflows/npm-publish.yml) [![code coverage](https://codecov.io/gh/TerryZ/v-page/branch/master/graph/badge.svg)](https://codecov.io/gh/TerryZ/v-page) [![npm version](https://img.shields.io/npm/v/v-page.svg)](https://www.npmjs.com/package/v-page) [![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://mit-license.org/) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

版本更新内容请访问 [Changelog](https://github.com/TerryZ/v-page/blob/dev/CHANGELOG-CN.md)

如果您的项目正在使用 [vue 2.x](https://v2.vuejs.org/v2/guide/) 版本生态，请使用 [v-page 2.x](https://terryz.github.io/docs-vue/#/page) 版本

## 安装

将 `v-page` 组件安装到项目中

::: code-group

```sh [npm]
npm i v-page
```

```sh [pnpm]
pnpm add v-page
```

```sh [yarn]
yarn add v-page
```

:::

全局安装插件

```ts
import { createApp } from 'vue'
import App from './app.vue'
import PaginationPlugin from 'v-page'

const app = createApp(App)
// globally install component
app.use(PaginationPlugin, {
  language: 'cn',
  register: true
})
app.mount('#app')
```

可在全局安装组件时设置的属性

```ts
export interface PaginationGlobalOptions {
  /**
   * 组件语言
   */
  language?: LanguageKey
  /**
   * 在安装插件时，是否同时全局注册 `PaginationBar` 组件
   * 适用于全局安装时，仅希望全局设置组件语言
   * @default false
   */
  register?: boolean
}
```

当然，您也可以仅在需要使用的地方引用组件，这也是更加推荐的使用方式。这更有利于代码拆分打包，起到更好的按需引用效果

```vue
<template>
  <PaginationBar />
</template>

<script setup>
import { PaginationBar } from 'v-page'
</script>
```

## 在页面中应用组件

一个分页栏的典型用法

::: code-group

```vue-html
<div
  v-for="item in list"
  :key="item.key"
  v-text="item.name"
/>
<PaginationBar
  language="cn"
  v-model="pageNumber"
  :total-row="totalRow"
  @change="change"
/>
```

```ts
import { ref } from 'vue'
import { PaginationBar, type PageInfo } from 'v-page'

const pageNumber = ref<number>(3)
const totalRow = ref<number>(100)
const list = ref<unknown[]>([])
// respond for pagination change
function change (data: PageInfo) {
  console.log(data) // { pageNumber: 1, pageSize: 10, totalPage: 10 }

  const params = {
    pageNumber: data.pageNumber,
    pageSize: data.pageSize,
    ...
  }
  // do some http request for example
  axios.post('some-api-address', params).then(resp => {
    // fetch new data and update data list and `totalRow` variable
    list.value = resp.list || []
    totalRow.value = resp.totalRow
  })
}
```

:::

## 实例

<script setup>
import LogDataPrinter from '@/views/components/LogDataPrinter.vue'
import PaginationOperation from '@/views/page/PaginationOperation.vue'
import PaginationPageSize from '@/views/page/PaginationPageSize.vue'
import PaginationAlign from '@/views/page/PaginationAlign.vue'
import PaginationDisabled from '@/views/page/PaginationDisabled.vue'

import {
  paginationBase,
  PaginationGallery,
  PaginationDisplayAll,
  PaginationStyle,
  PaginationPanelOrder,
  PaginationSlot
} from '@/script/page'

const { logs, PaginationBarBase } = paginationBase()
</script>

### 快速应用

最常用的分页栏应用

<PaginationBarBase language="cn" />

分页事件 [change](#change) 响应数据

<LogDataPrinter :logs="logs" />

```vue-html
<PaginationBar
  align="center"
  :total-row="21"
  @change="change"
/>
```

### 画廊数据展示模式实例

画廊数据格展示方式示例

<PaginationGallery language="cn" />

::: code-group

```vue-html
<div>
  <div
    v-for="item in listGallery"
    :key="item"
    v-text=item
  />
</div>
<PaginationBar
  align="center"
  :total-row="88"
  @change="change"
/>
```

```js
import { ref } from 'vue'
import { PaginationBar } from 'v-page'

const srcList = Array(88).fill(0).map((val, index) => index + 1)
const listGallery = ref([])

function change ({ pageNumber, pageSize }) {
  const start = pageSize * (pageNumber - 1)
  const end = (start + pageSize) > srcList.length
    ? srcList.length
    : start + pageSize
  listGallery.value = srcList.filter((val, index) => {
    return index >= start && index < end
  })
}
```

:::

### 分页操作

几个实例展示分页码的操作方式

<PaginationOperation language="cn" />

::: code-group

```vue-html
<div>
  <input type="text" v-model="inputPageNumber" />
  <button type="button" @click="goToInputPage" >go</button>
  <button
    type="button"
    @click="pageNumber++"
  >pageNumber + 1</button>
</div>

<PaginationBar v-model="pageNumber" :total-row="58" />
```

```js
import { ref } from 'vue'
import { PaginationBar } from 'v-page'

const pageNumber = ref(3)
const inputPageNumber = ref('2')

function goToInputPage () {
  if (!inputPageNumber.value) return

  const newPageNumber = Number(inputPageNumber.value)

  if (window.isNaN(newPageNumber)) {
    inputPageNumber.value = ''
    return
  }
  pageNumber.value = newPageNumber
}
```

:::

### 每页记录数

`pageSize` 指定了每页记录数，`pageSizeMenu` 提供了可供用户快速选择的每页记录数列表

<PaginationPageSize language="cn" />

::: code-group

```vue-html
<PaginationBar
  v-model:page-size="pageSize"
  :total-row="100"
/>
```

```js
import { ref } from 'vue'
import { PaginationBar } from 'v-page'

const pageSize = ref(25)
```

:::

当 `pageSizeMenu` 所提供值列表没有与 `pageSize` 值匹配的项目时，则该值将自动添加进 `pageSizeMenu` 列表中，并选中该值

### 对齐方向

<PaginationAlign language="cn" />

```vue-html
<PaginationBar align="left" />
```

### 风格样式

分页栏的风格样式

<PaginationStyle language="cn" />

```vue-html
<PaginationBar border />
<PaginationBar circle />
```

### 启用与禁用

<PaginationDisabled language="cn" />

```vue-html
<PaginationBar :disabled="true" />
```

### 布局排列

`v-page` 可以视情况使用分页栏的组件模块，以及对排列顺序进行调整，以适应不同的布局需求

<PaginationPanelOrder language="cn" />

::: code-group

```vue-html
<PaginationBar>
  <PaginationFirstPage />
  <PaginationPreviousPage />
  <PaginationPageNumbers />
  <PaginationNextPage />
  <PaginationLastPage />
  <PaginationInfo />
  <PaginationPageSizes />
</PaginationBar>
<PaginationBar>
  <PaginationPreviousPage />
  <PaginationPageSizes />
  <PaginationInfo />
  <PaginationNextPage />
</PaginationBar>
```

```js
import {
  PaginationBar,
  PaginationPageSizes,
  PaginationInfo,
  PaginationFirstPage,
  PaginationPreviousPage,
  PaginationPageNumbers,
  PaginationNextPage,
  PaginationLastPage
} from 'v-page'
```

:::

### 插槽

`v-page` 提供了作用域插槽，输出分页栏核心状态数据，方便进行功能定制

<PaginationSlot language="cn" />

::: code-group

```vue-html
<PaginationBar
  border
  align="left"
  :total-row="28"
>
  <template #default="{
    pageNumber, pageSize, totalPage,
    totalRow, isFirst, isLast
  }">
    <PaginationPreviousPage />
    <PaginationPanel>
      <div>
        <div>page: <span v-text="pageNumber" /></div>
        <div>pageSize: <span v-text="pageSize" /></div>
        <div>totalPage: <span v-text="totalPage" /></div>
        <div>totalRow: <span v-text="totalRow" /></div>
        <div>isFirst: <span v-text="isFirst" /></div>
        <div>isLast: <span v-text="isLast" /></div>
      </div>
    </PaginationPanel>
    <PaginationNextPage />
  </template>
</PaginationBar>
```

```js
import {
  PaginationBar,
  PaginationPreviousPage,
  PaginationPanel,
  PaginationNextPage
} from 'v-page'
```

:::

自定义内容通过 `PaginationPanel` 组件包裹，以保证分页栏的样式一致性

### 显示全部数据选项

在 `每页记录数` 栏增加显示全部数据的选项，用于设置数据展示栏显示全部数据，不进行分页。选择该项目后，[change](#change) 事件的响应数据如下

```js
{
  pageNumber: 1,
  pageSize: 0,
  totalPage: 1
}
```

<PaginationDisplayAll language="cn" />

```vue-html
<PaginationBar :total-row="28" display-all />
```

## Props

`v-page` 的设置参数

```ts
type LanguageKey = 'cn' | 'en' | 'de' | 'jp' | 'pt'

interface PaginationProps {
  /**
   * 默认页/当前页
   * @default 1
   */
  modelValue?: number
  /**
   * 每页数据记录数
   * @default 10
   */
  pageSize?: number
  /**
   * 总记录数
   */
  totalRow: number
  /**
   * 组件语言
   * @default `en`
   * 
   * 完整语言清单
   * `cn` 简体中文
   * `en` English
   * `de` German
   * `pt` Portuguese
   * `jp` Japanese
   */
  language?: LanguageKey
  /**
   * 每页数据记录数列表，仅在 `pageSizeOptions` 为 `true` 时生效
   * @default [10, 20, 50, 100]
   */
  pageSizeMenu?: number[]
  /**
   * 分页栏对齐方向
   * @default `right`
   */
  align?: 'left' | 'right' | 'center'
  /**
   * 禁用分页栏组件
   * @default false
   */
  disabled?: boolean
  /**
   * 显示边框样式
   * @default true
   */
  border?: boolean
  /**
   * 圆形按钮风格
   * @default false
   */
  circle?: boolean
  /**
   * 在每页记录数列表中增加显示所有数据记录项目
   * @default false
   */
  displayAll?: boolean
  /**
   * 在只有一页数据时，隐藏分页栏
   * @default false
   */
  hideOnSinglePage?: boolean
}
```

## 事件

组件各类操作的响应事件

### change

分页栏操作发生数据变更时，触发的响应事件

```ts
change: (data: PageInfo) => void
```

```ts
interface PageInfo {
  // 当前分页号
  pageNumber: number
  // 每页显示记录数
  pageSize: number
  // 总页数
  totalPage: number
}
// 可直接使用组件提供类型描述
import type { PageInfo } from 'v-page'
```

### update:modelValue

当前页变更时，触发的响应事件

```ts
`update:modelValue`: (value: number) => void
```

### update:pageSize

每页记录数变更时，触发的响应事件

```ts
`update:pageSize`: (value: number) => void
```
