# Content

应用于内容发布、呈现的界面布局

## ContentPress

内容发布布局结构，广泛应用于文档、博客、新闻、文章等页面

![content-press](/layout/content-press.svg)

### 实例

<script setup>
import { LayoutContentPress } from 'v-layouts'
import { useContent } from '@/script/layout/content'

const {
  collapsePrimary,
  collapseSecondary,
  primaryAsideWidth,
  secondaryAsideWidth,
  visibleHeader,
  visiblePrimaryAside,
  visibleSecondaryAside,
  visibleFooter,
  position
} = useContent()
</script>

#### 快速应用布局

```vue
<template>
  <LayoutContentPress>
    <template #header>
      <div>Header</div>
    </template>
    <template #primaryAside>
      <div>Primary aside</div>
    </template>
    <template #secondaryAside>
      <div>Secondary aside</div>
    </template>
    <template #footer>
      <div>Footer</div>
    </template>

    Main content
  </LayoutContentPress>
</template>

<script setup>
import { LayoutContentPress } from 'v-layouts'
</script>
```

<LayoutContentPress
  width="100%"
  :height="350"
  :primary-aside-width="180"
  :secondary-aside-width="180"
  class="border rounded-3 shadow-sm"
>
  <template #header>
    <div class="border-bottom h-100 p-3">Header</div>
  </template>
  <template #primaryAside>
    <div class="border-end h-100 p-3">Primary aside</div>
  </template>
  <template #secondaryAside>
    <div class="border-start h-100 p-3">Secondary aside</div>
  </template>
  <template #footer>
    <div class="border-top h-100 p-3">Footer</div>
  </template>

  <div class="text-bg-light h-100 p-3">Main content</div>
</LayoutContentPress>

#### 收起/展开侧边栏

```vue
<template>
  <LayoutContentPress
    :primary-aside-width="primaryAsideWidth"
    :secondary-aside-width="secondaryAsideWidth"
  >
    <template #primaryAside>
      <div>Primary aside</div>
    </template>
    <template #secondaryAside>
      <div>Secondary aside</div>
    </template>

    <div>
      Main content
      <button
        @click="collapse = !collapse"
      >collapse</button>
    </div>
  </LayoutContentPress>
</template>

<script setup>
import { ref, computed } from 'vue'
import { LayoutContentPress } from 'v-layouts'

const collapse = ref(false)
const primaryAsideWidth = computed(() => collapse.value ? '70px' : '200px')
const secondaryAsideWidth = computed(() => collapse.value ? '70px' : '200px')
</script>
```

<div class="my-3 d-flex align-items-center">
  收起 / 展开
  <button
    type="button"
    class="btn btn-dark mx-3"
    @click="collapsePrimary = !collapsePrimary"
  >主侧边栏</button>
  <button
    type="button"
    class="btn btn-dark"
    @click="collapseSecondary = !collapseSecondary"
  >次侧边栏</button>
</div>

<LayoutContentPress
  width="100%"
  :height="350"
  :primary-aside-width="primaryAsideWidth"
  :secondary-aside-width="secondaryAsideWidth"
  class="border rounded-3 shadow-sm"
>
  <template #primaryAside>
    <div class="border-end h-100 p-3">Primary aside</div>
  </template>
  <template #secondaryAside>
    <div class="border-start h-100 p-3">Secondary aside</div>
  </template>

  <div class="text-bg-light h-100 p-3">Main content</div>
</LayoutContentPress>

通过设置 `primary-aside-width` 与 `secondary-aside-width` 来切换主、次两个侧边栏的宽度，若希望达到将侧边栏完全收起的效果，将宽度设置为 `0` 即可

#### 条件渲染区域

通过条件渲染将布局的 `header`、`primaryAside`、`secondaryAside` 与 `footer` 等区域进行切换打开/关闭状态

在布局区域关闭后，剩余可见的区域会自动对空间进行填充

