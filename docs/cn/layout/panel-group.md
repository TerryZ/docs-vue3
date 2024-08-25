# Panel group

面板组模块，用于组织和管理多个面板在垂直空间的布局

![panel-group](/layout/panel-group.svg)

组件默认会打开面板组中的所有面板，并自动应用均等高度。另外，面板组会至少保证有一个面板处于打开状态

## 实例

<script setup>
import { LayoutAdminClassic, PanelGroup, PanelItem } from 'v-layouts'
import { usePanelGroup } from '@/script/layout/panel-group'

const {
  active,
  activeLayout,
  activeAccordion,
  visiblePanel2,
  visiblePanel1Header
} = usePanelGroup()
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

组件仅实现布局与功能，不包含样式，这样更方便进行样式定制，实例中的样式仅为了更直观地呈现效果

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

### 指定打开的面板

通过设置 `PanelGroup` 的 `v-model` 值来指定打开的面板，同时别忘了为 `PanelItem` 设置 `name` 属性

```vue
<template>
  <PanelGroup v-model="active">
    <PanelItem name="panel1">...</PanelItem>
    <PanelItem name="panel2">...</PanelItem>
    <PanelItem name="panel3">...</PanelItem>
  </PanelGroup>
</template>

<script setup>
import { ref } from 'vue'
import { PanelGroup, PanelItem } from 'v-layouts'

const active = ref(['panel2', 'panel3'])
</script>
```

<PanelGroup class="bg-light rounded-3 p-3" v-model="active">
  <PanelItem class="bg-white rounded-3 p-3" name="panel1">
    <template #header>
      <h4 class="m-0">panel 1 header</h4>
    </template>
    <div class="pt-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </PanelItem>
  <PanelItem class="bg-white rounded-3 p-3" name="panel2">
    <template #header>
      <h4 class="m-0">panel 2 header</h4>
    </template>
    <div class="pt-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </PanelItem>
  <PanelItem class="bg-white rounded-3 p-3" name="panel3">
    <template #header>
      <h4 class="m-0">panel 3 header</h4>
    </template>
    <div class="pt-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </PanelItem>
</PanelGroup>

::: warning 注意
面板不能全部被关闭，至少会保留一个面板处于打开状态
:::

### 手风琴模式

通过设置 `accordion` 属性可以切换为手风琴模式，仅显示一个扩展面板（即打开一个会关闭另一个）

::: info 唯一性
在该模式下，指定打开面板的名称数量即使超过一个，仅其中的第一个面板会被打开
:::

```vue
<template>
  <PanelGroup
    accordion
    v-model="active"
  >
    <PanelItem name="panel1">...</PanelItem>
    <PanelItem name="panel2">...</PanelItem>
    <PanelItem name="panel3">...</PanelItem>
  </PanelGroup>
</template>

<script setup>
import { ref } from 'vue'
import { PanelGroup, PanelItem } from 'v-layouts'
// set panel2 active by default
const active = ref(['panel2'])
</script>
```

<PanelGroup class="bg-light rounded-3 p-3" accordion v-model="activeAccordion">
  <PanelItem class="bg-white rounded-3 p-3" name="panel1">
    <template #header>
      <h4 class="m-0">panel 1 header</h4>
    </template>
    <div class="pt-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </PanelItem>
  <PanelItem class="bg-white rounded-3 p-3" name="panel2">
    <template #header>
      <h4 class="m-0">panel 2 header</h4>
    </template>
    <div class="pt-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </PanelItem>
  <PanelItem class="bg-white rounded-3 p-3" name="panel3">
    <template #header>
      <h4 class="m-0">panel 3 header</h4>
    </template>
    <div class="pt-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </PanelItem>
</PanelGroup>

### 条件渲染

通过条件渲染销毁 / 恢复面板时，面板组会自动对剩余面板进行高度调整

```vue-html
<PanelGroup>
  <PanelItem name="panel1">
    <template #header v-if="visiblePanel1Header">
      <h4>panel 1 header</h4>
    </template>
    <div>panel 1 body</div>
  </PanelItem>
  <PanelItem name="panel2" v-if="visiblePanel2">...</PanelItem>
  <PanelItem name="panel3" :switcher="false">...</PanelItem>
</PanelGroup>
```

