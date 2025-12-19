# Modal

模态容器对话框，将内容呈现于屏幕中心，它适用于需要强调用户操作，又或是完全定制化的内容

## 实例

### 模态窗口

::: code-group

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

```vue [UserProfile.vue]
<template>
  <div>
    <div>User name: {{ profile.name }}</div>
    <div>User age: {{ profile.age }}</div>

    <button
      type="button"
      @click="close"
    >Close</button>
  </div>
</template>

<script setup>
import { getUserProfile } from './data'
// declare `close` event
const emit = defineEmits(['close'])

const profile = getUserProfile()
// emit `close` event to close Modal dialog
const close = () => emit('close', profile.name)
</script>
```

:::

<div>
  <button
    type="button"
    class="btn btn-dark me-2"
    @click="openModal()"
  >Open Modal</button>
</div>

### 界面定制化

```ts
DialogModal(component, { header: false })
DialogModal(component, { closeButton: false })
DialogModal(component, { maxButton: false })
DialogModal(component, { fullscreen: true })
DialogModal(component, { shake: false })
```

<div class="my-3 d-flex gap-2 flex-wrap">
  <button
    type="button"
    class="btn btn-dark"
    @click="openModal({ header: false })"
  >No header</button>
  <button
    type="button"
    class="btn btn-dark"
    @click="openModal({ closeButton: false })"
  >No close icon</button>
  <button
    type="button"
    class="btn btn-dark"
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

### 事件响应

指令式的选项的 `callback` 用于统一接收所有组件内部触发的事件

```ts
DialogModal(UserProfile, {
  callback: (name, data) => {
    console.log(name)
    console.log(data)
  }
})

// UserProfile.vue component script
const emit = defineEmits(['close', 'update'])
// 指令式打开窗口时，必须触发名为 `close` 的事件才能关闭窗口
const close = () => { emit('close', 1) }
// Callback response
// name: 'close'
// data: [1]
const update = () => { emit('update', 1, 'Sam') }
// Callback response
// name: 'update'
// data: [1, 'Sam']
```

### 组件形式

除了函数式的打开方式，**v-dialogs** 也提供了标签组件的使用形式，只需要将组件包裹在 `DialogModalBox` 组件中即可，相应的配置项直接以 prop 的方式传入即可

关闭窗口的操作，不再是定义并触发 `close` 事件，而是通过为 `DialogModalBox` 绑定 `visible` 值进行控制

事件的响应也不再是 `callback` 统一接收，而是组件自行处理

```vue
<template>
  <div>
    <DialogModalBox
      v-model:visible="visible"
      :header="false"
    >
      <UserProfile @close="close" @update="update" />
    </DialogModalBox>

    <button
      type="button"
      @click="visible = true"
    >
      Open component in modal
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DialogModalBox } from 'v-dialogs'

import UserProfile from './UserProfile.vue'

const visible = ref(false)

const close = () => { visible.value = false }
const update = () => { ... }
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
  /**
   * 响应事件
   * @param eventName
   * @param data
   * @returns
   */
  callback?: (eventName: string, data?: unknown[]) => void
}
```
