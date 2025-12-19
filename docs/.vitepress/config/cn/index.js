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
      { text: 'Vue 2 components', link: 'https://terryz.github.io/docs-vue/' }
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
          { text: "v-page", link: "/cn/page/" },
          { text: "v-dropdown", link: "/cn/dropdown/" },
          {
            text: "v-region",
            link: "/cn/region/",
            collapsed: true,
            items: [
              { text: "Select", link: "/cn/region/select" },
              { text: "Group", link: "/cn/region/group" },
              { text: "Column", link: "/cn/region/column" },
              { text: "CityPicker", link: "/cn/region/city-picker" },
              { text: "Text", link: "/cn/region/text" }
            ]
          },
          { text: "v-selectpage", link: "/cn/select-page/" },
          {
            text: "v-dialogs",
            link: "/cn/dialog/",
            collapsed: true,
            items: [
              { text: "Alert", link: "/cn/dialog/alert" },
              { text: "Modal", link: "/cn/dialog/modal" },
              { text: "Drawer", link: "/cn/dialog/drawer" },
              { text: "Message", link: "/cn/dialog/message" },
              { text: "Toast", link: "/cn/dialog/toast" },
              { text: "Mask", link: "/cn/dialog/mask" },
            ]
          },
          {
            text: "v-layouts",
            link: "/cn/layout/",
            collapsed: true,
            items: [
              { text: "Admin", link: "/cn/layout/admin" },
              { text: "Content", link: "/cn/layout/content" },
              { text: "PanelGroup", link: "/cn/layout/panel-group" }
            ]
          },
          {
            text: "v-selectmenu",
            link: "/cn/select-menu/",
            collapsed: true,
            items: [
              { text: "Group", link: "/cn/select-menu/group" },
              { text: "Selection", link: "/cn/select-menu/selection" },
              { text: "Layout", link: "/cn/select-menu/layout" },
              { text: "Multiple level", link: "/cn/select-menu/multiple-level" },
              { text: "Input", link: "/cn/select-menu/input" },
              { text: "Button", link: "/cn/select-menu/button" },
              { text: "组合", link: "/cn/select-menu/combination" }
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
      prev: '上一页',
      next: '下一页',
    },
    search: {
      options: {
        locales: {
          cn: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                displayDetails: '显示详情',
                resetButtonTitle: '清除查询条件',
                backButtonTitle: '关闭搜索',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消',
                noResultsText: '无法找到相关结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '选择',
                  navigateText: '切换',
                  navigateUpKeyAriaLabel: '向上',
                  navigateDownKeyAriaLabel: '向下',
                  closeText: '关闭',
                  closeKeyAriaLabel: '关闭'
                }
              }
            }
          }
        }
      }
    },
    returnToTopLabel: '返回顶部',
    outlineTitle: '目录',
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '菜单',
    lastUpdatedText: '更新于'
  }
}
