import { ref } from 'vue'
import {
  SelectMenuBody,
  SelectMenuHeader,
  SelectMenuItem,
  SelectMenuSearch
} from 'v-selectmenu'

import { createDropdownWithTrigger } from './base'

export function MenuSearch () {
  const list = [
    { key: '1', name: '我是菜单项 1' },
    { key: '2', name: '我是菜单项 2' },
    { key: '3', name: 'This is the element item 3' },
    { key: '4', name: 'This is the element item 4' },
    { key: '5', name: '我是菜单标题项 5' }
  ]
  const items = ref(list)
  
  function search (data) {
    items.value = list.filter(item => item.name.includes(data))
  }

  return createDropdownWithTrigger(
    <SelectMenuBody>
      <SelectMenuHeader>Menu search</SelectMenuHeader>
      <SelectMenuSearch onSearch={search} />
      
      {items.value.map(item => (
        <SelectMenuItem key={item.key}>{item.name}</SelectMenuItem>
      ))}
    </SelectMenuBody>
  )
}
