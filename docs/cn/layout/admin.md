# Admin

应用于管理平台的界面布局

## AdminClassic

管理平台经典布局结构

![admin-classic](/layout/admin-classic.svg)

### 实例

<script setup>
import { LayoutAdminClassic } from 'v-layouts'
import { useAdmin } from './admin'

const {
  collapse,
  collapsedWidth,
  asideWidthWidthCollapse
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
  :width="650"
  :height="350"
  :aside-width="200"
  class="border rounded-3 shadow-sm"
>
  <template #header>
    <div class="text-bg-primary h-100 p-3">Header</div>
  </template>
  <template #aside>
    <div class="text-bg-warning h-100 p-3">Aside</div>
  </template>
  <template #breadcrumb>
    <div class="text-bg-secondary h-100 p-3">Breadcrumb</div>
  </template>
  <template #footer>
    <div class="text-bg-success h-100 p-3">Footer</div>
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
const asideWidth = computed(() => collapse.value ? '200px' : '70px')
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
  :width="650"
  :height="350"
  :aside-width="asideWidthWidthCollapse"
  class="border rounded-3 shadow-sm"
>
  <template #aside>
    <div class="text-bg-warning h-100 p-3">Aside</div>
  </template>

  <div class="text-bg-light h-100 p-3">Main content</div>
</LayoutAdminClassic>

通过设置 `aside-width` 来切换侧边栏的宽度，若希望达到将侧边栏完全收起的效果，将宽度设置为 `0` 即可
