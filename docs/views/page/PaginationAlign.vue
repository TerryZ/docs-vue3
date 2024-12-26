<template>
  <div class="my-3 d-flex align-items-center">
    Alignment direction
    <select
      v-model="align"
      style="-webkit-appearance: auto;width: 100px;"
      class="form-control ms-3"
    >
      <option>left</option>
      <option>center</option>
      <option>right</option>
    </select>
  </div>

  <PaginationBar
    :total-row="28"
    :align="align"
    border
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

const align = ref('left')
</script>
