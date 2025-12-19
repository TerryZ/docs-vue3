<template>
  <div class="mb-3 d-flex">
    <input
      type="text"
      class="form-control me-3"
      v-model="inputPageNumber"
      style="width: 100px"
    />
    <button
      type="button"
      class="btn btn-dark me-3"
      @click="goToInputPage"
    >
      Go
    </button>
    <button
      type="button"
      class="btn btn-dark"
      @click="pageNumber++"
    >
      pageNumber + 1
    </button>
  </div>

  <PaginationBar
    align="left"
    :total-row="58"
    v-model="pageNumber"
    v-bind="$attrs"
  />
</template>

<script setup>
import { ref } from 'vue'
import { PaginationBar } from 'v-page'

defineOptions({
  inheritAttrs: false
})

const pageNumber = ref(3)
const inputPageNumber = ref('2')
function goToInputPage () {
  if (!inputPageNumber.value) return

  const newPageNumber = Number(inputPageNumber.value)

  if (window.isNaN(newPageNumber)) {
    inputPageNumber.value = ''
    return
  }
  pageNumber.value = newPageNumber
}
</script>
