import { ref } from 'vue'
import { Dropdown, DropdownContent, DropdownTrigger } from 'v-dropdown'

export function ContentText() {
  return (
    <div style="width: 400px;" class="p-3">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </div>
  )
}

export function DropdownClick() {
  const slots = {
    trigger: () => <DropdownTrigger>Click me</DropdownTrigger>,
    default: () => (
      <DropdownContent>
        <ContentText />
      </DropdownContent>
    ),
  }
  return <Dropdown v-slots={slots} />
}
export function DropdownHover() {
  const slots = {
    trigger: () => <DropdownTrigger>Hover me</DropdownTrigger>,
    default: () => (
      <DropdownContent>
        <ContentText />
      </DropdownContent>
    ),
  }
  return <Dropdown trigger="hover" v-slots={slots} />
}
export function DropdownContextmenu() {
  const slots = {
    trigger: () => (
      <div
        class="
          d-flex align-items-center justify-content-center
          bg-light rounded-3 px-3 py-1 fs-1 text-body-secondary w-100
        "
        style="height: 10rem;"
      >
        Mouse right click me
      </div>
    ),
    default: () => (
      <DropdownContent>
        <ContentText />
      </DropdownContent>
    ),
  }
  return <Dropdown trigger="contextmenu" block v-slots={slots} />
}
export function DropdownNoToggle() {
  const slots = {
    trigger: () => (
      <input
        type="text"
        class="border rounded-3 px-3 py-2"
        placeholder="focus on me"
      />
    ),
    default: () => (
      <DropdownContent>
        <ContentText />
      </DropdownContent>
    ),
  }
  return <Dropdown toggle={false} v-slots={slots} />
}
export function DropdownManual() {
  const dropdown = ref(null)

  function inputChange(e) {
    if (e.target.value === '3') {
      dropdown.value.open()
    } else {
      // Dropdown expose `visible` state
      if (dropdown.value.visible) {
        dropdown.value.close()
      }
    }
  }
  const slots = {
    trigger: () => (
      <input
        type="text"
        class="border rounded-3 px-3 py-2"
        placeholder="try enter 3"
        onInput={inputChange}
      />
    ),
    default: () => (
      <DropdownContent>
        <ContentText />
      </DropdownContent>
    ),
  }
  return <Dropdown ref={dropdown} manual v-slots={slots} />
}
export function DropdownCustomStyle() {
  const slots = {
    trigger: () => (
      <DropdownTrigger class="border rounded-4 bg-primary-subtle p-2" />
    ),
    default: () => (
      <DropdownContent style="width: 500px;background-color:rgb(255, 174, 0);">
        <ContentText />
      </DropdownContent>
    ),
  }
  return <Dropdown v-slots={slots} />
}
export function DropdownSlotData() {
  const slots = {
    trigger: ({ visible }) => (
      <DropdownTrigger>visible: {String(visible.value)}</DropdownTrigger>
    ),
    default: ({ visible, disabled, close }) => (
      <DropdownContent>
        <div class="d-flex flex-column p-3">
          <div class="mb-3">visible: {String(visible.value)}</div>
          <div class="mb-3">disabled: {String(disabled.value)}</div>
          <button class="btn btn-secondary" onClick={close}>
            Close
          </button>
        </div>
      </DropdownContent>
    ),
  }
  return <Dropdown v-slots={slots} />
}
