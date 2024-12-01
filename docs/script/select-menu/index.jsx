import { ref, computed } from 'vue'

import {
  SelectMenuDropdown,
  SelectMenuTrigger,
  SelectMenuBody,
  SelectMenuHeader,
  SelectMenuDivider,
  SelectMenuItem,
  SelectMenuRow,
  SelectMenuColumn,
  SelectMenuSearch,
  SelectMenuGroup,
  SelectMenuGroupItem,
  SelectMenuRadioGroup,
  SelectMenuRadioItem,
  SelectMenuSection
} from 'v-selectmenu'

import { createDropdownWithTrigger } from './base'

export function SelectMenuBase (props, { attrs }) {
  return (
    <SelectMenuDropdown {...attrs}>{{
      trigger: () => <SelectMenuTrigger />,
      default: () => (
        <SelectMenuBody>
          <SelectMenuHeader>SelectMenu</SelectMenuHeader>
          <SelectMenuItem>Item 1</SelectMenuItem>
          <SelectMenuItem>Item 2</SelectMenuItem>
          <SelectMenuItem>Item 3</SelectMenuItem>
        </SelectMenuBody>
      )
    }}</SelectMenuDropdown>
  )
}
export function MenuWithoutDropdown () {
  return (
    <SelectMenuBody class="border rounded-4 shadow-sm">
      <SelectMenuHeader>Menu without dropdown</SelectMenuHeader>
      <SelectMenuItem>Item 1</SelectMenuItem>
      <SelectMenuItem>Item 2</SelectMenuItem>
      <SelectMenuItem>Item 3</SelectMenuItem>
    </SelectMenuBody>
  )
}

export function MenuSection () {
  return createDropdownWithTrigger(
    <SelectMenuBody>
      <SelectMenuHeader>Menu section</SelectMenuHeader>
      <SelectMenuSection>

      </SelectMenuSection>
    </SelectMenuBody>
  )
}

export function MenuDivider () {
  return createDropdownWithTrigger(
    <SelectMenuBody>
      <SelectMenuHeader>Menu divider</SelectMenuHeader>
      <SelectMenuDivider />
      <SelectMenuRow>
        <SelectMenuColumn>
          <SelectMenuItem>Item 1</SelectMenuItem>
          <SelectMenuItem>Item 2</SelectMenuItem>
          <SelectMenuItem>Item 3</SelectMenuItem>
        </SelectMenuColumn>
        <SelectMenuDivider horizontal={false} />
        <SelectMenuColumn>
          <SelectMenuItem>Item 4</SelectMenuItem>
          <SelectMenuItem>Item 5</SelectMenuItem>
          <SelectMenuItem>Item 6</SelectMenuItem>
        </SelectMenuColumn>
      </SelectMenuRow>
    </SelectMenuBody>
  )
}