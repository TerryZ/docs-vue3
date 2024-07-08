import { ref } from 'vue'
import {
  DialogAlert,
  DialogMessage,
  DialogMessageSuccess
} from 'v-dialogs'

export function useAlertExamples (lang) {
  const colorfulShadow = ref(false)
  const messageType = ref('info')

  function openAlert (options) {
    DialogAlert('Hello World', { ...options, language: lang })
  }
  function openConfirm () {
    const options = {
      messageType: 'confirm',
      language: lang,
      cancelCallback () {
        DialogMessage('Canceled')
      }
    }
    DialogAlert('Deleted data cannot be recovered, are you sure?', () => {
      DialogMessageSuccess('Delete complete.')
    }, options)
  }

  return {
    colorfulShadow,
    messageType,
    openAlert,
    openConfirm
  }
}