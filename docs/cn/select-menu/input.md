# Input

内容输入模块

## 实例

<script setup>
import {
  MenuSearch,
  MenuInput,
  MenuInputRounded,
  MenuInputBorder,
  MenuInputLoading
} from '@/script/select-menu/input'
</script>

### 基础应用

通过输入内容过滤菜单项

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

### 与 Button 组合使用 {#input-with-button}

通过将按钮与输入框组合，实现一个快速输入的

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

### 椭圆边角

输入框的各种圆角尺寸展示

<MenuInputRounded />

```vue-html
<SelectMenuInput rounded="small" />
<SelectMenuInput rounded="medium" />
<SelectMenuInput rounded="large" />
<!-- The default is `pill` -->
<SelectMenuInput />
```

### 边框风格

应用边框线条风格的输入框

<MenuInputBorder />

```vue-html
<SelectMenuInput border />
```

### loading 状态

`SelectMenuInput` 内置了 loading 加载动画图标，但当 `prepend` 插槽存在内容时，则不显示

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
   * 输入延迟（以毫秒为单位）
   * @default 0
   **/
  debounce?: number
  /**
   * 输入的内容
   */
  modelValue?: string
  /**
   * @default false
   */
  disabled?: boolean
  /**
   * 仅边框风格模式
   * @default false
   */
  border?: boolean
  /**
   * 圆角风格
   * @default `pill`
   */
  rounded?: 'small' | 'medium' | 'large' | 'pill'
  /**
   * 输入框的占位文本
   */
  placeholder?: string
  /**
   * 显示加载中的动画图标
   * 
   * - 当 prepend 插槽存在内容时，则不显示
   * - 输入框处于 loading 状态时，将被禁用，效果与 disabled 相同
   * @default false
   */
  loading?: boolean
}
```

## 事件

### update:modelValue

响应输入框输入完成的内容

```ts
`update:modelValue`: (value: string) => void
```

### change

响应文本输入的变化

```ts
change: (value: string) => void
```
