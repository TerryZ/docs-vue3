# Dialogs

A simple style useful dialog component collection for Vue3

[![GitHub Repo stars](https://img.shields.io/github/stars/terryz/v-dialogs?style=social)](https://github.com/TerryZ/v-dialogs) [![GitHub forks](https://img.shields.io/github/forks/terryz/v-dialogs?style=social)](https://github.com/TerryZ/v-dialogs)

Repository status

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/TerryZ/v-dialogs/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/TerryZ/v-dialogs/tree/master) [![code coverage](https://codecov.io/gh/TerryZ/v-dialogs/branch/master/graph/badge.svg?token=FmdV7kVgIp)](https://codecov.io/gh/TerryZ/v-dialogs) [![npm version](https://img.shields.io/npm/v/v-dialogs.svg)](https://www.npmjs.com/package/v-dialogs) [![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://mit-license.org/) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Detailed changes for each release are documented in [Changelog](https://github.com/TerryZ/v-dialogs/blob/dev/CHANGELOG.md)

If you are using [vue 2.x](https://v2.vuejs.org/v2/guide/) version, please use [v-dialogs 2.x](https://github.com/TerryZ/v-dialogs/tree/dev-vue-2) version instead

## Installation

Install `v-dialogs` component in to your project

::: code-group

```sh [npm]
npm i v-dialogs
```

```sh [yarn]
yarn add v-dialogs
```

```sh [pnpm]
pnpm add v-dialogs
```

:::

## Application scenario

- **Alert** Interactive dialog boxes, for notifications that require explicit feedback from the user
- **Modal** Modal container dialog, It is displayed at the center of the screen
- **Drawer** Another modal container dialog, It is displayed at the edge of the screen, and it is the better choice for quickly viewing details
- **Message** Silent message notification, displayed in the vertical center area of ​​the screen
- **Toast** Silent message notification, displayed in the corner of the screen
- **Mask** A screen mask that blocks user actions

## Built-in language

Language built into the component

| Language | Language code |
| --- | --- |
| Chinese | cn |
| English | en |
| Portuguese | pt |
| Japanese | jp |
| Turkish | tr |

## Globally instance

`v-dialogs` also provides a globally instance to open dialogs, you can use it in any component

The default instance name is `$dlg`

```js-vue
import { createApp } from 'vue'
import dialogs from 'v-dialogs'
import App from 'App.vue'

createApp(App).use(dialogs).mount('#app')
```

> The global instance are only supported as a feature and are not recommended for use

### Option API

```js-vue
export default {
  mounted () {
    this.$dlg.message('Saved successfully!')
  }
}
```

### Composition API

```js-vue
import { getCurrentInstance } from 'vue'

// const $dlg = getCurrentInstance().appContext.config.globalProperties.$dlg
const $dlg = getCurrentInstance().proxy.$dlg

$dlg.message('Saved successfully!')
```

## Modules

- [Alert](./alert)
- [Modal](./modal)
- [Drawer](./drawer)
- [Message](./message)
- [Toast](./toast)
- [Mask](./mask)