<div class="my-3">
  <button
    type="button"
    class="btn btn-dark me-3"
    @click="visiblePanel1Header = !visiblePanel1Header"
  >
    条件渲染 panel1 头部栏
  </button>
  <button
    type="button"
    class="btn btn-dark me-3"
    @click="visiblePanel2 = !visiblePanel2"
  >
    条件渲染 panel2 面板
  </button>
</div>

<PanelGroup class="bg-light rounded-3 p-3" height="550px">
  <PanelItem class="bg-white rounded-3 p-3" name="panel1">
    <template #header v-if="visiblePanel1Header">
      <h4 class="m-0">panel 1 header</h4>
    </template>
    <div class="pt-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </PanelItem>
  <PanelItem class="bg-white rounded-3 p-3" name="panel2" v-if="visiblePanel2">
    <template #header>
      <h4 class="m-0">panel 2 header</h4>
    </template>
    <div class="pt-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </PanelItem>
  <PanelItem class="bg-white rounded-3 p-3" name="panel3" :switcher="false">
    <template #header>
      <h4 class="m-0">panel 3 header</h4>
    </template>
    <div class="pt-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </PanelItem>
</PanelGroup>

### 结合 layout

结合 `LayoutAdminClassic` 与 `PanelGroup` 实现一些布局效果

```vue-html
<LayoutAdminClassic>
  <template #header>
    <div>Header</div>
  </template>
  <template #aside>
    <PanelGroup v-model="active">
      <PanelItem name="panel1">...</PanelItem>
      <PanelItem name="panel2">...</PanelItem>
      <PanelItem name="panel3" :switcher="false">...</PanelItem>
    </PanelGroup>
  </template>
  <template #breadcrumb>
    <div>Breadcrumb</div>
  </template>
  <template #footer>
    <div>Footer</div>
  </template>

  <div>Main content</div>
</LayoutAdminClassic>
```

<LayoutAdminClassic
  width="100%"
  :height="500"
  class="border rounded-3 shadow-sm"
>
  <template #header>
    <div class="h-100 border-bottom p-3">Header</div>
  </template>
  <template #aside>
    <PanelGroup class="h-100 bg-light p-3" v-model="activeLayout">
      <PanelItem class="bg-white rounded-3 p-3" name="panel1">
        <template #header>
          <h4 class="m-0">panel 1 header</h4>
        </template>
        <div class="pt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </PanelItem>
      <PanelItem class="bg-white rounded-3 p-3" name="panel2">
        <template #header>
          <h4 class="m-0">panel 2 header</h4>
        </template>
        <div class="pt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </PanelItem>
      <PanelItem class="bg-white rounded-3 p-3" name="panel3" :switcher="false">
        <template #header>
          <h4 class="m-0">panel 3 header</h4>
        </template>
        <div class="pt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </PanelItem>
    </PanelGroup>
  </template>
  <template #breadcrumb>
    <div class="h-100 border-bottom p-3">Breadcrumb</div>
  </template>
  <template #footer>
    <div class="h-100 border-top p-3">Footer</div>
  </template>

  <div class="h-100 p-3">Main content</div>
</LayoutAdminClassic>

## Props

`PanelGroup` 属性

```ts
interface PanelGroupProps {
  /**
   * 指定打开的面板名称
   */
  modelValue?: string[]
  /**
   * 面板组总宽度
   * @default `auto`
   */
  width?: CssValue
  /**
   * 面板组总高度
   * @default `100%`
   */
  height?: CssValue
  /**
   * 面板与面板的间距
   * @default `1rem`
   */
  gap?: CssValue
  /**
   * 手风琴模式（单面板打开）
   * @default false
   */
  accordion?: boolean
}
```

`PanelItem` 属性

```ts
interface PanelItemProps {
  /**
   * 面板名，用于 PanelGroup 中指定打开的面板
   */
  name?: string
  /**
   * 面板内容收起开关
   * @default true
   */
  switcher?: boolean
  /**
   * 切换图标自定义样式
   */
  switcherClass?: string
  /**
   * 收起面板时是否销毁
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
