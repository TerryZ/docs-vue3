# Selection

Menus that can be used in single or multiple selection form

## Examples

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

### Radio mode

Radio button groups allow the user to select an option from a mutually exclusive list of options

<MenuRadioGroupNormal />

Response data for item switching events

<LogDataPrinter :logs="logs" />

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

### Checkbox mode

CheckboxGroup allows the user to select one or more items from a list of options

<MenuCheckboxGroupNormal />

Response data for item switching events

<LogDataPrinter :logs="checkboxesLogs" />

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

### Default selection

Sets the specified items to be checked by default

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

### Clear selection

Clear selected items

```ts
// clear radio group selection
radioGroupActive.value = ''
// clear checkbox group selection
checkboxGroupActive.value = []
```

### Close menu after selection

Close the menu after item selection

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
  >Close menu on selection</label>
</div>

Radio group

<MenuRadioGroupHide />

Checkbox group

<MenuCheckboxGroupHide />

## Props

### Group props

`SelectMenuRadioGroup`, `SelectMenuCheckboxGroup` props

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

`SelectMenuRadioItem`, `SelectMenuCheckboxItem` props

```ts
interface SelectionItemProps {
  value: SelectionValue
  /**
   * @default false
   */
  disabled?: boolean
}
```

## Events

`SelectMenuRadioGroup`, `SelectMenuCheckboxGroup` response events

### update:modelValue

Responding to selection changes

```ts
// radio group
`update:modelValue`: (value: SelectionValue) => void

// checkbox group
`update:modelValue`: (value: SelectionValue[]) => void
```

### change

Responding to selection changes

```ts
// radio group
change: (data: SelectionValue) => void

// checkbox group
change: (data: SelectionValue[]) => void
```

## Slots

### Group slots

`SelectMenuRadioGroup`, `SelectMenuCheckboxGroup` slots

- `default` default slot

### Item slots

`SelectMenuRadioItem`, `SelectMenuCheckboxItem` slots

- `prepend` prepend slot
- `default` default slot
- `append` tail slot, aligned right
