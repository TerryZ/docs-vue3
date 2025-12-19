# Multiple level

多级菜单项

## 实例

<script setup>
import { MenuMultipleLevel } from '@/script/select-menu/multiple-level'
</script>

多级别菜单项目应用

<MenuMultipleLevel />

::: code-group

```vue-html
<SelectMenuBody>
  <!-- level 1 items -->
  <SelectMenuItem>Menu item 1-1</SelectMenuItem>
  <SelectMenuItem>Menu item 1-2</SelectMenuItem>
  <SelectMenuChildLevel>
    <template #trigger>
      <SelectMenuItem>Menu item 1-3</SelectMenuItem>
    </template>
    <!-- level 2 items -->
    <SelectMenuItem>Child item 2-1</SelectMenuItem>
    <SelectMenuItem>Child item 2-2</SelectMenuItem>
    <SelectMenuChildLevel>
      <template #trigger>
        <SelectMenuItem>Child item 2-3</SelectMenuItem>
      </template>
      <!-- level 3 items -->
      <SelectMenuItem>Grandson item 3-1</SelectMenuItem>
      <SelectMenuItem>Grandson item 3-2</SelectMenuItem>
      <SelectMenuItem>Grandson item 3-3</SelectMenuItem>
    </SelectMenuChildLevel>
    <SelectMenuItem>Child item 2-4</SelectMenuItem>
  </SelectMenuChildLevel>
  <SelectMenuItem>Menu item 1-4</SelectMenuItem>
  <SelectMenuItem>Menu item 1-5</SelectMenuItem>
</SelectMenuBody>
```

```ts
import {
  SelectMenuDropdown,
  SelectMenuTrigger,
  SelectMenuBody,
  SelectMenuItem,
  SelectMenuChildLevel
} from 'v-selectmenu'
```

:::

## 插槽

`SelectMenuChildLevel` 的插槽

- `trigger` 打开子菜单的触发元素
- `default` 子菜单内容
