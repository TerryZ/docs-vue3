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
import { DialogMessageError, DialogMessageSuccess } from 'v-dialogs'

import { createDropdownWithTrigger } from './base'

export function MenuButtonSizes () {
  return (
    <SelectMenuBody class="border rounded-4 shadow-sm">
      <SelectMenuHeader>Button size</SelectMenuHeader>
      <SelectMenuBlock>
        <SelectMenuButton size="medium">size medium</SelectMenuButton>
      </SelectMenuBlock>
      <SelectMenuBlock>
        <SelectMenuButton size="small">size small</SelectMenuButton>
      </SelectMenuBlock>
      <SelectMenuBlock>
        <SelectMenuButton size="mini">size mini</SelectMenuButton>
      </SelectMenuBlock>
    </SelectMenuBody>
  )
}
export function MenuButtonRounded () {
  return (
    <SelectMenuBody class="border rounded-4 shadow-sm">
      <SelectMenuHeader>Button rounded</SelectMenuHeader>
      <SelectMenuBlock>
        <SelectMenuButton rounded="small">rounded small</SelectMenuButton>
      </SelectMenuBlock>
      <SelectMenuBlock>
        <SelectMenuButton rounded="medium">rounded medium</SelectMenuButton>
      </SelectMenuBlock>
      <SelectMenuBlock>
        <SelectMenuButton rounded="large">rounded large</SelectMenuButton>
      </SelectMenuBlock>
      <SelectMenuBlock>
        <SelectMenuButton>rounded pill</SelectMenuButton>
      </SelectMenuBlock>
      <SelectMenuBlock>
        <SelectMenuButton rounded="circle" >
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
      </SelectMenuBlock>
    </SelectMenuBody>
  )
}
export function MenuButtonLoading () {
  const text = ref('')
  const loading = ref(false)

  function handleClick () {
    if (!text.value) {
      DialogMessageError('Please enter the phone number')
      return
    }
    loading.value = true
    setTimeout(() => {
      DialogMessageSuccess('Successfully registered')
      loading.value = false
      text.value = ''
    }, 2000)
  }

  return (
    <SelectMenuBody class="border rounded-4 shadow-sm">
      <SelectMenuHeader>Register</SelectMenuHeader>
      <SelectMenuInput
        placeholder="Phone number"
        border
        disabled={loading.value}
        v-model={text.value}
      />
      <SelectMenuBlock>
        <SelectMenuButton
          loading={loading.value}
          onClick={handleClick}
        >Submit</SelectMenuButton>
      </SelectMenuBlock>
    </SelectMenuBody>
  )
}
export function MenuButtonBlock () {
  return (
    <SelectMenuBody class="border rounded-4 shadow-sm">
      <SelectMenuHeader>Button block</SelectMenuHeader>
      <SelectMenuButton block>Block button</SelectMenuButton>
      <SelectMenuBlock>
        <SelectMenuButton block>Block button in block</SelectMenuButton>
      </SelectMenuBlock>
    </SelectMenuBody>
  )
}

