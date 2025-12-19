# 组合

<script setup>
import MenuSelection from '@/views/select-menu/MenuSelection.vue'
import MenuGroupWithSearch from '@/views/select-menu/MenuGroupWithSearch.vue'
import MenuMultipleLevelWithSelection from '@/views/select-menu/MenuMultipleLevelWithSelection.vue'
import ChatInput from '@/views/select-menu/ChatInput.vue'
import UserProfileForm from '@/views/select-menu/UserProfileForm.vue'
</script>

`SelectMenu` 提供的各种各样的组件组合应用场景实例

## 多种类菜单项

菜单项、单项选择与多项选择的组合应用

<MenuSelection />

::: code-group

```vue-html
<SelectMenuDropdown>
  <template #trigger>
    <SelectMenuTrigger rounded="pill">Ordering</SelectMenuTrigger>
  </template>
  <SelectMenuBody @action="handleAction">
    <SelectMenuRow>
      <SelectMenuColumn style="width: 180px;">
        <SelectMenuHeader>Combo meals</SelectMenuHeader>
        <SelectMenuItem action="Chicken fried rice">
          Chicken fried rice
        </SelectMenuItem>
        <SelectMenuItem action="Big Mac burger">
          Big Mac burger
        </SelectMenuItem>
        <SelectMenuItem action="Hot Dog sandwich">
          Hot Dog sandwich
        </SelectMenuItem>
      </SelectMenuColumn>
      <SelectMenuDivider :horizontal="false" />
      <SelectMenuColumn style="width: 250px;">
        <SelectMenuHeader>Optional meals</SelectMenuHeader>
        <SelectMenuSubHeader>
          Main courses
          <template #append>
            <SelectMenuButton
              @click.stop="radio = ''"
              size="mini"
            >
              Clear
            </SelectMenuButton>
          </template>
        </SelectMenuSubHeader>
        <SelectMenuRadioGroup
          v-model="radio"
          :hide-on-selection="false"
          @change="handleSelection"
        >
          <SelectMenuRadioItem value="Fried Noodles">
            Fried Noodles
          </SelectMenuRadioItem>
          <SelectMenuRadioItem value="Fried Rice">
            Fried Rice
          </SelectMenuRadioItem>
          <SelectMenuRadioItem value="Hamburger">
            Hamburger
          </SelectMenuRadioItem>
        </SelectMenuRadioGroup>
        <SelectMenuSubHeader>
          Side dishes
          <template #append>
            <SelectMenuButton
              @click.stop="checkbox = []"
              size="mini"
            >
            Clear
            </SelectMenuButton>
          </template>
        </SelectMenuSubHeader>
        <SelectMenuCheckboxGroup
          v-model="checkbox"
          @change="handleSelection"
        >
          <SelectMenuCheckboxItem value="Fruit Salad">
            Fruit Salad
          </SelectMenuCheckboxItem>
          <SelectMenuCheckboxItem value="Fried Egg">
            Fried Egg
          </SelectMenuCheckboxItem>
          <SelectMenuCheckboxItem value="Baked Potato">
            Baked Potato
          </SelectMenuCheckboxItem>
        </SelectMenuCheckboxGroup>
      </SelectMenuColumn>
    </SelectMenuRow>
  </SelectMenuBody>
</SelectMenuDropdown>
```

```js
import { ref } from 'vue'
import {
  SelectMenuDropdown,
  SelectMenuTrigger,
  SelectMenuBody,
  SelectMenuHeader,
  SelectMenuSubHeader,
  SelectMenuDivider,
  SelectMenuButton,
  SelectMenuItem,
  SelectMenuCheckboxGroup,
  SelectMenuCheckboxItem,
  SelectMenuRadioGroup,
  SelectMenuRadioItem,
  SelectMenuRow,
  SelectMenuColumn
} from 'v-selectmenu'

const radio = ref('')
const checkbox = ref([])
const combo = ref('')

function handleAction (action) {
  checkbox.value = []
  radio.value = ''
  combo.value = action
}
function handleSelection () {
  if (radio.value || checkbox.value.length) {
    combo.value = ''
  }
}
```

