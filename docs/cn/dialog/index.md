# Dialogs

一款适用于 Vue3 的简洁实用的对话框组件集合，

[![GitHub Repo stars](https://img.shields.io/github/stars/terryz/v-dialogs?style=social)](https://github.com/TerryZ/v-dialogs) [![GitHub forks](https://img.shields.io/github/forks/terryz/v-dialogs?style=social)](https://github.com/TerryZ/v-dialogs)

项目状态

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/TerryZ/v-dialogs/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/TerryZ/v-dialogs/tree/master) [![code coverage](https://codecov.io/gh/TerryZ/v-dialogs/branch/master/graph/badge.svg?token=FmdV7kVgIp)](https://codecov.io/gh/TerryZ/v-dialogs) [![npm version](https://img.shields.io/npm/v/v-dialogs.svg)](https://www.npmjs.com/package/v-dialogs) [![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://mit-license.org/) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

版本更新内容请访问 [Changelog](https://github.com/TerryZ/v-dialogs/blob/dev/CHANGELOG-CN.md)

如果您的项目正在使用 [vue 2.x](https://v2.vuejs.org/v2/guide/) 版本生态，请使用 [v-dialogs 2.x](https://github.com/TerryZ/v-dialogs/tree/dev-vue-2) 版本

## 安装

将 `v-dialogs` 组件安装到项目中

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

## 应用场景

- **Alert** 交互式对话框，用于需要用户明确反馈的通知
- **Modal** 模态容器对话框，显示在屏幕中央
- **Drawer** 另一种模态容器对话框，它显示在屏幕边缘，是快速查看详细信息的更好选择
- **Message** 静默消息通知，显示在屏幕垂直中心区域
- **Toast** 静默消息通知，显示在屏幕角落
- **Mask** 阻止用户操作的屏幕遮罩

## 内置语言

组件内置的语言

| 语言 | 语言代码 |
| --- | --- |
| 中文 | cn |
| 英文 | en |
| 葡萄牙文 | pt |
| 日文 | jp |
| 土耳其文 | tr |

## 全局对象

`v-dialogs` 也提供了注册全局对象的方式来打开对话框，可以在任何组件中使用它

默认的实例名为 `$dlg`

```js-vue
import { createApp } from 'vue'
import dialogs from 'v-dialogs'
import App from 'App.vue'

createApp(App).use(dialogs).mount('#app')
```

> 全局对象仅作为功能提供支持，并不建议使用

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

## 功能模块

- [Alert](./alert)
- [Modal](./modal)
- [Drawer](./drawer)
- [Message](./message)
- [Toast](./toast)
- [Mask](./mask)
