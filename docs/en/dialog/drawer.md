# Drawer

Drawer-style container dialog box, unlike [Modal](./modal), is displayed at the edge of the screen. The interaction will not be forced to be modal. In terms of usage scenarios, it is more inclined to be used as a display of information or light interactive content

## Examples

### Drawer dialog

::: code-group

```ts
import { DialogDrawer, DialogAlert } from 'v-dialogs'
import UserProfile from './UserProfile.vue'

DialogDrawer(UserProfile, {
  width: 700,
  title: 'User Profile',
  placement: 'left',
  params: {
    userId: 1,
    userName: 'Terry Zeng'
  },
  callback: (name, data) => {
    DialogAlert(`Received message: ${data[0]}`)
  }
})
```

```vue [UserProfile.vue]
<template>
  <div>
    <div>User name: {{ profile.name }}</div>
    <div>User age: {{ profile.age }}</div>

    <button
      type="button"
      @click="close"
    >Close</button>
  </div>
</template>

<script setup>
import { getUserProfile } from './data'
// declare `close` event
const emit = defineEmits(['close'])

const profile = getUserProfile()
// emit `close` event to close Drawer dialog
const close = () => emit('close', profile.name)
</script>
```

:::

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

<div class="my-3 d-flex gap-2 flex-wrap">
  <button
    type="button"
    class="btn btn-dark"
    @click="openDrawer({ backdrop: false })"
  >No backdrop</button>
  <button
    type="button"
    class="btn btn-dark"
    @click="openDrawer({ closeButton: false })"
  >No close icon</button>
  <button
    type="button"
    class="btn btn-dark"
    @click="openDrawer({ header: false })"
  >No header</button>
  <button
    type="button"
    class="btn btn-dark"
    @click="openDrawer({ backdropClose: false })"
  >No backdrop close</button>
</div>

### Event response

`callback` of the directive Drawer option is used to uniformly receive events triggered within all components

```ts
DialogDrawer(UserProfile, {
  callback: (name, data) => {
    console.log(name)
    console.log(data)
  }
})

// UserProfile.vue component script
const emit = defineEmits(['close', 'update'])
// When opening a Drawer dialog imperatively, an event called `close` must be triggered to close the window
const close = () => { emit('close', 1) }
// Callback response
// name: 'close'
// data: [1]
const update = () => { emit('update', 1, 'Sam') }
// Callback response
// name: 'update'
// data: [1, 'Sam']
```

### Component form

In addition to the functional opening method, **v-dialogs** also supports using a label component. Simply wrap the component in a DialogDrawerBox component and pass in the corresponding configuration options as props

Closing the window no longer requires defining and triggering a `close` event. Instead, it is controlled by binding the `visible` value to the `DialogDrawerBox`

Event responses are no longer handled by a centralized `callback` method; instead, the component handles the event itself

```vue
<template>
  <div>
    <DialogDrawerBox
      v-model:visible="visible"
      :header="false"
    >
      <MyComponent @close="close" @update="update" />
    </DialogDrawerBox>

    <button
      type="button"
      @click="visible = true"
    >
      Open component in drawer
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DialogDrawerBox } from 'v-dialogs'

import MyComponent from './MyComponent.vue'

const visible = ref(false)

const close = () => { visible.value = false }
const update = () => { ... }
</script>
```

<script setup>
import { useDrawerExamples } from '@/script/dialog/drawer'

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
   * Drawer rounded
   * @default true
   */
  rounded?: boolean
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
  /**
   * Event response
   * @param eventName
   * @param data
   * @returns
   */
  callback?: (eventName: string, data?: unknown[]) => void
}
```