:::


## 多分组搜索选择

组合了文本搜索、多分组与单项选择等功能的应用场景

<MenuGroupWithSearch />

::: code-group

```vue-html
<SelectMenuDropdown>
  <template #trigger>
    <SelectMenuTrigger>{{ selected || 'Open' }}</SelectMenuTrigger>
  </template>

  <SelectMenuBody>
    <SelectMenuSubHeader>NBA teams</SelectMenuSubHeader>
    <SelectMenuSearch v-model="search" />
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
  type="button"
  @click="selected = ''"
>Clear selection</button>
```

```js
import { ref, computed } from 'vue'

import {
  SelectMenuDropdown,
  SelectMenuTrigger,
  SelectMenuBody,
  SelectMenuDivider,
  SelectMenuInput,
  SelectMenuGroup,
  SelectMenuGroupItem,
  SelectMenuRadioGroup,
  SelectMenuRadioItem,
  SelectMenuSection
} from 'v-selectmenu'

import { eastTeams, westTeams } from './data'

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
```

```js [data source]
export const eastTeams = [
  {id:1 ,name:'Chicago Bulls'},
  {id:2 ,name:'Cleveland Cavaliers'},
  {id:3 ,name:'Detroit Pistons'},
  ...
]
export const westTeams = [
  {id:16,name:'Denver Nuggets'},
  {id:17,name:'Minnesota Timberwolves'},
  {id:18,name:'Oklahoma City Thunder'},
  {id:19,name:'Portland Trail Blazers'},
  ...
]
```

:::

## 可选择的多级菜单

<MenuMultipleLevelWithSelection />

