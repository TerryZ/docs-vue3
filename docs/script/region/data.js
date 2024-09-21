import { ref } from "vue"

export const valuesFuzhou = {
  province: '350000',
  city: '350100',
  area: '350104',
  town: '350104008'
}

export function useDataChange () {
  const changedValues = ref({})
  const changedModel = ref({})

  function change (data) {
    changedModel.value = data
  }
  const jsonFormat = data => JSON.stringify(data, null, 2)

  return {
    changedValues,
    changedModel,
    change,
    jsonFormat
  }
}
