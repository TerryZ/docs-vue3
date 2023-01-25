import { watchEffect } from 'vue'
import { inBrowser, useData } from 'vitepress'
import DefaultTheme from "vitepress/theme"

// import 'bootstrap/dist/css/bootstrap.min.css'
// 引用 bootstrap 工具类样式
import 'bootstrap/dist/css/bootstrap-utilities.min.css'
import './component-fix.sass'
import './custom.sass'

export default {
  ...DefaultTheme,
  // enhanceApp(ctx) {
  //   DefaultTheme.enhanceApp(ctx)
  //   console.log(ctx)
  //   ctx.app.mixin({
  //     beforeMount () {
  //       import('v-page').then(module => {
  //         ctx.app.component('Page', module.Page)
  //       })
  //     }
  //   })
  // },
  setup() {
    const { lang } = useData()
    watchEffect(() => {
      // if (inBrowser) {
      //   document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2024 00:00:00 UTC; path=/`
      // }
      if (typeof document !== 'undefined') {
        document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2024 00:00:00 UTC; path=/`
      }
    })
  }
}