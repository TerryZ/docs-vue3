# Dropdown

Dropdown component

[![GitHub Repo stars](https://img.shields.io/github/stars/terryz/v-dropdown?style=social) ![GitHub forks](https://img.shields.io/github/forks/terryz/v-dropdown?style=social)](https://github.com/TerryZ/v-dropdown)

Repository status

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/TerryZ/v-dropdown/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/TerryZ/v-dropdown/tree/master) [![codecov](https://codecov.io/gh/TerryZ/v-dropdown/branch/master/graph/badge.svg?token=veg52RGaZg)](https://codecov.io/gh/TerryZ/v-dropdown) [![npm version](https://img.shields.io/npm/v/v-dropdown.svg)](https://www.npmjs.com/package/v-dropdown) [![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://mit-license.org/) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Detailed changes for each release are documented in [Changelog](https://github.com/TerryZ/v-dropdown/blob/dev/CHANGELOG.md)

If you are using [vue 2.x](https://v2.vuejs.org/v2/guide/) version, please use [v-dropdown 2.x](https://github.com/TerryZ/v-dropdown/tree/dev-vue-2) version instead

## Installation

Install `v-dropdown` component in to your project

```sh
# use npm
npm i v-dropdown
# use yarn
yarn add v-dropdown
# use pnpm
pnpm add v-dropdown
```

### Usage

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

## Examples

### Quick demo

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

`Dropdown` component uses click-triggered objects by default to open the dropdown conatiner

### trigger by hover

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

### trigger by contextmenu

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

Mouse right click trigger container area to open dropdown container

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

### close toggle

```html
<Dropdown :toggle="false" >
  ...
</Dropdown>
```

Set the click to trigger the object cycle to switch the dropdown container open and closed, the effect also works on the mouse hover and the right mouse button menu trigger mode

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

### Disabled

```html
<Dropdown :disabled="true" >
  <!-- named scoped slots -->
  <template #trigger="{ visible, disabled }">
    <button
      type="button"
      :class="{
        'border-primary': visible.value,
        'bg-primary': visible.value,
        'bg-opacity-10': visible.value,
      }"
    >
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
      class="border rounded-3 px-3 py-1 shadow-sm transition-all"
      :class="{
        'border-primary': visible.value,
        'bg-primary': visible.value,
        'bg-opacity-10': visible.value,
      }"
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

### Manual

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

In this example, the dropdown container will only open when the number `3` is entered

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

### No border

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

### Alignment direction

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

### Specify container width

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

## Slots

In the `Dropdown` component, the trigger object and content are distributed using slots

### trigger(named scoped slots)

Named scoped slots for placing trigger objects, which outputs the following component state

- `visible` the dropdown container visible status
- `disabled` disabled status

```vue
<template>
  <Dropdown>
    <template #trigger>
      <button type="button">Click me</button>
    </template>
  </Dropdown>
</template>
```

Apply scoped slots status data

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

The default slot is used to place the content area in the dropdown container

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

- type `'left' | 'center' | 'right'`
- default `'left'`

The dropdown container align to trigger container direction

::: tip
`Dropdown` automatically determines the vertical orientation of the dropdown container (up or down) depending on the position of the screen
:::

### border

- type `boolean`
- default `true`

The dropdown container display border

### toggle

- type `boolean`
- default `true`

Cyclically toggle the display/closing of the dropdown container

### manual

- type `boolean`
- default `false`

Manual operation mode; when this mode is enabled, the trigger specified by `trigger` will no longer be able to open/close the drop-down bar, but can only be controlled by function calls, this mode is suitable for scenarios requiring precise control

### disabled

- type `boolean`
- default `false`

Enabled / disabled `Dropdown` component

### animated

- type `boolean | string`
- default `true`

To turn on/off the dropdown animation, in addition to setting on and off, you can also specify a string as the class name of the custom animation, the content of which needs to be defined externally

### width

- type `number`

Specify the width of the dropdown container, or adapt to the content width if not specified

### fullWidth

- type `boolean`
- default `false`

Trigger container display mode

- `true` block element box `display: block`
- `false` inline element boxes `display: inline-block`

### trigger

- type `'click' | 'hover' | 'contextmenu'`
- default `'click'`

Open the dropdown container trigger method

## Events

Component operation response events

### visible-change

Respond to the state change of the dropdown container opening/closing

```ts
visible-change(visible: boolean): void
```

## API

Before using Pagination component's API, need to declare a ref attribute for the component, declare a ref variable by ref() to hold the element reference(the name must match template ref value) and use it to call API methods

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

Display dropdown container

```ts
display(): void
```

### close

Close dropdown container

```ts
close(): void
```

### toggleVisible

Toggle dropdown visible state

```ts
toggleVisible(): void
```

### adjust

Detect and adjust dropdown container position, make the dropdown container align to the trigger container

```ts
adjust(): void
```
