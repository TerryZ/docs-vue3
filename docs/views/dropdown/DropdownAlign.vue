<template>
  <div class="d-flex align-items-center my-3">
    Align direction:
    <select
      class="form-select w-auto ms-3"
      v-model="align"
    >
      <option value="left">
        Left
      </option>
      <option value="center">
        Center
      </option>
      <option value="right">
        Right
      </option>
    </select>
  </div>
  <Dropdown :align="align" >
    <template #trigger>
      <DropdownTrigger />
    </template>
    <DropdownContent>
      <ContentText />
    </DropdownContent>
  </Dropdown>
</template>

<script setup>
import { ref } from 'vue'
import { Dropdown, DropdownContent, DropdownTrigger } from 'v-dropdown'
import { ContentText } from '@/script/dropdown'

const align = ref('left')
</script>
