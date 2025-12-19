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
          {
            text: "v-region",
            link: "/region/",
            collapsed: true,
            items: [
              { text: "Select", link: "/region/select" },
              { text: "Group", link: "/region/group" },
              { text: "Column", link: "/region/column" },
              { text: "CityPicker", link: "/region/city-picker" },
              { text: "Text", link: "/region/text" }
            ]
          },
          { text: "v-selectpage", link: "/select-page/" },
          {
            text: "v-dialogs",
            link: "/dialog/",
            collapsed: true,
            items: [
              { text: "Alert", link: "/dialog/alert" },
              { text: "Modal", link: "/dialog/modal" },
              { text: "Drawer", link: "/dialog/drawer" },
              { text: "Message", link: "/dialog/message" },
              { text: "Toast", link: "/dialog/toast" },
              { text: "Mask", link: "/dialog/mask" },
            ]
          },
          {
            text: "v-layouts",
            link: "/layout/",
            collapsed: true,
            items: [
              { text: "Admin", link: "/layout/admin" },
              { text: "Content", link: "/layout/content" },
              { text: "PanelGroup", link: "/layout/panel-group" }
            ]
          },
          {
            text: "v-selectmenu",
            link: "/select-menu/",
            collapsed: true,
            items: [
              { text: "Group", link: "/select-menu/group" },
              { text: "Selection", link: "/select-menu/selection" },
              { text: "Layout", link: "/select-menu/layout" },
              { text: "Multiple level", link: "/select-menu/multiple-level" },
              { text: "Input", link: "/select-menu/input" },
              { text: "Button", link: "/select-menu/button" },
              { text: "Combination", link: "/select-menu/combination" }
            ]
          }
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
