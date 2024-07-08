import { ref } from 'vue'
import { DialogToast } from 'v-dialogs'

export function useToastExamples (lang) {
  const placement = ref('top-right')
  const messageType = ref('info')

  function openToast (options) {
    DialogToast('Hello World', {
      ...options,
      language: lang
    })
  }

  return {
    placement,
    messageType,
    openToast
  }
}