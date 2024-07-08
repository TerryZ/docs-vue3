# Modal

Modal container dialog box presents content in the center of the screen. It is suitable for emphasizing user operations or fully customized content

## Examples

### Modal dialog

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

### UI customization

```ts
DialogModal(component, { header: false })
DialogModal(component, { closeButton: false })
DialogModal(component, { maxButton: false })
DialogModal(component, { fullscreen: true })
DialogModal(component, { shake: false })
```

<div class="my-3">
  <button
    type="button"
    class="btn btn-dark me-2"
    @click="openModal({ header: false })"
  >No header</button>
  <button
    type="button"
    class="btn btn-dark me-2"
    @click="openModal({ closeButton: false })"
  >No close icon</button>
  <button
    type="button"
    class="btn btn-dark me-2"
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

### Component form

In addition to the functional opening method, `v-dialogs` also supports the component opening method. You only need to wrap the component in the `DialogModalBox` component, and the corresponding configuration items can be directly passed in as props

```vue
<template>
  <div>
    <DialogModalBox
      v-model:visible="visible"
      :header="false"
    >
      <UserProfile />
    </DialogModalBox>

    <button
      type="button"
      @click="visible = true"
    >
      Open my component in modal
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DialogModalBox } from 'v-dialogs'

import UserProfile from './UserProfile.vue'

const visible = ref(false)
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
}
```
