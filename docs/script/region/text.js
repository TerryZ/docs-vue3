import { ref } from 'vue'

import { valuesFuzhou, valuesHenan } from './data'

export const values = ref(valuesFuzhou)

export function change () {
  values.value = valuesHenan
}
export function useRegionChange () {
  const values = ref(valuesFuzhou)
  function change () {
    values.value = valuesHenan
  }

  return { values, change }
}
