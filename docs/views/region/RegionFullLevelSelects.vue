<template>
  <div>
    <div class='mb-3'>
      <div class="form-check form-check-inline d-flex align-items-center">
        <input
          class="form-check-input me-2"
          type="checkbox"
          id="selects-auto-select-first"
          v-model="autoSelectFirst"
        />
        <label
          class="form-check-label"
          for="selects-auto-select-first"
        >auto-select-first</label>
      </div>
    </div>
    <RegionFullSelects
      :language="lang"
      :autoSelectFirst="autoSelectFirst"
      v-model="dataValue"
      @change="change"
    />
    <DataChangeResult :value="dataValue" :model="dataModel" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RegionFullSelects } from 'v-region'
import DataChangeResult from '@/views/components/DataChangeResult.vue'
import { useDataChange } from '@/script/base/data'

const { dataValue, dataModel, change } = useDataChange()

const autoSelectFirst = ref(false)

defineProps({
  lang: { type: String, default: '' }
})

</script>
