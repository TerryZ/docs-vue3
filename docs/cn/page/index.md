# Pagination

分页栏组件

[![GitHub Repo stars](https://img.shields.io/github/stars/terryz/v-page?style=social) ![GitHub forks](https://img.shields.io/github/forks/terryz/v-page?style=social)](https://github.com/TerryZ/v-page)

项目状态

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/TerryZ/v-page/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/TerryZ/v-page/tree/master) [![code coverage](https://codecov.io/gh/TerryZ/v-page/branch/master/graph/badge.svg)](https://codecov.io/gh/TerryZ/v-page) [![npm version](https://img.shields.io/npm/v/v-page.svg)](https://www.npmjs.com/package/v-page) [![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://mit-license.org/) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

版本更新内容请访问 [Changelog](https://github.com/TerryZ/v-page/blob/dev/CHANGELOG-CN.md)

如果您的项目正在使用 [vue 2.x](https://v2.vuejs.org/v2/guide/) 版本生态，请使用 [v-page 2.x](https://terryz.github.io/vue/#/page) 版本

## 安装

将 `v-page` 组件安装到项目中

```sh
# use npm
npm i v-page
# use yarn
yarn add v-page
# use pnpm
pnpm add v-page
```

全局安装插件

```js
// add component in global scope as plugin
import { createApp } from 'vue'
import App from './app.vue'
import Page from 'v-page'

const app = createApp(App)
app.use(Page, {
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
  <Page />
</template>

<script setup>
import { Page } from 'v-page'
</script>
```

## 在页面中应用组件

```vue
<template>
  <div
    v-for="item in list"
    :key="item.key"
    v-text="item.name"
  />

  <Page
    v-model="pageNumber"
    :total-row="totalRow"
    @change="change"
  />
</template>

<script setup>
import { ref } from 'vue'
import { Page } from 'v-page'

const pageNumber = ref(3)
const totalRow = ref(100)
const list = ref([])
// respond for pagination change
function change (data) {
  console.log(data) // { pageNumber: 1, pageSize: 10 }
  // a case for example
  // do some http request
  // fetch new data and update `totalRow` variable
  axios({
    pageNumber: data.pageNumber,
    pageSize: data.pageSize
  }).then(resp => {
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
  <Page
    :total-row="21"
    @change="changeBasic"
  />
</template>
```

<div class="border rounded-3 shadow-sm p-2">
  <Page
    :total-row="21"
    align="center"
    @change="changeBasic"
  />
</div>

分页事件 [change](#change) 响应数据

<div class="bg-light rounded-3 p-3 font-monospace">
  <div
    v-for="(item, index) in logs"
    :key="index"
  >
    <small>{{ JSON.stringify(item, null, 2) }}</small>
  </div>
</div>

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
  <Page
    :total-row="88"
    align="left"
    @change="changeGallery"
  />
</template>
<script setup>
import { ref } from 'vue'
import Page from 'v-page'

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
      rounded-2 bg-light me-2 mb-2 fs-1 text-muted
      d-flex align-items-center justify-content-center
    "
    v-for="item in listGallery"
    :key="item"
    v-text=item
  />
</div>
<Page
  :total-row="88"
  align="left"
  @change="changeGallery"
/>

### 分页操作

几个实例展示分页码的操作方式

```vue
<template>
  <div>
    <input type="text" v-model="inputPageNumber" />
    <button type="button" @click="goToInputPage" >go</button>
    <button type="button" @click="pageNumberOperate++" >pageNumber + 1</button>
  </div>

  <Page v-model="pageNumberOperate" />
</template>

<script setup>
import { ref } from 'vue'

const pageNumberOperate = ref(3)
const inputPageNumber = ref('2')

function goToInputPage () {
  if (!inputPageNumber.value) return

  const newPageNumber = Number(inputPageNumber.value)

  if (window.isNaN(newPageNumber)) {
    inputPageNumber.value = ''
    return
  }
  pageNumberOperate.value = newPageNumber
}
</script>
```

<div class="mb-3">
  <input
    type="text"
    class="border border-secondary me-2 rounded-1 px-2"
    v-model="inputPageNumber"
  />
  <button
    type="button"
    class="border me-2 px-3 rounded-1 shadow-sm"
    @click="goToInputPage"
  >
    Go
  </button>
  <button
    type="button"
    class="border px-3 rounded-1 shadow-sm"
    @click="pageNumberOperate++"
  >
    pageNumber + 1
  </button>
</div>

<Page
  align="left"
  v-model="pageNumberOperate"
  :total-row="58"
/>

### 对齐方向

```vue
<Page align="left" />
```

<div class="mb-3">
  指定对齐方向
  <select
    v-model="align"
    style="-webkit-appearance: auto;"
    class="border border-secondary"
  >
    <option>left</option>
    <option>center</option>
    <option>right</option>
  </select>
</div>

<Page
  :total-row="28"
  :align="align"
  border
/>

### 显示边框模式

```vue
<Page :border="true" />
```

<Page
  :total-row="28"
  align="left"
  border
/>

### 启用与禁用

```vue
<Page :disabled="true" />
```

<div class="border shadow-sm p-2 d-inline-flex rounded-3 mb-3">
  <input type="radio" v-model="disabled" :value="false" id="radio-enabled" />
  <label for="radio-enabled">启用</label>
  <input type="radio" v-model="disabled" :value="true" id="radio-disabled" />
  <label for="radio-disabled">禁用</label>
</div>

<Page
  :total-row="28"
  :disabled="disabled"
  align="left"
/>

### 功能模块的启用与关闭

设置分页栏模块的启用与关闭

<div class="my-3 user-select-none border shadow-sm p-2 rounded-3">
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
      id="checkbox-page-size-menu"
      @change="pageSizeMenuChange"
    />
    <label for="checkbox-page-size-menu">每页数据量栏</label>
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

<Page
  :total-row="28"
  align="left"
  :info="switchInfo"
  :page-size-menu="switchPageSizeMenu"
  :page-number="switchPageNumber"
  :first="switchFirst"
  :last="switchLast"
/>

### 插槽

`v-page` 提供了作用域插槽，输出分页栏核心状态数据，方便进行功能定制

```vue
<template>
  <Page
    border
    align="left"
    :total-row="28"
    :page-size-menu="false"
    :info="false"
    :first="false"
    :last="false"
    v-slot="{ pageNumber, pageSize, totalPage, totalRow, isFirst, isLast }"
  >
    <div>
      <div>page: <span v-text="pageNumber" /></div>
      <div>pageSize: <span v-text="pageSize" /></div>
      <div>totalPage: <span v-text="totalPage" /></div>
      <div>totalRow: <span v-text="totalRow" /></div>
      <div>isFirst: <span v-text="isFirst" /></div>
      <div>isLast: <span v-text="isLast" /></div>
    </div>
  </Page>
</template>
```

<Page
  border
  align="left"
  :total-row="28"
  :page-size-menu="false"
  :info="false"
  :first="false"
  :last="false"
  v-slot="{ pageNumber, pageSize, totalPage, totalRow, isFirst, isLast }"
>
  <div class="d-flex">
    <div class="me-1">page: <span v-text="pageNumber" /></div>
    <div class="me-1">pageSize: <span v-text="pageSize" /></div>
    <div class="me-1">totalPage: <span v-text="totalPage" /></div>
    <div class="me-1">totalRow: <span v-text="totalRow" /></div>
    <div class="me-1">isFirst: <span v-text="isFirst" /></div>
    <div>isLast: <span v-text="isLast" /></div>
  </div>
</Page>

### 显示全部数据选项

在 `每页记录数` 栏增加显示全部数据的选项，用于设置数据展示栏显示全部数据，不进行分页。选择该项目后，[change](#change) 事件的响应数据如下

```js
{
  pageNumber: 1,
  pageSize: 0
}
```

<Page
  :total-row="28"
  :display-all="true"
  align="left"
/>

<script setup>
import { ref } from 'vue'
import Page from 'v-page'

const srcList = Array(88).fill(0).map((val, index) => index + 1)

const logs = ref([])
const listGallery = ref([])
const disabled = ref(false)
const align = ref('left')
const pageNumberOperate = ref(3)
const inputPageNumber = ref('2')
const switchInfo = ref(true)
const switchFirst = ref(true)
const switchLast = ref(true)
const switchPageSizeMenu = ref([10, 20])
const switchPageNumber = ref(true)

// import PageIndex from '@demo/PageIndex.vue'
function changeBasic (data) {
  logs.value.push(data)
}
function changeGallery ({ pageNumber, pageSize }) {
  const start = pageSize * (pageNumber - 1)
  const end = (start + pageSize) > srcList.length
    ? srcList.length
    : start + pageSize

  listGallery.value = srcList.filter((val, index) => {
    return index >= start && index < end
  })
}
function goToInputPage () {
  if (!inputPageNumber.value) return

  const newPageNumber = Number(inputPageNumber.value)

  if (window.isNaN(newPageNumber)) {
    inputPageNumber.value = ''
    return
  }
  pageNumberOperate.value = newPageNumber
}
function pageSizeMenuChange (e) {
  if (e.target.checked) {
    switchPageSizeMenu.value = [10, 20]
  } else {
    switchPageSizeMenu.value = false
  }
}
</script>

## Props

### v-model/value

- 类型 `number`

设置默认页/当前页

### total-row

- 类型 `number`

每次数据查询中的总记录数，在父组件进行数据查询后，必须更新插件的总记录数参数

### language

- 类型 `string`
- 默认 `'cn'`

指定分页栏语言，完整语言清单

- `'cn'` 简体中文
- `'en'` English
- `'de'` German
- `'pt'` Portuguese
- `'jp'` Japanese

### page-size-menu

- 类型 `number[] | boolean`
- 默认 `[10, 20, 50, 100]`

分页尺寸列表, 可设置 `false` 来关闭该栏

### align

- 类型 `'left' | 'center' | 'right'`
- 默认 `'right'`

分页栏对齐方向

### disabled

- 类型 `boolean`
- 默认 `false`

启用/禁用 分页栏

### info

- 类型 `boolean`
- 默认 `true`

显示分页信息栏

### border

- 类型 `boolean`
- 默认 `false`

显示边框模式

### page-number

- 类型 `boolean`
- 默认 `true`

显示分页码模块

### first

- 类型 `boolean`
- 默认 `true`

显示首页按钮

### last

- 类型 `boolean`
- 默认 `true`

显示尾页按钮

### display-all

- 类型 `boolean`
- 默认 `false`

在每页记录数列表中增加显示所有数据记录项目

## 事件

组件操作各类响应事件

### change

分页栏操作发生数据变更时，触发的响应事件

```ts
change(data: PageState): void
```

```ts
interface PageState {
  // 当前分页号
  pageNumber: number
  // 每页显示记录数
  pageSize: number
}
```

## API

使用插件的 API 前，需为组件声明 `ref` 属性，并使用 `ref()` 声明对应名称的响应式变量以调用 API 方法

```vue
<template>
  <v-page ref="page" />
</template>

<script setup>
import { ref } from 'vue'

const page = ref(null)
// call api
page.value.goPage(3)
</script>
```

### goPage

切换当前页

```ts
goPage(page: number): void
```

### reload

更新分页信息及事件

```ts
reload(): void
```
