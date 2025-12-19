# Alert

Modal message notification dialog box, displayed in the middle of the screen, is usually used in scenarios where active interactive confirmation is required

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

<div class="my-3">
  <div class="form-check">
  <input
    class="form-check-input"
    type="checkbox"
    v-model="colorfulShadow"
    :true-value="true"
    :false-value="false"
    id="alert-colorful-shadow"
  >
  <label
    class="form-check-label"
    for="alert-colorful-shadow"
  >
    Colorful Shadow
  </label>
</div>
</div>
<div>
  <button
    type="button"
    class="btn btn-dark"
    @click="openAlert({ colorfulShadow, messageType })"
  >Open message</button>
</div>

### Information confirmed

```ts
import { DialogAlert, DialogMessage, DialogMessageSuccess } from 'v-dialogs'

function deleteUser (userId) {
  const message = 'Deleted data cannot be recovered, are you sure?'
  const callback = () => {
    executeDeleteUser(userId).then(() => {
      DialogMessageSuccess('Delete complete.')
    })
  }
  const options = {
    messageType: 'confirm',
    cancelCallback: () => {
      DialogMessage('Canceled')
    }
  }
  DialogAlert(message, callback, options)
}
```

<div>
  <button
    type="button"
    class="btn btn-dark"
    @click="openConfirm"
  >Confirm</button>
</div>

### UI customization

```js
DialogAlert('Hello', { icon: false })
DialogAlert('Hello', { header: false })
DialogAlert('Hello', { title: 'Custom title' })
DialogAlert('Hello', { shake: true })
```

<div class="my-3 d-flex gap-2 flex-wrap">
  <button
    type="button"
    class="btn btn-dark"
    @click="openAlert({ icon: false })"
  >No message type icon</button>
  <button
    type="button"
    class="btn btn-dark"
    @click="openAlert({ header: false })"
  >No header</button>
  <button
    type="button"
    class="btn btn-dark"
    @click="openAlert({ title: 'Custom title' })"
  >Custom title</button>
  <button
    type="button"
    class="btn btn-dark"
    @click="openAlert({ shake: true })"
  >Outside click shaking</button>
</div>

<script setup>
import { useAlertExamples } from '@/script/dialog/alert'
import { useData } from 'vitepress'

const { lang } = useData()
const {
  colorfulShadow,
  messageType,
  openAlert,
  openConfirm
} = useAlertExamples(lang.value)
</script>

## Quick access type

**v-dialogs** provides quick type functions for **Alert** dialog

- DialogAlertWarning
- DialogAlertError
- DialogAlertSuccess
- DialogAlertConfirm

```ts
import { DialogAlert, DialogAlertSuccess } from 'v-dialogs'

DialogAlertSuccess('Hello')
⇓
DialogAlert('Hello', { messageType: 'success' })
```

## API

```ts
type MessageContent = string | VNode

function DialogAlert(
  message?: MessageContent,
  callback?: Function,
  options?: AlertOptions
): Function
```

The setting options `AlertOptions` details

```ts
interface AlertOptions {
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
   * Display the header
   * @default true
   */
  header?: boolean
  /**
   * The title text displayed in header
   */
  title?: string
  /**
   * Message types
   * @default `info`
   */
  messageType?: 'info' | 'warning' | 'error' | 'success' | 'confirm'
  /**
   * Message type icon
   * @default true
   */
  icon?: boolean
  /**
   * Shake the dialog when operating outside the dialog
   * @default false
   */
  shaking?: boolean
  /**
   * Use colorful shadow
   * @default false
   */
  colorfulShadow?: boolean
  /**
   * Respond the cancel button click in `confirm` type alert
   */
  cancelCallback?: Function
  /**
   * Click outside the dialog to close dialog
   * @default false
   */
  backdropClose?: boolean
}
```
