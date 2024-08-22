import { ref, computed } from 'vue'

export function useAdmin () {
  const collapse = ref(false)
  const collapsedWidth = ref('70px')
  const asideWidthWidthCollapse = computed(() => (
    collapse.value ? '200px' : collapsedWidth.value
  ))

  return {
    collapse,
    collapsedWidth,
    asideWidthWidthCollapse
  }
}