# Group

分组组织菜单项目

<script setup>
import LogDataPrinter from '@/views/components/LogDataPrinter.vue'
import { menuGroupWithLogs, MenuGroupWithValue } from '@/script/selectmenu/group'

const { logs, NormalMenuGroup } = menuGroupWithLogs()
</script>

## 实例

### 基础用法

::: code-group

```vue-html
<SelectMenuDropdown>
  <template #trigger>
    <SelectMenuTrigger />
  </template>

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
</SelectMenuDropdown>
```

```ts
import type { GroupItemData } from 'v-selectmenu'

function handleGroupChange(data: GroupItemData) {
  console.log(data)
}
```

:::

<NormalMenuGroup />

分组菜单切换事件响应数据

<LogDataPrinter
  title="事件响应数据日志"
  :logs="logs"
/>

### 初始分组

通过 `v-model` 绑定分组名称，实现初始分组

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

<MenuGroupWithValue />

## Props

### SelectMenuGroup props

```ts
interface GroupProps {
  modelValue?: string
}
```

### SelectMenuGroupItem props

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

interface GroupItemData {
  name: string
  title: string
}
```

```ts
import type { GroupItemData } from 'v-selectmenu'
```

## 插槽

### SelectMenuGroup slots

- `default` 默认插槽

### SelectMenuGroupItem slots

- `default` 默认插槽
