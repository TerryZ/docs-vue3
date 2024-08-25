# Panel group

Panel group module for organizing and managing the layout of multiple panels in vertical space

![panel-group](/layout/panel-group.svg)

The component opens all panels in a panel group by default and automatically applies equal heights. In addition, the panel group is guaranteed to have at least one panel open

## Examples

<script setup>
import { LayoutAdminClassic, PanelGroup, PanelItem } from 'v-layouts'
import { usePanelGroup } from '@/script/layout/panel-group'

const {
  active,
  activeLayout,
  activeAccordion,
  visiblePanel2,
  visiblePanel1Header
} = usePanelGroup()
</script>

### Quick layout

```vue
<template>
  <PanelGroup>
    <PanelItem>
      <template #header>
        panel 1 header
      </template>
      <div>panel 1 body</div>
    </PanelItem>
    <PanelItem>
      <template #header>
        panel 2 header
      </template>
      <div>panel 2 body</div>
    </PanelItem>
  </PanelGroup>
</template>

<script setup>
import { PanelGroup, PanelItem } from 'v-layouts'
</script>
```

Components only to achieve the layout and functionality, does not contain style, so that it is more convenient to customize the style, the style in the example is only for more intuitive rendering effect

<PanelGroup class="bg-light rounded-3 p-3">
  <PanelItem class="bg-white rounded-3 p-3">
    <template #header>
      <h4 class="m-0">panel 1 header</h4>
    </template>
    <div class="pt-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </PanelItem>
  <PanelItem class="bg-white rounded-3 p-3">
    <template #header>
      <h4 class="m-0">panel 2 header</h4>
    </template>
    <div class="pt-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </PanelItem>
  <PanelItem class="bg-white rounded-3 p-3">
    <template #header>
      <h4 class="m-0">panel 3 header</h4>
    </template>
    <div class="pt-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </PanelItem>
</PanelGroup>

### Specify the panel to open

Specify which panel to open by setting the `v-model` value of `PanelGroup` and don't forget to set the `name` attribute for `PanelItem`

```vue
<template>
  <PanelGroup v-model="active">
    <PanelItem name="panel1">...</PanelItem>
    <PanelItem name="panel2">...</PanelItem>
    <PanelItem name="panel3">...</PanelItem>
  </PanelGroup>
</template>

<script setup>
import { ref } from 'vue'
import { PanelGroup, PanelItem } from 'v-layouts'

const active = ref(['panel2', 'panel3'])
</script>
```

<PanelGroup class="bg-light rounded-3 p-3" v-model="active">
  <PanelItem class="bg-white rounded-3 p-3" name="panel1">
    <template #header>
      <h4 class="m-0">panel 1 header</h4>
    </template>
    <div class="pt-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </PanelItem>
  <PanelItem class="bg-white rounded-3 p-3" name="panel2">
    <template #header>
      <h4 class="m-0">panel 2 header</h4>
    </template>
    <div class="pt-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </PanelItem>
  <PanelItem class="bg-white rounded-3 p-3" name="panel3">
    <template #header>
      <h4 class="m-0">panel 3 header</h4>
    </template>
    <div class="pt-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </PanelItem>
</PanelGroup>

::: warning
The panels can't all be closed, at least one panel will be left open
:::

### Accordion mode

By setting the `accordion` prop it is possible to switch to accordion mode, where only one expansion panel is displayed (i.e. opening one closes the other)

::: info Uniqueness
In this mode, even if more than one panel name is specified to be opened, only the first panel will be opened
:::

```vue
<template>
  <PanelGroup
    accordion
    v-model="active"
  >
    <PanelItem name="panel1">...</PanelItem>
    <PanelItem name="panel2">...</PanelItem>
    <PanelItem name="panel3">...</PanelItem>
  </PanelGroup>
</template>

<script setup>
import { ref } from 'vue'
import { PanelGroup, PanelItem } from 'v-layouts'
// set panel2 active by default
const active = ref(['panel2'])
</script>
```

<PanelGroup class="bg-light rounded-3 p-3" accordion v-model="activeAccordion">
  <PanelItem class="bg-white rounded-3 p-3" name="panel1">
    <template #header>
      <h4 class="m-0">panel 1 header</h4>
    </template>
    <div class="pt-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </PanelItem>
  <PanelItem class="bg-white rounded-3 p-3" name="panel2">
    <template #header>
      <h4 class="m-0">panel 2 header</h4>
    </template>
    <div class="pt-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </PanelItem>
  <PanelItem class="bg-white rounded-3 p-3" name="panel3">
    <template #header>
      <h4 class="m-0">panel 3 header</h4>
    </template>
    <div class="pt-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </PanelItem>
</PanelGroup>

### Conditional Rendering

