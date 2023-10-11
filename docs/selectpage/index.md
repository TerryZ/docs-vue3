# SelectPage

SelectPage for Vue3, a select items components provides the list of items with pagination

[![GitHub Repo stars](https://img.shields.io/github/stars/terryz/v-selectpage?style=social)](https://github.com/TerryZ/v-selectpage) [![GitHub forks](https://img.shields.io/github/forks/terryz/v-selectpage?style=social)](https://github.com/TerryZ/v-selectpage)

Repository status

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/TerryZ/v-selectpage/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/TerryZ/v-selectpage/tree/master) [![code coverage](https://codecov.io/gh/TerryZ/v-selectpage/branch/master/graph/badge.svg?token=FmdV7kVgIp)](https://codecov.io/gh/TerryZ/v-selectpage) [![npm version](https://img.shields.io/npm/v/v-selectpage.svg)](https://www.npmjs.com/package/v-selectpage) [![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://mit-license.org/) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Detailed changes for each release are documented in [Changelog](https://github.com/TerryZ/v-selectpage/blob/dev/CHANGELOG.md)

If you are using [vue 2.x](https://v2.vuejs.org/v2/guide/) version, please use [v-selectpage 2.x](https://github.com/TerryZ/v-selectpage/tree/dev-vue-2) version instead

## Installation

Install `v-selectpage` component in to your project

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

## Mode

Introduction to the working modes of `v-selectpage` components

### Selector mode

Regular dropdown selection mode

```js
import { SelectPageList, SelectPageTable } from 'v-selectpage'
```

### Core module mode

The core module is a list and table module with search and paging functionality, which can be used directly, placed in other containers, or combined with other components to greatly expand the forms and scenarios in which the functionality can be used

```js
import { SelectPageListCore, SelectPageTableCore } from 'v-selectpage'
```

## Examples

### List view

```vue
<template>
  <SelectPageList @fetch-data="fetchData" />
</template>

<script setup lang="ts">
import { SelectPageList } from 'v-selectpage'
import type { PageParameters, FetchDataCallback } from 'v-selectpage'

// local data list for example
const list = [
  { id: 1, name: 'Chicago Bulls', desc: '芝加哥公牛' },
  { id: 2, name: 'Cleveland Cavaliers', desc: '克里夫兰骑士' },
  { id: 3, name: 'Detroit Pistons', desc: '底特律活塞' },
  ...
]

function fetchData (data: PageParameters, callback: FetchDataCallback) {
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
  @fetch-data="fetchList"
/>

In the above example, local static data is used as an example, but in more cases we need to apply remote data for loading and query

```js
function fetchData (data, callback) {
  const params = { ... }
  // get current page items from remote api
  axios.post('some-api-address', params).then(resp => {
    callback(resp.list, resp.count)
  })
}
```

#### Keyboard shortcuts

When the dropdown container is open and the input focus is in the search box, the following actions can be used for shortcut operations

- `up` and `down` key to toggle the current highlighted item
- `left` and `right` key to switch to the previous or next page
- `enter` When a highlighted row exists, the data in that row will be selected
- `esc` close dropdown container

### Table view

```vue
<template>
  <SelectPageTable
    :columns="teamColumns"
    @fetch-data="fetchData"
  />
</template>

<script setup lang="ts">
import { SelectPageTable } from 'v-selectpage'
import type {
  PageParameters, FetchDataCallback, SelectPageTableColumn
} from 'v-selectpage'

// local data list for example
const list = [
  { id: 1, name: 'Chicago Bulls', desc: '芝加哥公牛', abbr: 'CHI' },
  { id: 2, name: 'Cleveland Cavaliers', desc: '克里夫兰骑士', abbr: 'CLE' },
  { id: 3, name: 'Detroit Pistons', desc: '底特律活塞', abbr: 'DET' },
  ...
]
const teamColumns: SelectPageTableColumn[] = [
  { title: 'Id', data: 'id' },
  { title: 'Team name', data: row => `${row.abbr} - ${row.name}`, width: 250 },
  { title: 'Description', data: 'desc' }
]

function fetchData (data: PageParameters, callback: FetchDataCallback) {
  ...
}
</script>
```

<SelectPageTable
  :columns="teamColumns"
  @fetch-data="fetchList"
/>

`teamColumns` defines the data columns in the table. The `data` attribute in the column model has the same function as [labelProp](#labelprop), that is, you can specify a certain data column as the content field, or provide a function to render the content of the cell to make customizations

In the table view, [labelProp](#labelprop) is only used to specify the content of the selected item in the trigger object

### Core module

List view core module

```vue
<template>
  <SelectPageListCore @fetch-data="fetchData" />
</template>

<script setup>
import { SelectPageListCore } from 'v-selectpage'
</script>
```

<SelectPageListCore
  class="border rounded-3 shadow-sm"
  @fetch-data="fetchList"
/>

Table view core module

```vue
<template>
  <SelectPageTableCore @fetch-data="fetchData" />
</template>

<script setup>
import { SelectPageTableCore } from 'v-selectpage'
</script>
```

<SelectPageTableCore
  class="border rounded-3 shadow-sm"
  :columns="teamColumns"
  @fetch-data="fetchList"
/>

### Multiple selection

Set the `multiple` prop to enabled multiple item selection

```vue
<template>
  <SelectPageList
    multiple
    v-model="selected"
    @fetch-data="fetchData"
    @fetch-selected-data="fetchSelectedData"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SelectPageList } from 'v-selectpage'
import type {
  SelectPageKey, FetchSelectedDataCallback,
  PageParameters, FetchDataCallback
} from 'v-selectpage'
// local data list for example
const list = [
  { id: 1, name: 'Chicago Bulls', desc: '芝加哥公牛' },
  { id: 2, name: 'Cleveland Cavaliers', desc: '克里夫兰骑士' },
  { id: 3, name: 'Detroit Pistons', desc: '底特律活塞' },
  ...
]
const selected = ref<SelectPageKey[]>([1, 2, 4])

function fetchData (data: PageParameters, callback: FetchDataCallback) { ... }
function fetchSelectedData (
  keys: SelectPageKey[],
  callback: FetchSelectedDataCallback
) {
  // get items model by keys when v-model is set to a non-empty value
  callback(list.filter(val => keys.includes(val.id)))
}
</script>
```

<div class="mb-3">
  <SelectPageList
    multiple
    v-model="selected"
    @fetch-data="fetchList"
    @fetch-selected-data="fetchSelectedData"
  />
</div>

#### v-model and fetch-selected-data

The above is an example of setting a default selected item. `v-model` is used in conjunction with the `fetch-selected-data` event. When one or more keys are set using `v-model` (the content of the key values should correspond to the data columns specified by `keyProp`), the component responds to the `fetch-selected-data` event to fetch the data corresponding to the key, while the selection of the item(s) through the interaction of the component does not trigger this event.

#### Limit the maximum number of selection

Set the `max` value to limit the maximum number of selections that can be made

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
  multiple
  v-model="selected"
  :max="3"
  @fetch-data="fetchList"
  @fetch-selected-data="fetchSelectedData"
/>

### Other setting option

Other setting options for components

#### Disabled

```html
<SelectPageList disabled />
<SelectPageList :disabled="true" />
```

<div class="row">
  <div class="col-md-6">
  <SelectPageList
    disabled
    v-model="oneSelected"
    @fetch-data="fetchList"
    @fetch-selected-data="fetchSelectedData"
  />
  </div>
  <div class="col-md-6">
  <SelectPageList
    disabled
    multiple
    v-model="selected"
    @fetch-data="fetchList"
    @fetch-selected-data="fetchSelectedData"
  />
  </div>
</div>

#### Close pagination bar

```html
<SelectPageList :pagination="false" />
```

<div class="mb-3">
  <SelectPageList
    :pagination="false"
    @fetch-data="fetchList"
  />
</div>

#### RTL

Some languages have a writing habit of writing from right to left, such as Hebrew `he` and Arabic `ar`

```html
<SelectPageList :rtl="true" />
```

<div class="mb-3">
  <SelectPageList
    :rtl="true"
    @fetch-data="fetchList"
  />
</div>

#### Content area width

```html
<SelectPageList :width="500" />
<SelectPageList width="20rem" />
```

<SelectPageList
  :width="500"
  @fetch-data="fetchList"
/>

### Practical cases

Some cases that may be used in actual business applications for reference

#### List of world countries

Data source: [country-list](https://github.com/umpirsky/country-list/blob/master/data/en_US/country.json)

<SelectPageList
  key-prop="key"
  :label-prop="countryLabel"
  placeholder="Countries of the world"
  @fetch-data="fetchCountries"
/>

::: details Example code

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

#### World time zone table

Data source: [timezones](https://gist.github.com/TerryZ/4ddab237f80ef7e27e5eb206d9e66e24)

<SelectPageTable
  key-prop="key"
  label-prop="name"
  :columns="timezonesColumn"
  placeholder="World time zone"
  @fetch-data="fetchTimezones"
/>

::: details Example code

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
import { countries, timezones } from '../cn/selectpage/data'
import { useSelectPageHandle } from '../cn/selectpage/handle'

const { fetchData: fetchList, fetchSelectedData } = useSelectPageHandle()
const { fetchData: fetchCountries } = useSelectPageHandle(countries)
const { fetchData: fetchTimezones } = useSelectPageHandle(timezones)

const oneSelected = ref([1])
const selected = ref([1, 2, 4])

const teamColumns = [
  { title: 'Id', data: 'id' },
  { title: 'Team name', data: row => `${row.abbr} - ${row.name}`, width: 250 },
  { title: 'Description', data: 'desc' }
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

- type `(string | number)[]`
- default `undefined`

Binds the key value of the selected item to match the contents of the field specified by [keyProp](#keyprop)

### placeholder

- type `string`
- default `''`

The placeholder text content displayed when no item is selected. If this parameter is not set, the component will use the placeholder set in i18n by default

This prop only work on [Selector mode](#selector-mode)

### multiple

- type `boolean`
- default `false`

Multiple selection mode

::: info Presentation form
In single selection mode, the content of the selected item is displayed directly in the trigger object. In multiple selection mode, the selected items will be displayed in the trigger object in the form of tags.
:::

### language

- type `string`
- default `'en'`

The language used by the component. Other optional languages are as follows:

| Language code | Language name |
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

- type `string`
- default `'id'`

Specify a property as a key value field that will be used as the basis field for `v-model/modelValue` and data matching

### labelProp

- type `string | function`
- default `'name'`

Specify a data property or a function to process the text content displayed by the list item

::: info Scope of action

- The line items of the list view display text content
- Display the text of the selected item in the trigger object of [Selector mode](#selector-mode)
- [Selector mode](#selector-mode) The text to be displayed in the tag of the triggered object in multiple selection mode
:::

### columns

- type `TableColumn[]`
- default `undefined`

Tabular data column setting model

```ts
interface TableColumn {
  title: string           // title text
  data: string | function // data property or data processing function
  width?: number | string // column width
}
```

This prop only work on tabular form components `SelectPageTable` and `SelectPageTableCore`

### pageSize

- type `number`
- default `10`

The number of records per page is displayed, and when the paging bar is turned off, a fixed `0` is applied

### max

- type `number`
- default `0`

Maximum number of items that can be selected, set to `0` for no limit

> This option relies on the [multiple](#multiple) prop being set to `true`

### pagination

- type `boolean`
- default `true`

Data list using pagination bar

When the pagination bar is closed, the `pageNumber` and `pageSize` data items in the data request parameter of the [fetch-data](#fetch-data) event are fixed to output as follows

```js
{
  pageNumber: 1,
  pageSize: 0
}
```

### rtl

- type `boolean`
- default `false`

Text rendering direction from right to left

### width

- type `string | number`
- default `undefined`

Specifies the width of the content container; specifying content in `number` format automatically uses pixels in `px` units; content in `string` format is applied directly

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

- type `number`
- default `300`

debounce delay when typing, in milliseconds

### disabled

- type `boolean`
- default `false`

Component disabled states, only work on [Selector mode](#selector-mode)

### customTriggerClass

- type `string`
- default `''`

Add custom class to trigger container, work on dropdown selection mode

### customContainerClass

- type `string`
- default `''`

Add custom class to dropdown container, work on dropdown selection mode

## Event

Response events for various operations of components

### update:modelValue

When an item's selection status changes, the item key collection is output in response to this event

```ts
`update:modelValue`: (keys: SelectPageKey[]) => void

type SelectPageKey = string | number
```

Handling of `v-model` for manual binding

```vue
<template>
  <SelectPageListCore
    :modelValue="selected"
    @update:modelValue="keys => selected = keys"
  />
</template>
```

### fetch-data

Response data list fetching and content searching

```ts
`fetch-data`: (data: PageParameters, callback: FetchDataCallback) => void

interface PageParameters {
  search: string     // search keyword
  pageNumber: number // current page number
  pageSize: number   // the number of records per page
}
type FetchDataCallback = (
  // data list
  dataList: Record<string, unknown>[],
  // total number of records
  resultCount: number
) => void
```

The response function submits the results of the data query to the component via the `callback` function based on the paging and search information provided by `data`

```js
function fetchData (data, callback) {
  const params = { ... }
  search(params).then(resp => callback(resp.list, resp.count))
}
```

::: tip Close pagination bar
When the pagination bar is turned off, the parameters output in the event response will become fixed, see [pagination](#pagination) props setting for details
:::

### fetch-selected-data

When the selected item is changed through `v-model/modelValue`, respond to this event to obtain the selected item data model

```ts
`fetch-selected-data`: (
  keys: SelectPageKey[],
  callback: FetchSelectedDataCallback
) => void

type FetchSelectedDataCallback = (dataList: Record<string, unknown>[]) => void
```

The event response function gets the corresponding data model based on the key collection and submits it to the component via the `callback` function

```js
function fetchSelectedData (keys, callback) {
  search({ keys }).then(resp => callback(resp.list))
}
```

### selection-change

Events responded to when the status of an item selection changes

```ts
`selection-change`: (items: Record<string, unknown>[]) => void
```

### remove

In response to the selected items being removed

```ts
remove: (items: Record<string, unknown>[]) => void
```

### close-dropdown

Trigger event is used to close the dropdown container

```ts
`close-dropdown`: () => void
```

This event only work on [Core module mode](#core-module-mode)

### adjust-dropdown

Trigger events are used to automatically adjust the dropdown container position

```ts
`adjust-dropdown`: () => void
```

This event only work on [Core module mode](#core-module-mode)

### visible-change

Respond to dropdown container state changes

```ts
`visible-change`: (visible: boolean) => void
```

This event only work on [Selector mode](#selector-mode)

## API

Before using the component's API, you need to declare the `ref` attribute for the component, and use `ref()` to declare a reactive variable with the corresponding name to call the API method

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

Remove the selected state of the specified data

```ts
removeItem: (item: Record<string, unknown>) => void
```

This API only work on [Core module mode](#core-module-mode)

### removeAll

Remove all selected items

```ts
removeAll: () => void
```

This API only work on [Core module mode](#core-module-mode)
