import {
  RegionFullColumns,
  RegionDropdown
} from 'v-region'
import { useRegionChange } from './data'

export function useRegionColumnsExamples (lang) {
  const { values, change } = useRegionChange()
  
  function RegionColumnsCore () {
    return (
      <RegionFullColumns
        v-model={values.value}
        language={lang.value}
        class="border rounded-3 shadow-sm d-inline-flex"
      />
    )
  }
  function RegionColumnsDropdown () {
    return (
      <RegionDropdown>
        <RegionFullColumns
          v-model={values.value}
          language={lang.value}
          separator="-"
        />
      </RegionDropdown>
    )
  }
  function RegionColumnsReset () {
    return (
      <div class="mt-3">
        <button
          type="button"
          class="btn btn-dark"
          onClick={change}
        >Change region</button>
      </div>
    )
  }

  return {
    RegionColumnsCore,
    RegionColumnsDropdown,
    RegionColumnsReset
  }
}


