export default {
  title: 'Vue3 components',
  description: 'Vue3 组件集文档与实例',
  themeConfig: {
    siteTitle: 'Vue3 components',
    outline: [2, 3],
    // Social Icons
    socialLinks: [
      { icon: "github", link: "https://github.com/TerryZ" }
    ],
    // Navbar Link
    nav: [
      { text: 'Vue 2 components', link: 'https://terryz.github.io/vue/' }
    ],
    // Sidebar
    sidebar: [
      {
        text: '开始',
        collapsible: false,
        items: [
          { text: "概述", link: '/cn/home/' }
        ]
      },
      {
        text: "组件集",
        collapsible: false,
        items: [
          { text: "v-page", link: "/cn/page/" }
        ]
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present <a href="https://github.com/TerryZ"><b>Terry Zeng</b></a>'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    returnToTopLabel: '返回顶部',
    outlineTitle: '目录',
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '菜单',
    lastUpdatedText: '更新于'
  }
}
