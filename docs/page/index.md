# Pagination

Pagination component

[![GitHub Repo stars](https://img.shields.io/github/stars/terryz/v-page?style=social) ![GitHub forks](https://img.shields.io/github/forks/terryz/v-page?style=social)](https://github.com/TerryZ/v-page)

Repository status

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/TerryZ/v-page/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/TerryZ/v-page/tree/master) [![code coverage](https://codecov.io/gh/TerryZ/v-page/branch/master/graph/badge.svg)](https://codecov.io/gh/TerryZ/v-page) [![npm version](https://img.shields.io/npm/v/v-page.svg)](https://www.npmjs.com/package/v-page) [![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://mit-license.org/) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Detailed changes for each release are documented in [Changelog](https://github.com/TerryZ/v-page/blob/dev/CHANGELOG.md)

If you are using [vue 2.x](https://v2.vuejs.org/v2/guide/) version, please use [v-page 2.x](https://terryz.github.io/vue/#/page) version instead

## Installation

Install `v-page` component in to your project

```sh
# use npm
npm i v-page
# use yarn
yarn add v-page
# use pnpm
pnpm add v-page
```

Globally install component

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
  <Page />
</template>

<script setup>
import { Page } from 'v-page'
</script>
```

## Use component on page

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

## Examples

### Quick demo

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
    :language="lang"
    align="center"
    @change="changeBasic"
  />
</div>

Pagination [change](#change) event response data

<div class="bg-light rounded-3 p-3 font-monospace">
  <div
    v-for="(item, index) in logs"
    :key="index"
  >
    <small>{{ JSON.stringify(item, null, 2) }}</small>
  </div>
</div>

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
  <Page
    :total-row="88"
    :language="lang"
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
  :language="lang"
  align="left"
  @change="changeGallery"
/>

### Pagination operation

Some cases showing how pagination operation works

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
  :language="lang"
/>

### Alignment direction

```vue
<Page align="left" />
```

<div class="mb-3">
  Specify alignment direction
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
  :language="lang"
  border
/>

### Display border mode

```vue
<Page :border="true" />
```

<Page
  :total-row="28"
  :language="lang"
  align="left"
  border
/>

### Enabled and disabled

```vue
<Page :disabled="true" />
```

<div class="border shadow-sm p-2 d-inline-flex rounded-3 mb-3">
  <input type="radio" v-model="disabled" :value="false" id="radio-enabled" />
  <label for="radio-enabled">Enabled</label>
  <input type="radio" v-model="disabled" :value="true" id="radio-disabled" />
  <label for="radio-disabled">Disabled</label>
</div>

<Page
  :total-row="28"
  :disabled="disabled"
  :language="lang"
  align="left"
/>

### Modules on / off

Setup pagination modules on or off

<div class="my-3 user-select-none border shadow-sm p-2 rounded-3">
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
      id="checkbox-page-size-menu"
      @change="pageSizeMenuChange"
    />
    <label for="checkbox-page-size-menu">Page size list</label>
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

<Page
  :total-row="28"
  :language="lang"
  align="left"
  :info="switchInfo"
  :page-size-menu="switchPageSizeMenu"
  :page-number="switchPageNumber"
  :first="switchFirst"
  :last="switchLast"
/>

### Slot

`v-page` provides scoped slots to output pagination state for more easily customization

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
  :language="lang"
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

### Display all data option

Add `All` item to page size list to display all data without paging. When this item is selected, the response data of the [change](#change) event is as follows

```js
{
  pageNumber: 1,
  pageSize: 0
}
```

<Page
  :total-row="28"
  :display-all="true"
  :language="lang"
  align="left"
/>

<script setup>
import { ref } from 'vue'
import { useData } from 'vitepress'
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

const { lang } = useData()

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

- type `number`

Set current page / default page

### total-row

- type `number`

The total number of records in each data request

### language

- type `string`
- default `'cn'`

Specify the pagination language, check below for a complete language list

- `'cn'` 简体中文
- `'en'` English
- `'de'` German
- `'pt'` Portuguese
- `'jp'` Japanese

### page-size-menu

- type `number[] | boolean`
- default `[10, 20, 50, 100]`

Set page size item in to list, set `false` to close page size selection module

### align

- type `'left' | 'center' | 'right'`
- default `'right'`

Pagination alignment direction

### disabled

- type `boolean`
- default `false`

Enabled / Disabled Pagination component

### info

- type `boolean`
- default `true`

Display pagination status information module

### border

- type `boolean`
- default `false`

Display outline borders in each modules

### page-number

- type `boolean`
- default `true`

Display page numbers

### first

- type `boolean`
- default `true`

Display first page button

### last

- type `boolean`
- default `true`

Display last page button

### display-all

- type `boolean`
- default `false`

Add `All` option to display all data in to page size list

## Events

Component operation response events

### change

Response event triggered when data changes in the operation of pagination

```ts
change(data: PageState): void
```

```ts
interface PageState {
  // Current page number
  pageNumber: number
  // Page size
  pageSize: number
}
```

## API

Before using Pagination component's API, need to declare a ref attribute for the component, declare a ref variable by `ref()` to hold the element reference(the name must match template ref value) and use it to call API methods

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

Go to specified page

```ts
goPage(page: number): void
```

### reload

Update pagination state and re-trigger component events

```ts
reload(): void
```
