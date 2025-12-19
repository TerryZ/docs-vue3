# Select

下拉列表模式，最传统，经典的应用形式

## 组件引用

在项目中引入组件

```js
import { RegionSelects, RegionFullSelects } from 'v-region'
```

## 实例

<script setup>
import { useData } from 'vitepress'
import { useRegionSelectsExamples } from '@/script/region/selects'
import RegionFullLevelSelects from '@/views/region/RegionFullLevelSelects.vue'

const { lang } = useData()
const {
  RegionSelectsProvince,
  RegionSelectsCity,
  RegionSelectsArea,
  RegionSelectsInit,
  RegionSelectsDisabled
} = useRegionSelectsExamples(lang)
</script>

关闭城市级别，仅选择省份

<RegionSelectsProvince />

```vue-html
<RegionSelects :city="false" />
```

关闭区县级别

<RegionSelectsCity />

```vue-html
<RegionSelects :area="false" />
```

3 级行政区划

<RegionSelectsArea />

```vue-html
<RegionSelects />
```

使用完整的 4 级行政区划

<RegionFullLevelSelects :lang="lang" />

```vue-html
<RegionFullSelects :auto-select-first="false" />
```

### 初始值绑定

指定一套地区编码值，使组件默认显示该地区

<RegionSelectsInit />

::: code-group

```vue-html
<RegionFullSelects v-model="region" />
```

```ts
import { ref } from 'vue'
import { RegionFullSelects } from 'v-region'
import type { RegionValues } from 'v-region'
const region = ref<RegionValues>({
  province: '350000',
  city: '350100',
  area: '350104',
  town: '350104008'
})
```

:::

### 清空/重置

指定一个各级别的值为 `undefined` 的对象，即可清空

```js
region.value = {
  province: undefined,
  city: undefined,
  area: undefined,
  town: undefined
}
```

::: warning 注意
传递 `undefined` 值或是一个空对象 `{}`，无法清空
:::

### 禁用状态

禁用组件，使其无法进行交互

<RegionSelectsDisabled />

```vue-html
<RegionFullSelects
  v-model="values"
  :disabled="true"
/>
```
