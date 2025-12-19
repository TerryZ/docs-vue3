# Column

泳道模式，使用多数据列并排展示行政区域的选择模式

## 组件引用

在项目中引入组件

```js
import { RegionColumns, RegionFullColumns, RegionDropdown } from 'v-region'
```

## 实例

<script setup>
import { useData } from 'vitepress'
import { useRegionColumnsExamples } from '@/script/region/columns'
import { useRegionCustomTrigger } from '@/script/region'
import RegionFullLevelColumns from '@/views/region/RegionFullLevelColumns.vue'

const { lang } = useData()

const {
  RegionColumnsCore
} = useRegionColumnsExamples(lang)
const { RegionColumnsCustomTrigger } = useRegionCustomTrigger(lang)
</script>

### 核心模块

核心模块可自由搭配其他交互形式

<RegionColumnsCore />

```vue-html
<RegionColumns v-model="region" />
<RegionFullColumns v-model="region" />
```

### 选择器模式

使用内置按钮作为触发对象的选择器模式

<RegionFullLevelColumns />

```vue-html
<RegionDropdown>
  <RegionFullColumns v-model="region" separator="-" />
</RegionDropdown>
```

### 自定义选择器触发对象

若组件内置的触发器按钮不满足应用场景需求，可通过 `trigger` 插槽对触发器进行自定义

<RegionColumnsCustomTrigger />

::: code-group

```vue-html
<RegionDropdown>
  <template #trigger="{ visible }">
    <button
      type="button"
      class="btn btn-primary"
    >
      data:{{ resultText() }},
      visible: {{ visible }}
    </button>
  </template>
  <RegionColumns @change="change" />
</RegionDropdown>
```

```js
const model = ref()

function resultText() {
  ...
}
function change(data) {
  model.value = data
}
```

:::
