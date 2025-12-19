# Modal

Modal container dialog box presents content in the center of the screen. It is suitable for emphasizing user operations or fully customized content

## Examples

### Modal dialog

::: code-group

```ts
import { DialogModal, DialogAlert } from 'v-dialogs'
import UserProfile from './UserProfile.vue'

DialogModal(UserProfile, {
  width: 900,
  height: 600,
  title: 'User Profile',
  params: {
    userId: 1,
    userName: 'Terry Zeng'
  },
  callback: data => {
    DialogAlert(`Received message: ${data}`)
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
// emit `close` event to close Modal dialog
const close = () => emit('close', profile.name)
</script>
```

:::

<div>
  <button
    type="button"
    class="btn btn-dark me-2"
    @click="openModal()"
  >Open Modal</button>
</div>

### UI customization

```ts
DialogModal(component, { header: false })
DialogModal(component, { closeButton: false })
DialogModal(component, { maxButton: false })
DialogModal(component, { fullscreen: true })
DialogModal(component, { shake: false })
```

<div class="my-3 d-flex gap-2 flex-wrap">
  <button
    type="button"
    class="btn btn-dark"
    @click="openModal({ header: false })"
  >No header</button>
  <button
    type="button"
    class="btn btn-dark"
    @click="openModal({ closeButton: false })"
  >No close icon</button>
  <button
    type="button"
    class="btn btn-dark"
    @click="openModal({ maxButton: false })"
  >No maximize button</button>
  <button
    type="button"
    class="btn btn-dark"
    @click="openModal({ closeButton: false, maxButton: false })"
  >No buttons</button>
</div>

<div class="my-3">
  <button
    type="button"
    class="btn btn-dark me-2"
    @click="openModal({ fullscreen: true })"
  >Open with maximize</button>
  <button
    type="button"
    class="btn btn-dark me-2"
    @click="openModal({ shake: false })"
  >No outside click shaking</button>
</div>

### Event response

`callback` of the directive Modal option is used to uniformly receive events triggered within all components

```ts
DialogModal(UserProfile, {
  callback: (name, data) => {
    console.log(name)
    console.log(data)
  }
})

// UserProfile.vue component script
const emit = defineEmits(['close', 'update'])
// When opening a Modal dialog imperatively, an event called `close` must be triggered to close the window
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

In addition to the functional opening method, **v-dialogs** also supports using a label component. Simply wrap the component in a `DialogModalBox` component and pass in the corresponding configuration options as props

Closing the window no longer requires defining and triggering a `close` event. Instead, it is controlled by binding the `visible` value to the `DialogDrawerBox`

Event responses are no longer handled by a centralized `callback` method; instead, the component handles the event itself

```vue
<template>
  <div>
    <DialogModalBox
      v-model:visible="visible"
      :header="false"
    >
      <UserProfile @close="close" @update="update" />
    </DialogModalBox>

    <button
      type="button"
      @click="visible = true"
    >
      Open component in modal
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DialogModalBox } from 'v-dialogs'

import UserProfile from './UserProfile.vue'

const visible = ref(false)

const close = () => { visible.value = false }
const update = () => { ... }
</script>
```

<script setup>
import { useModalExamples } from '@/script/dialog/modal'

const {
  openModal
} = useModalExamples()
</script>

## API

```ts
type ComponentResult = VNode | Component
type ComponentContent = ComponentResult | (() => ComponentResult)

function DialogModal(
  component: ComponentContent,
  options?: ModalOptions
): Function
```

The setting options `ModalOptions` details

```ts
interface ModalOptions {
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
   * @default 700
   */
  width?: number
  /**
   * Dialog height
   * @default 400
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
   * Maximize dialog button in header
   * @default true
   */
  maxButton?: boolean
  /**
   * Open and maximize the modal dialog
   * @default false
   */
  fullscreen?: boolean
  /**
   * Shake the dialog when operating outside the dialog
   * @default true
   */
  shaking?: boolean
  /**
   * Event response
   * @param eventName
   * @param data
   * @returns
   */
  callback?: (eventName: string, data?: unknown[]) => void
}
```
