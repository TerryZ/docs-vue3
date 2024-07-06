import { ref } from 'vue'
import { DialogToast } from 'v-dialogs'

export function useToastExamples () {
  const placement = ref('top-right')
  const messageType = ref('info')

  function openToast (options) {
    DialogToast('Hello World', options)
  }
  function openToastCN (options) {
    DialogToast('Hello World', {
      ...options,
      language: 'cn'
    })
  }

  return {
    placement,
    messageType,
    openToast,
    openToastCN
  }
}