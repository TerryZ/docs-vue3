<template>
  <div class="d-inline-flex flex-column gap-3">
    <div class="d-flex align-items-center gap-3">
      <div class="text-nowrap">Trigger rounded:</div>
      
      <select
        class="form-select"
        v-model="rounded"
      >
        <option value="small">small</option>
        <option value="medium">medium</option>
        <option value="large">large</option>
        <option value="pill">pill</option>
      </select>
    </div>


    <SelectMenuDropdown>
      <template #trigger>
        <SelectMenuTrigger :rounded="rounded" />
      </template>
      <SelectMenuBody>
        <SelectMenuItem>Item 1</SelectMenuItem>
        <SelectMenuItem>Item 2</SelectMenuItem>
        <SelectMenuItem>Item 3</SelectMenuItem>
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
  SelectMenuItem
} from 'v-selectmenu'

const rounded = ref('medium')
</script>
