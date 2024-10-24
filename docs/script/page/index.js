import { ref, computed } from 'vue'

export function usePagination () {
  const srcList = Array(88).fill(0).map((val, index) => index + 1)

  const logs = ref([])
  const listGallery = ref([])
  const disabled = ref(false)
  const align = ref('left')
  const pageSize = ref(25)
  const pageNumberOperate = ref(3)
  const inputPageNumber = ref('2')
  const switchInfo = ref(true)
  const switchFirst = ref(true)
  const switchLast = ref(true)
  const switchPageSizeOptions = ref(true)
  const switchPageNumber = ref(true)

  function changeBasic (data) {
    logs.value.push(data)
  }
  function changeGallery ({ pageNumber, pageSize }) {
    const start = pageSize * (pageNumber - 1)
    const end = (start + pageSize) > srcList.length
      ? srcList.length
      : start + pageSize

    listGallery.value = srcList.filter((val, index) => {
      return index >= start && index < end
    })
  }
  function goToInputPage () {
    if (!inputPageNumber.value) return

    const newPageNumber = Number(inputPageNumber.value)

    if (window.isNaN(newPageNumber)) {
      inputPageNumber.value = ''
      return
    }
    pageNumberOperate.value = newPageNumber
  }

  return {
    srcList,
    logs,
    listGallery,
    disabled,
    align,
    pageSize,
    pageNumberOperate,
    inputPageNumber,
    switchInfo,
    switchFirst,
    switchLast,
    switchPageSizeOptions,
    switchPageNumber,

    changeBasic,
    changeGallery,
    goToInputPage
  }
}