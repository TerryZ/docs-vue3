<template>
  <div>
    <SelectMenuDropdown>
      <template #trigger>
        <SelectMenuTrigger rounded="pill" >User profile</SelectMenuTrigger>
      </template>
      <template #default="{ close }">
        <SelectMenuBody>
          <SelectMenuHeader>Profile</SelectMenuHeader>
          <SelectMenuDivider />
          <SelectMenuRow>
            <SelectMenuColumn>
              <SelectMenuSubHeader>Base</SelectMenuSubHeader>
              <SelectMenuInput placeholder="User name" v-model="profile.name" />
              <SelectMenuInput placeholder="User age" v-model="profile.age" />
            </SelectMenuColumn>
            <SelectMenuDivider :horizontal="false" />
            <SelectMenuColumn>
              <SelectMenuSubHeader>Extend</SelectMenuSubHeader>
              <SelectMenuInput placeholder="Mail" v-model="profile.mail" />
              <SelectMenuInput placeholder="Address" v-model="profile.address" />
            </SelectMenuColumn>
          </SelectMenuRow>
          <SelectMenuDivider />

          <SelectMenuInput placeholder="Remark" v-model="profile.remark" />

          <SelectMenuDivider />
          <SelectMenuBlock>
            <SelectMenuButton class="me-3" :loading="loading" @click="save(close)">
              Save
            </SelectMenuButton>
            <SelectMenuButton :disabled="loading" @click="clear">
              Clear
            </SelectMenuButton>
          </SelectMenuBlock>
        </SelectMenuBody>
      </template>
    </SelectMenuDropdown>

    <div class="mt-3 border rounded-4 shadow-sm p-3" v-if="saved">
      <h4 class="m-0 mb-3">User profile saved</h4>
      <div>Name: {{ profile.name }}</div>
      <div>Age: {{ profile.age }}</div>
      <div>Mail: {{ profile.mail }}</div>
      <div>Address: {{ profile.address }}</div>
      <div>Remark: {{ profile.remark }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  SelectMenuDropdown,
  SelectMenuTrigger,
  SelectMenuBody,
  SelectMenuHeader,
  SelectMenuSubHeader,
  SelectMenuRow,
  SelectMenuColumn,
  SelectMenuDivider,
  SelectMenuBlock,
  SelectMenuInput,
  SelectMenuButton
} from 'v-selectmenu'

const profile = ref({
  name: '',
  age: '',
  mail: '',
  address: '',
  remark: ''
})
const saved = ref(false)
const loading = ref(false)
function save (close) {
  loading.value = true
  setTimeout(() => {
    saved.value = true
    loading.value = false
    close()
  }, 2000)
}
function clear () {
  profile.value = {
    name: '',
    age: '',
    mail: '',
    address: '',
    remark: ''
  }
  saved.value = false
}
</script>
