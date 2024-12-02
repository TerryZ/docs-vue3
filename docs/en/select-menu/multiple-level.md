# Multiple level

Multiple level menu items

## Examples

<script setup>
import { MenuMultipleLevel } from '@/script/select-menu/multiple-level'
</script>

Application of multi-level menu items

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

## Slots

`SelectMenuChildLevel` slots

- `trigger` the trigger element to open the child menu
- `default` child menu content
