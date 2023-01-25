import cnConfig from './cn'
import enConfig from './en'

export default {
  title: 'Vue3 components',
  description: 'Just playing around.',
  appearance: false,
  lastUpdated: true,
  base: '/vue3/',
  lang: 'en',
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      ...enConfig
    },
    cn: {
      label: '中文',
      lang: 'cn',
      ...cnConfig
    }
  },
  markdown: {
    theme: {
      dark: 'github-dark',
      light: 'github-light',
    },
    lineNumbers: false
  }
}