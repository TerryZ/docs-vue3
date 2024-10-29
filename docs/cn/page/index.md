# Pagination

分页栏组件

[![GitHub Repo stars](https://img.shields.io/github/stars/terryz/v-page?style=social)](https://github.com/TerryZ/v-page) [![GitHub forks](https://img.shields.io/github/forks/terryz/v-page?style=social)](https://github.com/TerryZ/v-page)

项目状态

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/TerryZ/v-page/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/TerryZ/v-page/tree/master) [![code coverage](https://codecov.io/gh/TerryZ/v-page/branch/master/graph/badge.svg)](https://codecov.io/gh/TerryZ/v-page) [![npm version](https://img.shields.io/npm/v/v-page.svg)](https://www.npmjs.com/package/v-page) [![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://mit-license.org/) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

版本更新内容请访问 [Changelog](https://github.com/TerryZ/v-page/blob/dev/CHANGELOG-CN.md)

如果您的项目正在使用 [vue 2.x](https://v2.vuejs.org/v2/guide/) 版本生态，请使用 [v-page 2.x](https://terryz.github.io/vue/#/page) 版本

## 安装

将 `v-page` 组件安装到项目中

::: code-group

```sh [npm]
npm i v-page
```

```sh [yarn]
yarn add v-page
```

```sh [pnpm]
pnpm add v-page
```

:::

全局安装插件

```js
import { createApp } from 'vue'
import App from './app.vue'
import { PaginationBar } from 'v-page'

const app = createApp(App)
// globally install component
app.use(PaginationBar, {
  // globally config options
})
app.mount('#app')
```

可在全局安装组件时设置的属性

- info
- pageSizeMenu
- language
- align
- border
- pageNumber
- first
- last

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

```vue
<template>
  <div
    v-for="item in list"
    :key="item.key"
    v-text="item.name"
  />
  <PaginationBar
    v-model="pageNumber"
    :total-row="totalRow"
    @change="change"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PaginationBar } from 'v-page'
import type { PageInfo } from 'v-page'

const pageNumber = ref<number>(3)
const totalRow = ref<number>(100)
const list = ref<unknown[]>([])
// respond for pagination change
function change (data: PageInfo): void {
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
</script>
```

## 实例

### 快速应用

```vue
<template>
  <PaginationBar
    :total-row="21"
    @change="changeBasic"
  />
</template>
```

<div class="border rounded-3 shadow-sm p-2">
  <PaginationBar
    align="center"
    language="cn"
    :total-row="21"
    @change="changeBasic"
  />
</div>

分页事件 [change](#change) 响应数据

<LogDataPrinter :logs="logs" />

### 画廊数据展示模式实例

```vue
<template>
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
    @change="changeGallery"
  />
</template>

<script setup>
import { ref } from 'vue'
import { PaginationBar } from 'v-page'

const srcList = Array(88).fill(0).map((val, index) => index + 1)
const listGallery = ref([])

function changeGallery ({ pageNumber, pageSize }) {
  const start = pageSize * (pageNumber - 1)
  const end = (start + pageSize) > srcList.length
    ? srcList.length
    : start + pageSize
  listGallery.value = srcList.filter((val, index) => {
    return index >= start && index < end
  })
}
</script>
```

<div class="border rounded-3 shadow-sm pt-2 ps-2 mb-2 d-flex flex-wrap">
  <div
    style="height: 100px;width: 126px;"
    class="
      rounded-2 bg-light me-2 mb-2 fs-1 text-body-secondary
      d-flex align-items-center justify-content-center
    "
    v-for="item in listGallery"
    :key="item"
    v-text=item
  />
</div>
<PaginationBar
  align="center"
  language="cn"
  :total-row="88"
  @change="changeGallery"
/>

### 分页操作

几个实例展示分页码的操作方式

```vue
<template>
  <div>
    <input type="text" v-model="inputPageNumber" />
    <button type="button" @click="goToInputPage" >go</button>
    <button
      type="button"
      @click="pageNumber++"
    >pageNumber + 1</button>
  </div>

  <PaginationBar v-model="pageNumber" />
</template>

<script setup>
import { ref } from 'vue'

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
</script>
```

<div class="mb-3 d-flex">
  <input
    type="text"
    class="form-control me-3"
    v-model="inputPageNumber"
    style="width: 100px"
  />
  <button
    type="button"
    class="btn btn-dark me-3"
    @click="goToInputPage"
  >
    Go
  </button>
  <button
    type="button"
    class="btn btn-dark"
    @click="pageNumberOperate++"
  >
    pageNumber + 1
  </button>
</div>

<PaginationBar
  align="left"
  language="cn"
  v-model="pageNumberOperate"
  :total-row="58"
/>

### 每页记录数

`pageSize` 指定了每页记录数，`pageSizeMenu` 提供了可供用户快速选择的每页记录数列表

```vue
<template>
  <PaginationBar
    v-model:page-size="pageSize"
    :total-row="100"
  />
</template>
<script setup>
import { ref } from 'vue'

const pageSize = ref(25)
</script>
```

<PaginationBar
  align="left"
  language="cn"
  v-model:page-size="pageSize"
  :total-row="100"
/>

<div>
  <button
    type="button"
    class="btn btn-dark mt-3"
    @click="setPageSize(15)"
  >
    set pageSize to 15
  </button>
</div>

当 `pageSizeMenu` 所提供值列表没有与 `pageSize` 值匹配的项目时，则该值将自动添加进 `pageSizeMenu` 列表中，并选中该值

### 对齐方向

```vue
<PaginationBar align="left" />
```

<div class="mb-3 d-flex align-items-center">
  指定对齐方向
  <select
    v-model="align"
    style="-webkit-appearance: auto;width: 100px"
    class="form-control ms-3"
  >
    <option>left</option>
    <option>center</option>
    <option>right</option>
  </select>
</div>

<PaginationBar
  :total-row="28"
  :align="align"
  language="cn"
  border
/>

### 显示边框模式

```vue
<PaginationBar border />
```

<PaginationBar
  :total-row="28"
  align="left"
  language="cn"
  border
/>

### 圆形按钮风格

```vue
<PaginationBar circle />
```

<PaginationBar
  :total-row="28"
  align="left"
  language="cn"
  circle
/>

### 启用与禁用

```vue
<PaginationBar :disabled="true" />
```

<div class="form-check form-switch d-inline-flex align-items-center border px-3 py-2 shadow-sm rounded-3">
  <label class="form-check-label" for="switchDisabled">启用</label>
  <input
    class="form-check-input mx-3"
    type="checkbox"
    role="switch"
    id="switchDisabled"
    v-model="disabled"
  >
  <label class="form-check-label" for="switchDisabled">禁用</label>
</div>

<div class="my-3">
  <PaginationBar
    :total-row="28"
    :disabled="disabled"
    language="cn"
    align="left"
  />
</div>

<PaginationBar
  :total-row="28"
  :disabled="disabled"
  border
  align="left"
  language="cn"
/>

### 功能模块的启用与关闭

设置分页栏模块的启用与关闭

<div class="my-3 user-select-none border shadow-sm p-2 rounded-3">
  <div>
    <input
      type="checkbox"
      v-model="switchPageSizeOptions"
      id="checkbox-page-size-menu"
    />
    <label for="checkbox-page-size-menu">每页数据量栏</label>
  </div>
  <div>
    <input
      type="checkbox"
      :value="true"
      v-model="switchInfo"
      id="checkbox-info"
    />
    <label for="checkbox-info">分页信息栏</label>
  </div>
  <div>
    <input
      type="checkbox"
      :value="true"
      v-model="switchPageNumber"
      id="checkbox-page-number"
    />
    <label for="checkbox-page-number">分页码栏</label>
  </div>
  <div>
    <input
      type="checkbox"
      :value="true"
      v-model="switchFirst"
      id="checkbox-first"
    />
    <label for="checkbox-first">首页按钮</label>
  </div>
  <div>
    <input
      type="checkbox"
      :value="true"
      v-model="switchLast"
      id="checkbox-last"
    />
    <label for="checkbox-last">尾页按钮</label>
  </div>
</div>

<PaginationBar
  align="left"
  language="cn"
  :total-row="28"
  :info="switchInfo"
  :page-size-options="switchPageSizeOptions"
  :page-number="switchPageNumber"
  :first="switchFirst"
  :last="switchLast"
/>

### 插槽

`v-page` 提供了作用域插槽，输出分页栏核心状态数据，方便进行功能定制

```vue-html
<PaginationBar
  border
  align="left"
  :total-row="28"
  :page-size-options="false"
  :info="false"
  :first="false"
  :last="false"
>
  <template #default="{
    pageNumber, pageSize, totalPage,
    totalRow, isFirst, isLast
  }">
    <div>
      <div>page: <span v-text="pageNumber" /></div>
      <div>pageSize: <span v-text="pageSize" /></div>
      <div>totalPage: <span v-text="totalPage" /></div>
      <div>totalRow: <span v-text="totalRow" /></div>
      <div>isFirst: <span v-text="isFirst" /></div>
      <div>isLast: <span v-text="isLast" /></div>
    </div>
  </template>
</PaginationBar>
```

<PaginationBar
  border
  align="left"
  language="cn"
  :total-row="28"
  :page-size-options="false"
  :page-number="false"
  :info="false"
  :first="false"
  :last="false"
>
  <template #default="{ pageNumber, pageSize, totalPage, totalRow, isFirst, isLast }">
    <div class="d-flex">
      <div class="me-1">page: <span v-text="pageNumber" /></div>
      <div class="me-1">pageSize: <span v-text="pageSize" /></div>
      <div class="me-1">totalPage: <span v-text="totalPage" /></div>
      <div class="me-1">totalRow: <span v-text="totalRow" /></div>
      <div class="me-1">isFirst: <span v-text="isFirst" /></div>
      <div>isLast: <span v-text="isLast" /></div>
    </div>
  </template>
</PaginationBar>

### 显示全部数据选项

在 `每页记录数` 栏增加显示全部数据的选项，用于设置数据展示栏显示全部数据，不进行分页。选择该项目后，[change](#change) 事件的响应数据如下

```js
{
  pageNumber: 1,
  pageSize: 0,
  totalPage: 1
}
```

<PaginationBar
  :total-row="28"
  :display-all="true"
  align="left"
  language="cn"
/>

<script setup>
import { PaginationBar } from 'v-page'
import LogDataPrinter from '@/views/components/LogDataPrinter.vue'

import { usePagination } from '@/script/page'

const {
  srcList,
  logs,
  listGallery,
  disabled,
  align,
  pageSize,
  pageNumberOperate,
  inputPageNumber,
  switchInfo,
  switchFirst,
  switchLast,
  switchPageSizeOptions,
  switchPageNumber,

  changeBasic,
  changeGallery,
  goToInputPage,
  setPageSize
} = usePagination()
</script>

## Props

`v-page` 的设置参数

```ts
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
  language?: 'cn' | 'en' | 'de' | 'jp' | 'pt'
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
   * 显示记录数列表面板
   * @default true
   */
  pageSizeOptions?: boolean
  /**
   * 显示分页信息面板
   * @default true
   */
  info?: boolean
  /**
   * 显示分页码模块
   * @default true
   */
  pageNumber?: boolean
  /**
   * 显示首页按钮
   * @default true
   */
  first?: boolean
  /**
   * 显示尾页按钮
   * @default true
   */
  last?: boolean
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
