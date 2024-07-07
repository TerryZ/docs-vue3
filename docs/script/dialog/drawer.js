import { ref } from 'vue'
import { DialogDrawer } from 'v-dialogs'
import CardPanel from '../../views/dialog/CardPanel.vue'

export function useDrawerExamples () {
  const placement = ref('right')

  function openDrawer (options) {
    DialogDrawer(CardPanel, options)
  }

  return {
    placement,
    openDrawer
  }
}