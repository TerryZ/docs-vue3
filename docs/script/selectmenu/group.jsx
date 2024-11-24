import { ref } from 'vue'

import {
  SelectMenuDropdown,
  SelectMenuTrigger,
  SelectMenuBody,
  SelectMenuHeader,
  SelectMenuGroup,
  SelectMenuGroupItem,
  SelectMenuItem
} from 'v-selectmenu'

export function MenuGroup (props, { attrs }) {
  return (
    <SelectMenuDropdown>{{
      trigger: () => <SelectMenuTrigger />,
      default: () => (
        <SelectMenuBody>
          <SelectMenuHeader>Menu group</SelectMenuHeader>
          <SelectMenuGroup
            modelValue={props.modelValue}
            onChange={props.onChange}
          >
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
      )
    }}</SelectMenuDropdown>
  )
}

export function menuGroupWithLogs () {
  const logs = ref([])

  function handleGroupChange (data) {
    logs.value.push(data)
  }

  function NormalMenuGroup () {
    return (
      <MenuGroup
        onChange={handleGroupChange}
      />
    )
  }

  return {
    NormalMenuGroup,
    logs
  }
}

export function MenuGroupWithValue () {
  const value = ref('group2')
  return (
    <MenuGroup
      modelValue={value.value}
    />
  )
}
