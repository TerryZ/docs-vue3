# Mask

A screen mask that blocks user actions

## Examples

### Fetch data

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

### Covering the specified area

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

### UI customization

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
    @click="openMask({ icon: false })"
  >No spinner icon</button>
  <button
    type="button"
    class="btn btn-dark me-3"
    @click="openMask({ pill: false })"
  >No pill style border</button>
  <button
    type="button"
    class="btn btn-dark me-3"
    @click="openMask({ panel: false })"
  >No content panel</button>
  <button
    type="button"
    class="btn btn-dark me-3"
    @click="openMask({ panel: false, customClass: 'my-custom-class' })"
  >Custom class</button>
</div>

<script setup>
import { useMaskExamples } from '@/script/dialog/mask'
import { useData } from 'vitepress'

const { lang } = useData()
const {
  loadDataList,
  coverTargetArea,
  openMask
} = useMaskExamples(lang.value)
</script>

<style lang="sass">
.my-custom-class
  .v-dialog-body
    color: white
</style>

## API

```ts
function DialogMask(
  /**
   * Message content(string|VNode)
   */
  message?: MessageContent,
  /**
   * Callback after Mask dialog closed
   */
  callback?: Function,
  options?: MaskOptions
): Function
```

The setting options `MaskOptions` details

```ts
interface MaskOptions {
  /**
   * Plugin language
   * @default `en`
   */
  language?: string
  /**
   * Custom class name
   */
  customClass?: string
  /**
   * The element that mask append to
   * @default `body`
   */
  appendTo?: string
  /**
   * Pill style border
   * @default true
   */
  pill?: boolean
  /**
   * Display spinner icon
   * @default true
   */
  icon?: boolean
  /**
   * Display the content panel
   * @default true
   */
  panel?: boolean
}
```
