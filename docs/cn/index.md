---
layout: home

hero:
  name: Vue 3 components
  text: 基于 Vue 3 的轻量级组件集合
  tagline: 专注于实用性与可维护性，提供清晰的 API 设计、完整的类型支持与完善的文档说明
  image:
    src: /logo.svg
    alt: Vue3Components
  actions:
    - theme: brand
      text: 开始
      link: /cn/home/
    - theme: alt
      text: 在 GitHub 上查看
      link: https://github.com/TerryZ

features:
  - icon: 📦
    title: 开箱即用
    details: 轻量组件，开箱即用，按需引入
  - icon: 🧩
    title: 设计
    details: 清晰的组件职责与 API 设计
  - icon: 🛠
    title: TypeScript
    details: 完整的 TypeScript 类型支持
  - icon: 🔩
    title: 独立使用
    details: 所有组件均独立开发，可独立应用于项目中
  - icon: 🍀
    title: 风格简洁
    details: 极其简洁的界面与交互风格，能与绝大多数的界面风格进行搭配
  - icon: 🌏
    title: 国际化支持
    details: 所有组件均支持国际化，组件默认至少提供了中文与英文两种语言
---
<style>
:root {
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #00D26A 50%, #3451B2 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
