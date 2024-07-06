import {
  DialogMask,
  DialogMessageSuccess
} from 'v-dialogs'


export function useMaskExamples () {
  function loadDataList () {
    const destroy = DialogMask()
  
    setTimeout(() => {
      destroy()
      DialogMessageSuccess('Data loaded successfully')
    },3000)
  }
  function coverTargetArea (appendTo) {
    const destroy = DialogMask('Data loading...', { appendTo })

    setTimeout(() => {
      destroy()
    }, 3000)
  }
  function openMask (options) {
    const destroy = DialogMask(options)

    setTimeout(() => {
      destroy()
    }, 3000)
  }
  function openMaskCN (options) {
    openMask({ ...options, language: 'cn' })
  }

  return {
    loadDataList,
    coverTargetArea,
    openMask,
    openMaskCN
  }
}