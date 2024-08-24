# Panel group

## 实例

<script setup>
import { PanelGroup, PanelItem } from 'v-layouts'

</script>

### 快速应用

```vue
<template>
  <PanelGroup>
    <PanelItem>
      <template #header>
        panel 1 header
      </template>
      <div>panel 1 body</div>
    </PanelItem>
    <PanelItem>
      <template #header>
        panel 2 header
      </template>
      <div>panel 2 body</div>
    </PanelItem>
  </PanelGroup>
</template>

<script setup>
import { PanelGroup, PanelItem } from 'v-layouts'
</script>
```

组件仅实现布局与功能，不包含样式，方便进行样式定制，实例中的样式仅为了更直观地呈现效果

<PanelGroup class="bg-light rounded-3 p-3">
  <PanelItem class="bg-white rounded-3 p-3">
    <template #header>
      <h4 class="m-0">panel 1 header</h4>
    </template>
    <div class="pt-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </PanelItem>
  <PanelItem class="bg-white rounded-3 p-3">
    <template #header>
      <h4 class="m-0">panel 2 header</h4>
    </template>
    <div class="pt-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </PanelItem>
  <PanelItem class="bg-white rounded-3 p-3">
    <template #header>
      <h4 class="m-0">panel 3 header</h4>
    </template>
    <div class="pt-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </PanelItem>
</PanelGroup>

### accordion

### set active

### 条件渲染

#### panel-item

#### panel-item-header

## Props

`PanelGroup` 属性

```ts
interface PanelGroupProps {
  /**
   * Activated panel item names
   */
  modelValue?: string[]
  /**
   * @default `auto`
   */
  width?: CssValue
  /**
   * @default `100%`
   */
  height?: CssValue
  /**
   * Panel spacing
   * @default `1rem`
   */
  gap?: CssValue
  /**
   * Panel group allows all panels to be opened by default
   * set to true, only one panel can be expanded
   * @default false
   */
  accordion?: boolean
}
```

`PanelItem` 属性

```ts
interface PanelItemProps {
  /**
   * Panel item name
   */
  name?: string
  /**
   * Panel content collapse switcher
   * @default true
   */
  switcher?: boolean
  /**
   * Switcher custom class
   */
  switcherClass?: string
  /**
   * @default false
   */
  destroyOnCollapse?: boolean
}
```


## 插槽

### PanelGroup

- `default` 分发 `PanelItem` 的插槽

### PanelItem

- `default` 面板内容区域
- `header` 面板头部区域
