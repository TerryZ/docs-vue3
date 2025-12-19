# Drawer

抽屉式容器对话框，与 [Modal](./modal) 不同的是 Drawer 显示于屏幕的边缘，交互上不会强制模态化，在使用场景上会更倾向于作为信息的展示或是轻度的交互内容

## 实例

### 抽屉对话框

::: code-group

```ts
import { DialogDrawer, DialogAlert } from 'v-dialogs'
import UserProfile from './UserProfile.vue'

DialogDrawer(UserProfile, {
  width: 700,
  title: 'User Profile',
  placement: 'left',
  params: {
    userId: 1,
    userName: 'Terry Zeng'
  },
  callback: (name, data) => {
    DialogAlert(`Received message: ${data[0]}`)
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
// emit `close` event to close Drawer dialog
const close = () => emit('close', profile.name)
</script>
```

:::

### 显示位置

<div class="my-3">
  <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="radio"
      id="drawer-top"
      value="top"
      v-model="placement"
    >
    <label
      class="form-check-label"
      for="drawer-top"
    >Top</label>
  </div>
  <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="radio"
      id="drawer-bottom"
      value="bottom"
      v-model="placement"
    >
    <label
      class="form-check-label"
      for="drawer-bottom"
    >Bottom</label>
  </div>
  <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="radio"
      id="drawer-left"
      value="left"
      v-model="placement"
    >
    <label
      class="form-check-label"
      for="drawer-left"
    >Left</label>
  </div>
  <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="radio"
      id="drawer-right"
      value="right"
      v-model="placement"
    >
    <label
      class="form-check-label"
      for="drawer-right"
    >Right</label>
  </div>
</div>
<div>
  <button
    type="button"
    class="btn btn-dark"
    @click="openDrawer({ placement, header: false })"
  >Open drawer</button>
</div>

### 界面定制化

```ts
DialogDrawer(component, { backdrop: false })
DialogDrawer(component, { closeButton: false })
DialogDrawer(component, { header: false })
DialogDrawer(component, { backdropClose: false })
```

<div class="my-3 d-flex gap-2 flex-wrap">
  <button
    type="button"
    class="btn btn-dark"
    @click="openDrawer({ backdrop: false })"
  >No backdrop</button>
  <button
    type="button"
    class="btn btn-dark"
    @click="openDrawer({ closeButton: false })"
  >No close icon</button>
  <button
    type="button"
    class="btn btn-dark"
    @click="openDrawer({ header: false })"
  >No header</button>
  <button
    type="button"
    class="btn btn-dark"
    @click="openDrawer({ backdropClose: false })"
  >No backdrop close</button>
</div>

### 事件响应

指令式的选项的 `callback` 用于统一接收所有组件内部触发的事件

```ts
DialogDrawer(UserProfile, {
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

除了函数式的打开方式，**v-dialogs** 也提供了标签组件的使用形式，只需要将组件包裹在 `DialogDrawerBox` 组件中即可，相应的配置项直接以 prop 的方式传入即可

关闭窗口的操作，不再是定义并触发 `close` 事件，而是通过为 `DialogDrawerBox` 绑定 `visible` 值进行控制

事件的响应也不再是 `callback` 统一接收，而是组件自行处理

```vue
<template>
  <div>
    <DialogDrawerBox
      v-model:visible="visible"
      :header="false"
    >
      <MyComponent @close="close" @update="update" />
    </DialogDrawerBox>

    <button
      type="button"
      @click="visible = true"
    >
      Open component in drawer
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DialogDrawerBox } from 'v-dialogs'

import MyComponent from './MyComponent.vue'

const visible = ref(false)

const close = () => { visible.value = false }
const update = () => { ... }
</script>
```

<script setup>
import { useDrawerExamples } from '@/script/dialog/drawer'

const {
  placement,
  openDrawer
} = useDrawerExamples()
</script>

## API

```ts
type ComponentResult = VNode | Component
type ComponentContent = ComponentResult | (() => ComponentResult)

function DialogDrawer(
  component: ComponentContent,
  options?: DrawerOptions
): Function
```

配置选项 `DrawerOptions` 的类型描述

```ts
interface DrawerOptions {
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
   * 对话框宽度，仅适用于 `left` 与 `right` 两个位置
   */
  width?: number
  /**
   * 对话框高度，仅适用于 `top` 与 `bottom` 两个位置
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
   * 显示位置
   * @default 'right'
   */
  placement?: 'left' | 'right' | 'top' | 'bottom'
  /**
   * 抽屉圆角边框
   * @default true
   */
  rounded?: boolean
  /**
   * 背景遮罩
   * @default true
   */
  backdrop?: boolean
  /**
   * 点击遮罩关闭对话框
   * @default true
   */
  backdropClose?: boolean
  /**
   * 响应事件
   * @param eventName
   * @param data
   * @returns
   */
  callback?: (eventName: string, data?: unknown[]) => void
}
```
