<template>
  <div class="d-flex my-3">
    <div class="form-check form-switch mb-0 d-flex align-items-center">
      <input
        class="form-check-input me-2"
        type="checkbox"
        role="switch"
        id="switch-toggle"
        v-model="toggle"
      />
      <label class="form-check-label" for="switch-toggle">Toggle</label>
    </div>
  </div>
  <Dropdown :toggle="toggle" >
    <template #trigger>
      <input
        type="text"
        class="border rounded-3 px-3 py-2"
        placeholder="focus on me"
      />
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

const toggle = ref(false)
</script>
