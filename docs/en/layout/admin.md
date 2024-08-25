# Admin

Interface layout applied to the management platform

## AdminClassic

Classic layout structure of the management platform

![admin-classic](/layout/admin-classic.svg)

### Examples

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

#### Quick layout

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

#### Sidebar collapse/expand

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
  <span>The width of the collapsed sidebar</span>
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
  >collapse / expand</button>
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

Toggle the width of the sidebar by setting `aside-width`. If you want to completely collapse the sidebar, set the width to `0`

#### Conditional rendering area

Use conditional rendering to switch the layout's `header`, `aside`, `breadcrumb` and `footer` areas visible/invisible

After the layout area is closed, the remaining visible area will automatically fill the space

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
  <span class="me-3">Area conditional rendering</span>
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

#### Exclusive column for aside

In the default layout, the `header` column is exclusive to one row, you can set the `aside-full-height` prop to make the `aside` column exclusive to one row

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
   * Breadcrumb height
   * @default 60
   */
  breadcrumbHeight?: CssValue
  /**
   * Aside width
   * @default 260
   */
  asideWidth?: CssValue
  /**
   * Aside position
   */
  asidePosition?: 'left' | 'right'
  /**
   * Aside full height
   * @default false
   */
  asideFullHeight?: boolean
}
```

### Slots

In the interface layout, the layout areas all use named slots for content distribution

- `default` The default slot corresponds to the main content area
- `header` Header area, by default occupies one row
- `aside` Aside bar
- `breadcrumb` Breadcrumb bar
- `footer` Footer bar
