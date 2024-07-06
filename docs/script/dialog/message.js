import { ref } from 'vue'
import { DialogMessage } from 'v-dialogs'

export function useMessageExamples () {
  const placement = ref('top')
  const messageType = ref('info')

  function openMessage (options) {
    DialogMessage('Hello World', options)
  }

  return {
    placement,
    messageType,
    openMessage
  }
}