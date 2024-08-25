# Admin

应用于管理平台的界面布局

## AdminClassic

管理平台经典布局结构

![admin-classic](/layout/admin-classic.svg)

### 实例

<script setup>
import { LayoutAdminClassic } from 'v-layouts'
import { useAdmin } from '@/script/layout/admin'

const {
  collapse,
  collapsedWidth,
  asideWidthWidthCollapse,
  visibleHeader,
  visibleBreadcrumb,
  visibleAside,
  visibleFooter
} = useAdmin()
</script>

#### 快速应用布局

```vue
<template>
  <LayoutAdminClassic>
    <template #header>
      <div>Header</div>
    </template>
    <template #aside>
      <div>Aside</div>
    </template>
    <template #breadcrumb>
      <div>Breadcrumb</div>
    </template>
    <template #footer>
      <div>Footer</div>
    </template>

    Main content
  </LayoutAdminClassic>
</template>

<script setup>
import { LayoutAdminClassic } from 'v-layouts'
</script>
```

<LayoutAdminClassic
  width="100%"
  :height="350"
  :aside-width="200"
  class="border rounded-3 shadow-sm"
>
  <template #header>
    <div class="border-bottom h-100 p-3">Header</div>
  </template>
  <template #aside>
    <div class="border-end h-100 p-3">Aside</div>
  </template>
  <template #breadcrumb>
    <div class="border-bottom h-100 p-3">Breadcrumb</div>
  </template>
  <template #footer>
    <div class="border-top h-100 p-3">Footer</div>
  </template>

  <div class="text-bg-light h-100 p-3">Main content</div>
</LayoutAdminClassic>

#### 收起/展开侧边栏

```vue
<template>
  <LayoutAdminClassic :aside-width="asideWidth">
    <template #aside>
      <div>Aside</div>
    </template>

    <div>
      Main content
      <button
        @click="collapse = !collapse"
      >collapse</button>
    </div>
  </LayoutAdminClassic>
</template>

<script setup>
import { ref, computed } from 'vue'
import { LayoutAdminClassic } from 'v-layouts'

const collapse = ref(false)
const asideWidth = computed(() => collapse.value ? '70px' : '200px')
</script>
```

<div class="my-3 d-flex align-items-center">
  <span>收起的宽度</span>
  <select
    class="form-select mx-3"
    style="width: 100px;"
    v-model="collapsedWidth"
  >
    <option value="70px">70px</option>
    <option value="0px">0px</option>
  </select>
  <button
    type="button"
    class="btn btn-dark"
    @click="collapse = !collapse"
  >收起 / 展开</button>
</div>

<LayoutAdminClassic
  width="100%"
  :height="350"
  :aside-width="asideWidthWidthCollapse"
  class="border rounded-3 shadow-sm"
>
  <template #aside>
    <div class="border-end h-100 p-3">Aside</div>
  </template>

  <div class="text-bg-light h-100 p-3">Main content</div>
</LayoutAdminClassic>

通过设置 `aside-width` 来切换侧边栏的宽度，若希望达到将侧边栏完全收起的效果，将宽度设置为 `0` 即可

#### 条件渲染区域

通过条件渲染将布局的 `header`、`aside`、`breadcrumb` 与 `footer` 等区域进行切换打开/关闭状态

在布局区域关闭后，剩余可见的区域会自动对空间进行填充

```vue
<template>
  <LayoutAdminClassic aside-position="right">
    <template #aside v-if="visible">
      <div>Aside</div>
    </template>

    <div>
      Main content
      <button
        @click="visible = !visible"
      >change visible</button>
    </div>
  </LayoutAdminClassic>
</template>

<script setup>
import { ref } from 'vue'
import { LayoutAdminClassic } from 'v-layouts'

const visible = ref(true)
</script>
```

<div class="d-flex align-items-center my-3">
  <span class="me-3">区域条件渲染</span>
  <button
    type="button"
    class="btn btn-dark me-3"
    @click="visibleHeader = !visibleHeader"
  >Header</button>
  <button
    type="button"
    class="btn btn-dark me-3"
    @click="visibleAside = !visibleAside"
  >Aside</button>
  <button
    type="button"
    class="btn btn-dark me-3"
    @click="visibleBreadcrumb = !visibleBreadcrumb"
  >Breadcrumb</button>
  <button
    type="button"
    class="btn btn-dark"
    @click="visibleFooter = !visibleFooter"
  >Footer</button>
</div>

<LayoutAdminClassic
  width="100%"
  :height="350"
  :aside-width="200"
  aside-position="right"
  class="border rounded-3 shadow-sm"
>
  <template #header v-if="visibleHeader">
    <div class="border-bottom h-100 p-3">Header</div>
  </template>
  <template #aside v-if="visibleAside">
    <div class="border-start h-100 p-3">Aside</div>
  </template>
  <template #breadcrumb v-if="visibleBreadcrumb">
    <div class="border-bottom h-100 p-3">Breadcrumb</div>
  </template>
  <template #footer v-if="visibleFooter">
    <div class="border-top h-100 p-3">Footer</div>
  </template>

  <div class="text-bg-light h-100 p-3">Main content</div>
</LayoutAdminClassic>

#### 侧边栏独占列

在默认布局中，标题栏 `header` 独占一行，可通过设置 `aside-full-height` 属性让侧边栏 `aside` 独占一列

```vue-html
<LayoutAdminClassic aside-full-height>
  <template #aside>
    <div>Aside</div>
  </template>

  <div>Main content</div>
</LayoutAdminClassic>
```

<LayoutAdminClassic
  width="100%"
  :height="350"
  :aside-width="200"
  aside-full-height
  class="border rounded-3 shadow-sm"
>
  <template #header>
    <div class="border-bottom h-100 p-3">Header</div>
  </template>
  <template #aside>
    <div class="border-end h-100 p-3">Aside</div>
  </template>
  <template #breadcrumb>
    <div class="border-bottom h-100 p-3">Breadcrumb</div>
  </template>
  <template #footer>
    <div class="border-top h-100 p-3">Footer</div>
  </template>

  <div class="text-bg-light h-100 p-3">Main content</div>
</LayoutAdminClassic>

### Props

布局的属性

```ts
type CssValue = string | number

interface AdminClassicProps {
  /**
   * 布局容器总宽度
   * @default `100vw`
   */
  width?: CssValue
  /**
   * 布局容器总高度
   * @default `100vh`
   */
  height?: CssValue
  /**
   * 头部栏高度
   * @default 60
   */
  headerHeight?: CssValue
  /**
   * 底部栏高度
   * @default 60
   */
  footerHeight?: CssValue
  /**
   * 主内容容器自定义扩展样式
   */
  mainClass?: StyleValue
  /**
   * 面包屑高度
   * @default 60
   */
  breadcrumbHeight?: CssValue
  /**
   * 侧边栏宽度
   * @default 260
   */
  asideWidth?: CssValue
  /**
   * 侧边栏位置
   */
  asidePosition?: 'left' | 'right'
  /**
   * 侧边栏独占一列
   * @default false
   */
  asideFullHeight?: boolean
}
```

### 插槽

在界面布局中，布局区域均使用具名插槽进行内容分发

- `default` 默认插槽对应了主内容区域
- `header` 头部区域，默认情况下独占一行
- `aside` 侧边栏
- `breadcrumb` 面包屑
- `footer` 底部栏
