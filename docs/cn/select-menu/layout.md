# Layout

SelectMenu 提供了 `SelectMenuRow` 与 `SelectMenuColumn` 组件，用于自定义菜单的布局

## 实例

<script setup>
import {
  MenuLayoutMultipleColumn,
  MenuLayoutComplicated
} from '@/script/select-menu/layout'
</script>

### 多列布局

设置多个列的菜单布局

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

### 复杂布局

各种情况组合的复杂布局

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

## 插槽

`SelectMenuRow`, `SelectMenuColumn` 的插槽

- `default` 默认插槽
