# Content

Interface layout applied to content publishing and presentation

## ContentPress

Content publishing layout structure, widely used in documents, blogs, news, articles and other pages

![content-press](/layout/content-press.svg)

### Examples

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

#### Quick layout

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

#### Sidebar collapse/expand

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
  collapse / expand
  <button
    type="button"
    class="btn btn-dark mx-3"
    @click="collapsePrimary = !collapsePrimary"
  >Primary aside</button>
  <button
    type="button"
    class="btn btn-dark"
    @click="collapseSecondary = !collapseSecondary"
  >Secondary aside</button>
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

Toggle the width of the primary and secondary sidebars by setting `primary-aside-width` and `secondary-aside-width`, and set the width to `0` if you want the sidebars to be completely closed

#### Conditional rendering area

Conditional rendering toggles the layout's `header`, `primaryAside`, `secondaryAside` and `footer` areas visible/invisible

When a layout area is closed, the remaining visible areas are automatically filled with space

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
  <div class="">Area conditional rendering</div>
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

#### Main area position

In the default layout, the content area is centered, and its position can be set with the `main-position` property

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
  <span class="me-3">Main area position</span>
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

Layout Properties

```ts
type CssValue = string | number

interface AdminClassicProps {
  /**
   * Layout container width
   * @default `100vw`
   */
  width?: CssValue
  /**
   * Layout container height
   * @default `100vh`
   */
  height?: CssValue
  /**
   * Header height
   * @default 60
   */
  headerHeight?: CssValue
  /**
   * Footer height
   * @default 60
   */
  footerHeight?: CssValue
  /**
   * Main container custom classes
   */
  mainClass?: StyleValue
  /**
   * Primary aside width
   * @default 260
   */
  primaryAsideWidth?: CssValue
  /**
   * Secondary aside width
   * @default 260
   */
  secondaryAsideWidth?: CssValue
  /**
   * Main container position
   * @default `center
   */
  mainPosition?: 'left' | 'center' | 'right'
}
```

### Slots

In the interface layout, the layout areas all use named slots for content distribution

- `default` The default slot corresponds to the main content area
- `header` Header area, by default occupies one row
- `primaryAside` Primary aside
- `secondaryAside` Secondary aside
- `footer` Footer bar
