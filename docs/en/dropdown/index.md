# Dropdown

Dropdown menu component

[![GitHub Repo stars](https://img.shields.io/github/stars/terryz/v-dropdown?style=social)](https://github.com/TerryZ/v-dropdown) [![GitHub forks](https://img.shields.io/github/forks/terryz/v-dropdown?style=social)](https://github.com/TerryZ/v-dropdown)

## Project Status

[![test](https://github.com/TerryZ/v-dropdown/actions/workflows/npm-publish.yml/badge.svg?branch=master)](https://github.com/TerryZ/v-dropdown/actions/workflows/npm-publish.yml) [![codecov](https://codecov.io/gh/TerryZ/v-dropdown/branch/master/graph/badge.svg?token=veg52RGaZg)](https://codecov.io/gh/TerryZ/v-dropdown) [![npm version](https://img.shields.io/npm/v/v-dropdown.svg)](https://www.npmjs.com/package/v-dropdown) [![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://mit-license.org/) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Detailed changes for each release are documented in [Changelog](https://github.com/TerryZ/v-dropdown/blob/dev/CHANGELOG.md)

If you are using [vue 2.x](https://v2.vuejs.org/v2/guide/) version, please use [v-dropdown 2.x](https://github.com/TerryZ/v-dropdown/tree/dev-vue-2) version instead

## Installation

Install the `v-dropdown` component into your project:

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

### Components

`v-dropdown` provides the following components

- **Dropdown** The main container of the dropdown
- **DropdownTrigger** dropdown built-in button trigger
- **DropdownContent** dropdown content container

### Basic Usage

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

function change(val) {
  console.log(val)
}
```

:::

## Examples

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

function changeDisabled(val) {
  disabled.value = val
}
function inputChange(e) {
  if (e.target.value === '3') {
    dropdownManual.value.display()
  } else {
    if (dropdownManual.value.visible) {
      dropdownManual.value.close()
    }
  }
}
</script>

### Quick Usage

The `Dropdown` component uses click trigger by default

<DropdownClick />

```vue-html
<Dropdown>
  <DropdownContent>
    <div>some contents</div>
  </DropdownContent>
</Dropdown>
```

### Hover Activation

Open dropdown by hovering over trigger area

<DropdownHover />

```vue-html
<Dropdown trigger="hover">
  <template #trigger>
    <DropdownTrigger>Hover me</DropdownTrigger>
  </template>
  ...
</Dropdown>
```

### Context Menu Activation

Right-click trigger area to open dropdown

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

### Toggle Cycle

Disable toggle cycle when clicking trigger

<DropdownToggle />

```vue-html
<Dropdown :toggle="false">
  ...
</Dropdown>
```

### Disabled State

<DropdownDisabled />

```vue-html
<Dropdown :disabled="true">
  ...
</Dropdown>
```

### Manual Mode

Only opens dropdown when input value is "3"

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

function inputChange(e) {
  if (e.target.value === '3') {
    dropdown.value.display()
  } else {
    if (dropdown.value.visible) {
      dropdown.value.close()
    }
  }
}
```

:::

### Alignment Direction

Dropdown alignment relative to trigger

<DropdownAlign />

```html
<Dropdown align="center">
  ...
</Dropdown>
```

### Style Customization

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

Advanced styling via `style` or `class`

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

### State & Utilities

`Dropdown` provides component state and utility functions to slots

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

The `useDropdown` composable provides state and utilities:

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

## Slots

### Dropdown {#dropdown-component}

- `trigger` Trigger element
- `default` Dropdown content

Slot scope utilities

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

Data status provided by the slot

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

The `adjust` function provided by the slot is used to adjust the position of the dropdown content to align it with the trigger element

::: info
In most cases, when the position and size of the trigger and the drop-down bar content change, the component will automatically adjust the position of the drop-down bar content. Therefore, it is only recommended to use it when the position of the drop-down bar does not meet expectations in scenarios with complex business interactions
:::

### DropdownTrigger

Built-in button-style trigger component

- `default` Trigger content (default: "Open")
- `append` Opened state icon

### DropdownContent

- `default` Dropdown content

## Props

`Dropdown` component props

```ts
interface DropdownProps {
  /**
   * Dropdown alignment
   * @default `left`
   */
  align?: 'left' | 'center' | 'right'
  /**
   * Toggle visibility on repeated trigger clicks
   * @default true
   */
  toggle?: boolean
  /**
   * Manual control mode
   * @default false
   */
  manual?: boolean
  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean
  /**
   * Trigger displays in full-width mode
   * @default false
   */
  block?: boolean
  /**
   * Trigger method
   * @default `click`
   */
  trigger?: 'click' | 'hover' | 'contextmenu'
  /**
   * Enable animations
   * @default true
   */
  animated?: boolean
  /**
   * Spacing between trigger and dropdown
   * @default 5
   */
  gap?: number
  /**
   * Specify target container
   * @default `body`
   */
  appendTo: string | HTMLElement
}
```

`DropdownContent` component props

```ts
interface ContentProps {
  /**
   * Show border
   * @default true
   */
  border?: boolean
  /**
   * Border radius
   * @default `small`
   */
  rounded?: 'small' | 'medium' | 'large'
  /**
   * z-index value
   * @default 3000
   */
  zIndex?: number
}
```

`DropdownTrigger` component props

```ts
interface TriggerProps {
  /** Button border radius */
  rounded?: 'small' | 'medium' | 'large' | 'pill' | 'circle'
}
```

## Events

### visible-change

Triggered on visibility change

```ts
`visible-change`: (visible: boolean) => void
```

### open

Triggered when dropdown opens

```ts
open: () => void
```

### opened

Triggered after opening animation completes

```ts
opened: () => void
```

### close

Triggered when dropdown closes

```ts
close: () => void
```

### closed

Triggered after closing animation completes

```ts
closed: () => void
```

## API

Before using the plugin's API, declare a `ref` attribute for the component:

```vue
<template>
  <Dropdown ref="dropdown" />
</template>

<script setup lang="ts">
import { ref, onMounted, useTemplateRef } from 'vue'
import { Dropdown, type DropdownUtilities } from 'v-dropdown'

// vue 3.5+
const dropdownRef = useTemplateRef<DropdownUtilities>('dropdown')
// Vue versions lower than 3.5
// const dropdownRef = ref<DropdownUtilities>()

onMounted(() => {
  dropdownRef.value?.display()
})
</script>
```

The API of the `Dropdown` component is consistent with the data type `DropdownUtilities` provided by its `default` and `trigger` slots. Please refer to [Dropdown slot](#dropdown-component)
