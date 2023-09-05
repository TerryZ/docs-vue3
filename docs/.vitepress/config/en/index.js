export default {
  title: 'Vue3 components',
  description: 'Vue3 components documentation and examples',
  themeConfig: {
    siteTitle: 'Vue3 components',
    outline: [2, 3],
    // Social Icons
    socialLinks: [
      { icon: "github", link: "https://github.com/TerryZ" }
    ],
    // Navbar Link
    nav: [
      { text: 'Vue 2 components', link: 'https://terryz.github.io/docs-vue/' }
    ],
    // Sidebar
    sidebar: [
      {
        text: 'Start',
        collapsible: false,
        items: [
          { text: "Overview", link: '/home/' }
        ]
      },
      {
        text: "Components",
        collapsible: false,
        items: [
          { text: "v-page", link: "/page/" },
          { text: "v-dropdown", link: "/dropdown/" },
          { text: "v-region", link: "/region/" },
          { text: "v-selectpage", link: "/selectpage/" }
        ]
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present <a href="https://github.com/TerryZ"><b>Terry Zeng</b></a>'
    },
    docFooter: {
      prev: 'Previous page',
      next: 'Next page',
    },
    returnToTopLabel: 'Return to top',
    outlineTitle: 'On this page',
    darkModeSwitchLabel: 'Appearance',
    sidebarMenuLabel: 'Menu',
    lastUpdatedText: 'Last updated'
  }
}
