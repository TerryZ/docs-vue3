<template>
  <div class="my-3 d-flex gap-3">
    <div class="d-flex align-items-center">
      Trigger rounded:
      <select
        class="form-select w-auto ms-3"
        v-model="triggerRounded"
      >
        <option value="small">
          small
        </option>
        <option value="medium">
          medium
        </option>
        <option value="large">
          large
        </option>
        <option value="pill">
          pill
        </option>
        <option value="circle">
          circle
        </option>
      </select>
    </div>
    <div class="d-flex align-items-center">
      Content rounded:
      <select
        class="form-select w-auto ms-3"
        v-model="contentRounded"
      >
        <option value="small">
          small
        </option>
        <option value="medium">
          medium
        </option>
        <option value="large">
          large
        </option>
      </select>
    </div>
  </div>
  <div class="form-check form-switch d-flex align-items-center my-3">
    <input
      class="form-check-input me-2"
      type="checkbox"
      role="switch"
      id="switch-border"
      v-model="border"
    />
    <label class="form-check-label" for="switch-border">Content border</label>
  </div>
  <Dropdown>
    <template #trigger>
      <DropdownTrigger :rounded="triggerRounded" />
    </template>
    <DropdownContent
      :rounded="contentRounded"
      :border="border"
    >
      <ContentText />
    </DropdownContent>
  </Dropdown>
</template>

<script setup>
import { ref } from 'vue'
import { Dropdown, DropdownContent, DropdownTrigger } from 'v-dropdown'
import { ContentText } from '@/script/dropdown'

const border = ref(true)
const triggerRounded = ref('medium')
const contentRounded = ref('small')
</script>
