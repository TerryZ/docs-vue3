# Selection

以单选或多项选择形态使用的菜单

## 实例

<script setup>
import LogDataPrinter from '@/views/components/LogDataPrinter.vue'
import {
  MenuRadioWithLogs,
  MenuRadioGroupWithValue,
  MenuCheckboxWithLogs,
  MenuCheckboxGroupWithValue,
  CloseAfterSelection
} from '@/script/select-menu/selection'

const { logs, MenuRadioGroupNormal } = MenuRadioWithLogs()
const { logs: checkboxesLogs, MenuCheckboxGroupNormal } = MenuCheckboxWithLogs()
const {
  hideOnSelection,
  MenuRadioGroupHide,
  MenuCheckboxGroupHide
} = CloseAfterSelection()
</script>

### Radio 单选模式

单选按钮组允许用户从互斥的选项列表中选择一个选项

<MenuRadioGroupNormal />

选项切换事件响应数据

<LogDataPrinter
  title="事件响应数据日志"
  :logs="logs"
/>

::: code-group

```vue-html
<SelectMenuBody>
  <SelectMenuHeader>Radio group</SelectMenuHeader>
  <SelectMenuRadioGroup>
    <SelectMenuRadioItem
      value="radio1"
      disabled
    >radio1</SelectMenuRadioItem>
    <SelectMenuRadioItem value="radio2">radio2</SelectMenuRadioItem>
    <SelectMenuRadioItem value="radio3">radio3</SelectMenuRadioItem>
  </SelectMenuRadioGroup>
</SelectMenuBody>
```

```ts
import {
  SelectMenuDropdown,
  SelectMenuTrigger,
  SelectMenuBody,
  SelectMenuHeader,
  SelectMenuRadioGroup,
  SelectMenuRadioItem
} from 'v-selectmenu'
```

:::

### Checkbox 多选模式

CheckboxGroup 允许用户从选项列表中选择一个或多个项目

<MenuCheckboxGroupNormal />

选项切换事件响应数据

<LogDataPrinter
  title="事件响应数据日志"
  :logs="checkboxesLogs"
/>

::: code-group

```vue-html
<SelectMenuBody>
  <SelectMenuHeader>Checkbox group</SelectMenuHeader>
  <SelectMenuCheckboxGroup>
    <SelectMenuCheckboxItem
      value="checkbox1"
    >checkbox1</SelectMenuCheckboxItem>
    <SelectMenuCheckboxItem
      value="checkbox2"
      disabled
    >checkbox2</SelectMenuCheckboxItem>
    <SelectMenuCheckboxItem
      value="checkbox3"
    >checkbox3</SelectMenuCheckboxItem>
  </SelectMenuCheckboxGroup>
</SelectMenuBody>
```

```ts
import {
  SelectMenuDropdown,
  SelectMenuTrigger,
  SelectMenuBody,
  SelectMenuHeader,
  SelectMenuCheckboxGroup,
  SelectMenuCheckboxItem
} from 'v-selectmenu'
```

:::

### 设置默认选中项

设置指定的选项默认选中

::: code-group

```vue-html
<!-- radio group with default value -->
<SelectMenuRadioGroup v-model="radioGroupActive">
...
</SelectMenuRadioGroup>

<!-- checkbox group with default value -->
<SelectMenuCheckboxGroup v-model="checkboxGroupActive">
...
</SelectMenuCheckboxGroup>
```

```ts
import { ref } from 'vue'

const radioGroupActive = ref('radio2')
const checkboxGroupActive = ref(['checkbox1', 'checkbox3'])
```

:::

Radio group

<MenuRadioGroupWithValue />

Checkbox group

<MenuCheckboxGroupWithValue />

### 清除选中项

清除已选中的选项

```ts
// clear radio group selection
radioGroupActive.value = ''
// clear checkbox group selection
checkboxGroupActive.value = []
```

### 选择后关闭菜单

选项在选择后，立即关闭菜单

::: code-group

```vue-html
<SelectMenuRadioGroup :hideOnSelection="hideOnSelection">
...
</SelectMenuRadioGroup>

<SelectMenuCheckboxGroup :hideOnSelection="hideOnSelection">
...
</SelectMenuCheckboxGroup>
```

```ts
import { ref } from 'vue'

const hideOnSelection = ref(false)
```

:::

<div class="form-check form-switch d-flex align-items-center">
  <input
    class="form-check-input me-3"
    type="checkbox"
    role="switch"
    id="switch-hide-on-selection"
    v-model="hideOnSelection"
  >
  <label
    class="form-check-label"
    for="switch-hide-on-selection"
  >选择后关闭菜单</label>
</div>

Radio group

<MenuRadioGroupHide />

Checkbox group

<MenuCheckboxGroupHide />

## Props

### Group props

`SelectMenuRadioGroup`, `SelectMenuCheckboxGroup` 的 props

```ts
type SelectionValue = string | number

interface RadioGroupProps {
  modelValue?: SelectionValue
  /**
   * @default true
   */
  hideOnSelection?: boolean
}

interface CheckboxGroupProps {
  modelValue?: SelectionValue[]
  /**
   * @default false
   */
  hideOnSelection?: boolean
}
```

### Item props

`SelectMenuRadioItem`, `SelectMenuCheckboxItem` 的 props

```ts
interface SelectionItemProps {
  value: SelectionValue
  /**
   * @default false
   */
  disabled?: boolean
}
```

## 事件

`SelectMenuRadioGroup`, `SelectMenuCheckboxGroup` 的响应事件

### update:modelValue

响应选择项变化

```ts
// radio group
`update:modelValue`: (value: SelectionValue) => void

// checkbox group
`update:modelValue`: (value: SelectionValue[]) => void
```

### change

响应选择项变化

```ts
// radio group
change: (data: SelectionValue) => void

// checkbox group
change: (data: SelectionValue[]) => void
```

## 插槽

### Group slots

`SelectMenuRadioGroup`, `SelectMenuCheckboxGroup` 的插槽

- `default` 默认插槽

### Item slots

`SelectMenuRadioItem`, `SelectMenuCheckboxItem` 的插槽

- `prepend` 前置插槽
- `default` 默认插槽
- `append` 尾部插槽，向右对齐
