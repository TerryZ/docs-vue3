# Toast

Silent message notification, Unlike [Message](./message), Toast is only displayed in the corner area of ​​the screen

## Examples

### Message types

<div class="my-3">
  <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="radio"
      id="toast-info"
      value="info"
      v-model="messageType"
    >
    <label
      class="form-check-label"
      for="toast-info"
    >Information</label>
  </div>
  <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="radio"
      id="toast-warning"
      value="warning"
      v-model="messageType"
    >
    <label
      class="form-check-label"
      for="toast-warning"
    >Warning</label>
  </div>
  <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="radio"
      id="toast-error"
      value="error"
      v-model="messageType"
    >
    <label
      class="form-check-label"
      for="toast-error"
    >Error</label>
  </div>
  <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="radio"
      id="toast-success"
      value="success"
      v-model="messageType"
    >
    <label
      class="form-check-label"
      for="toast-success"
    >Success</label>
  </div>
</div>

### Placement

<div class="my-3">
  <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="radio"
      id="placement-top-left"
      value="top-left"
      v-model="placement"
    >
    <label
      class="form-check-label"
      for="placement-top-left"
    >Top left</label>
  </div>
  <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="radio"
      id="placement-top-right"
      value="top-right"
      v-model="placement"
    >
    <label
      class="form-check-label"
      for="placement-top-right"
    >Top right</label>
  </div>
  <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="radio"
      id="placement-bottom-left"
      value="bottom-left"
      v-model="placement"
    >
    <label
      class="form-check-label"
      for="placement-bottom-left"
    >Bottom left</label>
  </div>
  <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="radio"
      id="placement-bottom-right"
      value="bottom-right"
      v-model="placement"
    >
    <label
      class="form-check-label"
      for="placement-bottom-right"
    >Bottom right</label>
  </div>
</div>
<div>
  <button
    type="button"
    class="btn btn-dark"
    @click="openToast({ placement, messageType })"
  >Open toast</button>
</div>

### UI customization

<div class="my-3 d-flex gap-2 flex-wrap">
  <button
    type="button"
    class="btn btn-dark"
    @click="openToast({ icon: false })"
  >No message type icon</button>
  <button
    type="button"
    class="btn btn-dark"
    @click="openToast({ closeButton: false })"
  >No close icon</button>
  <button
    type="button"
    class="btn btn-dark"
    @click="openToast({ duration: 0 })"
  >No auto close</button>
  <button
    type="button"
    class="btn btn-dark"
    @click="openToast({ offset: 100 })"
  >Distance from the edge</button>
</div>

<script setup>
import { useToastExamples } from '@/script/dialog/toast'
import { useData } from 'vitepress'

const { lang } = useData()
const {
  placement,
  messageType,
  openToast
} = useToastExamples(lang.value)
</script>

## Quick access type

**v-dialogs** provides quick type functions for **Toast** dialog

- DialogToastWarning
- DialogToastError
- DialogToastSuccess

```ts
import { DialogToast, DialogToastSuccess } from 'v-dialogs'

DialogToastSuccess('Hello')
⇓
DialogToast('Hello', { messageType: 'success' })
```

## API

```ts
type MessageContent = string | VNode

function DialogToast(
  message?: MessageContent,
  callback?: Function,
  options?: ToastOptions
): Function
```

The setting options `ToastOptions` details

```ts
interface ToastOptions {
  /**
   * Plugin language
   * @default `en`
   */
  language?: string
  /**
   * Custom class name
   */
  customClass?: string
  /**
   * Message types
   * @default `info`
   */
  messageType?: 'info' | 'warning' | 'error' |'success'
  /**
   * Message type icon
   * @default true
   */
  icon?: boolean
  /**
   * Display close button
   * @default false
   */
  closeButton?: boolean
  /**
   * The number of milliseconds to automatically close the dialog
   *
   * set to 0 to disable auto close
   *
   * @default 3000
   */
  duration?: number
  /**
   * The distance to the top of viewport
   * @default 16
   */
  offset?: string | number
  /**
   * The placement of the toast dialog
   * @default `top-right`
   */
  placement?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}
```
