# Group

分组组织菜单项目

<script setup>
import LogDataPrinter from '@/views/components/LogDataPrinter.vue'
import { menuGroupWithLogs, MenuGroupWithValue } from '@/script/select-menu/group'

const { logs, NormalMenuGroup } = menuGroupWithLogs()
</script>

## 实例

### 基础用法

设置分组与项目

<NormalMenuGroup />

分组菜单切换事件响应数据

<LogDataPrinter
  title="事件响应数据日志"
  :logs="logs"
/>

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

### 指定默认分组

通过 `v-model` 绑定分组名称，实现指定默认分组

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

`SelectMenuGroup` 的 props

```ts
interface GroupProps {
  modelValue?: string
}
```

### Item props

`SelectMenuGroupItem` 的 props

```ts
interface GroupItemProps {
  name: string
  title: string
}
```

## 事件

### update:modelValue

响应菜单分组值变化

```ts
`update:modelValue`: (value: string) => void
```

### change

响应菜单分组变化

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

## 插槽

### Group slots

`SelectMenuGroup` 的插槽

- `default` 默认插槽

### Item slots

`SelectMenuGroupItem` 的插槽

- `default` 默认插槽
