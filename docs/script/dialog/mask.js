import {
  DialogMask,
  DialogMessageSuccess
} from 'v-dialogs'


export function useMaskExamples (lang) {
  function mergeOptions (options) {
    return {
      ...options,
      language: lang
    }
  }
  function loadDataList () {
    const destroy = DialogMask(mergeOptions())
  
    setTimeout(() => {
      destroy()
      DialogMessageSuccess('Data loaded successfully')
    },3000)
  }
  function coverTargetArea (appendTo) {
    const destroy = DialogMask('Data loading...', mergeOptions({ appendTo }))

    setTimeout(() => {
      destroy()
    }, 3000)
  }
  function openMask (options) {
    const destroy = DialogMask(mergeOptions(options))

    setTimeout(() => {
      destroy()
    }, 3000)
  }

  return {
    loadDataList,
    coverTargetArea,
    openMask
  }
}