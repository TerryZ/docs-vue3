# Drawer

抽屉式容器对话框，与 [Modal](./modal) 不同的是 Drawer 显示于屏幕的边缘，交互上不会强制模态化，在使用场景上会更倾向于作为信息的展示或是轻度的交互内容

## 实例

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

<div class="my-3">
  <button
    type="button"
    class="btn btn-dark me-2"
    @click="openDrawer({ backdrop: false })"
  >No backdrop</button>
  <button
    type="button"
    class="btn btn-dark me-2"
    @click="openDrawer({ closeButton: false })"
  >No close icon</button>
  <button
    type="button"
    class="btn btn-dark me-2"
    @click="openDrawer({ header: false })"
  >No header</button>
  <button
    type="button"
    class="btn btn-dark"
    @click="openDrawer({ backdropClose: false })"
  >No backdrop close</button>
</div>

### 组件形式

除了函数式的打开方式，`v-dialogs` 也支持组件形式的打开方式，只需要将组件包裹在 `DialogDrawerBox` 组件中即可，相应的配置项直接以 prop 的方式传入即可

```vue
<template>
  <div>
    <DialogDrawerBox
      v-model:visible="visible"
      :header="false"
    >
      <MyComponent />
    </DialogDrawerBox>

    <button
      type="button"
      @click="visible = true"
    >
      Open my component in drawer
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DialogDrawerBox } from 'v-dialogs'

import MyComponent from './MyComponent.vue'

const visible = ref(false)
</script>
```

<script setup>
import { useDrawerExamples } from '../../script/dialog/drawer'

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
   */
  width?: number
  /**
   * Dialog height
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
   * The drawer dialog placement
   * @default 'right'
   */
  placement?: 'left' | 'right' | 'top' | 'bottom'
  /**
   * Display the dialog background overlay
   * @default true
   */
  backdrop?: boolean
  /**
   * Click backdrop to close dialog
   * @default true
   */
  backdropClose?: boolean
}
```
