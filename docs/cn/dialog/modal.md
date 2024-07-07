# Modal

模态容器对话框，将内容呈现于屏幕中心，它适用于需要强调用户操作，又或是完全定制化的内容

## 实例

### 模态窗口

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

### 界面定制化

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

### 组件形式

除了函数式的打开方式，`v-dialogs` 也支持组件形式的打开方式，只需要将组件包裹在 `DialogModalBox` 组件中即可，相应的配置项直接以 prop 的方式传入即可

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

配置选项 `ModalOptions` 的类型描述

```ts
interface ModalOptions {
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
   * 对话框宽度
   * @default 700
   */
  width?: number
  /**
   * 对话框高度
   * @default 400
   */
  height?: number
  /**
   * 传递给组件作为 props 的参数集
   */
  params?: Record<string, unknown>
  /**
   * 关闭按钮
   * @default true
   */
  closeButton?: boolean
  /**
   * 最大化窗口按钮
   * @default true
   */
  maxButton?: boolean
  /**
   * 打开窗口时最大化
   * @default false
   */
  fullscreen?: boolean
  /**
   * 对话框外操作，抖动窗口提醒
   * @default true
   */
  shaking?: boolean
}
```
