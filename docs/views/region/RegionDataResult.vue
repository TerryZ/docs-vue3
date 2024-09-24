<template>
  <div class="rounded-3 my-3 border overflow-hidden d-flex shadow-sm">
    <div class="col-md-6 border-end">
      <div class="border-bottom p-3">
        <h5>v-model values</h5>
      </div>
      <div class="p-3 code-result">
        <pre class="m-0">{{ jsonFormat(values) }}</pre>
      </div>
    </div>
    <div class="col-md-6">
      <div class="border-bottom p-3">
        <h5>change event response results</h5>
      </div>
      <div class="p-3 code-result">
        <pre class="m-0">{{ jsonFormat(model) }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  values: { type: [Object, Array] },
  model: { type: [Object, Array] }
})

const jsonFormat = data => JSON.stringify(data, null, 2)
</script>

<style lang="sass">
.code-result
  font-size: 14px
  color: #666
  transition: all .3s
  height: 100%
  &:hover
    background-color: #fafafa
</style>