import DefaultTheme from "vitepress/theme"
import Layout from './Layout.vue'
import 'virtual:group-icons.css'

// 引用 bootstrap 工具类样式
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap-utilities.min.css'
// import 'bootstrap/dist/css/bootstrap-grid.min.css'
import '../../../bootstrap.sass'
import './component-fix.sass'
import './custom.sass'

// export default {
//   ...DefaultTheme,
//   setup() {
//     const { lang } = useData()
//     watchEffect(() => {
//       // if (inBrowser) {
//       //   document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2024 00:00:00 UTC; path=/`
//       // }
//       if (typeof document !== 'undefined') {
//         document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2024 00:00:00 UTC; path=/`
//       }
//     })
//   }
// }
export default {
  extends: DefaultTheme,
  Layout
}