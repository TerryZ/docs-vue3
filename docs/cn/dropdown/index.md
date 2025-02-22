# Dropdown

下拉菜单组件

[![GitHub Repo stars](https://img.shields.io/github/stars/terryz/v-dropdown?style=social)](https://github.com/TerryZ/v-dropdown) [![GitHub forks](https://img.shields.io/github/forks/terryz/v-dropdown?style=social)](https://github.com/TerryZ/v-dropdown)

项目状态

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/TerryZ/v-dropdown/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/TerryZ/v-dropdown/tree/master) [![codecov](https://codecov.io/gh/TerryZ/v-dropdown/branch/master/graph/badge.svg?token=veg52RGaZg)](https://codecov.io/gh/TerryZ/v-dropdown) [![npm version](https://img.shields.io/npm/v/v-dropdown.svg)](https://www.npmjs.com/package/v-dropdown) [![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://mit-license.org/) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

版本更新内容请访问 [Changelog](https://github.com/TerryZ/v-dropdown/blob/dev/CHANGELOG-CN.md)

如果您的项目正在使用 [vue 2.x](https://v2.vuejs.org/v2/guide/) 版本生态，请使用 [v-dropdown 2.x](https://github.com/TerryZ/v-dropdown/tree/dev-vue-2) 版本

## 安装

将 `v-dropdown` 组件安装到项目中

::: code-group

```sh [npm]
npm i v-dropdown
```

```sh [yarn]
yarn add v-dropdown
```

```sh [pnpm]
pnpm add v-dropdown
```

:::

### 常规用例

::: code-group

```vue-html
<Dropdown @visible-change="change">
  <!-- trigger element -->
  <template #trigger>
    <!-- built-in trigger button -->
    <DropdownTrigger />
  </template>

  <!-- contents display in dropdown -->
  <DropdownContent>
    <div>
      some contents
    </div>
  </DropdownContent>
</Dropdown>
```

```js
import { Dropdown, DropdownContent, DropdownTrigger } from 'v-dropdown'

function change (val) {
  console.log(val)
}
```

:::

## 实例

<script setup>
import { ref } from 'vue'
import { Dropdown } from 'v-dropdown'

import {
  DropdownClick,
  DropdownHover,
  DropdownContextmenu,
  DropdownManual,
  DropdownCustomStyle,
  DropdownSlotData
} from '@/script/dropdown'

import DropdownToggle from '@/views/dropdown/DropdownToggle.vue'
import DropdownDisabled from '@/views/dropdown/DropdownDisabled.vue'
import DropdownAlign from '@/views/dropdown/DropdownAlign.vue'
import DropdownStyles from '@/views/dropdown/DropdownStyles.vue'

const disabled = ref(false)

const dropdownManual = ref(null)

function changeDisabled (val) {
  disabled.value = val
}
function inputChange (e) {
  if (e.target.value === '3') {
    dropdownManual.value.display()
  } else {
    if (dropdownManual.value.visible) {
      dropdownManual.value.close()
    }
  }
}
</script>

### 快速应用

`Dropdown` 组件默认使用点击触发对象的方式以打开下拉栏

<DropdownClick />

```vue-html
<Dropdown>
  <!-- trigger element -->
  <template #trigger>
    <DropdownTrigger>Click me</DropdownTrigger>
  </template>
  <!-- contents display in dropdown -->
  <DropdownContent>
    <div>some contents</div>
  </DropdownContent>
</Dropdown>
```

### 鼠标悬停激活

鼠标悬停触发对象区域以打开下拉栏

<DropdownHover />

```vue-html
<Dropdown trigger="hover">
  <template #trigger>
    <DropdownTrigger>Hover me</DropdownTrigger>
  </template>
  ...
</Dropdown>
```

### 鼠标右键激活

鼠标右键点击触发对象区域以打开下拉栏

<DropdownContextmenu />

```vue-html
<Dropdown
  trigger="contextmenu"
  block
>
  <template #trigger>
    <div
      style="height: 10rem;"
      class="
        d-flex align-items-center justify-content-center
        bg-light rounded-3 px-3 py-1 fs-1 text-body-secondary w-100
      "
    >Mouse right click me</div>
  </template>
  ...
</Dropdown>
```

### 关闭循环切换

设置点击触发对象循环切换下拉栏的打开与关闭，效果同样作用于鼠标悬停与鼠标右键菜单的触发模式

<DropdownToggle />

```vue-html
<Dropdown :toggle="false" >
  ...
</Dropdown>
```

### 禁用

<DropdownDisabled />

```vue-html
<Dropdown :disabled="true" >
  ...
</Dropdown>
```

### 手动模式

在这个例子里，只有输入数字 `3` 时，才会打开下拉栏

<DropdownManual />

::: code-group

```vue-html
<Dropdown
  :manual="true"
  ref="dropdown"
>
  <template #trigger>
    <input
      type="text"
      @input="inputChange"
    />
  </template>
  ...
</Dropdown>
```

```js
import { ref } from 'vue'
const dropdown = ref(null)

function inputChange (e) {
  if (e.target.value === '3') {
    dropdown.value.display()
  } else {
    // Dropdown expose `visible` state
    if (dropdown.value.visible) {
      dropdown.value.close()
    }
  }
}
```

:::

### 对齐方向

下拉栏对齐于触发器的方向

<DropdownAlign />

```html
<Dropdown align="center" >
  ...
</Dropdown>
```

### 样式定制

<DropdownStyles />

```vue-html
<Dropdown>
  <template #trigger>
    <DropdownTrigger rounded="pill" />
  </template>
  <DropdownContent
    :border="false"
    rounded="medium"
  >
    <div>some contents</div>
  </DropdownContent>
</Dropdown>
```

更具体的样式定制可直接通过 `style` 或 `class` 来设置

<DropdownCustomStyle />

```vue-html
<Dropdown>
  <template #trigger>
    <DropdownTrigger class="border rounded-4 bg-primary-subtle p-2" />
  </template>
  <DropdownContent
    style="width: 500px;background-color:rgb(255, 174, 0);"
  >
    <div>some contents</div>
  </DropdownContent>
</Dropdown>
```

### 状态与函数

`Dropdown` 的 trigger 与默认插槽均提供了插件的状态与部分功能函数

```vue-html
<Dropdown>
  <template #trigger="{ visible, disabled, close }">
    <DropdownTrigger />
  </template>
  <template #default="{ visible, disabled, close }">
    <DropdownContent>
      <div>visible: {{ visible }}</div>
      <div>disabled: {{ disabled }}</div>
      <button
        class="btn btn-secondary"
        @click="close"
      >Close</button>
    </DropdownContent>
  </template>
</Dropdown>
```

<DropdownSlotData />

另外，`Dropdown` 还提供了 `useDropdown` 组合式函数，用于在组件内获取下拉栏的状态与函数

::: code-group

```vue-html
<Dropdown>
  <template #trigger>
    <DropdownTrigger />
  </template>
  <DropdownContent>
    <CustomContent />
  </DropdownContent>
</Dropdown>
```

```vue [CustomContent.vue]
<template>
  <div>
    <div>visible: {{ visible }}</div>
    <div>disabled: {{ disabled }}</div>
    <button
      class="btn btn-secondary"
      @click="close"
    >Close</button>
  </div>
</template>
<script setup>
import { useDropdown } from 'v-dropdown'

const { visible, disabled, close } = useDropdown()
</script>
```

:::

## 插槽

在 `Dropdown` 组件中，触发对象与内容均使用插槽的方式进行分发

### trigger <Badge type="info" text="named scoped slots" />

用于放置触发对象的具名作用域插槽，它输出了以下组件状态

```ts
interface TriggerSlotData {
  visible: boolean  // 显示状态
  disabled: boolean // 禁用状态
}
```

```vue
<template>
  <Dropdown>
    <template #trigger> // [!code focus]
      <button type="button">Click me</button>
    </template>
  </Dropdown>
</template>
```

应用作用域数据状态

```vue
<template>
  <Dropdown>
    <template #trigger="{ visible }">
      <button
        type="button"
        :class="{ active: visible }"
      >Click me</button>
    </template>
  </Dropdown>
</template>
```

### default

默认插槽用于放置于下拉栏的内容区域

```vue
<template>
  <Dropdown>
    <template #trigger>
      <button type="button">Click me</button>
    </template>

    <!-- contents display in dropdown default slot -->
    <div>                     // [!code focus]
      some contents           // [!code focus]
    </div>                    // [!code focus]
  </Dropdown>
</template>
```

## Props

### align

- 类型 `'left' | 'center' | 'right'`
- 默认 `'left'`

下拉栏相对于触发对象的对齐位置

::: tip 提示
`Dropdown` 会自动根据屏幕的位置来决定下拉栏的垂直显示方向（向上或向下）
:::

### border

- 类型 `boolean`
- 默认 `true`

下拉栏显示边框

### toggle

- 类型 `boolean`
- 默认 `true`

循环切换下拉栏的显示/关闭

### manual

- 类型 `boolean`
- 默认 `false`

手动操作模式，启用该模式后，`trigger` 所指定的触发方式将不再能打开/关闭下拉栏，仅能通过功能函数的调用来控制，该模式适用于需要精准控制的场景

### disabled

- 类型 `boolean`
- 默认 `false`

启用/禁用 `Dropdown` 组件

### animated

- 类型 `boolean | string`
- 默认 `true`

打开 / 关闭下拉栏动画，除设置开与关之外，也可以指定一个字符串，作为自定义动画的样式名称，该样式内容需要在外部进行定义

### width

- 类型 `number`

指定下拉栏宽度，不指定则自适应内容宽度

### fullWidth

- 类型 `boolean`
- 默认 `false`

触发对象的布局显示模式

- `true` 块级元素布局占用一行 `display: block`
- `false` 内联元素布局 `display: inline-block`

### trigger

- 类型 `'click' | 'hover' | 'contextmenu'`
- 默认 `'click'`

下拉栏打开的触发方式

### customTriggerClass

- 类型 `string`
- 默认 `''`

添加自定义样式类名至触发对象容器

### customContainerClass

- 类型 `string`
- 默认 `''`

添加自定义样式类名至下拉容器中

## 事件

组件各类操作响应事件

### visible-change

响应下拉栏打开 / 关闭的状态变化

```ts
`visible-change`: (visible: boolean) => void
```

### open

```ts
open: () => void
```

### opened

```ts
opened: () => void
```

### close

```ts
close: () => void
```

### closed

```ts
closed: () => void
```

## API

使用插件的 API 前，需为组件声明 `ref` 属性，并使用 `ref()` 声明对应名称的响应式变量以调用 API 方法

```vue
<template>
  <Dropdown ref="dropdown" />
</template>

<script setup>
import { ref } from 'vue'
import { Dropdown } from 'v-dropdown'

const dropdown = ref(null)
// call api
dropdown.value.display()
</script>
```

### display

打开下拉栏

```ts
display: () => void
```

### close

关闭下拉栏

```ts
close: () => void
```

### toggleVisible

循环切换下拉栏状态

```ts
toggleVisible: () => void
```
