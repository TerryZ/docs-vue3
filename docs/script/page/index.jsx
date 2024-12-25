import { ref } from 'vue'
import {
  PaginationBar,
  PaginationPageSizeOptions,
  PaginationInfo,
  PaginationPanel,
  PaginationPageNumbers,
  PaginationFirstPage,
  PaginationPreviousPage,
  PaginationNextPage,
  PaginationLastPage
} from 'v-page'

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
  function setPageSize (val) {
    pageSize.value = Number(val)
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
    goToInputPage,
    setPageSize
  }
}


export function paginationBase () {
  const logs = ref([])
  function change (data) {
    logs.value.push(data)
  }
  function PaginationBarBase (props) {
    return (
      <div class="border rounded-3 shadow-sm p-2">
        <PaginationBar
          align="center"
          totalRow={21}
          onChange={change}
          {...props}
        >
          <PaginationPageSizeOptions />
          <PaginationInfo />
          <PaginationFirstPage />
          <PaginationPreviousPage />
          <PaginationPageNumbers />
          <PaginationNextPage />
          <PaginationLastPage />
        </PaginationBar>
      </div>
    )
  }
  return {
    logs,
    PaginationBarBase
  }
}
export function PaginationGallery (props) {
  const listGallery = ref([])
  const srcList = Array(88).fill(0).map((val, index) => index + 1)

  function changeGallery ({ pageNumber, pageSize }) {
    const start = pageSize * (pageNumber - 1)
    const end = (start + pageSize) > srcList.length
      ? srcList.length
      : start + pageSize

    listGallery.value = srcList.filter((val, index) => {
      return index >= start && index < end
    })
  }
  function GalleryItems () {
    return listGallery.value.map(val => (
      <div
        style="height: 100px;width: 126px;"
        class="
          rounded-2 bg-light fs-1 text-body-secondary
          d-flex align-items-center justify-content-center
        "
        key={val}
      >
        {val}
      </div>
    ))
  }
  return (
    <>
      <div class="border rounded-3 shadow-sm py-2 ps-2 mb-2 d-flex flex-wrap gap-2">
        <GalleryItems />
      </div>
      <PaginationBar
        align="center"
        totalRow={srcList.length}
        onChange={changeGallery}
        {...props}
      >
        <PaginationPageSizeOptions />
        <PaginationInfo />
        <PaginationFirstPage />
        <PaginationPreviousPage />
        <PaginationPageNumbers />
        <PaginationNextPage />
        <PaginationLastPage />
      </PaginationBar>
    </>
  )
}
export function PaginationDisplayAll (props) {
  return (
    <PaginationBar
      totalRow={28}
      displayAll={true}
      align="left"
      {...props}
    >
      <PaginationPageSizeOptions />
      <PaginationInfo />
      <PaginationFirstPage />
      <PaginationPreviousPage />
      <PaginationPageNumbers />
      <PaginationNextPage />
      <PaginationLastPage />
    </PaginationBar>
  )
}
export function PaginationStyle (props) {
  return (
    <>
      <PaginationBar
        class="mb-3"
        totalRow={28}
        border={true}
        align="left"
        {...props}
      >
        <PaginationPageSizeOptions />
        <PaginationInfo />
        <PaginationFirstPage />
        <PaginationPreviousPage />
        <PaginationPageNumbers />
        <PaginationNextPage />
        <PaginationLastPage />
      </PaginationBar>
      <PaginationBar
        totalRow={28}
        circle={true}
        align="left"
        {...props}
      >
        <PaginationPageSizeOptions />
        <PaginationInfo />
        <PaginationFirstPage />
        <PaginationPreviousPage />
        <PaginationPageNumbers />
        <PaginationNextPage />
        <PaginationLastPage />
      </PaginationBar>
    </>
  )
}
export function PaginationPanelOrder (props) {
  return (
    <>
      <PaginationBar
        class="mb-3"
        totalRow={28}
        border={true}
        align="left"
        {...props}
      >
        <PaginationFirstPage />
        <PaginationPreviousPage />
        <PaginationPageNumbers />
        <PaginationNextPage />
        <PaginationLastPage />
        <PaginationInfo />
        <PaginationPageSizeOptions />
      </PaginationBar>
      <PaginationBar
        totalRow={28}
        border={true}
        align="left"
        {...props}
      >
        <PaginationPreviousPage />
        <PaginationPageSizeOptions />
        <PaginationInfo />
        <PaginationNextPage />
      </PaginationBar>
    </>
  )
}
export function PaginationSlot (props) {
  const slots = {
    default: ({ pageNumber, pageSize, totalPage, totalRow, isFirst, isLast }) => (
      <>
        <PaginationPreviousPage />
        <PaginationPanel>
          <div class="d-flex align-items-center gap-1">
            <div>page: {pageNumber}</div>
            <div>pageSize: {pageSize}</div>
            <div>totalPage: {totalPage}</div>
            <div>totalRow: {totalRow}</div>
            <div>isFirst: {isFirst.toString()}</div>
            <div>isLast: {isLast.toString()}</div>
          </div>
        </PaginationPanel>
        <PaginationNextPage />
      </>
    )
  }
  return (
    <PaginationBar
      totalRow={28}
      border={true}
      align="left"
      v-slots={slots}
      {...props}
    />
  )
}