When destroying/restoring a panel via conditional rendering, the panel group will automatically adjust the height of the remaining panels

```vue-html
<PanelGroup>
  <PanelItem name="panel1">
    <template #header v-if="visiblePanel1Header">
      <h4>panel 1 header</h4>
    </template>
    <div>panel 1 body</div>
  </PanelItem>
  <PanelItem name="panel2" v-if="visiblePanel2">...</PanelItem>
  <PanelItem name="panel3" :switcher="false">...</PanelItem>
</PanelGroup>
```

<div class="my-3">
  <button
    type="button"
    class="btn btn-dark me-3"
    @click="visiblePanel1Header = !visiblePanel1Header"
  >
    conditional rendering panel1 header
  </button>
  <button
    type="button"
    class="btn btn-dark me-3"
    @click="visiblePanel2 = !visiblePanel2"
  >
    conditional rendering panel2 panel
  </button>
</div>

<PanelGroup class="bg-light rounded-3 p-3" height="550px">
  <PanelItem class="bg-white rounded-3 p-3" name="panel1">
    <template #header v-if="visiblePanel1Header">
      <h4 class="m-0">panel 1 header</h4>
    </template>
    <div class="pt-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </PanelItem>
  <PanelItem class="bg-white rounded-3 p-3" name="panel2" v-if="visiblePanel2">
    <template #header>
      <h4 class="m-0">panel 2 header</h4>
    </template>
    <div class="pt-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </PanelItem>
  <PanelItem class="bg-white rounded-3 p-3" name="panel3" :switcher="false">
    <template #header>
      <h4 class="m-0">panel 3 header</h4>
    </template>
    <div class="pt-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </PanelItem>
</PanelGroup>

### Combined with layout

Combine `LayoutAdminClassic` and `PanelGroup` to realize some layout effects

```vue-html
<LayoutAdminClassic>
  <template #header>
    <div>Header</div>
  </template>
  <template #aside>
    <PanelGroup v-model="active">
      <PanelItem name="panel1">...</PanelItem>
      <PanelItem name="panel2">...</PanelItem>
      <PanelItem name="panel3" :switcher="false">...</PanelItem>
    </PanelGroup>
  </template>
  <template #breadcrumb>
    <div>Breadcrumb</div>
  </template>
  <template #footer>
    <div>Footer</div>
  </template>

  <div>Main content</div>
</LayoutAdminClassic>
```

<LayoutAdminClassic
  width="100%"
  :height="500"
  class="border rounded-3 shadow-sm"
>
  <template #header>
    <div class="h-100 border-bottom p-3">Header</div>
  </template>
  <template #aside>
    <PanelGroup class="h-100 bg-light p-3" v-model="activeLayout">
      <PanelItem class="bg-white rounded-3 p-3" name="panel1">
        <template #header>
          <h4 class="m-0">panel 1 header</h4>
        </template>
        <div class="pt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </PanelItem>
      <PanelItem class="bg-white rounded-3 p-3" name="panel2">
        <template #header>
          <h4 class="m-0">panel 2 header</h4>
        </template>
        <div class="pt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </PanelItem>
      <PanelItem class="bg-white rounded-3 p-3" name="panel3" :switcher="false">
        <template #header>
          <h4 class="m-0">panel 3 header</h4>
        </template>
        <div class="pt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </PanelItem>
    </PanelGroup>
  </template>
  <template #breadcrumb>
    <div class="h-100 border-bottom p-3">Breadcrumb</div>
  </template>
  <template #footer>
    <div class="h-100 border-top p-3">Footer</div>
  </template>

  <div class="h-100 p-3">Main content</div>
</LayoutAdminClassic>

## Props

`PanelGroup` properties

```ts
interface PanelGroupProps {
  /**
   * Activated panel item names
   */
  modelValue?: string[]
  /**
   * @default `auto`
   */
  width?: CssValue
  /**
   * @default `100%`
   */
  height?: CssValue
  /**
   * Panel spacing
   * @default `1rem`
   */
  gap?: CssValue
  /**
   * Panel group allows all panels to be opened by default
   * set to true, only one panel can be expanded
   * @default false
   */
  accordion?: boolean
}
```

`PanelItem` properties

```ts
interface PanelItemProps {
  /**
   * Panel item name
   */
  name?: string
  /**
   * Panel content collapse switcher
   * @default true
   */
  switcher?: boolean
  /**
   * Switcher custom class
   */
  switcherClass?: string
  /**
   * Whether to destroy when the panel is collapsed
   * @default false
   */
  destroyOnCollapse?: boolean
}
```

## Slots

### PanelGroup

- `default` Distribution of slots for `PanelItem`

### PanelItem

- `default` Panel body area
- `header` Panel header area
