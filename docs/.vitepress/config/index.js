import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'
import cnConfig from './cn'
import enConfig from './en'

export default defineConfig({
  title: 'Vue3 components',
  description: 'Just playing around.',
  appearance: false,
  lastUpdated: true,
  base: '/docs-vue3/',
  lang: 'en',
  themeConfig: {
    search: {
      provider: 'local'
    }
  },
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
  },
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../../docs', import.meta.url)),
        '@demo': fileURLToPath(new URL('../demos', import.meta.url))
      }
    }
  }
})
