---
layout: home

hero:
  name: Vue 3 components
  text: The documentation and examples
  image:
    src: /logo.svg
    alt: Vue3Components
  actions:
    - theme: brand
      text: Get Started
      link: /home/
    - theme: alt
      text: View on GitHub
      link: https://github.com/TerryZ

features:
  - icon: 🔩
    title: Stand-alone
    details: All components are developed independently and can be used independently in projects
  - icon: 🍀
    title: Simplicity of style
    details: Extremely simple interface and interaction style, can be matched with most interface styles
  - icon: 🌏
    title: Internationalization Support
    details: All components support internationalization, and components provide at least two languages, Chinese and English, by default
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
