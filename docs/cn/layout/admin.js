import { ref, computed } from 'vue'

export function useAdmin () {
  const collapse = ref(false)
  const collapsedWidth = ref('70px')
  const asideWidthWidthCollapse = computed(() => (
    collapse.value ? collapsedWidth.value : '200px'
  ))
  const visibleHeader = ref(true)
  const visibleBreadcrumb = ref(true)
  const visibleAside = ref(true)
  const visibleFooter = ref(true)

  return {
    collapse,
    collapsedWidth,
    asideWidthWidthCollapse,
    visibleHeader,
    visibleBreadcrumb,
    visibleAside,
    visibleFooter
  }
}