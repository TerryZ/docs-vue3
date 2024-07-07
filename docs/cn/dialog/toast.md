# Toast

静默式消息通知对话框，与 [Message](./message) 不同的是 Toast 仅显示于屏幕的边角区域

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
    @click="openToastCN({ placement, messageType })"
  >Open toast</button>
</div>

### 界面定制化

```ts
DialogToast('Hello', { icon: false })
DialogToast('Hello', { closeButton: false })
DialogToast('Hello', { duration: 0 })
DialogToast('Hello', { offset: 100 })
```

<div class="my-3">
  <button
    type="button"
    class="btn btn-dark me-2"
    @click="openToastCN({ icon: false })"
  >No message type icon</button>
  <button
    type="button"
    class="btn btn-dark me-2"
    @click="openToastCN({ closeButton: false })"
  >No close icon</button>
  <button
    type="button"
    class="btn btn-dark me-2"
    @click="openToastCN({ duration: 0 })"
  >No auto close</button>
  <button
    type="button"
    class="btn btn-dark"
    @click="openToastCN({ offset: 100 })"
  >Distance from the edge</button>
</div>

<script setup>
import { useToastExamples } from '@/script/dialog/toast'

const {
  placement,
  messageType,
  openToastCN
} = useToastExamples()
</script>

## API

```ts
type MessageContent = string | VNode

function DialogToast(
  message?: MessageContent,
  callback?: Function,
  options?: ToastOptions
): Function
```

配置选项 `ToastOptions` 的类型

```ts
interface ToastOptions {
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
   * @default 16
   */
  offset?: string | number
  /**
   * 显示位置
   * @default `top-right`
   */
  placement?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}
```
