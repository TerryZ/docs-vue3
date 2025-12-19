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

<script setup>
import { ref, computed } from 'vue'
import {
  SelectPageList,
  SelectPageListCore,
  SelectPageTable,
  SelectPageTableCore
} from 'v-selectpage'
import { countries, timezones } from '@/script/select-page/data'
import { useSelectPageHandle } from '@/script/select-page/handle'

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

### List view

::: code-group

```vue-html
<SelectPageList @fetch-data="fetchData" />
```

```ts
import {
  type PageParameters,
  type FetchDataCallback,
  SelectPageList
} from 'v-selectpage'

// data list for example
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
```

:::

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

::: code-group

```vue-html
<SelectPageTable
  :columns="teamColumns"
  @fetch-data="fetchData"
/>
```

```ts
import {
  type PageParameters,
  type FetchDataCallback,
  type SelectPageTableColumn,
  SelectPageTable
} from 'v-selectpage'

// data list for example
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
```

:::

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

::: code-group

```vue-html
<SelectPageList
  multiple
  v-model="selected"
  @fetch-data="fetchData"
  @fetch-selected-data="fetchSelectedData"
/>
```

```ts
import { ref } from 'vue'
import {
  type SelectPageKey,
  type FetchSelectedDataCallback,
  type PageParameters,
  type FetchDataCallback,
  SelectPageList
} from 'v-selectpage'
// data list for example
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
```

:::

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

```vue-html
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

```vue-html
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

```vue-html
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

```vue-html
<SelectPageList :rtl="true" />
```

<div class="mb-3">
  <SelectPageList
    :rtl="true"
    @fetch-data="fetchList"
  />
</div>

#### Content area width

```vue-html
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

## Types

```ts
type SelectPageKey = string | number

/**
 * `zh-chs` Chinese Simplified
 * `en` English
 * `ja` Japanese
 * `ar` Arabic
 * `es` Spanish
 * `de` German
 * `ro` Romanian
 * `fr` French
 * `pt-br` Portuguese-Brazil
 * `pl` Polish
 * `nl` Dutch
 * `zh-cht` Chinese Traditional
 * `ru` Russian
 * `tr` Turkish
 */
type LanguageKey =
  'zh-chs' | 'en' | 'ja' | 'ar' | 'es' | 'de' | 'ro' |
  'fr' | 'pt-br' | 'pl' | 'nl' | 'zh-cht' | 'ru' | 'tr'

interface TableColumn {
  /** Title text */
  title: string
  /** Data property or data processing function */
  data: string | function
  /** Column width */
  width?: number | string
}

interface PageParameters {
  /** Search keyword */
  search: string
  /** Current page number */
  pageNumber: number
  /** The number of records per page */
  pageSize: number
}

type FetchDataCallback = (
  /** Data list */
  dataList: Record<string, unknown>[],
  /** Total number of records */
  resultCount: number
) => void

type FetchSelectedDataCallback = (dataList: Record<string, unknown>[]) => void
```

## Props

```ts
interface SelectPageProps {
  /**
   * Binds the key value of the selected item to match the contents
   * of the field specified by `keyProp`
   */
  modelValue?: SelectPageKey[]
  /**
   * The placeholder text content displayed when no item is selected.
   * If this parameter is not set, the component will use the placeholder
   * set in i18n by default
   *
   * This prop only work on `Selector mode`
   */
  placeholder?: string
  /**
   * Multiple selection mode
   *
   * @default false
   */
  multiple?: boolean
  /**
   * The language used by the component
   *
   * @default `en`
   */
  language?: string
  /**
   * Specify a property as a key value field that will be used as
   * the basis field for `v-model/modelValue` and data matching
   *
   * @default `id`
   */
  keyProp?: string
  /**
   * Specify a data property or a function to process the text content
   * displayed by the list item
   *
   * @default `name`
   */
  labelProp?: string | Function
  /**
   * The number of records per page is displayed, and when the paging
   * bar is turned off, a fixed `0` is applied
   *
   * @default 10
   */
  pageSize?: number
  /**
   * Maximum number of items that can be selected, set to `0` for no limit
   *
   * This option relies on the `multiple` prop being set to `true`
   *
   * @default 0
   */
  max?: number
  /**
   * Data list using pagination bar
   *
   * @default true
   */
  pagination?: boolean
  /**
   * Text rendering direction from right to left
   *
   * @default false
   */
  rtl?: boolean
  /**
   * Specifies the width of the content container
   * specifying content in number format automatically uses pixels in px units
   * content in string format is applied directly
   */
  width?: string | number
  /**
   * Debounce delay when typing, in milliseconds
   *
   * @default 300
   */
  debounce?: number
}

interface SelectPageTableProps extends SelectPageProps {
  /**
   * Tabular data column setting model
   * 
   * This prop only work on tabular form components
   * - `SelectPageTable`
   * - `SelectPageTableCore`
   */
  columns?: SelectPageTableColumn[]
}

interface SelectorProps {
  /**
   * Component disabled states, only work on `Selector mode`
   *
   * @default false
   */
  disabled?: boolean
  /**
   * Add custom class to trigger container, work on `Selector mode`
   */
  customTriggerClass?: string
  /**
   * Add custom class to dropdown container, work on `Selector mode`
   */
  customContainerClass?: string
}

interface SelectPageSelectorProps extends
  SelectPageProps, SelectorProps {}

interface SelectPageTableSelectorProps extends
  SelectPageTableProps, SelectorProps {}
```

## Event

Response events for various operations of components

### update:modelValue

When an item's selection status changes, the item key collection is output in response to this event

```ts
`update:modelValue`: (keys: SelectPageKey[]) => void
```

Handling of `v-model` for manual binding

```vue-html
<SelectPageListCore
  :modelValue="selected"
  @update:modelValue="keys => selected = keys"
/>
```

### fetch-data

Response data list fetching and content searching

```ts
`fetch-data`: (data: PageParameters, callback: FetchDataCallback) => void
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
