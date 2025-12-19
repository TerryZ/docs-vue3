<template>
  <div class="rounded-3 my-3 border overflow-hidden d-flex shadow-sm">
    <div class="col-md-6 border-end">
      <div class="py-2 px-3 bg-body-secondary bg-opacity-50">
        <h5 v-text="valueTitle" />
      </div>
      <div class="p-3 code-result lh-sm overflow-auto">
        <pre class="m-0">{{ jsonFormat(values) }}</pre>
      </div>
    </div>
    <div class="col-md-6">
      <div class="py-2 px-3 bg-body-secondary bg-opacity-50">
        <h5 v-text="changeTitle" />
      </div>
      <div class="p-3 code-result lh-sm overflow-auto">
        <pre class="m-0">{{ jsonFormat(model) }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import { jsonFormat } from '../../script/base/utils'

defineProps({
  values: { type: [Object, Array] },
  model: { type: [Object, Array] },
  valueTitle: { type: String, default: 'v-model value' },
  changeTitle: { type: String, default: 'Change event response results' }
})
</script>

<style lang="sass">
.code-result
  font-size: 14px
  color: #666
  max-height: 360px
</style>