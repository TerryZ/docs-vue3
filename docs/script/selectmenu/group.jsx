import { ref } from 'vue'

import {
  SelectMenuBody,
  SelectMenuHeader,
  SelectMenuGroup,
  SelectMenuGroupItem
} from 'v-selectmenu'

import { createMenuItems, createDropdownWithTrigger } from './base'

export function MenuGroup (props, { attrs }) {
  return createDropdownWithTrigger(
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
          {createMenuItems('group item 1-', 1)}
        </SelectMenuGroupItem>
        <SelectMenuGroupItem
          name="group2"
          title="Group2"
        >
          {createMenuItems('group item 2-', 2)}
        </SelectMenuGroupItem>
        <SelectMenuGroupItem
          name="group3"
          title="Group3"
        >
          {createMenuItems('group item 3-', 3)}
        </SelectMenuGroupItem>
      </SelectMenuGroup>
    </SelectMenuBody>
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
