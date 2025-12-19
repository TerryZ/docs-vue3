# SelectMenu

Simple, easy-to-use, highly customizable menu solution

[![GitHub Repo stars](https://img.shields.io/github/stars/terryz/v-selectmenu?style=social)](https://github.com/TerryZ/v-selectmenu) [![GitHub forks](https://img.shields.io/github/forks/terryz/v-selectmenu?style=social)](https://github.com/TerryZ/v-selectmenu)

Repository status

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/TerryZ/v-selectmenu/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/TerryZ/v-selectmenu/tree/master) [![code coverage](https://codecov.io/gh/TerryZ/v-selectmenu/branch/master/graph/badge.svg)](https://codecov.io/gh/TerryZ/v-selectmenu) [![npm version](https://img.shields.io/npm/v/v-selectmenu.svg)](https://www.npmjs.com/package/v-selectmenu) [![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://mit-license.org/) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Detailed changes for each release are documented in [Changelog](https://github.com/TerryZ/v-selectmenu/blob/dev/CHANGELOG.md)

If you are using [vue 2.x](https://v2.vuejs.org/v2/guide/) version, please use [v-selectmenu 2.x](https://terryz.github.io/docs-vue/#/selectmenu) version instead

## Installation

Install `v-selectmenu` component in to your project

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

## Components

`v-selectmenu` provides the following components

- **SelectMenuDropdown** Menu main container
- **SelectMenuTrigger** Component built-in trigger button for opening menu
- **SelectMenuBody** Menu content main container
- **SelectMenuSection** Menu fragment container
- **SelectMenuBlock** Menu block container
- **SelectMenuRow** Layout container for horizontal alignment of content
- **SelectMenuColumn** Layout container for vertical alignment of content
- **SelectMenuHeader** Menu main title bar
- **SelectMenuSubHeader** Menu subtitle bar
- **SelectMenuDivider** Divider
- **SelectMenuGroup** Menu group container
- **SelectMenuGroupItem** Menu group item
- **SelectMenuChildLevel** Submenu main container
- **SelectMenuInput** Text input box module
- **SelectMenuButton** Button module
- **SelectMenuItem** Menu item
- **SelectMenuCheckboxGroup** Multiple selection container
- **SelectMenuCheckboxItem** Multiple selection item
- **SelectMenuRadioGroup** Single selection container
- **SelectMenuRadioItem** Single selection item

## Examples

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

### Basic usage

Set up a menu list and receive commands from menu items uniformly through the `action` event

<MenuItemEvent />

Response data for menu item selection events

<LogDataPrinter :logs="logs" />

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

### No dropdown

Only menu content, no dropdown

<MenuWithoutDropdown />

```vue-html
<SelectMenuBody class="border rounded-4 shadow-sm">
  <SelectMenuHeader>Menu without dropdown</SelectMenuHeader>
  <SelectMenuItem>Item 1</SelectMenuItem>
  <SelectMenuItem>Item 2</SelectMenuItem>
  <SelectMenuItem>Item 3</SelectMenuItem>
</SelectMenuBody>
```

### Menu item

Menu items can set the front, back and main content of the menu item through slots such as `prepend`, `default` and `append`

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

This content structure setting also applies to the following components

- SelectMenuBlock
- SelectMenuHeader
- SelectMenuSubHeader
- SelectMenuRadioItem
- SelectMenuCheckboxItem

| Component | hover | hideOnClick |
| :--- | :--- | :--- |
| SelectMenuItem | ✔ | ✔ |
| SelectMenuBlock | ❌ | ❌ |
| SelectMenuHeader | ❌ | ❌ |
| SelectMenuSubHeader | ❌ | ❌ |
| SelectMenuRadioItem | ✔ | ✔ |
| SelectMenuCheckboxItem | ✔ | ❌ |

::: tip
`SelectMenuBlock` and `SelectMenuItem` are both menu item block layout modules. The difference between them lies in the default settings of mouse style and behavior. Block components are more convenient for the combination and use of components such as Input and Button. You can combine [input and Button](./input#input-with-button) to view the sample
:::

### Block Container

The block container `SelectMenuSection` is used to wrap menu item type components, the height or other styles of the block can be set through custom styles.

<MenuSection />

In this example, the `max-height` style is set to manage the height of the block container, so that a scroll bar appears when the block content exceeds the height

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

### Ways to close menu

By default, the dropdown menu will be automatically closed after the menu item is clicked. If you need to keep the menu open, you need to set the `hideOnItemClick` property to `false`

<MenuItemNoCloseDropdown />

```vue-html
<SelectMenuBody :hideOnItemClick="false">
  <SelectMenuItem action="item1">Item 1</SelectMenuItem>
  <SelectMenuItem action="item2">Item 2</SelectMenuItem>
  <SelectMenuItem action="item3">Item 3</SelectMenuItem>
</SelectMenuBody>
```

### Divider

Divider component, can be set to horizontal or vertical

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

### Dropdown

The `SelectMenuDropdown` component of the dropdown menu provides states and operation functions, which can be obtained through scope slot output and the tool function `useDropdown` provided by the component

#### Scoped slots

The `SelectMenuDropdown` component outputs data status and operation functions to both the `trigger` and `default` slots, making it convenient for users to customize menu content and trigger objects

data status and operation functions type: [DropdownUtilities](../dropdown/index.md#dropdown-component)

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

#### Utility functions

When the content of the menu is a user-defined component, you can use the `useDropdown` function to get the menu's state and operation functions

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

#### Built-in trigger button

`v-selectmenu` has a built-in `SelectMenuTrigger` component to trigger the opening and closing of the menu. If this button does not meet your needs, you can customize the trigger object through the `trigger` slot of `SelectMenuDropdown`

<MenuTriggerRoundedSelect />

```vue-html
<SelectMenuTrigger rounded="pill" />
```

#### Dropdown props and events

The dropdown layer of `v-selectmenu` is based on [v-dropdown](/dropdown/), so the props and events of `v-dropdown` can be used directly on the `SelectMenuDropdown` component

<SelectMenuBase trigger="hover" triggerText="Hover me" />

Here the `trigger` property is set to `hover`, so the drop-down menu is opened by hovering the mouse instead of the default click

```vue-html
<SelectMenuDropdown
  trigger="hover"
  @visible-change="visibleChange"
>
  ...
</SelectMenuDropdown>
```

## Props

`SelectMenuBody` Props

```ts
interface MenuBodyProps {
  /**
   * Specifies whether to close the menu after clicking all `SelectMenuItem` in the current menu
   * @default true
   */
  hideOnItemClick?: boolean
}
```

`SelectMenuItem` Props

```ts
interface MenuItemProps {
  /**
   * The command triggered after the menu item is selected is uniformly received in the action event of `SelectMenuBody`
   */
  action?: string
  /**
   * @default false
   */
  disabled?: boolean
}
```

`SelectMenuDivider` Props

```ts
interface MenuDividerProps {
  /**
   * Horizontal separator line, set to false to vertical separator line
   * @default true
   */
  horizontal?: boolean
}
```

`SelectMenuTrigger` Props

```ts
interface SelectMenuTriggerProps {
  /**
   * Rounded size
   * @default `small`
   */
  rounded?: 'small' | 'medium' | 'large' | 'pill'
}
```

## Events

`SelectMenuBody` events

```ts
// In response to the menu item selection, get the action value of the item
action: (action: string) => void
```

## Slots

### Container type components

- `default` menu content

Applicable components

- SelectMenuBody
- SelectMenuRow
- SelectMenuColumn
- SelectMenuSection

### Menu item type components

- `prepend` front slot
- `default` body content slot
- `append` tail slot, aligned right

Applicable components

- SelectMenuBlock
- SelectMenuItem
- SelectMenuHeader
- SelectMenuSubHeader

**SelectMenuDropdown** slots

- `trigger` the trigger element to open the menu
- `default` the main content of the menu

**SelectMenuTrigger** slots

- `default` the display text of the component's built-in menu trigger button. If not set, the default display text is `Open`
- `append` The slot at the end of the trigger button. If not set, an arrow icon showing the menu open state is provided by default
