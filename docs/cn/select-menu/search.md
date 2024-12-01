# Search

内容搜索、输入模块

## 实例

<script setup>
import {
  MenuSearch
} from '@/script/select-menu/search'
</script>

通过输入内容过滤菜单项

<MenuSearch />

::: code-group

```vue-html
<SelectMenuBody>
  <SelectMenuHeader>Menu search</SelectMenuHeader>
  <SelectMenuSearch @search="search" />
  <SelectMenuItem
    v-for="item in items"
    :key="item.key"
  >
    {{ item.name }}
  </SelectMenuItem>
</SelectMenuBody>
```

```ts
import { ref } from 'vue'
import {
  SelectMenuDropdown,
  SelectMenuTrigger,
  SelectMenuBody,
  SelectMenuHeader,
  SelectMenuItem,
  SelectMenuSearch
} from 'v-selectmenu'

const dataSource = [
  { key: '1', name: '我是菜单项 1' },
  { key: '2', name: '我是菜单项 2' },
  { key: '3', name: 'This is the element item 3' },
  { key: '4', name: 'This is the element item 4' },
  { key: '5', name: '我是菜单标题项 5' }
]
const items = ref(dataSource)

function search (value) {
  items.value = dataSource.filter(item => item.name.includes(value))
}
```

:::

## Props

```ts
interface SearchProps {
  /**
   * 输入延迟（以毫秒为单位）
   * @default 300
   **/
  debounce?: number
}
```

## 事件

### search

响应搜索文本输入的变化

```ts
search: (value: string) => void
```
