<template>
  <div class="d-flex align-items-center">
    <div class="me-4">Select your NBA team</div>
    <SelectMenuDropdown>
      <template #trigger>
        <SelectMenuTrigger>{{ selected || 'Open' }}</SelectMenuTrigger>
      </template>

      <SelectMenuBody>
        <SelectMenuSubHeader>NBA teams</SelectMenuSubHeader>
        <SelectMenuInput v-model="search" />
        <SelectMenuDivider />
        <SelectMenuRadioGroup v-model="selected">
          <SelectMenuGroup style="width: 300px;">
            <SelectMenuGroupItem
              name="east"
              title="East"
            >
              <SelectMenuSection style="max-height: 250px;">
                <SelectMenuRadioItem
                  :key="item.id"
                  :value="item.name"
                  v-for="item in filteredEastTeams"
                >
                  {{ item.name }}
                </SelectMenuRadioItem>
              </SelectMenuSection>
            </SelectMenuGroupItem>
            <SelectMenuGroupItem
              name="west"
              title="West"
            >
              <SelectMenuSection style="max-height: 250px;">
                <SelectMenuRadioItem
                  :key="item.id"
                  :value="item.name"
                  v-for="item in filteredWestTeams"
                >
                  {{ item.name }}
                </SelectMenuRadioItem>
              </SelectMenuSection>
            </SelectMenuGroupItem>
          </SelectMenuGroup>
        </SelectMenuRadioGroup>
      </SelectMenuBody>
    </SelectMenuDropdown>

    <button
      class="btn btn-link ms-3"
      type="button"
      @click="selected = ''"
    >Clear selection</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

import {
  SelectMenuDropdown,
  SelectMenuTrigger,
  SelectMenuBody,
  SelectMenuSubHeader,
  SelectMenuDivider,
  SelectMenuInput,
  SelectMenuGroup,
  SelectMenuGroupItem,
  SelectMenuRadioGroup,
  SelectMenuRadioItem,
  SelectMenuSection,
  SelectMenuButton
} from 'v-selectmenu'

import { eastTeams, westTeams } from '@/script/data/nba-teams'

const search = ref('')
const selected = ref('')

const filteredEastTeams = computed(() => {
  if (!search.value) return eastTeams
  return eastTeams.filter(val => val.name.includes(search.value))
})
const filteredWestTeams = computed(() => {
  if (!search.value) return westTeams
  return westTeams.filter(val => val.name.includes(search.value))
})
</script>
