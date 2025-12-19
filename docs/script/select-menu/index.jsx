import { ref, computed } from 'vue'

import {
  SelectMenuDropdown,
  SelectMenuTrigger,
  SelectMenuBody,
  SelectMenuHeader,
  SelectMenuSubHeader,
  SelectMenuDivider,
  SelectMenuItem,
  SelectMenuRow,
  SelectMenuColumn,
  SelectMenuGroup,
  SelectMenuGroupItem,
  SelectMenuRadioGroup,
  SelectMenuRadioItem,
  SelectMenuSection,
  SelectMenuButton
} from 'v-selectmenu'

import { createDropdownWithTrigger, createMenuItems } from './base'

export function SelectMenuBase (props, { attrs }) {
  return (
    <SelectMenuDropdown {...attrs}>{{
      trigger: () => <SelectMenuTrigger >{props?.triggerText || 'Open'}</SelectMenuTrigger>,
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
export function MenuItemNoCloseDropdown () {
  return createDropdownWithTrigger(
    <SelectMenuBody hideOnItemClick={false}>
      <SelectMenuItem>Item 1</SelectMenuItem>
      <SelectMenuItem>Item 2</SelectMenuItem>
      <SelectMenuItem>Item 3</SelectMenuItem>
    </SelectMenuBody>
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
export function MenuDropdownScopedSlot () {
  return (
    <SelectMenuDropdown>{{
      trigger: () => <SelectMenuTrigger />,
      default: ({ visible, disabled, close, adjust }) => (
        <div class="d-flex flex-column p-3">
          <div class="mb-3">Dropdown visible: {visible.value.toString()}</div>
          <div class="mb-3">Dropdown disabled: {disabled.value.toString()}</div>
          <button
            type="button"
            class="btn btn-dark mb-3"
            onClick={close}
          >Close</button>
          <button
            type="button"
            class="btn btn-dark"
            onClick={adjust}
          >Adjust</button>
        </div>
      )
    }}</SelectMenuDropdown>
  )
}
export function MenuItemSlots () {
  return (
    <SelectMenuBody class="border rounded-4 shadow-sm">
      <SelectMenuHeader>Menu item slots</SelectMenuHeader>
      <SelectMenuDivider />
      <SelectMenuItem>{{
        prepend: () => (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell b-svg-icon" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
          </svg>
        ),
        default: () => 'Notifications',
        append: () => (
          <SelectMenuButton
            size="mini"
            class="bg-danger text-white"
          >23</SelectMenuButton>
        )
      }}</SelectMenuItem>
      <SelectMenuItem>Helps</SelectMenuItem>
      <SelectMenuItem>Settings</SelectMenuItem>
    </SelectMenuBody>
  )
}

export function MenuSection () {
  return createDropdownWithTrigger(
    <SelectMenuBody>
      <SelectMenuSubHeader>Section 1</SelectMenuSubHeader>
      <SelectMenuSection style="max-height: 170px;">
        {createMenuItems('Item ', 10)}
      </SelectMenuSection>
      <SelectMenuDivider />
      <SelectMenuSubHeader>Section 2</SelectMenuSubHeader>
      {createMenuItems('Item ', 3)}
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
export function menuActionWithLogs () {
  const logs = ref([])

  function handleAction (action) {
    logs.value.push(action)
  }

  function MenuItemEvent () {
    return createDropdownWithTrigger(
      <SelectMenuBody onAction={handleAction}>
        <SelectMenuItem action="item1">Item 1</SelectMenuItem>
        <SelectMenuItem action="item2">Item 2</SelectMenuItem>
        <SelectMenuItem action="item3">Item 3</SelectMenuItem>
      </SelectMenuBody>
    )
  }

  return {
    MenuItemEvent,
    logs
  }
}
