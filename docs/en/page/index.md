# Pagination

Pagination component

[![GitHub Repo stars](https://img.shields.io/github/stars/terryz/v-page?style=social)](https://github.com/TerryZ/v-page) [![GitHub forks](https://img.shields.io/github/forks/terryz/v-page?style=social)](https://github.com/TerryZ/v-page)

Repository status

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/TerryZ/v-page/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/TerryZ/v-page/tree/master) [![code coverage](https://codecov.io/gh/TerryZ/v-page/branch/master/graph/badge.svg)](https://codecov.io/gh/TerryZ/v-page) [![npm version](https://img.shields.io/npm/v/v-page.svg)](https://www.npmjs.com/package/v-page) [![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://mit-license.org/) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Detailed changes for each release are documented in [Changelog](https://github.com/TerryZ/v-page/blob/dev/CHANGELOG.md)

If you are using [vue 2.x](https://v2.vuejs.org/v2/guide/) version, please use [v-page 2.x](https://terryz.github.io/vue/#/page) version instead

## Installation

Install `v-page` component in to your project

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

Globally install component

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

Can global config options in plugin install

- info
- pageSizeMenu
- language
- align
- border
- pageNumber
- first
- last

You can also use components only where you need them, which is the more recommended way to use them. This is more conducive to code splitting and packaging

```vue
<template>
  <PaginationBar />
</template>

<script setup>
import { PaginationBar } from 'v-page'
</script>
```

## Use component on page

Typical usage of a pagination component

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

## Examples

### Quick demo

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
    :total-row="21"
    align="center"
    @change="changeBasic"
  />
</div>

Pagination [change](#change) event response data

<LogDataPrinter :logs="logs" />

### Gallery data

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
    :total-row="88"
    align="center"
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
  :total-row="88"
  align="center"
  @change="changeGallery"
/>

### Pagination operation

Some cases showing how pagination operation works

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
  v-model="pageNumberOperate"
  :total-row="58"
/>

### Number of records per page

`pageSize` specifies the number of records per page, and `pageSizeMenu` provides a list of the number of records per page for users to quickly select

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

When the value list provided by `pageSizeMenu` does not have an item matching the `pageSize` value, the value will be automatically added to the `pageSizeMenu` list and selected

### Alignment direction

```vue
<PaginationBar align="left" />
```

<div class="mb-3 d-flex align-items-center">
  Specify alignment direction
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
  border
/>

### Display border mode

```vue
<PaginationBar border />
```

<PaginationBar
  :total-row="28"
  align="left"
  border
/>

### Round style page number button

```vue
<PaginationBar circle />
```

<PaginationBar
  :total-row="28"
  align="left"
  circle
/>

### Enabled and disabled

```vue
<PaginationBar :disabled="true" />
```

<div class="form-check form-switch d-inline-flex align-items-center border px-3 py-2 shadow-sm rounded-3">
  <label class="form-check-label" for="switchDisabled">Enabled</label>
  <input
    class="form-check-input mx-3"
    type="checkbox"
    role="switch"
    id="switchDisabled"
    v-model="disabled"
  >
  <label class="form-check-label" for="switchDisabled">Disabled</label>
</div>

<div class="my-3">
  <PaginationBar
    :total-row="28"
    :disabled="disabled"
    align="left"
  />
</div>

<PaginationBar
  :total-row="28"
  :disabled="disabled"
  border
  align="left"
/>

### Modules on / off

Setup pagination modules on or off

<div class="my-3 user-select-none border shadow-sm p-2 rounded-3">
  <div>
    <input
      type="checkbox"
      v-model="switchPageSizeOptions"
      id="checkbox-page-size-menu"
    />
    <label for="checkbox-page-size-menu">Page size list</label>
  </div>
  <div>
    <input
      type="checkbox"
      :value="true"
      v-model="switchInfo"
      id="checkbox-info"
    />
    <label for="checkbox-info">Pagination status information</label>
  </div>
  <div>
    <input
      type="checkbox"
      :value="true"
      v-model="switchPageNumber"
      id="checkbox-page-number"
    />
    <label for="checkbox-page-number">Page numbers</label>
  </div>
  <div>
    <input
      type="checkbox"
      :value="true"
      v-model="switchFirst"
      id="checkbox-first"
    />
    <label for="checkbox-first">First page button</label>
  </div>
  <div>
    <input
      type="checkbox"
      :value="true"
      v-model="switchLast"
      id="checkbox-last"
    />
    <label for="checkbox-last">Last page button</label>
  </div>
</div>

<PaginationBar
  align="left"
  :total-row="28"
  :info="switchInfo"
  :page-size-options="switchPageSizeOptions"
  :page-number="switchPageNumber"
  :first="switchFirst"
  :last="switchLast"
/>

### Slot

`v-page` provides scoped slots to output pagination state for more easily customization

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

### Display all data option

Add `All` item to page size list to display all data without paging. When this item is selected, the response data of the [change](#change) event is as follows

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

`v-page` component props arguments

```ts
interface PaginationProps {
  /**
   * The number of current page
   */
  modelValue?: number
  /**
   * The number of page size
   * @default 10
   */
  pageSize?: number
  /**
   * The number of total record
   */
  totalRow: number
  /**
   * Component language
   * @default `en`
   *
   * The complete language list
   * `cn` Simplified Chinese
   * `en` English
   * `de` German
   * `pt` Portuguese
   * `jp` Japanese
   */
  language?: 'cn' | 'en' | 'de' | 'jp' | 'pt'
  /**
   * List of the number of records per page, only
   * valid when `pageSizeOptions` is `true`
   * @default [10, 20, 50, 100]
   */
  pageSizeMenu?: number[]
  /**
   * Alignment direction
   * @default `right`
   */
  align?: 'left' | 'right' | 'center'
  /**
   * Disabled the pagination
   * @default false
   */
  disabled?: boolean
  /**
   * Display the border
   * @default true
   */
  border?: boolean
  /**
   * Round style page number button
   * @default false
   */
  circle?: boolean
  /**
   * Display page size list panel
   * @default true
   */
  pageSizeOptions?: boolean
  /**
   * Display page information panel
   * @default true
   */
  info?: boolean
  /**
   * Display page number buttons
   * @default true
   */
  pageNumber?: boolean
  /**
   * Display first page button
   * @default true
   */
  first?: boolean
  /**
   * Display last page button
   * @default true
   */
  last?: boolean
  /**
   * Whether add `All` item in page length list
   * @default false
   */
  displayAll?: boolean
  /**
   * Hide pagination when only have one page
   * @default false
   */
  hideOnSinglePage?: boolean
}
```

## Events

Component operation response events

### change

Response event triggered when data changes in the operation of pagination

```ts
change: (data: PageInfo) => void
```

```ts
interface PageInfo {
  // Current page number
  pageNumber: number
  // Page size
  pageSize: number
  // Total page
  totalPage: number
}
// You can directly use the type description provided by the component
import type { PageInfo } from 'v-page'
```

### update:modelValue

The response event triggered when the current page changes

```ts
`update:modelValue`: (value: number) => void
```

### update:pageSize

The response event triggered when the number of records per page changes

```ts
`update:pageSize`: (value: number) => void
```
