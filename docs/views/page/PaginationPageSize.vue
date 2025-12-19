<template>
  <PaginationBar
    align="left"
    v-model:page-size="pageSize"
    :total-row="100"
    v-bind="$attrs"
  />

  <button
    type="button"
    class="btn btn-dark mt-3"
    @click="setPageSize(15)"
  >
    set pageSize to 15
  </button>
</template>

<script setup>
import { ref } from 'vue'
import { PaginationBar } from 'v-page'

defineOptions({
  inheritAttrs: false
})

const pageSize = ref(25)
function setPageSize (val) {
  pageSize.value = Number(val)
}
</script>
