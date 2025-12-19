import {
  RegionFullGroup,
  RegionDropdown
} from 'v-region'
import { useRegionChange } from './data'

export function useRegionGroupExamples (lang) {
  const { values, change } = useRegionChange()
  
  function RegionGroupCore () {
    return (
      <RegionFullGroup
        v-model={values.value}
        language={lang.value}
        class="border rounded-3 shadow-sm"
      />
    )
  }
  function RegionGroupDropdown () {
    return (
      <RegionDropdown>
        <RegionFullGroup
          v-model={values.value}
          language={lang.value}
          separator="-"
        />
      </RegionDropdown>
    )
  }
  function RegionGroupReset () {
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
    RegionGroupCore,
    RegionGroupDropdown,
    RegionGroupReset
  }
}


