# SelectMenu

## 组件集

- **SelectMenuDropdown** 菜单主容器
- **SelectMenuTrigger** 组件内置的打开菜单的触发按钮
- **SelectMenuBody** 菜单内容的主容器
- **SelectMenuSection** 菜单片断容器
- **SelectMenuRow** 使内容水平对齐的布局容器
- **SelectMenuColumn** 使内容垂直对齐的布局容器
- **SelectMenuHeader** 菜单主标题栏
- **SelectMenuSubHeader** 菜单子标题栏
- **SelectMenuDivider** 分隔线
- **SelectMenuGroup** 菜单分组容器
- **SelectMenuGroupItem** 菜单分组项
- **SelectMenuChildLevel** 子菜单主容器
- **SelectMenuSearch** 内容输入模块
- **SelectMenuItem** 菜单项
- **SelectMenuCheckboxGroup** 多项选择容器
- **SelectMenuCheckboxItem** 多项选择项目
- **SelectMenuRadioGroup** 单项选择容器
- **SelectMenuRadioItem** 单项选择项目

## 实例

<script setup>
import {
  SelectMenuBase,
  MenuWithoutDropdown,
  MenuDivider
} from '@/script/select-menu'
import { useData } from 'vitepress'

const { lang } = useData()
</script>

```vue-html
<SelectMenuDropdown>
  <template #trigger>
    <SelectMenuTrigger />
  </template>

  <SelectMenuBody>
  </SelectMenuBody>
</SelectMenuDropdown>
```

### 仅菜单

仅使用菜单，不使用下拉层

<MenuWithoutDropdown />

```vue-html
<SelectMenuBody class="border rounded-4 shadow-sm">
  <SelectMenuHeader>Menu without dropdown</SelectMenuHeader>
  <SelectMenuItem>Item 1</SelectMenuItem>
  <SelectMenuItem>Item 2</SelectMenuItem>
  <SelectMenuItem>Item 3</SelectMenuItem>
</SelectMenuBody>
```

### 块容器

`SelectMenuSection` 是块容器，用于包裹 `SelectMenu` 实例

### dropdown

作用域插槽输出数据，或使用工具函数 `useSelectMenuDropdown` 获得 dropdown 的状态与函数

```vue-html
<SelectMenuDropdown>
  <template #trigger={}>
  </template>
</SelectMenuDropdown>
```

```ts
interface SelectMenuDropdownUtilities {
  /**
   * Dropdown 打开的状态
   */
  visible?: Ref<boolean>
  /**
   * Dropdown 禁用状态
   */
  disabled?: Ref<boolean>
  /**
   * 关闭菜单
   */
  closeDropdown?: () => void
  /**
   * 自动调整打开的菜单位置
   */
  adjustDropdown?: () => void
}
```

除了使用 `SelectMenuDropdown` 的作用域插槽中输出的状态及函数外，也可以使用组件提供的 `useSelectMenuDropdown` 函数获得

::: code-group

```vue-html
<SelectMenuDropdown>
  <template #trigger>
    <SelectMenuTrigger>{{ selected || 'Open' }}</SelectMenuTrigger>
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
      @click="closeDropdown"
    >Close dropdown</button>
    <button
      type="button"
      @click="adjustDropdown"
    >Adjust dropdown</button>
  </div>
</template>

<script setup>
import { useSelectMenuDropdown } from 'v-selectmenu'

const {
  visible,
  disabled,
  closeDropdown,
  adjustDropdown
} = useSelectMenuDropdown()
</script>
```

:::

`v-selectmenu` 的下拉层基于 [v-dropdown](/cn/dropdown/) 实现，因此可以在 `SelectMenuDropdown` 组件上直接使用 `v-dropdown` 的属性与事件

<SelectMenuBase trigger="hover" />

这里设置了 `trigger` 属性为 `hover`，下拉菜单的打开方式为鼠标悬停而不是默认的点击

```vue-html
<SelectMenuDropdown trigger="hover">
...
</SelectMenuDropdown>
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
    <SelectMenuDivider horizontal={false} />
    <SelectMenuColumn>
      <SelectMenuItem>Item 4</SelectMenuItem>
      <SelectMenuItem>Item 5</SelectMenuItem>
      <SelectMenuItem>Item 6</SelectMenuItem>
    </SelectMenuColumn>
  </SelectMenuRow>
</SelectMenuBody>
```

## Props

`SelectMenuBody` 的 Props

```ts
interface MenuBodyProps {
  /**
   * 指定当前菜单中所有 SelectMenuItem 点击后是否关闭菜单
   * @default true
   */
  hideOnItemClick?: boolean
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

## 事件

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

- SelectMenuItem
- SelectMenuHeader
- SelectMenuSubHeader

**SelectMenuDropdown** 的插槽

- `trigger` 打开菜单的触发对象
- `default` 菜单的主体内容

**SelectMenuTrigger** 的插槽

- `default` 组件内置菜单触发按钮的显示文本，不设置则默认显示 `Open` 文本
- `append` 触发按钮尾部的插槽，不设置则默认提供一个显示菜单打开状态的箭头图标
