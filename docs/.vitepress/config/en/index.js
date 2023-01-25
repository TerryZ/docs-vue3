export default {
  title: 'Vue3 components',
  description: 'Vue3 components documentation and examples',
  themeConfig: {
    siteTitle: 'Vue3 components',
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
        text: 'Start',
        collapsible: false,
        items: [
          { text: "Overview", link: '/en/home/' }
        ]
      },
      {
        text: "Components",
        collapsible: false,
        items: [
          { text: "v-page", link: "/en/page/" }
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
