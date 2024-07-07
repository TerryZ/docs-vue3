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
import { useModalExamples } from '../../script/dialog/modal'

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
