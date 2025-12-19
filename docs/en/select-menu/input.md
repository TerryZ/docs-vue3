# Input

Content input module

## Examples

<script setup>
import {
  MenuSearch,
  MenuInput,
  MenuInputRounded,
  MenuInputBorder,
  MenuInputLoading
} from '@/script/select-menu/input'
</script>

### Basic application

Input content to filter menu items

<MenuSearch />

::: code-group

```vue-html
<SelectMenuBody>
  <SelectMenuHeader>Menu search</SelectMenuHeader>
  <SelectMenuInput
    placeholder="Search"
    @search="search"
  />
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
  SelectMenuInput
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

### Used in combination with Button {#input-with-button}

By combining a button with an input box, a quick input function is realized

<MenuInput />

::: code-group

```vue-html
<SelectMenuDropdown>
  <template #trigger>
    <SelectMenuTrigger />
  </template>

  <InputForm />
</SelectMenuDropdown>
```

```ts
import { SelectMenuDropdown, SelectMenuTrigger } from 'v-selectmenu'
import InputForm from './InputForm.vue'
```

```vue [InputForm.vue]
<template>
  <SelectMenuBody>
    <SelectMenuHeader>New user</SelectMenuHeader>
    <SelectMenuBlock style="width: 250px;">
      <SelectMenuInput
        v-model="search"
        placeholder="Your phone number"
        :disabled="loading"
      />
      <template #append>
        <SelectMenuButton
          rounded="circle"
          :loading="loading"
          @click="handleClick"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-right-circle"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
            />
          </svg>
        </SelectMenuButton>
      </template>
    </SelectMenuBlock>
  </SelectMenuBody>
</template>

<script setup>
import { ref } from 'vue'
import {
  SelectMenuBody,
  SelectMenuHeader,
  SelectMenuInput,
  SelectMenuButton,
  SelectMenuBlock,
  useDropdown
} from 'v-selectmenu'

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
</script>
```

:::

### Rounded corners

Input box with various rounded corner sizes

<MenuInputRounded />

```vue-html
<SelectMenuInput rounded="small" />
<SelectMenuInput rounded="medium" />
<SelectMenuInput rounded="large" />
<!-- The default is `pill` -->
<SelectMenuInput />
```

### Border style input

Applies a border line style input box

<MenuInputBorder />

```vue-html
<SelectMenuInput border />
```

### loading status

`SelectMenuInput` has a built-in loading animation icon, but when the `prepend` slot has content, it will not be displayed

<MenuInputLoading />

::: code-group

```vue-html
<SelectMenuBody>
  <SelectMenuHeader>Register</SelectMenuHeader>
  <SelectMenuInput
    placeholder="Phone number"
    border
    :loading="loading"
  />
  <SelectMenuBlock>
    <SelectMenuButton @click="handleClick">Submit</SelectMenuButton>
  </SelectMenuBlock>
</SelectMenuBody>
```

```js
const loading = ref(false)

function handleClick () {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
```

:::

## Props

```ts
interface InputProps {
  /**
   * Debounce delay when typing, in milliseconds
   * @default 0
   **/
  debounce?: number
  /**
   * Input content
   */
  modelValue?: string
  /**
   * @default false
   */
  disabled?: boolean
  /**
   * Border only style mode
   * @default false
   */
  border?: boolean
  /**
   * Rounded corner size
   * @default `pill`
   */
  rounded?: 'small' | 'medium' | 'large' | 'pill'
  /**
   * Input placeholder
   */
  placeholder?: string
  /**
   * display loading animation icon
   * 
   * - When the prepend slot has content, it will not be displayed
   * - When the input is in the loading state, it will be disabled, the effect
   *   is the same as disabled
   * @default false
   */
  loading?: boolean
}
```

## Events

### update:modelValue

Respond to the completed content in the input box

```ts
`update:modelValue`: (value: string) => void
```

### change

Responding to changes in text input

```ts
change: (value: string) => void
```
