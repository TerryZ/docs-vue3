import { ref } from "vue"

export const valuesEmpty = {
  province: undefined,
  city: undefined,
  area: undefined,
  town: undefined
}
export const valuesFuzhou = {
  province: '350000',
  city: '350100',
  area: '350104',
  town: '350104008'
}
export const valuesHenan = {
  province: '410000',
  city: '419001',
  area: '419001',
  town: '419001001'
}

export function useUIDataChange () {
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
export function useRegionChange () {
  const values = ref(valuesFuzhou)
  function change () {
    values.value = valuesHenan
  }
  function reset () {
    values.value = valuesEmpty
  }

  return { values, change, reset }
}
export function resultText (region) {
  if (!region || !Object.keys(region).length) return '无数据'

  if (!Object.values(region).some(val => val) || !region) {
    return '无数据'
  }
  
  return Object.values(region)
    .filter(val => val)
    .map(val => val.value)
    .join(',')
}
