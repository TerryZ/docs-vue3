import { ref, computed } from 'vue'

import {
  SelectMenuDropdown,
  SelectMenuTrigger,
  SelectMenuBody,
  SelectMenuHeader,
  SelectMenuDivider,
  SelectMenuInput,
  SelectMenuGroup,
  SelectMenuGroupItem,
  SelectMenuRadioGroup,
  SelectMenuRadioItem,
  SelectMenuSection
} from 'v-selectmenu'

// import { createDropdownWithTrigger } from './base'
import { eastTeams, westTeams } from '../data/nba-teams'

export function MenuGroupWithSearch () {
  const search = ref('')
  const activeGroup = ref('')
  const selected = ref('')

  const filteredEastTeams = computed(() => {
    if (!search.value) return eastTeams
    return eastTeams.filter(val => val.name.includes(search.value))
  })
  const filteredWestTeams = computed(() => {
    if (!search.value) return westTeams
    return westTeams.filter(val => val.name.includes(search.value))
  })

  function groupChange (group) {
    activeGroup.value = group
  }
  function handleSearch (value) {
    search.value = value
  }
  function handleRadioGroupChange (value) {
    selected.value = value
  }
  function EastTeamList () {
    return filteredEastTeams.value.map(item => (
      <SelectMenuRadioItem
        key={item.id}
        value={item.name}
      >{item.name}</SelectMenuRadioItem>
    ))
  }
  function WestTeamList () {
    return filteredWestTeams.value.map(item => (
      <SelectMenuRadioItem
        key={item.id}
        value={item.name}
      >{item.name}</SelectMenuRadioItem>
    ))
  }

  return (
    <SelectMenuDropdown>{{
      trigger: () => (
        <SelectMenuTrigger>{selected.value || 'Open'}</SelectMenuTrigger>
      ),
      default: () => (
        <SelectMenuBody>
          <SelectMenuHeader>Select your NBA team</SelectMenuHeader>
          <SelectMenuInput onChange={handleSearch} />
          <SelectMenuDivider />
          <SelectMenuRadioGroup onChange={handleRadioGroupChange}>
            <SelectMenuGroup onChange={groupChange}>
              <SelectMenuGroupItem
                name="east"
                title="East"
              >
                <SelectMenuSection style="max-height: 250px;">
                  <EastTeamList />
                </SelectMenuSection>
              </SelectMenuGroupItem>
              <SelectMenuGroupItem
                name="west"
                title="West"
              >
                <SelectMenuSection style="max-height: 250px;">
                  <WestTeamList />
                </SelectMenuSection>
              </SelectMenuGroupItem>
            </SelectMenuGroup>
          </SelectMenuRadioGroup>
        </SelectMenuBody>
      )
    }}</SelectMenuDropdown>
  )
}