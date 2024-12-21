<template>
  <div>
    <div class="mb-3 border rounded-4 shadow-sm p-3">
      <h4 class="m-0">您点的餐</h4>
      <div class="mt-3" v-if="combo">套餐：{{ combo }}</div>
      <div class="d-flex gap-3 mt-3" v-if="radio || checkbox.length">
        <div class="" v-if="radio">主食：{{ radio }}</div>
        <div class="" v-if="checkbox.length">配菜：{{ checkbox.join(',') }}</div>
      </div>
    </div>

    <SelectMenuDropdown>
      <template #trigger>
        <SelectMenuTrigger rounded="pill">点餐</SelectMenuTrigger>
      </template>
      <SelectMenuBody @action="handleAction">
        <SelectMenuHeader>套餐</SelectMenuHeader>
        <SelectMenuSection>
          <SelectMenuItem action="鱼香肉丝饭">
            鱼香肉丝饭
          </SelectMenuItem>
          <SelectMenuItem action="宫保鸡丁饭">
            宫保鸡丁饭
          </SelectMenuItem>
          <SelectMenuItem action="青椒牛肉饭">
            青椒牛肉饭
          </SelectMenuItem>
        </SelectMenuSection>
        <SelectMenuDivider />
        <SelectMenuHeader>自选</SelectMenuHeader>
        <SelectMenuSection>
          <SelectMenuSubHeader>
            主食
            <template #append>
              <SelectMenuButton
                @click.stop="radio = ''"
                size="small"
              >
                清除选择
              </SelectMenuButton>
            </template>
          </SelectMenuSubHeader>
          <SelectMenuRadioGroup
            v-model="radio"
            :hide-on-selection="false"
            @change="handleSelection"
          >
            <SelectMenuRadioItem value="炒面">
              炒面
            </SelectMenuRadioItem>
            <SelectMenuRadioItem value="炒饭">
              炒饭
            </SelectMenuRadioItem>
            <SelectMenuRadioItem value="汉堡">
              汉堡
            </SelectMenuRadioItem>
          </SelectMenuRadioGroup>
        </SelectMenuSection>
        <SelectMenuSection>
          <SelectMenuSubHeader>
            配菜
            <template #append>
              <SelectMenuButton
                @click.stop="checkbox = []"
                size="mini"
              >
              清除选择
              </SelectMenuButton>
            </template>
          </SelectMenuSubHeader>
          <SelectMenuCheckboxGroup
            v-model="checkbox"
            @change="handleSelection"
          >
            <SelectMenuCheckboxItem value="炖罐汤">
              炖罐汤
            </SelectMenuCheckboxItem>
            <SelectMenuCheckboxItem value="煎蛋">
              煎蛋
            </SelectMenuCheckboxItem>
            <SelectMenuCheckboxItem value="拌牛肉">
              拌牛肉
            </SelectMenuCheckboxItem>
          </SelectMenuCheckboxGroup>
        </SelectMenuSection>
      </SelectMenuBody>
    </SelectMenuDropdown>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import {
  SelectMenuDropdown,
  SelectMenuTrigger,
  SelectMenuBody,
  SelectMenuHeader,
  SelectMenuSubHeader,
  SelectMenuDivider,
  SelectMenuButton,
  SelectMenuItem,
  SelectMenuSection,
  SelectMenuCheckboxGroup,
  SelectMenuCheckboxItem,
  SelectMenuRadioGroup,
  SelectMenuRadioItem
} from 'v-selectmenu'

const radio = ref('')
const checkbox = ref([])
const combo = ref('')

function handleAction (action) {
  checkbox.value = []
  radio.value = ''
  nextTick(() => {
    combo.value = action
  })
}
function handleSelection () {
  combo.value = ''
}
</script>
