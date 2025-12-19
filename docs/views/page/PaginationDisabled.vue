<template>
  <div class="
    form-check form-switch user-select-none
    d-inline-flex align-items-center border px-4 py-2 shadow-sm rounded-pill mt-3
  ">
    <label class="form-check-label" for="switchDisabled">Disabled</label>
    <input
      class="form-check-input ms-3"
      type="checkbox"
      role="switch"
      id="switchDisabled"
      v-model="disabled"
    >
  </div>

  <div class="my-3">
    <PaginationBar
      :total-row="28"
      :disabled="disabled"
      align="left"
      v-bind="$attrs"
    />
  </div>

  <PaginationBar
    :total-row="28"
    :disabled="disabled"
    border
    align="left"
    v-bind="$attrs"
  />
</template>

<script setup>
import { ref } from 'vue'
import { PaginationBar } from 'v-page'

defineOptions({
  inheritAttrs: false
})

const disabled = ref(false)
</script>
