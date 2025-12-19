# Alert

模态消息通知对话框，显示于屏幕的中间位置，通常用于需要执行主动交互确认的场景

## 实例

### 消息类型

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

### 信息确认

<!-- ```ts
import { DialogAlertConfirm, DialogMessage, DialogMessageSuccess } from 'v-dialogs'

function deleteUser (userId) {
  const message = 'Deleted data cannot be recovered, are you sure?'
  const callback = confirm => {
    if (confirm) {
      executeDeleteUser(userId).then(() => {
        DialogMessageSuccess('Delete complete.')
      })
    } else {
      DialogMessage('Canceled')
    }
  }
  DialogAlertConfirm(message, callback)
}
``` -->

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

### 界面定制化

```js
DialogAlert('Hello', { icon: false })
DialogAlert('Hello', { header: false })
DialogAlert('Hello', { title: 'Custom title' })
DialogAlert('Hello', { shake: true })
```

<div class="d-flex my-3 gap-2 flex-wrap">
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

## 快速类型

**v-dialogs** 提供了 **Alert** 对话框的快速类型函数

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

配置选项 `AlertOptions` 的类型描述

```ts
interface AlertOptions {
  /**
   * 语言
   * @default `en`
   */
  language?: string
  /**
   * 自定义样式类名
   */
  customClass?: string
  /**
   * 显示标题栏
   * @default true
   */
  header?: boolean
  /**
   * 标题栏文本内容
   */
  title?: string
  /**
   * 消息类型
   * @default `info`
   */
  messageType?: 'info' | 'warning' | 'error' | 'success' | 'confirm'
  /**
   * 消息类型图标
   * @default true
   */
  icon?: boolean
  /**
   * 对话框外操作，抖动窗口提醒
   * @default false
   */
  shaking?: boolean
  /**
   * 应用对应消息类型的颜色阴影，增强显示效果
   * @default false
   */
  colorfulShadow?: boolean
  /**
   * 响应 `confirm` 模式下取消按钮的事件
   */
  cancelCallback?: Function
  /**
   * 点击对话框以外的区域，关闭对话框
   * @default false
   */
  backdropClose?: boolean
}
```
