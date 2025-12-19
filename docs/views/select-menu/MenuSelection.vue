<template>
  <div>
    <div class="mb-3 border rounded-4 shadow-sm p-3">
      <h4 class="m-0">Your meal order</h4>
      <div class="mt-3" v-if="combo">Combo meals: {{ combo }}</div>
      <div class="d-flex gap-3 mt-3" v-if="radio || checkbox.length">
        <div class="" v-if="radio">Main courses: {{ radio }}</div>
        <div class="" v-if="checkbox.length">Side dishes: {{ checkbox.join(',') }}</div>
      </div>
    </div>

    <SelectMenuDropdown>
      <template #trigger>
        <SelectMenuTrigger rounded="pill">Ordering</SelectMenuTrigger>
      </template>
      <SelectMenuBody @action="handleAction">
        <SelectMenuRow>
          <SelectMenuColumn style="width: 180px;">
            <SelectMenuHeader>Combo meals</SelectMenuHeader>
            <SelectMenuItem action="Chicken fried rice">
              Chicken fried rice
            </SelectMenuItem>
            <SelectMenuItem action="Big Mac burger">
              Big Mac burger
            </SelectMenuItem>
            <SelectMenuItem action="Hot Dog sandwich">
              Hot Dog sandwich
            </SelectMenuItem>
          </SelectMenuColumn>
          <SelectMenuDivider :horizontal="false" />
          <SelectMenuColumn style="width: 250px;">
            <SelectMenuHeader>Optional meals</SelectMenuHeader>
            <SelectMenuSubHeader>
              Main courses
              <template #append>
                <SelectMenuButton
                  @click.stop="radio = ''"
                  size="mini"
                >
                  Clear
                </SelectMenuButton>
              </template>
            </SelectMenuSubHeader>
            <SelectMenuRadioGroup
              v-model="radio"
              :hide-on-selection="false"
              @change="handleSelection"
            >
              <SelectMenuRadioItem value="Fried Noodles">
                Fried Noodles
              </SelectMenuRadioItem>
              <SelectMenuRadioItem value="Fried Rice">
                Fried Rice
              </SelectMenuRadioItem>
              <SelectMenuRadioItem value="Hamburger">
                Hamburger
              </SelectMenuRadioItem>
            </SelectMenuRadioGroup>
            <SelectMenuSubHeader>
              Side dishes
              <template #append>
                <SelectMenuButton
                  @click.stop="checkbox = []"
                  size="mini"
                >
                Clear
                </SelectMenuButton>
              </template>
            </SelectMenuSubHeader>
            <SelectMenuCheckboxGroup
              v-model="checkbox"
              @change="handleSelection"
            >
              <SelectMenuCheckboxItem value="Fruit Salad">
                Fruit Salad
              </SelectMenuCheckboxItem>
              <SelectMenuCheckboxItem value="Fried Egg">
                Fried Egg
              </SelectMenuCheckboxItem>
              <SelectMenuCheckboxItem value="Baked Potato">
                Baked Potato
              </SelectMenuCheckboxItem>
            </SelectMenuCheckboxGroup>
          </SelectMenuColumn>
        </SelectMenuRow>
      </SelectMenuBody>
    </SelectMenuDropdown>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  SelectMenuDropdown,
  SelectMenuTrigger,
  SelectMenuBody,
  SelectMenuHeader,
  SelectMenuSubHeader,
  SelectMenuDivider,
  SelectMenuButton,
  SelectMenuItem,
  SelectMenuCheckboxGroup,
  SelectMenuCheckboxItem,
  SelectMenuRadioGroup,
  SelectMenuRadioItem,
  SelectMenuRow,
  SelectMenuColumn
} from 'v-selectmenu'

const radio = ref('')
const checkbox = ref([])
const combo = ref('')

function handleAction (action) {
  checkbox.value = []
  radio.value = ''
  combo.value = action
}
function handleSelection () {
  if (radio.value || checkbox.value.length) {
    combo.value = ''
  }
}
</script>
