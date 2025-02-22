<template>
  <div class="d-flex my-3">
    <div class="form-check form-switch mb-0 d-flex align-items-center">
      <input
        class="form-check-input me-2"
        type="checkbox"
        role="switch"
        id="switch-disabled"
        v-model="disabled"
      />
      <label class="form-check-label" for="switch-disabled">Disabled</label>
    </div>
  </div>
  <Dropdown :disabled="disabled" >
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

const disabled = ref(false)
</script>
