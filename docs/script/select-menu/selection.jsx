import { ref } from 'vue'

import {
  SelectMenuBody,
  SelectMenuHeader,
  SelectMenuCheckboxGroup,
  SelectMenuCheckboxItem,
  SelectMenuRadioGroup,
  SelectMenuRadioItem
} from 'v-selectmenu'

import { createDropdownWithTrigger } from './base'

export function MenuRadioSelection (props) {
  return createDropdownWithTrigger(
    <SelectMenuBody>
      <SelectMenuHeader>Radio group</SelectMenuHeader>
      <SelectMenuRadioGroup
        hideOnSelection={props.hideOnSelection}
        modelValue={props.modelValue}
        onChange={props.onChange}
      >
        <SelectMenuRadioItem
          value="radio1"
          disabled
        >radio1</SelectMenuRadioItem>
        <SelectMenuRadioItem value="radio2">radio2</SelectMenuRadioItem>
        <SelectMenuRadioItem value="radio3">radio3</SelectMenuRadioItem>
      </SelectMenuRadioGroup>
    </SelectMenuBody>
  )
}
export function MenuCheckboxSelection (props) {
  return createDropdownWithTrigger(
    <SelectMenuBody>
      <SelectMenuHeader>Checkbox group</SelectMenuHeader>
      <SelectMenuCheckboxGroup
        hideOnSelection={props.hideOnSelection}
        modelValue={props.modelValue}
        onChange={props.onChange}
      >
        <SelectMenuCheckboxItem value="checkbox1">checkbox1</SelectMenuCheckboxItem>
        <SelectMenuCheckboxItem
          value="checkbox2"
          disabled
        >checkbox2</SelectMenuCheckboxItem>
        <SelectMenuCheckboxItem value="checkbox3">checkbox3</SelectMenuCheckboxItem>
      </SelectMenuCheckboxGroup>
    </SelectMenuBody>
  )
}

export function MenuRadioWithLogs () {
  const logs = ref([])

  function handleGroupChange (data) {
    logs.value.push(data)
  }

  function MenuRadioGroupNormal () {
    return <MenuRadioSelection
      onChange={handleGroupChange}
    />
  }
  return {
    logs,
    MenuRadioGroupNormal
  }
}
export function MenuRadioGroupWithValue () {
  const value = ref('radio2')
  return <MenuRadioSelection
    modelValue={value.value}
  />
}
export function MenuCheckboxWithLogs () {
  const logs = ref([])

  function handleGroupChange (data) {
    logs.value.push(Array.from(data))
  }

  function MenuCheckboxGroupNormal () {
    return <MenuCheckboxSelection
      onChange={handleGroupChange}
    />
  }
  return {
    logs,
    MenuCheckboxGroupNormal
  }
}
export function MenuCheckboxGroupWithValue () {
  const value = ref(['checkbox1', 'checkbox3'])
  return <MenuCheckboxSelection
    modelValue={value.value}
  />
}
export function CloseAfterSelection () {
  const hideOnSelection = ref(false)

  function MenuRadioGroupHide () {
    return <MenuRadioSelection
      hideOnSelection={hideOnSelection.value}
    />
  }
  function MenuCheckboxGroupHide () {
    return <MenuCheckboxSelection
      hideOnSelection={hideOnSelection.value}
    />
  }
  return {
    hideOnSelection,
    MenuRadioGroupHide,
    MenuCheckboxGroupHide
  }
}