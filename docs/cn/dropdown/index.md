# Dropdown

下拉菜单组件

[![GitHub Repo stars](https://img.shields.io/github/stars/terryz/v-dropdown?style=social) ![GitHub forks](https://img.shields.io/github/forks/terryz/v-dropdown?style=social)](https://github.com/TerryZ/v-dropdown)

项目状态

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/TerryZ/v-dropdown/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/TerryZ/v-dropdown/tree/master) [![codecov](https://codecov.io/gh/TerryZ/v-dropdown/branch/master/graph/badge.svg?token=veg52RGaZg)](https://codecov.io/gh/TerryZ/v-dropdown) [![npm version](https://img.shields.io/npm/v/v-dropdown.svg)](https://www.npmjs.com/package/v-dropdown) [![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://mit-license.org/) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

版本更新内容请访问 [Changelog](https://github.com/TerryZ/v-dropdown/blob/dev/CHANGELOG-CN.md)

如果您的项目正在使用 [vue 2.x](https://v2.vuejs.org/v2/guide/) 版本生态，请使用 [v-dropdown 2.x](https://github.com/TerryZ/v-dropdown/tree/dev-vue-2) 版本

## 安装

将 `v-dropdown` 组件安装到项目中

```sh
# use npm
npm i v-dropdown
# use yarn
yarn add v-dropdown
# use pnpm
pnpm add v-dropdown
```

### 常规用例

```vue
<template>
  <Dropdown @visible-change="change">
    <!-- trigger element -->
    <template #trigger>
      <button type="button">Click me</button>
    </template>

    <!-- contents display in dropdown -->
    <div>
      some contents
    </div>
  </Dropdown>
</template>

<script setup>
import Dropdown from 'v-dropdown'
// or
// import { Dropdown } from 'v-dropdown'
function change (val) {
  console.log(val)
}
</script>
```

## 实例

### 快速应用

```html
<Dropdown>
  <!-- trigger element -->
  <template #trigger>
    <button type="button">Click me</button>
  </template>
  <!-- contents display in dropdown -->
  <div>some contents</div>
</Dropdown>
```

<Dropdown>
  <template #trigger>
    <button
      type="button"
      class="border rounded-3 px-3 py-1 shadow-sm"
    >Click me</button>
  </template>

  <div class="p-5">
    <div>some contents</div>
    <div>some contents</div>
    <div>some contents</div>
  </div>
</Dropdown>

`Dropdown` 组件默认使用点击触发对象的方式以打开下拉栏

### 鼠标悬停激活

```html
<Dropdown trigger="hover">
  <template #trigger>
    <button type="button">Hover me</button>
  </template>
  ...
</Dropdown>
```

<Dropdown trigger="hover">
  <template #trigger>
    <button
      type="button"
      class="border rounded-3 px-3 py-1 shadow-sm"
    >Hover me</button>
  </template>

  <div class="p-5">
    <div>some contents</div>
    <div>some contents</div>
    <div>some contents</div>
  </div>
</Dropdown>

### 鼠标右键激活

```html
<Dropdown
  trigger="contextmenu"
  :full-width="true"
>
  <template #trigger>
    <div>Mouse right click me</div>
  </template>
  ...
</Dropdown>
```

鼠标右键点击触发对象区域以打开下拉栏

<Dropdown
  trigger="contextmenu"
  :full-width="true"
>
  <template #trigger>
    <div
      class="
        d-flex align-items-center justify-content-center
        bg-light rounded-3 px-3 py-1 fs-1 text-muted
      "
      style="height: 10rem;"
    >
      Mouse right click me
    </div>
  </template>

  <div class="p-5">
    <div>some contents</div>
    <div>some contents</div>
    <div>some contents</div>
  </div>
</Dropdown>

### 关闭循环切换

```html
<Dropdown :toggle="false" >
  ...
</Dropdown>
```

设置点击触发对象循环切换下拉栏的打开与关闭，效果同样作用于鼠标悬停与鼠标右键菜单的触发模式

<Dropdown :toggle="false">
  <template #trigger>
    <input
      type="text"
      class="border rounded-3 px-3 py-2"
      placeholder="focus on me"
    />
  </template>

  <div class="p-5">
    <div>some contents</div>
    <div>some contents</div>
    <div>some contents</div>
  </div>
</Dropdown>

### 禁用

```html
<Dropdown :disabled="true" >
  <!-- named Scoped Slots -->
  <template #trigger="{ visible, disabled }">
    <button type="button">
      Click me (visible: {{ visible }}, disabled: {{ disabled }})
    </button>
  </template>
</Dropdown>
```

<div class="mb-3">
  <button
    type="button"
    class="border rounded-3 px-3 py-1 shadow-sm me-3"
    :class="{ 'bg-light': !disabled }"
    :disabled="!disabled"
    @click="changeDisabled(false)"
  >Enabled</button>
  <button
    type="button"
    class="border rounded-3 px-3 py-1 shadow-sm"
    :class="{ 'bg-light': disabled }"
    :disabled="disabled"
    @click="changeDisabled(true)"
  >Disabled</button>
</div>

<Dropdown :disabled="disabled">
  <template #trigger="{ visible, disabled: stateDisabled }">
    <button
      type="button"
      class="border rounded-3 px-3 py-1 shadow-sm"
    >
      Click me (visible: {{ visible }}, disabled: {{ stateDisabled }})
    </button>
  </template>

  <div class="p-5">
    <div>some contents</div>
    <div>some contents</div>
    <div>some contents</div>
  </div>
</Dropdown>

### 手动模式

```vue
<template>
  <Dropdown
    :manual="true"
    ref="dropdownManual"
  >
    <template #trigger>
      <input
        type="text"
        @input="inputChange"
      />
    </template>
    ...
  </Dropdown>
</template>

<script setup>
import { ref } from 'vue'
const dropdownManual = ref(null)

function inputChange (e) {
  if (e.target.value === '3') {
    dropdownManual.value.display()
  } else {
    // Dropdown expose `visible` state
    if (dropdownManual.value.visible) {
      dropdownManual.value.close()
    }
  }
}
</script>
```

在这个例子里，只有输入数字 `3` 时，才会打开下拉栏

<Dropdown
  :manual="true"
  ref="dropdownManual"
>
  <template #trigger>
    <input
      type="text"
      class="border rounded-3 px-3 py-2"
      placeholder="type enter 3"
      @input="inputChange"
    />
  </template>

  <div class="p-5">
    <div>some contents</div>
    <div>some contents</div>
    <div>some contents</div>
  </div>
</Dropdown>

### 无边框模式

```html
<Dropdown :border="false" >
  ...
</Dropdown>
```

<Dropdown :border="false">
  <template #trigger>
    <button
      type="button"
      class="border rounded-3 px-3 py-1 shadow-sm"
    >Click me</button>
  </template>

  <div class="p-5">
    <div>some contents</div>
    <div>some contents</div>
    <div>some contents</div>
  </div>
</Dropdown>

### 对齐方向

```html
<Dropdown align="center" >
  ...
</Dropdown>
```

<Dropdown class="me-5">
  <template #trigger>
    <button
      type="button"
      class="border rounded-3 px-3 py-1 shadow-sm"
    >Align left</button>
  </template>

  <div class="p-5">
    <div>some contents</div>
    <div>some contents</div>
    <div>some contents</div>
  </div>
</Dropdown>

<Dropdown
  align="center"
  class="me-5"
>
  <template #trigger>
    <button
      type="button"
      class="border rounded-3 px-3 py-1 shadow-sm"
    >Align center</button>
  </template>

  <div class="p-5">
    <div>some contents</div>
    <div>some contents</div>
    <div>some contents</div>
  </div>
</Dropdown>

<Dropdown align="right">
  <template #trigger>
    <button
      type="button"
      class="border rounded-3 px-3 py-1 shadow-sm"
    >Align center</button>
  </template>

  <div class="p-5">
    <div>some contents</div>
    <div>some contents</div>
    <div>some contents</div>
  </div>
</Dropdown>

### 设置下拉栏宽度

```html
<Dropdown :width="500" >
  ...
</Dropdown>
```

<Dropdown :width="500">
  <template #trigger>
    <button
      type="button"
      class="border rounded-3 px-3 py-1 shadow-sm"
    >Click me</button>
  </template>

  <div class="p-5">
    <div>some contents</div>
    <div>some contents</div>
    <div>some contents</div>
  </div>
</Dropdown>

<script setup>
import { ref } from 'vue'
import Dropdown from 'v-dropdown'

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

## 插槽

在 `Dropdown` 组件中，触发对象与内容均使用插槽的方式进行分发

### trigger(named scoped slots)

用于放置触发对象的具名作用域插槽，它输出了以下组件状态

- `visible` 显示状态
- `disabled` 禁用状态

```vue
<template>
  <Dropdown>
    <template #trigger>
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
    <div>
      some contents
    </div>
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

## 事件

组件操作各类响应事件

### visible-change

响应下拉栏打开 / 关闭的状态变化

```ts
visible-change(visible: boolean): void
```

## API

使用插件的 API 前，需为组件声明 `ref` 属性，并使用 `ref()` 声明对应名称的响应式变量以调用 API 方法

```vue
<template>
  <v-dropdown ref="dropdown" />
</template>

<script setup>
import { ref } from 'vue'

const dropdown = ref(null)
// call api
dropdown.value.display()
</script>
```

### display

打开下拉栏

```ts
display(): void
```

### close

关闭下拉栏

```ts
close(): void
```

### toggleVisible

循环切换下拉栏状态

```ts
toggleVisible(): void
```

### adjust

检测并调整下拉栏位置，使下拉栏与触发对象位置对齐

```ts
adjust(): void
```
