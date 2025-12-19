import { RegionDropdown, RegionCityPicker } from 'v-region'

export function CityPickerDropdown (props) {
  return (
    <RegionDropdown>
      <RegionCityPicker {...props} />
    </RegionDropdown>
  )
}