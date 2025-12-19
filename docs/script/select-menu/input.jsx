import { ref } from 'vue'
import {
  SelectMenuBody,
  SelectMenuHeader,
  SelectMenuItem,
  SelectMenuInput,
  SelectMenuButton,
  SelectMenuBlock,
  useDropdown
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
      <SelectMenuInput
        onChange={search}
        placeholder="Search"
      />
      
      {items.value.map(item => (
        <SelectMenuItem key={item.key}>{item.name}</SelectMenuItem>
      ))}
    </SelectMenuBody>
  )
}
export function MenuInput () {
  function InputForm () {
    const { close } = useDropdown()
    const loading = ref(false)
    const search = ref('')
  
    function handleClick () {
      loading.value = true
      setTimeout(() => {
        loading.value = false
        close()
        search.value = ''
      }, 2000)
    }
    return (
      <SelectMenuBody>
        <SelectMenuHeader>New user</SelectMenuHeader>
        <SelectMenuBlock style="width: 250px;">{{
          default: () => (
            <SelectMenuInput
              v-model={search.value}
              placeholder="Your phone number"
              disabled={loading.value}
            />
          ),
          append: () => (
            <SelectMenuButton
              rounded="circle"
              loading={loading.value}
              onClick={handleClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right-circle b-svg-icon"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                />
              </svg>
            </SelectMenuButton>
          )
        }}</SelectMenuBlock>
      </SelectMenuBody>
    )
  }

  return createDropdownWithTrigger(
    <InputForm />
  )
}
export function MenuInputRounded () {
  return (
    <SelectMenuBody class="border rounded-4 shadow-sm">
      <SelectMenuHeader>Input rounded</SelectMenuHeader>
      <SelectMenuInput
        placeholder="rounded small"
        rounded="small"
      />
      <SelectMenuInput
        placeholder="rounded medium"
        rounded="medium"
      />
      <SelectMenuInput
        placeholder="rounded large"
        rounded="large"
      />
      <SelectMenuInput
        placeholder="rounded pill"
      />
    </SelectMenuBody>
  )
}
export function MenuInputBorder () {
  return (
    <SelectMenuBody class="border rounded-4 shadow-sm">
      <SelectMenuHeader>Input rounded</SelectMenuHeader>
      <SelectMenuInput
        placeholder="border style"
        border
      />
    </SelectMenuBody>
  )
}
export function MenuInputLoading () {
  const loading = ref(false)

  function handleClick () {
    loading.value = true
    setTimeout(() => {
      loading.value = false
    }, 2000)
  }

  return (
    <SelectMenuBody class="border rounded-4 shadow-sm">
      <SelectMenuHeader>Register</SelectMenuHeader>
      <SelectMenuInput
        placeholder="Phone number"
        border
        loading={loading.value}
      />
      <SelectMenuBlock>
        <SelectMenuButton onClick={handleClick}>Submit</SelectMenuButton>
      </SelectMenuBlock>
    </SelectMenuBody>
  )
}