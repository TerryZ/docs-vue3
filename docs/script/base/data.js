import { ref } from 'vue'

import { jsonFormat } from './utils'

export function useDataChange (value) {
  const dataValue = ref(value)
  const dataModel = ref({})

  function change (data) {
    dataModel.value = data
  }

  return {
    dataValue,
    dataModel,
    change,
    jsonFormat
  }
}
