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
    <RegionDropdown>
      <RegionFullColumns
        :language="lang"
        :autoSelectFirst="autoSelectFirst"
        separator="-"
        v-model="values"
      />
    </RegionDropdown>

    <div class="d-flex gap-3 mt-3">
      <button
        type="button"
        class="btn btn-dark"
        @click="change"
      >Change region</button>
      <button
        type="button"
        class="btn btn-dark"
        @click="reset"
      >Reset region</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RegionFullColumns, RegionDropdown } from 'v-region'
import { useRegionChange } from '@/script/region/data'

const { values, change, reset } = useRegionChange()

const autoSelectFirst = ref(false)

defineProps({
  lang: { type: String, default: '' }
})
</script>
