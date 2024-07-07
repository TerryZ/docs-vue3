import { ref } from 'vue'
import {
  DialogAlert,
  DialogMessage,
  DialogMessageSuccess
} from 'v-dialogs'

export function useAlertExamples () {
  const colorfulShadow = ref(false)
  const messageType = ref('info')

  function openAlert (options) {
    DialogAlert('Hello World', options)
  }
  function openAlertCN (option) {
    openAlert({ ...option, language: 'cn' })
  }
  function openConfirm () {
    const options = {
      messageType: 'confirm',
      cancelCallback () {
        DialogMessage('Canceled')
      }
    }
    DialogAlert('Deleted data cannot be recovered, are you sure?', () => {
      DialogMessageSuccess('Delete complete.')
    }, options)
  }
  function openConfirmCN () {
    const options = {
      messageType: 'confirm',
      language: 'cn',
      cancelCallback () {
        DialogMessage('您取消了操作')
      }
    }
    DialogAlert('删除数据将无法被恢复，确认吗？', () => {
      DialogMessageSuccess('删除成功')
    }, options)
  }

  return {
    colorfulShadow,
    messageType,
    openAlert,
    openAlertCN,
    openConfirm,
    openConfirmCN
  }
}