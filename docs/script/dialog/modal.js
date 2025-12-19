// import { ref } from 'vue'
import { DialogModal } from 'v-dialogs'
import CardPanel from '../../views/dialog/CardPanel.vue'

export function useModalExamples () {
  function openModal (options) {
    DialogModal(CardPanel, options)
  }

  return {
    openModal
  }
}