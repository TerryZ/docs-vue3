import { ref, computed } from 'vue'

export function useContent () {
  const collapsePrimary = ref(false)
  const collapseSecondary = ref(false)
  const primaryAsideWidth = computed(() => (
    collapsePrimary.value ?  90 : 200
  ))
  const secondaryAsideWidth = computed(() => (
    collapseSecondary.value ? 110 : 200
  ))
  const visibleHeader = ref(true)
  const visiblePrimaryAside = ref(true)
  const visibleSecondaryAside = ref(true)
  const visibleFooter = ref(true)
  const position = ref('center')

  return {
    collapsePrimary,
    collapseSecondary,
    primaryAsideWidth,
    secondaryAsideWidth,
    visibleHeader,
    visiblePrimaryAside,
    visibleSecondaryAside,
    visibleFooter,
    position
  }
}