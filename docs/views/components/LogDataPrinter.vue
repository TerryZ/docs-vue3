<template>
  <div class="log-data-printer border rounded-3 overflow-hidden">
    <div class="py-2 px-3 border-bottom">
      {{ title }}
    </div>
    <div class="bg-light p-3 font-monospace">
      <div
        v-for="(item, index) in logs"
        :key="index"
      >
        <small>{{ JSON.stringify(item, null, 2) }}</small>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: 'Event data logs' },
  logs: { type: Array, default: undefined }
})
</script>

<style lang="sass">
.log-data-printer
  transition: all .3s
  &:hover
    box-shadow: 0 2px 8px rgb(0,0,0,.1)
</style>