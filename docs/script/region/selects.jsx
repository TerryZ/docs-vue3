import {
  RegionSelects,
  RegionFullSelects
} from 'v-region'
import { useDataChange } from '../base/data'
import { useRegionChange, valuesHenan } from './data'

export function useRegionSelectsExamples (lang) {
  const { dataValue, dataModel, change } = useDataChange()
  const { values, reset } = useRegionChange()

  function RegionSelectsProvince () {
    return <RegionSelects city={false} language={lang.value} />
  }
  function RegionSelectsCity () {
    return <RegionSelects area={false} language={lang.value} />
  }
  function RegionSelectsArea () {
    return <RegionSelects language={lang.value} />
  }
  function RegionSelectsInit () {
    return (
      <div>
        <RegionFullSelects v-model={values.value} language={lang.value} />
        <div class="d-flex gap-3 mt-3">
          <button
            class="btn btn-dark"
            onClick={() => { values.value = valuesHenan }}
          >
            Change region
          </button>
          <button
            class="btn btn-dark"
            onClick={reset}
          >
            Clear
          </button>
        </div>
      </div>
    )
  }
  function RegionSelectsDisabled () {
    return <RegionFullSelects v-model={values.value} language={lang.value} disabled />
  }
  return {
    RegionSelectsProvince,
    RegionSelectsCity,
    RegionSelectsArea,
    RegionSelectsInit,
    RegionSelectsDisabled
  }
}