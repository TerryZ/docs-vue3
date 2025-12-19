# Button

按钮模块

## 实例

<script setup>
import {
  MenuSearch,
  MenuInput,
  MenuInputRounded,
  MenuInputBorder,
  MenuInputLoading
} from '@/script/select-menu/input'
import {
  MenuButtonSizes,
  MenuButtonRounded,
  MenuButtonLoading,
  MenuButtonBlock
} from '@/script/select-menu/button'
</script>

### 按钮尺寸

按钮的不同尺寸展示

<MenuButtonSizes />

```vue-html
<SelectMenuBody>
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
```

### 椭圆边角

输入框的各种圆角尺寸展示

<MenuButtonRounded />

```vue-html
<SelectMenuBody>
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
        class="bi bi-arrow-right-circle"
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
```

### 全宽度

全宽按钮会自动填充父容器的宽度

<MenuButtonBlock />

```vue-html
<SelectMenuBody>
  <SelectMenuHeader>Button block</SelectMenuHeader>
  <SelectMenuButton block>Block button</SelectMenuButton>
  <SelectMenuBlock>
    <SelectMenuButton block>Block button in block</SelectMenuButton>
  </SelectMenuBlock>
</SelectMenuBody>
```

### loading 状态

`SelectMenuButton` 内置了 loading 加载动画图标，但当 `prepend` 插槽存在内容时，则不显示

<MenuButtonLoading />

::: code-group

```vue-html
<SelectMenuBody>
  <SelectMenuHeader>Register</SelectMenuHeader>
  <SelectMenuInput
    placeholder="Phone number"
    border
    :disabled="loading"
    v-model="content"
  />
  <SelectMenuBlock>
    <SelectMenuButton
      :loading="loading"
      @click="handleClick"
    >Submit</SelectMenuButton>
  </SelectMenuBlock>
</SelectMenuBody>
```

```js
const content = ref('')
const loading = ref(false)

function handleClick () {
  loading.value = true
  setTimeout(() => {
    content.value = ''
    loading.value = false
  }, 2000)
}
```

:::

## Props

```ts
interface ButtonProps {
  /**
   * @default false
   */
  disabled?: boolean
  /**
   * 显示加载中的动画图标
   * 
   * - 当 prepend 插槽存在内容时，则不显示
   * - 输入框处于 loading 状态时，将被禁用，效果与 disabled 相同
   * @default false
   */
  loading?: boolean
  /**
   * 占用全宽度
   * @default false
   */
  block?: boolean
  /**
   * 圆角风格
   * @default `pill`
   */
  rounded?: 'small' | 'medium' | 'large' | 'pill' | 'circle'
  /**
   * 按钮尺寸
   * @default `medium`
   */
  size?: 'medium' | 'small' | 'mini'
}
```
