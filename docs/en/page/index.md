# Pagination

Pagination component

[![GitHub Repo stars](https://img.shields.io/github/stars/terryz/v-page?style=social)](https://github.com/TerryZ/v-page) [![GitHub forks](https://img.shields.io/github/forks/terryz/v-page?style=social)](https://github.com/TerryZ/v-page)

Repository status

[![test](https://github.com/TerryZ/v-page/actions/workflows/npm-publish.yml/badge.svg?branch=master)](https://github.com/TerryZ/v-page/actions/workflows/npm-publish.yml) [![code coverage](https://codecov.io/gh/TerryZ/v-page/branch/master/graph/badge.svg)](https://codecov.io/gh/TerryZ/v-page) [![npm version](https://img.shields.io/npm/v/v-page.svg)](https://www.npmjs.com/package/v-page) [![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://mit-license.org/) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Detailed changes for each release are documented in [Changelog](https://github.com/TerryZ/v-page/blob/dev/CHANGELOG.md)

If you are using [vue 2.x](https://v2.vuejs.org/v2/guide/) version, please use [v-page 2.x](https://terryz.github.io/docs-vue/#/page) version instead

## Installation

Install `v-page` component in to your project

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

Globally install component

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

Can global config options in plugin install

```ts
export interface PaginationGlobalOptions {
  /**
   * Component language
   */
  language?: LanguageKey
  /**
   * When installing the plugin, whether the `PaginationBar` component be
   * registered globally at the same time
   * When applying to a global installation, you only want to set the
   * component language globally
   * @default false
   */
  register?: boolean
}

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

::: code-group

```vue-html
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

## Examples

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

### Quick demo

The most commonly used paging bar applications

<PaginationBarBase />

Pagination [change](#change) event response data

<LogDataPrinter :logs="logs" />

```vue-html
<PaginationBar
  align="center"
  :total-row="21"
  @change="change"
/>
```

### Gallery data

Gallery data grid display example

<PaginationGallery />

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

### Pagination operation

Some cases showing how pagination operation works

<PaginationOperation />

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

### Number of records per page

`pageSize` specifies the number of records per page, and `pageSizeMenu` provides a list of the number of records per page for users to quickly select

<PaginationPageSize />

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

When the value list provided by `pageSizeMenu` does not have an item matching the `pageSize` value, the value will be automatically added to the `pageSizeMenu` list and selected

### Alignment direction

<PaginationAlign />

```vue-html
<PaginationBar align="left" />
```

### Component styles

The style of the pagination bar

<PaginationStyle />

```vue-html
<PaginationBar border />
<PaginationBar circle />
```

### Enabled and disabled

<PaginationDisabled />

```vue-html
<PaginationBar :disabled="true" />
```

### Layout Arrangement

`v-page` can use the component modules of the pagination bar as needed, and adjust the order of arrangement to meet different layout requirements

<PaginationPanelOrder />

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

### Slot

`v-page` provides scoped slots to output pagination state for more easily customization

<PaginationSlot />

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

Custom content is wrapped by the `PaginationPanel` component to ensure the style consistency of the pagination bar

### Display all data option

Add `All` item to page size list to display all data without paging. When this item is selected, the response data of the [change](#change) event is as follows

```js
{
  pageNumber: 1,
  pageSize: 0,
  totalPage: 1
}
```

<PaginationDisplayAll />

```vue-html
<PaginationBar :total-row="28" display-all />
```

## Props

`v-page` component props arguments

```ts
type LanguageKey = 'cn' | 'en' | 'de' | 'jp' | 'pt'

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
  language?: LanguageKey
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