菜单里使用的图标来自于 [Bootstrap Icons](https://icons.getbootstrap.com)

::: code-group

```vue-html
<SelectMenuDropdown>
  <template #trigger>
    <SelectMenuTrigger rounded="pill">User Setting</SelectMenuTrigger>
  </template>

  <SelectMenuBody>
    <SelectMenuSubHeader>Account: Terry</SelectMenuSubHeader>
    <SelectMenuDivider />
    <SelectMenuItem>
      <template #prepend>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
        </svg>
      </template>
      Notifications
    </SelectMenuItem>
    <SelectMenuChildLevel>
      <template #trigger>
        <SelectMenuItem>
          <template #prepend>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-translate" viewBox="0 0 16 16">
              <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z"/>
              <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31"/>
            </svg>
          </template>
          Language
        </SelectMenuItem>
      </template>

      <SelectMenuRadioGroup v-model="language">
        <SelectMenuRadioItem value="Simplified Chinese">Simplified Chinese</SelectMenuRadioItem>
        <SelectMenuRadioItem value="English">English</SelectMenuRadioItem>
        <SelectMenuRadioItem value="German - Deutsch">German - Deutsch</SelectMenuRadioItem>
        <SelectMenuRadioItem value="Dutch - Nederlands">Dutch - Nederlands</SelectMenuRadioItem>
        <SelectMenuRadioItem value="Portuguese - Portugal">Portuguese - Portugal</SelectMenuRadioItem>
      </SelectMenuRadioGroup>
    </SelectMenuChildLevel>
    <SelectMenuChildLevel>
      <template #trigger>
        <SelectMenuItem>
          <template #prepend>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightbulb" viewBox="0 0 16 16">
              <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1"/>
            </svg>
          </template>
          Interests
        </SelectMenuItem>
      </template>

      <SelectMenuCheckboxGroup v-model="interests">
        <SelectMenuCheckboxItem value="Social News">Social News</SelectMenuCheckboxItem>
        <SelectMenuCheckboxItem value="Events">Events</SelectMenuCheckboxItem>
        <SelectMenuCheckboxItem value="Video games">Video games</SelectMenuCheckboxItem>
        <SelectMenuCheckboxItem value="Jobs">Jobs</SelectMenuCheckboxItem>
      </SelectMenuCheckboxGroup>
    </SelectMenuChildLevel>

    <SelectMenuItem>
      <template #prepend>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
          <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
        </svg>
      </template>
      Helps
    </SelectMenuItem>
    <SelectMenuItem>
      <template #prepend>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
          <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
          <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
        </svg>
      </template>
      More settings
    </SelectMenuItem>
    <SelectMenuDivider />
    <SelectMenuItem>
      <template #prepend>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
          <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
        </svg>
      </template>
      Logout
    </SelectMenuItem>
  </SelectMenuBody>
</SelectMenuDropdown>
```

```js
import { ref } from 'vue'

import {
  SelectMenuDropdown,
  SelectMenuTrigger,
  SelectMenuBody,
  SelectMenuSubHeader,
  SelectMenuDivider,
  SelectMenuItem,
  SelectMenuChildLevel,
  SelectMenuRadioGroup,
  SelectMenuRadioItem,
  SelectMenuCheckboxGroup,
  SelectMenuCheckboxItem
} from 'v-selectmenu'

const interests = ref(['Jobs', 'Video games'])
const language = ref('English')
```

:::

## 发布评论

一个评论内容输入模块

<ChatInput />

::: code-group

```vue-html
<SelectMenuDropdown>
  <template #trigger>
    <SelectMenuTrigger rounded="pill" >Post a comment</SelectMenuTrigger>
  </template>

  <SelectMenuBody>
    <SelectMenuBlock style="width: 350px;">
      <template #prepend>
        <svg height="36px" width="36px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.001 512.001" xml:space="preserve" fill="#000000">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <path style="fill:#FFA055;" d="M213.463,508.462c-4.091-0.687-8.153-1.464-12.176-2.343 C205.311,506.997,209.371,507.777,213.463,508.462z"></path> <path style="fill:#FFA055;" d="M218.486,509.256c-1.085-0.16-2.167-0.327-3.247-0.501 C216.321,508.929,217.402,509.097,218.486,509.256z"></path> <path style="fill:#FFA055;" d="M310.714,506.119c-4.023,0.879-8.085,1.656-12.176,2.343 C302.63,507.777,306.69,506.997,310.714,506.119z"></path> <path style="fill:#FFA055;" d="M231.191,510.8c-0.776-0.075-1.552-0.15-2.327-0.231C229.639,510.65,230.415,510.725,231.191,510.8z "></path> <path style="fill:#FFA055;" d="M243.874,511.706c-0.485-0.023-0.97-0.04-1.454-0.065 C242.905,511.666,243.389,511.685,243.874,511.706z"></path> <path style="fill:#FFA055;" d="M250.122,511.926c-0.563-0.013-1.125-0.03-1.687-0.046 C248.997,511.896,249.559,511.913,250.122,511.926z"></path> <path style="fill:#FFA055;" d="M236.875,511.289c-0.641-0.048-1.28-0.104-1.919-0.155 C235.595,511.186,236.234,511.242,236.875,511.289z"></path> <path style="fill:#FFA055;" d="M296.761,508.757c-1.08,0.174-2.162,0.341-3.247,0.501 C294.599,509.097,295.681,508.929,296.761,508.757z"></path> <path style="fill:#FFA055;" d="M225.017,510.128c-1.293-0.157-2.583-0.325-3.87-0.501 C222.434,509.803,223.723,509.973,225.017,510.128z"></path> <path style="fill:#FFA055;" d="M269.581,511.641c-0.483,0.025-0.969,0.043-1.454,0.065 C268.612,511.685,269.097,511.666,269.581,511.641z"></path> <path style="fill:#FFA055;" d="M178.286,499.953c-0.562-0.179-1.12-0.369-1.681-0.551c-0.574-0.187-1.149-0.373-1.72-0.563 c-1.923-0.64-3.84-1.293-5.741-1.978v-0.026c-17.453-6.309-34.029-14.451-49.489-24.203l6.525-97.875 c1.08-16.198,12.71-29.745,28.557-33.267l39.624-8.805l-2.36-3.541L210.286,320v-18.286l-22.726-9.09 c-13.885-5.553-22.989-19.001-22.989-33.955v-20.954c-10.099,0-18.286-8.187-18.286-18.286c0-6.501,3.402-12.194,8.513-15.437 l-4.493-44.925c-1.335-13.345,4.658-25.592,14.558-32.977c1.147-10.178,5.873-19.237,15.707-26.281 c25.523-18.286,185.143-26.666,185.143-26.666l-11.329,54.461c-0.381,1.382-0.845,2.706-1.346,4.005 c6.265,7.29,9.697,17.038,8.655,27.459l-4.493,44.925c5.111,3.242,8.513,8.936,8.513,15.437c0,10.098-8.186,18.286-18.286,18.286 v20.954c0,14.954-9.104,28.402-22.989,33.955l-22.726,9.09V320l18.286,9.143l-2.359,3.539l39.624,8.805 c15.848,3.522,27.477,17.071,28.557,33.267l6.525,97.875c-15.462,9.752-32.038,17.895-49.489,24.203v0.026 c-1.902,0.686-3.818,1.339-5.741,1.978c-0.571,0.191-1.146,0.376-1.72,0.563c-0.561,0.183-1.119,0.373-1.681,0.551v-0.008 c-7.495,2.392-15.137,4.455-22.914,6.157C425.85,481.007,512.001,378.573,512.001,256c0-141.385-114.615-256-256-256 s-256,114.615-256,256c0,122.573,86.151,225.007,201.2,250.101c-7.777-1.702-15.419-3.765-22.914-6.157V499.953z"></path> <path style="fill:#FFA055;" d="M290.854,509.629c-1.287,0.176-2.577,0.344-3.87,0.501 C288.278,509.973,289.567,509.803,290.854,509.629z"></path> <path style="fill:#FFA055;" d="M277.046,511.134c-0.64,0.051-1.278,0.109-1.919,0.155 C275.767,511.242,276.406,511.186,277.046,511.134z"></path> <path style="fill:#FFA055;" d="M283.137,510.569c-0.774,0.081-1.551,0.155-2.327,0.231 C281.586,510.725,282.362,510.65,283.137,510.569z"></path> <path style="fill:#FFA055;" d="M261.879,511.926c0.563-0.013,1.125-0.03,1.687-0.046 C263.004,511.896,262.442,511.913,261.879,511.926z"></path>
            </g>
            <g>
              <path style="fill:#B4EBBE;" d="M268.127,511.706c0.485-0.023,0.97-0.04,1.454-0.065c1.854-0.097,3.703-0.215,5.546-0.352 c0.641-0.048,1.28-0.104,1.919-0.155c1.257-0.103,2.512-0.214,3.763-0.334c0.776-0.075,1.552-0.15,2.327-0.231 c1.286-0.136,2.568-0.286,3.849-0.44c1.293-0.157,2.583-0.325,3.87-0.501c0.888-0.121,1.775-0.241,2.661-0.373 c1.085-0.16,2.167-0.327,3.247-0.501c0.593-0.095,1.185-0.194,1.777-0.294c4.091-0.687,8.153-1.464,12.176-2.343 c0.029-0.006,0.057-0.013,0.087-0.018c7.777-1.702,15.419-3.765,22.914-6.157v-91.65c0-10.991,4.281-21.33,12.049-29.098 l28.568-28.563c2.237,2.107,4.246,4.439,5.89,7.038l-27.993,27.99c-6.045,6.045-9.37,14.08-9.37,22.634v88.538 c17.453-6.309,34.029-14.451,49.489-24.203l-6.525-97.875c-1.08-16.198-12.71-29.745-28.557-33.267l-39.624-8.805L289.62,374.72 c-3.2,4.801-9.993,5.473-14.072,1.393l-14.976-14.97v150.741c-1.527,0.026-3.038,0.117-4.571,0.117c1.966,0,3.923-0.03,5.879-0.074 c0.563-0.013,1.125-0.03,1.687-0.046C265.09,511.835,266.61,511.778,268.127,511.706z"></path> <path style="fill:#B4EBBE;" d="M337.117,498.838c-0.573,0.191-1.146,0.377-1.72,0.563 C335.97,499.215,336.545,499.029,337.117,498.838z"></path> <path style="fill:#B4EBBE;" d="M176.605,499.402c-0.574-0.186-1.147-0.374-1.72-0.563 C175.457,499.029,176.031,499.215,176.605,499.402z"></path> <path style="fill:#B4EBBE;" d="M251.429,361.143l-14.971,14.971c-4.08,4.08-10.872,3.407-14.072-1.393l-28.025-42.039 l-39.624,8.805c-15.848,3.522-27.477,17.071-28.557,33.267l-6.525,97.875c15.462,9.752,32.038,17.895,49.489,24.203v-88.538 c0-8.553-3.326-16.59-9.37-22.634l-27.993-27.99c1.643-2.599,3.654-4.93,5.89-7.038l28.568,28.563 c7.768,7.768,12.049,18.107,12.049,29.098v91.65c7.495,2.392,15.137,4.455,22.914,6.157c0.029,0.006,0.058,0.013,0.087,0.018 c4.023,0.879,8.085,1.656,12.176,2.343c0.592,0.099,1.184,0.199,1.777,0.294c1.08,0.174,2.162,0.341,3.247,0.501 c0.885,0.13,1.773,0.251,2.661,0.373c1.287,0.176,2.577,0.344,3.87,0.501c1.28,0.155,2.562,0.304,3.849,0.44 c0.774,0.081,1.551,0.155,2.327,0.231c1.251,0.12,2.506,0.232,3.763,0.334c0.64,0.051,1.278,0.109,1.919,0.155 c1.843,0.137,3.691,0.255,5.546,0.352c0.483,0.025,0.969,0.043,1.454,0.065c1.517,0.072,3.038,0.129,4.561,0.174 c0.562,0.016,1.125,0.033,1.687,0.046c1.954,0.045,3.913,0.074,5.879,0.074c-1.534,0-3.045-0.089-4.571-0.117V361.143H251.429z"></path>
            </g>
            <path style="fill:#EBC89B;" d="M269.583,314.567c-8.719,3.488-18.446,3.488-27.165,0l-32.133-12.853V320l45.714,36.571L301.715,320 v-18.286L269.583,314.567z"></path> <g> <path style="fill:#968687;" d="M318.748,155.429h10.395c10.099,0,18.286,8.187,18.286,18.286v27.429 c3.598,0,6.943,1.054,9.773,2.849l4.493-44.925c1.042-10.422-2.391-20.168-8.655-27.459 C347.377,146.251,334.231,155.429,318.748,155.429z"></path> <path style="fill:#968687;" d="M164.572,173.714c0-10.098,8.186-18.286,18.286-18.286h5.911c-11.833,0-21.666-8.501-23.767-19.723 c-0.114-0.605-0.21-1.215-0.28-1.833c-0.014-0.122-0.024-0.246-0.035-0.369c-0.072-0.747-0.114-1.504-0.114-2.27l0,0l0,0l0,0 c0,0,0-0.002,0-0.003c0-1.742,0.103-3.453,0.293-5.138c-9.899,7.385-15.893,19.632-14.558,32.977l4.493,44.925 c2.829-1.794,6.174-2.849,9.773-2.849L164.572,173.714L164.572,173.714z"></path> </g> <path style="fill:#F5DCAA;" d="M269.583,314.567l32.131-12.853l22.726-9.09c13.885-5.553,22.989-19.001,22.989-33.955v-20.954 c10.099,0,18.286-8.187,18.286-18.286c0-6.501-3.402-12.194-8.513-15.437c-2.829-1.794-6.174-2.849-9.773-2.849v-27.429 c0-10.098-8.186-18.286-18.286-18.286h-10.395H201.143h-12.375h-5.911c-10.099,0-18.286,8.187-18.286,18.286v27.429 c-3.598,0-6.943,1.054-9.773,2.849c-5.111,3.242-8.513,8.936-8.513,15.437c0,10.098,8.186,18.286,18.286,18.286v20.954 c0,14.954,9.104,28.402,22.989,33.955l22.726,9.09l32.131,12.853C251.138,318.055,260.863,318.055,269.583,314.567z M227.031,263.312c2.277-4.509,7.777-6.321,12.281-4.045c9.197,4.625,24.178,4.625,33.375,0c4.531-2.295,10.009-0.464,12.281,4.045 s0.459,10.009-4.049,12.277c-7.205,3.634-15.821,5.554-24.919,5.554c-9.098,0-17.714-1.92-24.92-5.553 C226.572,273.321,224.759,267.822,227.031,263.312z M301.715,201.143c5.049,0,9.143,4.094,9.143,9.143v9.143 c0,5.049-4.094,9.143-9.143,9.143s-9.143-4.094-9.143-9.143v-9.143C292.572,205.237,296.666,201.143,301.715,201.143z M201.143,219.429v-9.143c0-5.049,4.094-9.143,9.143-9.143c5.049,0,9.143,4.094,9.143,9.143v9.143c0,5.049-4.094,9.143-9.143,9.143 C205.237,228.571,201.143,224.478,201.143,219.429z"></path> <g> <path style="fill:#464655;" d="M219.429,219.429v-9.143c0-5.049-4.094-9.143-9.143-9.143c-5.049,0-9.143,4.094-9.143,9.143v9.143 c0,5.049,4.094,9.143,9.143,9.143C215.335,228.571,219.429,224.478,219.429,219.429z"></path> <path style="fill:#464655;" d="M301.715,228.571c5.049,0,9.143-4.094,9.143-9.143v-9.143c0-5.049-4.094-9.143-9.143-9.143 s-9.143,4.094-9.143,9.143v9.143C292.572,224.478,296.666,228.571,301.715,228.571z"></path> <path style="fill:#464655;" d="M265.429,124.571c0,0,17.674-8.215,32.822-18.714c-9.573,1.882-20.376,3.338-32.536,4.143 c-61.918,4.097-96.286,5.714-100.619,26.213c-0.035-0.167-0.062-0.338-0.094-0.507c2.101,11.224,11.934,19.723,23.767,19.723 h12.375h117.605c15.483,0,28.629-9.177,34.29-23.821c0.502-1.298,0.967-2.623,1.346-4.005l11.33-54.461 C365.715,73.143,339.715,121.143,265.429,124.571z"></path> <path style="fill:#464655;" d="M164.723,133.872c-0.014-0.122-0.024-0.247-0.035-0.369 C164.698,133.625,164.709,133.749,164.723,133.872z"></path> </g> <path style="fill:#5C5D6E;" d="M164.572,131.232L164.572,131.232c0,0.767,0.042,1.523,0.114,2.271 c0.011,0.122,0.022,0.247,0.035,0.369c0.069,0.619,0.166,1.229,0.28,1.833c0.032,0.169,0.058,0.339,0.094,0.507 c4.334-20.498,38.702-22.114,100.619-26.213c12.16-0.805,22.963-2.261,32.536-4.143c-15.147,10.499-32.822,18.714-32.822,18.714 c74.286-3.429,100.286-51.429,100.286-51.429s-159.619,8.381-185.143,26.666c-9.833,7.045-14.56,16.103-15.707,26.281 c-0.19,1.685-0.293,3.397-0.293,5.138C164.572,131.23,164.572,131.231,164.572,131.232z"></path> <g> <path style="fill:#9BDCB4;" d="M260.572,361.143l14.971,14.971c4.08,4.08,10.872,3.407,14.072-1.393l28.025-42.039l2.36-3.539 L301.715,320l-45.714,36.571L210.286,320l-18.286,9.143l2.359,3.539l28.025,42.039c3.2,4.801,9.993,5.473,14.072,1.393 l14.973-14.971v150.741c1.527,0.026,3.038,0.117,4.571,0.117c1.534,0,3.045-0.089,4.571-0.117V361.143z"></path> <path style="fill:#9BDCB4;" d="M335.396,499.402c0.574-0.186,1.147-0.374,1.72-0.563c1.923-0.64,3.84-1.293,5.741-1.978v-0.026 v-88.538c0-8.553,3.326-16.59,9.37-22.634l27.993-27.99c-1.643-2.599-3.654-4.93-5.89-7.038l-28.568,28.563 c-7.766,7.767-12.047,18.106-12.047,29.097v91.65v0.008C334.277,499.774,334.835,499.584,335.396,499.402z"></path> <path style="fill:#9BDCB4;" d="M174.884,498.838c0.573,0.191,1.146,0.377,1.72,0.563c0.561,0.183,1.119,0.373,1.681,0.551v-0.008 v-91.65c0-10.991-4.281-21.33-12.049-29.098l-28.568-28.563c-2.237,2.107-4.246,4.439-5.89,7.038l27.993,27.99 c6.045,6.045,9.37,14.08,9.37,22.634v88.538v0.026C171.045,497.545,172.962,498.199,174.884,498.838z"></path> </g> <path style="fill:#DCB491;" d="M231.081,275.59c7.206,3.633,15.822,5.553,24.92,5.553c9.098,0,17.714-1.92,24.92-5.553 c4.509-2.267,6.321-7.768,4.049-12.277c-2.272-4.509-7.75-6.339-12.281-4.045c-9.197,4.625-24.178,4.625-33.375,0 c-4.504-2.277-10.005-0.464-12.281,4.045C224.759,267.822,226.572,273.321,231.081,275.59z"></path>
          </g>
        </svg>
      </template>

      <SelectMenuInput
        placeholder="Type a message..."
        v-model="message"
        :disabled="loading"
      />

      <template #append>
        <SelectMenuButton
          rounded="circle"
          :disabled="!!!message"
          :loading="loading"
          @click="handleClick"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send b-svg-icon" viewBox="0 0 16 16">
            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
          </svg>
        </SelectMenuButton>
      </template>
    </SelectMenuBlock>
    <SelectMenuSection v-if="messageList.length">
      <SelectMenuDivider />
      <div class="d-flex flex-column gap-2 py-2">
        <div
          class="mx-3 d-flex align-items-center"
          v-for="item in messageList"
        >
          <div class="text-body-tertiary font-monospace lh-1">
            {{ item.time }}
          </div>
          <div class="mx-2 lh-1">{{ item.message }}</div>
        </div>
      </div>
    </SelectMenuSection>
  </SelectMenuBody>
</SelectMenuDropdown>
```

```js
import { ref } from 'vue'
import {
  SelectMenuDropdown,
  SelectMenuTrigger,
  SelectMenuBody,
  SelectMenuSection,
  SelectMenuDivider,
  SelectMenuBlock,
  SelectMenuInput,
  SelectMenuButton
} from 'v-selectmenu'

const message = ref('')
const loading = ref(false)
const messageList = ref([])

function handleClick () {
  loading.value = true
  setTimeout(() => {
    messageList.value.push({
      time: new Date().toLocaleTimeString('zh-CN'),
      message: message.value
    })
    message.value = ''
    loading.value = false
  }, 2000)
}
```

:::

## 表单

一个内容输入表单

<UserProfileForm />

::: code-group

```vue-html
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
        <SelectMenuButton :loading="loading" @click="save(close)">
          Save
        </SelectMenuButton>
        <SelectMenuButton :disabled="loading" @click="clear">
          Clear
        </SelectMenuButton>
      </SelectMenuBlock>
    </SelectMenuBody>
  </template>
</SelectMenuDropdown>
```

```js
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
```

:::