```vue
<template>
  <LayoutContentPress aside-position="right">
    <template #header v-if="visible">
      <div>Header</div>
    </template>

    <div>
      Main content
      <button
        @click="visible = !visible"
      >change visible</button>
    </div>
  </LayoutContentPress>
</template>

<script setup>
import { ref } from 'vue'
import { LayoutContentPress } from 'v-layouts'

const visible = ref(true)
</script>
```

<div class="">
  <div class="">区域条件渲染</div>
  <div class="d-flex align-items-center my-3">
    <button
      type="button"
      class="btn btn-dark me-3"
      @click="visibleHeader = !visibleHeader"
    >Header</button>
    <button
      type="button"
      class="btn btn-dark me-3"
      @click="visiblePrimaryAside = !visiblePrimaryAside"
    >Primary aside</button>
    <button
      type="button"
      class="btn btn-dark me-3"
      @click="visibleSecondaryAside = !visibleSecondaryAside"
    >Secondary aside</button>
    <button
      type="button"
      class="btn btn-dark"
      @click="visibleFooter = !visibleFooter"
    >Footer</button>
  </div>

</div>

<LayoutContentPress
  width="100%"
  :height="350"
  :primary-aside-width="200"
  :secondary-aside-width="200"
  aside-position="right"
  class="border rounded-3 shadow-sm"
>
  <template #header v-if="visibleHeader">
    <div class="border-bottom h-100 p-3">Header</div>
  </template>
  <template #primaryAside v-if="visiblePrimaryAside">
    <div class="border-end h-100 p-3">Aside</div>
  </template>
  <template #secondaryAside v-if="visibleSecondaryAside">
    <div class="border-start h-100 p-3">Secondary aside</div>
  </template>
  <template #footer v-if="visibleFooter">
    <div class="border-top h-100 p-3">Footer</div>
  </template>

  <div class="text-bg-light h-100 p-3">Main content</div>
</LayoutContentPress>

#### 内容区位置

在默认布局中，内容区居中摆放，可通过 `main-position` 属性设置其布局位置

```vue-html
<LayoutContentPress main-position="right">
  <template #primaryAside>
    <div>Primary aside</div>
  </template>
  <template #secondaryAside>
    <div>Secondary aside</div>
  </template>

  <div>Main content</div>
</LayoutContentPress>
```

<div class="d-flex align-items-center my-3">
  <span class="me-3">内容区位置</span>
  <select class="form-select" v-model="position" style="width: 100px">
    <option value="left">left</option>
    <option value="center">center</option>
    <option value="right">right</option>
  </select>
</div>

<LayoutContentPress
  width="100%"
  :height="350"
  :primary-aside-width="200"
  :secondary-aside-width="200"
  :main-position="position"
  class="border rounded-3 shadow-sm"
>
  <template #header>
    <div class="border-bottom h-100 p-3">Header</div>
  </template>
  <template #primaryAside>
    <div class="border-end h-100 p-3">Primary aside</div>
  </template>
  <template #secondaryAside>
    <div class="h-100 p-3">Secondary aside</div>
  </template>
  <template #footer>
    <div class="border-top h-100 p-3">Footer</div>
  </template>

  <div class="text-bg-light h-100 p-3">Main content</div>
</LayoutContentPress>

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
   * 主侧边栏宽度
   * @default 260
   */
  primaryAsideWidth?: CssValue
  /**
   * 次侧边栏宽度
   * @default 260
   */
  secondaryAsideWidth?: CssValue
  /**
   * 主内容区位置
   * @default `center
   */
  mainPosition?: 'left' | 'center' | 'right'
}
```

### 插槽

在界面布局中，布局区域均使用具名插槽进行内容分发

- `default` 默认插槽对应了主内容区域
- `header` 头部区域，默认情况下独占一行
- `primaryAside` 主侧边栏
- `secondaryAside` 次侧边栏
- `footer` 底部栏
