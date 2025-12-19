import { ref } from 'vue'
import { RegionDropdown, RegionGroup, RegionColumns, RegionCityPicker } from 'v-region'
import { resultText } from './data'
import { useDataChange } from '../base/data'

function regionCustomTrigger (RegionComponent, lang) {
  const { dataModel, change } = useDataChange()

  const slots = {
    trigger: ({ visible }) => (
      <button
        type="button"
        class="btn btn-primary"
      >
        data:{resultText(dataModel.value)},
        visible: {String(visible.value)}
      </button>
    ),
    default: () => <RegionComponent language={lang.value} onChange={change} />
  }
  return <RegionDropdown v-slots={slots} />
}
export function useRegionCustomTrigger (lang) {
  function RegionGroupCustomTrigger () {
    return regionCustomTrigger(RegionGroup, lang)
  }
  function RegionColumnsCustomTrigger () {
    return regionCustomTrigger(RegionColumns, lang)
  }
  function RegionCityPickerCustomTrigger () {
    return regionCustomTrigger(RegionCityPicker, lang)
  }
  return {
    RegionGroupCustomTrigger,
    RegionColumnsCustomTrigger,
    RegionCityPickerCustomTrigger
  }
}

