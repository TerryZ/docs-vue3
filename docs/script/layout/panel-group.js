import { ref } from 'vue'

export function usePanelGroup () {
  const active = ref(['panel2', 'panel3'])
  const activeAccordion = ref(['panel2'])
  const activeLayout = ref(['panel1', 'panel3'])
  const visiblePanel2 = ref(true)
  const visiblePanel1Header = ref(true)

  return {
    active,
    activeLayout,
    activeAccordion,
    visiblePanel2,
    visiblePanel1Header
  }
}
