# Mask

用于阻止用户操作的屏幕遮罩

## 实例

### 加载数据

```ts
import {
  DialogMask,
  DialogAlertError,
  DialogMessageSuccess
} from 'v-dialogs'

function loadDataList () {
  // Open a mask before fetching data
  const destroy = DialogMask()

  fetchData()
    .then(data => {
      list.value = data.list
      // Dismiss mask overlay when data loading complete
      destroy()
      DialogMessageSuccess('Data loaded successfully')
    })
    .catch(() => {
      DialogAlertError('Data Load Failure')
    })
}
```

<div>
  <button
    type="button"
    class="btn btn-dark"
    @click="loadDataList"
  >Fetch data</button>
</div>

### 覆盖指定区域

```vue
<template>
  <div id="user-content-area">
    <div>content</div>
    ...
  </div>
</template>

<script setup>
import { DialogMask } from 'v-dialogs'

DialogMask('Loading...', { appendTo: '#user-content-area' })
</script>
```

<div
  style="height: 300px;"
  class="bg-light rounded-3 mb-3 overflow-hidden
  d-flex flex-column justify-content-center align-items-center
  "
  id="user-content-area"
>
  <div>content</div>
  <div>content</div>
  <div>content</div>
  <div>content</div>
  <div>content</div>
  <div>content</div>
</div>

<div>
  <button
    type="button"
    class="btn btn-dark"
    @click="coverTargetArea('#user-content-area')"
  >Cover target area</button>
</div>

### 界面定制化

```ts
DialogMask('Loading', { icon: false })
DialogMask('Loading', { pill: false })
DialogMask('Loading', { panel: false })
```

```vue
<script setup>
DialogMask('Loading', { panel: false, customClass:'my-custom-class' })
</script>

<style lang="sass">
.my-custom-class
  .v-dialog-body
    color: white
</style>
```

<div>
  <button
    type="button"
    class="btn btn-dark me-3"
    @click="openMaskCN({ icon: false })"
  >No spinner icon</button>
  <button
    type="button"
    class="btn btn-dark me-3"
    @click="openMaskCN({ pill: false })"
  >No pill style border</button>
  <button
    type="button"
    class="btn btn-dark me-3"
    @click="openMaskCN({ panel: false })"
  >No content panel</button>
  <button
    type="button"
    class="btn btn-dark me-3"
    @click="openMaskCN({ panel: false, customClass: 'my-custom-class' })"
  >Custom class</button>
</div>

<script setup>
import { useMaskExamples } from '../../script/dialog/mask'

const {
  loadDataList,
  coverTargetArea,
  openMaskCN
} = useMaskExamples()
</script>

<style lang="sass">
.my-custom-class
  .v-dialog-body
    color: white
</style>

## API

```ts
type MessageContent = string | VNode

function DialogMask(
  message?: MessageContent,
  callback?: Function,
  options?: MaskOptions
): Function
```

设置选项 `MaskOptions` 的内容

```ts
interface MaskOptions {
  /**
   * 语言
   * @default `en`
   */
  language?: string
  /**
   * 定制化样式类名
   */
  customClass?: string
  /**
   * 遮罩覆盖的目标区域
   * @default `body`
   */
  appendTo?: string
  /**
   * 胶囊样式的圆角
   * @default true
   */
  pill?: boolean
  /**
   * 显示 Loading 动画图标
   * @default true
   */
  icon?: boolean
  /**
   * 显示内容面板
   * @default true
   */
  panel?: boolean
}
```
