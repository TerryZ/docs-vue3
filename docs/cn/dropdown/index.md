# Dropdown

下拉菜单组件

[![GitHub Repo stars](https://img.shields.io/github/stars/terryz/v-dropdown?style=social)](https://github.com/TerryZ/v-dropdown) [![GitHub forks](https://img.shields.io/github/forks/terryz/v-dropdown?style=social)](https://github.com/TerryZ/v-dropdown)

项目状态

[![test](https://github.com/TerryZ/v-dropdown/actions/workflows/npm-publish.yml/badge.svg?branch=master)](https://github.com/TerryZ/v-dropdown/actions/workflows/npm-publish.yml) [![codecov](https://codecov.io/gh/TerryZ/v-dropdown/branch/master/graph/badge.svg?token=veg52RGaZg)](https://codecov.io/gh/TerryZ/v-dropdown) [![npm version](https://img.shields.io/npm/v/v-dropdown.svg)](https://www.npmjs.com/package/v-dropdown) [![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://mit-license.org/) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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

### 组件集

`v-dropdown` 组件提供的组件集

- **Dropdown** dropdown 的主容器
- **DropdownTrigger** dropdown 内置的按钮形态的触发器
- **DropdownContent** dropdown 内容容器

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

### Dropdown {#dropdown-component}

- `trigger` 触发器
- `default` 下拉栏内容

`Dropdown` 组件为 `trigger` 与 `default` 插槽均提供了插件的状态与部分功能函数

```ts
interface DropdownUtilities {
  visible: ComputedRef<boolean>
  disabled: ComputedRef<boolean>
  /** Adjust content position */
  adjust: () => void
  /** Open dropdown */
  open: () => void
  /** Close dropdown */
  close: () => void
  /** Toggle dropdown open and close */
  toggleVisible: () => void
}
```

应用插槽提供的数据状态

```vue
<template>
  <Dropdown>
    <template #trigger="data: DropdownUtilities">
      <button type="button">visible: {{ data.visible }}</button>
    </template>

    <template #default="{ visible, disabled, close }: DropdownUtilities">
      <div>visible: {{ visible }}</div>
      <div>disabled: {{ disabled }}</div>
      <button
        class="btn btn-secondary"
        @click="close"
      >Close</button>
    </template>
  </Dropdown>
</template>
<script setup lang="ts">
import type { DropdownUtilities } from 'v-dropdown'
</script>
```

插槽提供的 `adjust` 函数用于调整下拉栏内容位置，使其与触发器元素对齐

::: info 提示
在绝大多数情况下，触发器与下拉栏内容的位置与尺寸发生变化时，组件会自动调整下拉栏内容位置，所以只推荐在业务交互较复杂的场景下，下拉栏的位置不符合预期时使用
:::

### DropdownTrigger

`DropdownTrigger` 是 `Dropdown` 组件内置的按钮形态的触发器对象组件

- `default` 触发器内容，默认显示 `Open` 文本
- `append` **Dropdown** 下拉栏打开状态图标

### DropdownContent

- `default` 下拉栏内容

## Props

`Dropdown` 组件的 props

```ts
interface DropdownProps {
  /**
   * 下拉栏的对齐方向
   * @default `left`
   */
  align?: 'left' | 'center' | 'right'
  /**
   * 连续点击触发器时是否循环切换打开与关闭
   * @default true
   */
  toggle?: boolean
  /**
   * 手动控制下拉栏的显示与隐藏
   * @default false
   */
  manual?: boolean
  /**
   * 禁用状态
   * @default false
   */
  disabled?: boolean
  /**
   * 触发器显示全宽模式
   * @default false
   */
  block?: boolean
  /**
   * 下拉栏的触发方式
   * @default `click`
   */
  trigger?: 'click' | 'hover' | 'contextmenu'
  /**
   * 下拉栏的打开与关闭是否使用动画
   * @default true
   */
  animated?: boolean
  /**
   * 触发器与下拉栏之间的间距
   * @default 5
   */
  gap?: number
  /**
   * 目标容器
   * @default `body`
   */
  appendTo: string | HTMLElement
}
```

`DropdownContent` 组件的 props

```ts
interface ContentProps {
  /**
   * 下拉栏的边框
   * @default true
   */
  border?: boolean
  /**
   * 下拉栏的圆角弧度
   * @default `small`
   */
  rounded?: 'small' | 'medium' | 'large'
  /**
   * 下拉栏的 Z 轴顺序值
   * @default 3000
   */
  zIndex?: number
}
```

`DropdownTrigger` 组件的 props

```ts
interface TriggerProps {
  /** 触发器按钮的圆角弧度 */
  rounded?: 'small' | 'medium' | 'large' | 'pill' | 'circle'
}
```

## 事件

组件各类操作响应事件

### visible-change

响应下拉栏打开 / 关闭的状态变化

```ts
`visible-change`: (visible: boolean) => void
```

### open

下拉栏打开时响应

```ts
open: () => void
```

### opened

下拉栏打开动画完成时响应

```ts
opened: () => void
```

### close

下拉栏关闭时响应

```ts
close: () => void
```

### closed

下拉栏关闭动画完成时响应

```ts
closed: () => void
```

## API

使用插件的 API 前，需为组件声明 `ref` 属性，并使用 `ref()` 声明对应名称的响应式变量以调用 API 方法

```vue
<template>
  <Dropdown ref="dropdown" />
</template>

<script setup lang="ts">
import { ref, onMounted, useTemplateRef } from 'vue'
import { Dropdown, type DropdownUtilities } from 'v-dropdown'

// vue 3.5+
const dropdownRef = useTemplateRef<DropdownUtilities>('dropdown')
// 低于 vue 3.5 版本
// const dropdownRef = ref<DropdownUtilities>()

onMounted(() => {
  dropdownRef.value?.display()
})
</script>
```

`Dropdown` 组件的 API 与其 `default` 和 `trigger` 插槽提供的数据类型 `DropdownUtilities` 一致，请参考 [Dropdown slot](#dropdown-component)
