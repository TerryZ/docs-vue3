import {
  SelectMenuDropdown,
  SelectMenuTrigger,
  SelectMenuItem
} from 'v-selectmenu'

export function createMenuItems (prefix = 'Menu item ', quantity, start = 1) {
  return Array.from({ length: quantity }).map((_, index) => (
    <SelectMenuItem key={index}>{prefix}{index + start}</SelectMenuItem>
  ))
}

export function createDropdownWithTrigger (defaultSlot) {
  return (
    <SelectMenuDropdown>{{
      trigger: () => <SelectMenuTrigger />,
      default: () => defaultSlot
    }}</SelectMenuDropdown>
  )
}