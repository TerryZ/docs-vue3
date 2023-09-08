# Region

行政区划选择器组件

[![GitHub Repo stars](https://img.shields.io/github/stars/terryz/v-region?style=social)](https://github.com/TerryZ/v-region) [![GitHub forks](https://img.shields.io/github/forks/terryz/v-region?style=social)](https://github.com/TerryZ/v-region)

项目状态

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/TerryZ/v-region/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/TerryZ/v-region/tree/master) [![code coverage](https://codecov.io/gh/TerryZ/v-region/branch/master/graph/badge.svg?token=FmdV7kVgIp)](https://codecov.io/gh/TerryZ/v-region) [![npm version](https://img.shields.io/npm/v/v-region.svg)](https://www.npmjs.com/package/v-region) [![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://mit-license.org/) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

版本更新内容请访问 [Changelog](https://github.com/TerryZ/v-region/blob/dev/CHANGELOG-CN.md)

如果您的项目正在使用 [vue 2.x](https://v2.vuejs.org/v2/guide/) 版本生态，请使用 [v-region 2.x](https://github.com/TerryZ/v-region/tree/dev-vue2) 版本

## 安装

将 `v-region` 组件安装到项目中

::: code-group

```sh [npm]
npm i v-region
```

```sh [yarn]
yarn add v-region
```

```sh [pnpm]
pnpm add v-region
```

:::

全局安装组件

```js
// add component in global scope as plugin
import { createApp } from 'vue'
import App from './app.vue'
import Region from 'v-region'

const app = createApp(App)
/**
 * Globally register region components
 * v-region-group
 * v-region-selects
 * v-region-columns
 * v-region-city-picker
 * v-region-text
 */
app.use(Region)
app.mount('#app')
```

局部使用组件，这是更推荐的使用方式，而且这也更有利于项目打包时的代码拆分，达到更好的资源按需引用的效果

```vue
<template>
  <RegionSelects />
</template>

<script setup>
import { RegionSelects } from 'v-region'
</script>
```

## 实例

### 下拉列表模式

```html
<RegionSelects :city="false" />
```

<RegionSelects :city="false" />

```html
<RegionSelects :area="false" />
```

<RegionSelects :area="false" />

```html
<RegionSelects />
```

<RegionSelects />

```html
<RegionSelects :town="true" />
```

<RegionSelects
  :town="true"
  @change="selectChange"
/>

[change](#change) 事件响应结果

<div class="bg-light rounded-3 p-3 my-3">
{{ selectSelectedData }}
</div>

#### 选择项目值绑定

```vue
<template>
  <RegionSelects
    :town="true"
    v-model="region"
  />
</template>

<script setup>
import { ref } from 'vue'
import { RegionSelects } from 'v-region'
const region = ref({
  province: '350000',
  city: '350100',
  area: '350104',
  town: '350104008'
})
</script>
```

<RegionSelects
  class="mb-3"
  :town="true"
  v-model="region"
/>

#### 禁用状态

```html
<RegionSelects
  :town="true"
  :disabled="true"
  v-model="region"
/>
```

<RegionSelects
  :town="true"
  :disabled="true"
  v-model="region"
/>

### 纯文本模式

行政区域信息以纯文本方式展示

```vue
<template>
  <RegionText v-model="region" />
</template>

<script setup>
import { ref } from 'vue'
import { RegionText } from 'v-region'
const region = ref({
  province: '350000',
  city: '350100',
  area: '350104',
  town: '350104008'
})
</script>
```

<div class="border rounded-3 shadow-sm p-3 my-3">
  <RegionText v-model="region" />
</div>

#### 分隔符

在各级别行政区域名称间应用指定的分隔符，增加信息可读性

```html
<RegionText
  v-model="region"
  separator="-"
/>
```

<div class="border rounded-3 shadow-sm p-3 mt-3">
  <RegionText
    v-model="region"
    separator="-"
  />
</div>

### 分组模式

使用分组切换显示行政区域的选择模式

#### 分组选择器模式

```html
<RegionGroup v-model="region" />
```

<RegionGroup />

使用内置按钮作为触发对象的选择器模式

#### 分组核心模块

```html
<RegionGroupCore v-model="region" />
```

<RegionGroupCore class="border rounded-3 shadow-sm" />

核心模块可自由搭配其他交互形式

#### 分组自定义选择器触发对象

使用作用域插槽 `Scoped slots` 自定义选择器触发对象

```html
<RegionGroup :town="true">
  <template #default="{ region, visible }">
    <button
      type="button"
      class="btn btn-success"
    >
      region: <span v-text="resultText(region)" />,
      visible: <span v-text="visible" />
    </button>
  </template>
</RegionGroup>
```

<RegionGroup :town="true">
  <template #default="{ region, visible }">
    <div class="bg-success px-3 py-2 rounded-3 text-white" >
      region: <span v-text="resultText(region)" />,
      visible: <span v-text="visible" />
    </div>
  </template>
</RegionGroup>

作用域插槽中输出了两个数据字段

- `region` 当前区域选择情况数据模型
- `visible` 下拉层打开状态

### 泳道模式

使用多数据列并排展示行政区域的选择模式

#### 泳道选择器模式

```html
<RegionColumns v-model="region" />
```

<RegionColumns />

使用内置按钮作为触发对象的选择器模式

#### 泳道核心模块

```html
<RegionColumnsCore v-model="region" />
```

<RegionColumnsCore class="border rounded-3 shadow-sm" />

核心模块可自由搭配其他交互形式

#### 泳道自定义选择器触发对象

使用作用域插槽 `Scoped slots` 自定义选择器触发对象

```html
<RegionColumns :town="true">
  <template #default="{ region, visible }">
    <button
      type="button"
      class="btn btn-success"
    >
      region: <span v-text="resultText(region)" />,
      visible: <span v-text="visible" />
    </button>
  </template>
</RegionColumns>
```

<RegionColumns :town="true">
  <template #default="{ region, visible }">
    <div class="bg-success px-3 py-2 rounded-3 text-white" >
      region: <span v-text="resultText(region)" />,
      visible: <span v-text="visible" />
    </div>
  </template>
</RegionColumns>

作用域插槽中输出了两个数据字段

- `region` 当前区域选择情况数据模型
- `visible` 下拉层打开状态

### 城市选择器模式

```vue
<template>
  <RegionCityPicker
    v-model="selected"
    @change="change"
  />
</template>

<script setup>
import { ref } from 'vue'
import { RegionCityPicker } from 'v-region'

const selected = ref(['110000', '130200', '140100'])
function change (data) {
  console.log(data)
}
</script>
```

<RegionCityPicker
  v-model="citySelected"
  @change="cityChange"
/>

[change](#change) 事件响应数据

<div class="bg-light rounded-3 p-3 my-3">
  {{ citySelectedData }}
</div>

#### 折叠项目

在默认情况下，选择超过 2 个城市项目，将会被统一收纳显示，并显示折叠收纳数量

设置 `overflow` 为 `true` 后，选择项目将被完整显示在触发对象中，不再进行折叠

```html
<RegionCityPicker
  v-model="selected"
  :overflow="true"
/>
```

<RegionCityPicker
  v-model="citySelected"
  :overflow="true"
/>

<script setup>
import { ref } from 'vue'
import {
  RegionSelects,
  RegionText,
  RegionGroup,
  RegionGroupCore,
  RegionColumns,
  RegionColumnsCore,
  RegionCityPicker
} from 'v-region'

const selectSelectedData = ref({})
const region = ref({
  province: '350000',
  city: '350100',
  area: '350104',
  town: '350104008'
})
const citySelected = ref(['110000', '130200', '140100'])
const citySelectedData = ref([])

function cityChange (data) {
  citySelectedData.value = data
}
function selectChange (data) {
  selectSelectedData.value = data
}
function resultText (region) {
  if (!region) return '无数据'
  if (!Object.values(region).some(val => val) || !region) {
    return '无数据'
  }
  return Object
    .values(region)
    .filter(val => val)
    .map(val => val.value)
    .join(',')
}
</script>

## Props

### v-model/modelValue

- 类型 `RegionKeys | string[]`

```ts
interface RegionKeys {
  province: string
  city: string
  area: string
  town: string
}
```

各级别行政区划选择项目绑定值

::: tip 格式
`RegionCityPicker` 城市选择器的选择项目绑定通过 `string[]` 数组格式进行绑定
:::

### city

- 类型 `boolean`
- 默认 `true`

使用城市行政级别，若关闭该级别，则所有下级行政级别均不可用

### area

- 类型 `boolean`
- 默认 `true`

使用区/县行政级别，若关闭该级别，则所有下级行政级别均不可用

### town

- 类型 `boolean`
- 默认 `false`

使用乡/镇/街道行政级别

### blank

- 类型 `boolean`
- 默认 `false`

在下拉选项中增加 `请选择` 选项，该功能仅适用于 `RegionSelects`

### disabled

- 类型 `boolean`
- 默认 `false`

设置插件禁用状态，适用于 `RegionSelects`、`RegionGroup` 与 `RegionColumns` 模式

### language

- 类型 `string`
- 默认 `'cn'`

插件使用语言

- `cn` 中文
- `en` 英文

### separator

- 类型 `string`
- 默认 `''`

行政区域名称间的分隔符，适用于 `RegionText` 模式

### overflow

- 类型 `boolean`
- 默认 `false`

选择的城市较多时，超出 2 个的城市仅以数量显示，仅适用于 `RegionCityPicker` 模式

- `true` 显示所有选中城市名称
- `false` 选中的城市多于两个时，仅显示前两个城市名称，其他城市会被收起

## 事件

组件各类操作响应事件

### change

响应行政区划变化

```ts
change: (data: RegionModel) => void

interface RegionLevel {
  key: string
  value: string
}

interface RegionModel {
  province: RegionLevel
  city: RegionLevel
  area: RegionLevel
  town: RegionLevel
}
```

### complete

响应所有有效的行政区划选择完成，该事件仅适用于 `RegionGroupCore` 与 `RegionColumnsCore` 核心功能模块

```ts
complete: () => void
```

### visible-change

响应下拉栏打开 / 关闭的状态变化

```ts
'visible-change': (visible: boolean) => void
```

## API

使用插件的 API 前，需为组件声明 `ref` 属性，并使用 `ref()` 声明对应名称的响应式变量以调用 API 方法

```vue
<template>
  <RegionSelects ref="region" />
</template>

<script setup>
import { ref } from 'vue'
import { RegionSelects } from 'v-region'

const region = ref()
// call api
region.value.reset()
</script>
```

### reset

重置并清空所有级别的数据

```ts
reset: () => void
```
