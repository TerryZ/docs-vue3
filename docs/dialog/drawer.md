# Drawer

Drawer-style container dialog box, unlike [Modal](./modal), is displayed at the edge of the screen. The interaction will not be forced to be modal. In terms of usage scenarios, it is more inclined to be used as a display of information or light interactive content

## Examples

### Placement

<div class="my-3">
  <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="radio"
      id="drawer-top"
      value="top"
      v-model="placement"
    >
    <label
      class="form-check-label"
      for="drawer-top"
    >Top</label>
  </div>
  <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="radio"
      id="drawer-bottom"
      value="bottom"
      v-model="placement"
    >
    <label
      class="form-check-label"
      for="drawer-bottom"
    >Bottom</label>
  </div>
  <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="radio"
      id="drawer-left"
      value="left"
      v-model="placement"
    >
    <label
      class="form-check-label"
      for="drawer-left"
    >Left</label>
  </div>
  <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="radio"
      id="drawer-right"
      value="right"
      v-model="placement"
    >
    <label
      class="form-check-label"
      for="drawer-right"
    >Right</label>
  </div>
</div>
<div>
  <button
    type="button"
    class="btn btn-dark"
    @click="openDrawer({ placement, header: false })"
  >Open drawer</button>
</div>

### UI customization

```ts
DialogDrawer(component, { backdrop: false })
DialogDrawer(component, { closeButton: false })
DialogDrawer(component, { header: false })
DialogDrawer(component, { backdropClose: false })
```

<div class="my-3">
  <button
    type="button"
    class="btn btn-dark me-2"
    @click="openDrawer({ backdrop: false })"
  >No backdrop</button>
  <button
    type="button"
    class="btn btn-dark me-2"
    @click="openDrawer({ closeButton: false })"
  >No close icon</button>
  <button
    type="button"
    class="btn btn-dark me-2"
    @click="openDrawer({ header: false })"
  >No header</button>
  <button
    type="button"
    class="btn btn-dark"
    @click="openDrawer({ backdropClose: false })"
  >No backdrop close</button>
</div>

### Component form

In addition to the functional opening method, `v-dialogs` also supports the component opening method. You only need to wrap the component in the `DialogDrawerBox` component, and the corresponding configuration items can be directly passed in as props

```vue
<template>
  <div>
    <DialogDrawerBox
      v-model:visible="visible"
      :header="false"
    >
      <MyComponent />
    </DialogDrawerBox>

    <button
      type="button"
      @click="visible = true"
    >
      Open my component in drawer
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DialogDrawerBox } from 'v-dialogs'

import MyComponent from './MyComponent.vue'

const visible = ref(false)
</script>
```

<script setup>
import { useDrawerExamples } from '../script/dialog/drawer'

const {
  placement,
  openDrawer
} = useDrawerExamples()
</script>

## API

```ts
type ComponentResult = VNode | Component
type ComponentContent = ComponentResult | (() => ComponentResult)

function DialogDrawer(
  component: ComponentContent,
  options?: DrawerOptions
): Function
```

The setting options `DrawerOptions` details

```ts
interface DrawerOptions {
  /**
   * Custom class name
   */
  customClass?: string
  /**
   * Display the header
   * @default true
   */
  header?: boolean
  /**
   * The title text displayed in header
   */
  title?: string
  /**
   * Dialog width
   */
  width?: number
  /**
   * Dialog height
   */
  height?: number
  /** The parameters pass to component as props */
  params?: Record<string, unknown>
  /**
   * The close dialog button in header
   * @default true
   */
  closeButton?: boolean
  /**
   * The drawer dialog placement
   * @default 'right'
   */
  placement?: 'left' | 'right' | 'top' | 'bottom'
  /**
   * Display the dialog background overlay
   * @default true
   */
  backdrop?: boolean
  /**
   * Click backdrop to close dialog
   * @default true
   */
  backdropClose?: boolean
}
```
