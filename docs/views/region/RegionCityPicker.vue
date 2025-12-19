<template>
  <div>
    <RegionCityPicker
      class="border rounded-3 d-inline-flex shadow-sm"
      v-model="dataValue"
      @change="change"
    />
    <div class="d-flex gap-3 mt-3">
      <button
        class="btn btn-dark"
        @click="dataValue = ['130500', '140200', '150200']"
      >
        Change cities
      </button>
      <button
        class="btn btn-dark"
        @click="dataValue = []"
      >
        Clear
      </button>
    </div>
    <DataChangeResult
      :value="dataValue"
      :model="dataModel"
    />
  </div>
</template>

<script setup>
import { RegionDropdown, RegionCityPicker } from 'v-region'
import DataChangeResult from '@/views/components/DataChangeResult.vue'
import { useDataChange } from '../../script/base/data'

const {
  change,
  dataValue,
  dataModel
} = useDataChange(['110000', '130200', '140100'])
</script>
