# Group

使用分组切换显示行政区域的选择模式

## 组件引用

在项目中引入组件

```js
import { RegionGroup, RegionFullGroup, RegionDropdown } from 'v-region'
```

## 实例

<script setup>
import { useData } from 'vitepress'
import { useRegionGroupExamples } from '@/script/region/group'
import { useRegionCustomTrigger } from '@/script/region'

const { lang } = useData()

const {
  RegionGroupCore,
  RegionGroupDropdown,
  RegionGroupReset
} = useRegionGroupExamples(lang)
const { RegionGroupCustomTrigger } = useRegionCustomTrigger(lang)
</script>

### 核心模块

核心模块可自由搭配其他交互形式

<RegionGroupCore />

```vue-html
<RegionGroup v-model="region" />
<RegionFullGroup v-model="region" />
```

### 选择器模式

使用内置按钮作为触发对象的选择器模式

<RegionGroupDropdown />

<RegionGroupReset />

```vue-html
<RegionDropdown>
  <RegionFullGroup v-model="region" separator="-" />
</RegionDropdown>
```

### 自定义选择器触发对象

若组件内置的触发器按钮不满足应用场景需求，可通过 `trigger` 插槽对触发器进行自定义

<RegionGroupCustomTrigger />

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
  <RegionGroup @change="change" />
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
