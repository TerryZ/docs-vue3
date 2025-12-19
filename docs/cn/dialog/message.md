# Message

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

### 显示位置

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

### 界面定制化

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

## 快速类型

**v-dialogs** 提供了 **Message** 对话框的快速类型函数

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

配置选项 `MessageOptions` 的类型

```ts
interface MessageOptions {
  /**
   * 自定义样式类名
   */
  customClass?: string
  /**
   * 消息类型
   * @default `info`
   */
  messageType?: 'info' | 'warning' | 'error' |'success'
  /**
   * 消息类型图标
   * @default true
   */
  icon?: boolean
  /**
   * 关闭按钮
   * @default false
   */
  closeButton?: boolean
  /**
   * 自动关闭对话框的时间（单位：毫秒）
   *
   * 设置为 0 则取消自动关闭
   *
   * @default 3000
   */
  duration?: number
  /**
   * 距离屏幕边缘的值
   * @default 32
   */
  offset?: string | number
  /**
   * 显示位置
   * @default `top`
   */
  placement?: 'top' | 'bottom'
  /**
   * 胶囊圆角样式
   * @default true
   */
  pill?: boolean
}
```
