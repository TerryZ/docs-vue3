# CityPicker

城市选择器模式

## 组件引用

在项目中引入组件

```js
import { RegionCityPicker, RegionDropdown } from 'v-region'
```

## 实例

<script setup>
import { useData } from 'vitepress'
import { CityPickerDropdown } from '@/script/region/city-picker'
import { useRegionCustomTrigger } from '@/script/region'
import RegionCityPicker from '@/views/region/RegionCityPicker.vue'

const { lang } = useData()

const { RegionCityPickerCustomTrigger } = useRegionCustomTrigger(lang)
</script>

城市选择器核心组件

<RegionCityPicker />

::: code-group

```vue-html
<RegionCityPicker
  v-model="selected"
  @change="change"
/>
<button
  class="btn btn-dark"
  @click="selected = ['130500', '140200', '150200']"
>
  Change cities
</button>
<button
  class="btn btn-dark"
  @click="selected = []"
>
  Clear
</button>
```

```ts
import { ref } from 'vue'
import { RegionCityPicker } from 'v-region'
import type { RegionItem } from 'v-region'

const selected = ref<string[]>(['110000', '130200', '140100'])
function change (data: RegionItem[]): void {
  console.log(data)
}
```

:::

### 清空/重置

传递一个空数组即可清空选择

```js
selected.value = []
```

### 下拉选择

组合 `RegionDropdown` 组件，以下拉选择形态使用城市选择器

<CityPickerDropdown :language="lang" />

```vue-html
<RegionDropdown>
  <RegionCityPicker />
</RegionDropdown>
```

### 自定义选择器触发对象

若组件内置的触发器按钮不满足应用场景需求，可通过 `trigger` 插槽对触发器进行自定义

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
  <RegionCityPicker @change="change" />
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

<RegionCityPickerCustomTrigger />

## Props

```ts
interface CityPickerProps {
  /**
   * v-model 输入值，选中的区域编码列表
   */
  modelValue?: string[]
  /**
   * 语言
   * @default `cn`
   */
  language?: 'cn' | 'en'
  /**
   * 分隔符
   * 
   * @default ','
   */
  separator?: string
}
```

## 事件

城市选择器组件各类操作响应事件

### update:modelValue

响应城市选择变化，响应内容为选择城市的编码值

```ts
update:modelValue: (data: string[]) => void
```

### update:names

响应城市选择变化，响应内容为选择城市的名称

```ts
update:names: (data: string[]) => void
```

### change

响应城市选择变化，响应内容为选择城市的数据模型

```ts
change: (data: RegionItem[]) => void
```
