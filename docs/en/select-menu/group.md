# Group

Organizing menu items in groups

<script setup>
import LogDataPrinter from '@/views/components/LogDataPrinter.vue'
import { menuGroupWithLogs, MenuGroupWithValue } from '@/script/select-menu/group'

const { logs, NormalMenuGroup } = menuGroupWithLogs()
</script>

## Examples

### Basic usage

Setup group and items

<NormalMenuGroup />

Response data for grouped menu switch events

<LogDataPrinter :logs="logs" />

::: code-group

```vue-html
<SelectMenuBody>
  <SelectMenuHeader>Menu group</SelectMenuHeader>
  <SelectMenuGroup @change="handleGroupChange">
    <SelectMenuGroupItem
      name="group1"
      title="Group1"
    >
      <SelectMenuItem>group item 1-1</SelectMenuItem>
    </SelectMenuGroupItem>
    <SelectMenuGroupItem
      name="group2"
      title="Group2"
    >
      <SelectMenuItem>group item 2-1</SelectMenuItem>
      <SelectMenuItem>group item 2-2</SelectMenuItem>
    </SelectMenuGroupItem>
    <SelectMenuGroupItem
      name="group3"
      title="Group3"
    >
      <SelectMenuItem>group item 3-1</SelectMenuItem>
      <SelectMenuItem>group item 3-2</SelectMenuItem>
      <SelectMenuItem>group item 3-3</SelectMenuItem>
    </SelectMenuGroupItem>
  </SelectMenuGroup>
</SelectMenuBody>
```

```ts
import {
  SelectMenuDropdown,
  SelectMenuTrigger,
  SelectMenuBody,
  SelectMenuHeader,
  SelectMenuGroup,
  SelectMenuGroupItem,
  SelectMenuItem
} from 'v-selectmenu'
import type { GroupItemData } from 'v-selectmenu'

function handleGroupChange(data: GroupItemData) {
  console.log(data)
}
```

:::

### Specifying a default group

Bind the group name through `v-model` to specify the default group

<MenuGroupWithValue />

::: code-group

```vue-html
<SelectMenuGroup v-model="active">
  ...
</SelectMenuGroup>
```

```ts
import { ref } from 'vue'

const active = ref('group2')
```

:::

## Props

### Group props

`SelectMenuGroup` props

```ts
interface GroupProps {
  modelValue?: string
}
```

### Item props

`SelectMenuGroupItem` props

```ts
interface GroupItemProps {
  name: string
  title: string
}
```

## Events

### update:modelValue

Responds to changes in the menu group value

```ts
`update:modelValue`: (value: string) => void
```

### change

Responds to changes in the menu group data

```ts
change: (data: GroupItemData) => void
```

```ts
interface GroupItemData {
  name: string
  title: string
}
// import type from package
import type { GroupItemData } from 'v-selectmenu'
```

## Slots

### Group slots

`SelectMenuGroup` slots

- `default` default slot

### Item slots

`SelectMenuGroupItem` slots

- `default` default slot
