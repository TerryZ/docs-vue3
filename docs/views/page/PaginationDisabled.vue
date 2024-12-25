<template>
  <div class="
    form-check form-switch user-select-none
    d-inline-flex align-items-center border px-3 py-2 shadow-sm rounded-3 mt-3
  ">
    <label class="form-check-label" for="switchDisabled">禁用</label>
    <input
      class="form-check-input mx-3"
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
    >
      <PaginationPageSizeOptions />
      <PaginationInfo />
      <PaginationFirstPage />
      <PaginationPreviousPage />
      <PaginationPageNumbers />
      <PaginationNextPage />
      <PaginationLastPage />
    </PaginationBar>
  </div>

  <PaginationBar
    :total-row="28"
    :disabled="disabled"
    border
    align="left"
    v-bind="$attrs"
  >
    <PaginationPageSizeOptions />
    <PaginationInfo />
    <PaginationFirstPage />
    <PaginationPreviousPage />
    <PaginationPageNumbers />
    <PaginationNextPage />
    <PaginationLastPage />
  </PaginationBar>
</template>

<script setup>
import { ref } from 'vue'
import {
  PaginationBar,
  PaginationPageSizeOptions,
  PaginationInfo,
  PaginationPageNumbers,
  PaginationFirstPage,
  PaginationPreviousPage,
  PaginationNextPage,
  PaginationLastPage
} from 'v-page'

defineOptions({
  inheritAttrs: false
})

const disabled = ref(false)
</script>
