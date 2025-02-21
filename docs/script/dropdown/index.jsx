import { ref } from 'vue'
import { Dropdown, DropdownContent, DropdownTrigger, useDropdown } from 'v-dropdown'

function ContentText () {
  return (
    <div style="width: 400px;" class="p-3">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
  )
}

export function DropdownClick () {
  const slots = {
    trigger: () => <DropdownTrigger>Click me</DropdownTrigger>,
    default: () => (
      <DropdownContent>
        <ContentText />
      </DropdownContent>
    )
  }
  return <Dropdown v-slots={slots} />
}
export function DropdownHover () {
  const slots = {
    trigger: () => <DropdownTrigger>Hover me</DropdownTrigger>,
    default: () => (
      <DropdownContent>
        <ContentText />
      </DropdownContent>
    )
  }
  return <Dropdown trigger="hover" v-slots={slots} />
}
export function DropdownContextmenu () {
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
    )
  }
  return <Dropdown trigger="contextmenu" block v-slots={slots} />
}
export function DropdownNoToggle () {
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
    )
  }
  return <Dropdown toggle={false} v-slots={slots} />
}
export function DropdownDisabled () {
  const disabled = ref(false)
  const slots = {
    trigger: () => <DropdownTrigger />,
    default: () => (
      <DropdownContent>
        <ContentText />
      </DropdownContent>
    )
  }
  const change = e => {
    console.log(e.target.checked)
    disabled.value = e.target.checked
  }
  return (
    <div>
      <div class="d-flex mb-3">
        <div class="form-check form-switch mb-0 d-flex align-items-center">
          <input
            class="form-check-input me-2"
            type="checkbox"
            role="switch"
            id="switch-disabled"
            onChange={change}
          />
          <label class="form-check-label" for="switch-disabled">Disabled</label>
        </div>
      </div>
      <div>{String(disabled.value)}</div>
      <Dropdown disabled={disabled.value} v-slots={slots} />
    </div>
  )
}