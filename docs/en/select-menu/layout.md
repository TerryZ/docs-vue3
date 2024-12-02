# Layout

SelectMenu provides `SelectMenuRow` and `SelectMenuColumn` components for customizing the layout of the menu

## Examples

<script setup>
import {
  MenuLayoutMultipleColumn,
  MenuLayoutComplicated
} from '@/script/select-menu/layout'
</script>

### Multiple Column layout

Setup a menu layout with multiple columns

<MenuLayoutMultipleColumn />

```vue-html
<SelectMenuBody>
  <SelectMenuHeader>Multiple columns layout</SelectMenuHeader>
  <SelectMenuDivider />
  <SelectMenuRow>
    <SelectMenuColumn>
      <SelectMenuItem>Menu item 1-1</SelectMenuItem>
      <SelectMenuItem>Menu item 1-2</SelectMenuItem>
      <SelectMenuItem>Menu item 1-3</SelectMenuItem>
    </SelectMenuColumn>
    <SelectMenuDivider horizontal={false} />
    <SelectMenuColumn>
      <SelectMenuItem>Menu item 2-1</SelectMenuItem>
      <SelectMenuItem>Menu item 2-2</SelectMenuItem>
      <SelectMenuItem>Menu item 2-3</SelectMenuItem>
    </SelectMenuColumn>
    <SelectMenuDivider horizontal={false} />
    <SelectMenuColumn>
      <SelectMenuItem>Menu item 3-1</SelectMenuItem>
      <SelectMenuItem>Menu item 3-2</SelectMenuItem>
      <SelectMenuItem>Menu item 3-3</SelectMenuItem>
    </SelectMenuColumn>
  </SelectMenuRow>
</SelectMenuBody>
```

### Complex layout

Complex layouts for various combinations of situations

<MenuLayoutComplicated />

```vue-html
<SelectMenuBody>
  <SelectMenuRow>
    <SelectMenuColumn>
      <SelectMenuHeader>Complicated layout</SelectMenuHeader>
      <SelectMenuItem>Menu item 1</SelectMenuItem>
      <SelectMenuItem>Menu item 2</SelectMenuItem>
      <SelectMenuItem>Menu item 3</SelectMenuItem>
      <SelectMenuDivider />
      <SelectMenuRow>
        <SelectMenuColumn>
          <SelectMenuSubHeader>Column 1</SelectMenuSubHeader>
          <SelectMenuItem>Menu item 1-1</SelectMenuItem>
          ...
        </SelectMenuColumn>
        <SelectMenuDivider horizontal={false} />
        <SelectMenuColumn>
          <SelectMenuSubHeader>Column 2</SelectMenuSubHeader>
          <SelectMenuItem>Menu item 2-1</SelectMenuItem>
          ...
        </SelectMenuColumn>
      </SelectMenuRow>
      <SelectMenuDivider />
      <SelectMenuSubHeader>Sub header</SelectMenuSubHeader>
      <SelectMenuItem>Menu item 4</SelectMenuItem>
      ...
    </SelectMenuColumn>
    <SelectMenuDivider horizontal={false} />
    <SelectMenuColumn>
      <SelectMenuSubHeader>Side menu items</SelectMenuSubHeader>
      <SelectMenuItem>Menu item 100</SelectMenuItem>
      ...
    </SelectMenuColumn>
  </SelectMenuRow>
</SelectMenuBody>
```

## Slots

`SelectMenuRow`, `SelectMenuColumn` slots

- `default` default slot
