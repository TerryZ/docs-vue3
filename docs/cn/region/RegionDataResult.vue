<template>
  <div class="rounded-3 my-3 border overflow-hidden d-flex shadow-sm">
    <div class="col-md-6 border-end">
      <div class="border-bottom p-3">
        <h5>v-model values</h5>
      </div>
      <div class="p-3 text-black-50">
        <small>
          <pre class="m-0">{{ jsonFormat(values) }}</pre>
        </small>
      </div>
    </div>
    <div class="col-md-6">
      <div class="border-bottom p-3">
        <h5>change 事件响应结果</h5>
      </div>
      <div class="p-3 text-black-50">
        <small>
          <pre class="m-0">{{ jsonFormat(model) }}</pre>
        </small>
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
