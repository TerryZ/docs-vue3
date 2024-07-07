# Alert

静默式消息通知对话框，显示于屏幕的中间位置

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
    @click="openAlertCN({ colorfulShadow, messageType })"
  >Open message</button>
</div>

### 信息确认

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
    @click="openConfirmCN"
  >Confirm</button>
</div>

### 界面定制化

```js
DialogAlert('Hello', { icon: false })
DialogAlert('Hello', { header: false })
DialogAlert('Hello', { title: 'Custom title' })
DialogAlert('Hello', { shake: true })
```

<div class="my-3">
  <button
    type="button"
    class="btn btn-dark me-2"
    @click="openAlertCN({ icon: false })"
  >No message type icon</button>
  <button
    type="button"
    class="btn btn-dark me-2"
    @click="openAlertCN({ header: false })"
  >No header</button>
  <button
    type="button"
    class="btn btn-dark me-2"
    @click="openAlertCN({ title: 'Custom title' })"
  >Custom title</button>
  <button
    type="button"
    class="btn btn-dark"
    @click="openAlertCN({ shake: true })"
  >Outside click shaking</button>
</div>

<script setup>
import { useAlertExamples } from '@/script/dialog/alert'

const {
  colorfulShadow,
  messageType,
  openAlertCN,
  openConfirmCN
} = useAlertExamples()
</script>

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
