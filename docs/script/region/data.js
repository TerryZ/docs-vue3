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
  if (!region || !Object.keys(region).length) return 'No data'

  if (!Object.values(region).some(val => val) || !region) {
    return 'No data'
  }
  
  return Object.values(region)
    .filter(val => val)
    .map(val => val.value)
    .join(',')
}
