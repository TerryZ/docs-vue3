# Message

Silent message notification, displayed in the vertical center area of ​​the screen

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
      id="placement-top"
      value="top"
      v-model="placement"
    >
    <label
      class="form-check-label"
      for="placement-top"
    >Top</label>
  </div>
  <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="radio"
      id="placement-bottom"
      value="bottom"
      v-model="placement"
    >
    <label
      class="form-check-label"
      for="placement-bottom"
    >Bottom</label>
  </div>
</div>
<div>
  <button
    type="button"
    class="btn btn-dark"
    @click="openMessage({ placement, messageType })"
  >Open message</button>
</div>

### UI customization

```js
DialogMessage('Hello', { icon: false })
DialogMessage('Hello', { closeButton: true })
DialogMessage('Hello', { duration: 0 })
DialogMessage('Hello', { offset: 100 })
```

<div class="my-3 d-flex gap-2 flex-wrap">
  <button
    type="button"
    class="btn btn-dark"
    @click="openMessage({ icon: false })"
  >No message type icon</button>
  <button
    type="button"
    class="btn btn-dark"
    @click="openMessage({ closeButton: true })"
  >With close icon</button>
  <button
    type="button"
    class="btn btn-dark"
    @click="openMessage({ duration: 0 })"
  >No auto close</button>
  <button
    type="button"
    class="btn btn-dark"
    @click="openMessage({ offset: 100 })"
  >Distance from the edge</button>
</div>

<script setup>
import { useMessageExamples } from '@/script/dialog/message'

const {
  placement,
  messageType,
  openMessage
} = useMessageExamples()
</script>

## Quick access type

**v-dialogs** provides quick type functions for **Message** dialog

- DialogMessageWarning
- DialogMessageError
- DialogMessageSuccess

```ts
import { DialogMessage, DialogMessageSuccess } from 'v-dialogs'

DialogMessageSuccess('Hello')
⇓
DialogMessage('Hello', { messageType: 'success' })
```

## API

```ts
type MessageContent = string | VNode

function DialogMessage(
  message?: MessageContent,
  callback?: Function,
  options?: MessageOptions
): Function
```

The setting options `MessageOptions` details

```ts
interface MessageOptions {
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
   * @default 32
   */
  offset?: string | number
  /**
   * The placement of the message dialog
   * @default `top`
   */
  placement?: 'top' | 'bottom'
  /**
   * Display pill rounded style
   * @default true
   */
  pill?: boolean
}
```
