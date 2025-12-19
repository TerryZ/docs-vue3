# SelectMenu

简洁、易用、高度可定制化的菜单解决方案

[![GitHub Repo stars](https://img.shields.io/github/stars/terryz/v-selectmenu?style=social)](https://github.com/TerryZ/v-selectmenu) [![GitHub forks](https://img.shields.io/github/forks/terryz/v-selectmenu?style=social)](https://github.com/TerryZ/v-selectmenu)

项目状态

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/TerryZ/v-selectmenu/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/TerryZ/v-selectmenu/tree/master) [![code coverage](https://codecov.io/gh/TerryZ/v-selectmenu/branch/master/graph/badge.svg)](https://codecov.io/gh/TerryZ/v-selectmenu) [![npm version](https://img.shields.io/npm/v/v-selectmenu.svg)](https://www.npmjs.com/package/v-selectmenu) [![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://mit-license.org/) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

版本更新内容请访问 [Changelog](https://github.com/TerryZ/v-selectmenu/blob/dev/CHANGELOG-CN.md)

如果您的项目正在使用 [vue 2.x](https://v2.vuejs.org/v2/guide/) 版本生态，请使用 [v-selectmenu 2.x](https://terryz.github.io/docs-vue/#/selectmenu) 版本

## 安装

将 `v-selectmenu` 组件安装到项目中

::: code-group

```sh [npm]
npm i v-selectmenu
```

```sh [yarn]
yarn add v-selectmenu
```

```sh [pnpm]
pnpm add v-selectmenu
```

:::

## 组件集

`v-selectmenu` 提供的组件

- **SelectMenuDropdown** 菜单主容器
- **SelectMenuTrigger** 组件内置的打开菜单的触发按钮
- **SelectMenuBody** 菜单内容的主容器
- **SelectMenuSection** 菜单片断容器
- **SelectMenuBlock** 菜单块容器
- **SelectMenuRow** 使内容水平对齐的布局容器
- **SelectMenuColumn** 使内容垂直对齐的布局容器
- **SelectMenuHeader** 菜单主标题栏
- **SelectMenuSubHeader** 菜单子标题栏
- **SelectMenuDivider** 分隔线
- **SelectMenuGroup** 菜单分组容器
- **SelectMenuGroupItem** 菜单分组项
- **SelectMenuChildLevel** 子菜单主容器
- **SelectMenuInput** 文本输入框模块
- **SelectMenuButton** 按钮模块
- **SelectMenuItem** 菜单项
- **SelectMenuCheckboxGroup** 多项选择容器
- **SelectMenuCheckboxItem** 多项选择项目
- **SelectMenuRadioGroup** 单项选择容器
- **SelectMenuRadioItem** 单项选择项目

## 实例

<script setup>
import LogDataPrinter from '@/views/components/LogDataPrinter.vue'
import {
  SelectMenuBase,
  menuActionWithLogs,
  MenuItemSlots,
  MenuItemNoCloseDropdown,
  MenuDropdownScopedSlot,
  MenuWithoutDropdown,
  MenuSection,
  MenuDivider
} from '@/script/select-menu'
import MenuTriggerRoundedSelect from '@/views/select-menu/MenuTriggerRoundedSelect.vue'

const { logs, MenuItemEvent } = menuActionWithLogs()
</script>

### 基础应用

设置一个菜单列表，并通过 `action` 事件统一接收菜单项发出的指令

<MenuItemEvent />

菜单项选择事件响应数据

<LogDataPrinter
  title="事件响应数据日志"
  :logs="logs"
/>

::: code-group

```vue-html
<SelectMenuDropdown>
  <template #trigger>
    <SelectMenuTrigger />
  </template>

  <SelectMenuBody @action="handleAction">
    <SelectMenuItem action="item1">Item 1</SelectMenuItem>
    <SelectMenuItem action="item2">Item 2</SelectMenuItem>
    <SelectMenuItem action="item3">Item 3</SelectMenuItem>
  </SelectMenuBody>
</SelectMenuDropdown>
```

```js
import {
  SelectMenuDropdown,
  SelectMenuTrigger,
  SelectMenuBody,
  SelectMenuHeader,
  SelectMenuItem
} from 'v-selectmenu'

function handleAction (action) {
  console.log(action)
}
```

:::

### 不应用下拉层

仅使用菜单，不通过下拉层展示

<MenuWithoutDropdown />

```vue-html
<SelectMenuBody class="border rounded-4 shadow-sm">
  <SelectMenuHeader>Menu without dropdown</SelectMenuHeader>
  <SelectMenuItem>Item 1</SelectMenuItem>
  <SelectMenuItem>Item 2</SelectMenuItem>
  <SelectMenuItem>Item 3</SelectMenuItem>
</SelectMenuBody>
```

### 菜单项

菜单项可通过 `prepend`、`default` 与 `append` 等插槽设置前置、后置与菜单项主体内容

<MenuItemSlots />

```vue-html
<SelectMenuBody>
  <SelectMenuHeader>Menu item slots</SelectMenuHeader>
  <SelectMenuDivider />
  <SelectMenuItem>
    <template #prepend>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell b-svg-icon" viewBox="0 0 16 16">
        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
      </svg>
    </template>
    <template #append>
      <SelectMenuButton
        size="mini"
        class="bg-danger text-white"
      >23</SelectMenuButton>
    </template>
    Notifications
  </SelectMenuItem>
  <SelectMenuItem>Helps</SelectMenuItem>
  <SelectMenuItem>Settings</SelectMenuItem>
</SelectMenuBody>
```

该内容结构设置同样应用于以下组件

- SelectMenuBlock
- SelectMenuHeader
- SelectMenuSubHeader
- SelectMenuRadioItem
- SelectMenuCheckboxItem

| 组件名 | hover | hideOnClick |
| :--- | :--- | :--- |
| SelectMenuItem | ✔ | ✔ |
| SelectMenuBlock | ❌ | ❌ |
| SelectMenuHeader | ❌ | ❌ |
| SelectMenuSubHeader | ❌ | ❌ |
| SelectMenuRadioItem | ✔ | ✔ |
| SelectMenuCheckboxItem | ✔ | ❌ |

::: tip 提示
`SelectMenuBlock` 与 `SelectMenuItem` 同为菜单项块布局模块，它们的区别在于鼠标样式与行为的默认设置上。Block 组件更多是为了方便 Input 与 Button 等组件的组合排列使用，可以结合 [input 与 Button 组合使用](./input#input-with-button) 样例查看
:::

### 块容器

块容器 `SelectMenuSection` 用于包裹菜单项类型的组件，可通过自定义样式设置该区块的高度或其他样式

<MenuSection />

这里通过设置 `max-height` 样式管理块容器高度，使区块内容超出后出现滚动条

```vue-html
<SelectMenuBody>
  <SelectMenuSubHeader>Section 1</SelectMenuSubHeader>
  <SelectMenuSection style="max-height: 170px;">
    <SelectMenuItem>Item 1</SelectMenuItem>
    <SelectMenuItem>Item 2</SelectMenuItem>
    <SelectMenuItem>Item 3</SelectMenuItem>
    ...
  </SelectMenuSection>
  <SelectMenuSubHeader>Section 2</SelectMenuSubHeader>
  <SelectMenuSection>
    <SelectMenuItem>Item 1</SelectMenuItem>
    <SelectMenuItem>Item 2</SelectMenuItem>
    <SelectMenuItem>Item 3</SelectMenuItem>
  </SelectMenuSection>
</SelectMenuBody>
```

### 关闭菜单的方式

在默认情况下，菜单项点击后，会自动关闭下拉菜单，如果需要保持菜单打开状态，则需要设置 `hideOnItemClick` 属性为 `false`

<MenuItemNoCloseDropdown />

```vue-html
<SelectMenuBody :hideOnItemClick="false">
  <SelectMenuItem action="item1">Item 1</SelectMenuItem>
  <SelectMenuItem action="item2">Item 2</SelectMenuItem>
  <SelectMenuItem action="item3">Item 3</SelectMenuItem>
</SelectMenuBody>
```

### 分隔线

分隔线组件，可以设置为横向或纵向

<MenuDivider />

```vue-html
<SelectMenuBody>
  <SelectMenuHeader>Menu divider</SelectMenuHeader>
  <!-- horizontal divider -->
  <SelectMenuDivider />
  <SelectMenuRow>
    <SelectMenuColumn>
      <SelectMenuItem>Item 1</SelectMenuItem>
      <SelectMenuItem>Item 2</SelectMenuItem>
      <SelectMenuItem>Item 3</SelectMenuItem>
    </SelectMenuColumn>
    <!-- vertical divider -->
    <SelectMenuDivider :horizontal="false" />
    <SelectMenuColumn>
      <SelectMenuItem>Item 4</SelectMenuItem>
      <SelectMenuItem>Item 5</SelectMenuItem>
      <SelectMenuItem>Item 6</SelectMenuItem>
    </SelectMenuColumn>
  </SelectMenuRow>
</SelectMenuBody>
```

### 下拉层

下拉菜单的 `SelectMenuDropdown` 组件提供了状态与操作函数，可通过作用域插槽输出以及组件所提供的工具函数 `useDropdown` 获得，

#### 作用域插槽

`SelectMenuDropdown` 组件对 `trigger` 与 `default` 插槽均输出数据状态与操作函数，方便用户定制菜单内容与触发对象

数据状态与操作函数的类型定义：[DropdownUtilities](../dropdown/index.md#dropdown-component)

<MenuDropdownScopedSlot />

```vue
<template>
  <SelectMenuDropdown>
    <template #trigger="data: DropdownUtilities"}>
    ...
    </template>
    <template #default={ visible, disabled, close, adjust }: DropdownUtilities>
      <div>
        <div>Dropdown visible: {{ visible }}</div>
        <div>Dropdown disabled: {{ disabled }}</div>
        <button type="button" @click="close">Close</button>
        <button type="button" @click="adjust">Adjust</button>
      </div>
    </template>
  </SelectMenuDropdown>
</template>
<script setup lang="ts">
import type { DropdownUtilities } from 'v-dropdown'
</script>
```

#### 工具函数

当菜单的内容是一个用户自定义组件时，可以通过 `useDropdown` 函数获得菜单的状态与操作函数

::: code-group

```vue-html
<SelectMenuDropdown>
  <template #trigger>
    <SelectMenuTrigger />
  </template>

  <CustomDropdownContent />
</SelectMenuDropdown>
```

```js
import {
  SelectMenuDropdown,
  SelectMenuTrigger
} from 'v-selectmenu'
import CustomDropdownContent from './CustomDropdownContent.vue'
```

```vue [CustomDropdownContent.vue]
<template>
  <div>
    <div>Dropdown visible: {{ visible }}</div>
    <div>Dropdown disabled: {{ disabled }}</div>
    <button
      type="button"
      @click="close"
    >Close dropdown</button>
    <button
      type="button"
      @click="adjust"
    >Adjust dropdown</button>
  </div>
</template>

<script setup>
import { useDropdown } from 'v-selectmenu'

const { visible, disabled, close, adjust } = useDropdown()
</script>
```

:::

#### 内置触发按钮

`v-selectmenu` 内置了 `SelectMenuTrigger` 组件，用于触发菜单的打开与关闭，如果该按钮不满足需求，可通过 `SelectMenuDropdown` 的 `trigger` 插槽自定义触发对象

<MenuTriggerRoundedSelect />

```vue-html
<SelectMenuTrigger rounded="pill" />
```

#### 下拉层属性与事件

`v-selectmenu` 的下拉层基于 [v-dropdown](/cn/dropdown/) 实现，因此可以在 `SelectMenuDropdown` 组件上直接使用 `v-dropdown` 的属性与事件

<SelectMenuBase trigger="hover" triggerText="Hover me" />

这里设置了 `trigger` 属性为 `hover`，下拉菜单的打开方式为鼠标悬停而不是默认的点击

```vue-html
<SelectMenuDropdown
  trigger="hover"
  @visible-change="visibleChange"
>
  ...
</SelectMenuDropdown>
```

## Props

`SelectMenuBody` 的 Props

```ts
interface MenuBodyProps {
  /**
   * 指定当前菜单中所有 `SelectMenuItem` 点击后是否关闭菜单
   * @default true
   */
  hideOnItemClick?: boolean
}
```

`SelectMenuItem` 的 Props

```ts
interface MenuItemProps {
  /**
   * 菜单项选择后触发的指令，在 `SelectMenuBody` 的 action 事件中统一接收
   */
  action?: string
  /**
   * @default false
   */
  disabled?: boolean
}
```

`SelectMenuDivider` 的 Props

```ts
interface MenuDividerProps {
  /**
   * 横向分隔线，设置为 false 时为竖向分隔线
   * @default true
   */
  horizontal?: boolean
}
```

`SelectMenuTrigger` 的 Props

```ts
interface SelectMenuTriggerProps {
  /**
   * 圆角风格
   * @default `small`
   */
  rounded?: 'small' | 'medium' | 'large' | 'pill'
}
```

## 事件

`SelectMenuBody` 的事件

```ts
// 响应菜单项选择后，获得该项的 action 值的事件
action: (action: string) => void
```

## 插槽

### 容器类组件

- `default` 菜单内容

适用的组件

- SelectMenuBody
- SelectMenuRow
- SelectMenuColumn
- SelectMenuSection

### 菜单项类

- `prepend` 前置插槽
- `default` 主体内容插槽
- `append` 尾部插槽，向右对齐

适用的组件

- SelectMenuBlock
- SelectMenuItem
- SelectMenuHeader
- SelectMenuSubHeader

**SelectMenuDropdown** 的插槽

- `trigger` 打开菜单的触发对象
- `default` 菜单的主体内容

**SelectMenuTrigger** 的插槽

- `default` 组件内置菜单触发按钮的显示文本，不设置则默认显示 `Open` 文本
- `append` 触发按钮尾部的插槽，不设置则默认提供一个显示菜单打开状态的箭头图标
