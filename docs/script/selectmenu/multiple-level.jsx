import {
  SelectMenuBody,
  SelectMenuItem,
  SelectMenuSection,
  SelectMenuChildLevel
} from 'v-selectmenu'

import { createDropdownWithTrigger, createMenuItems } from './base'

export function MenuMultipleLevel () {
  return createDropdownWithTrigger(
    <SelectMenuBody>
      {createMenuItems(undefined, 2)}
      <SelectMenuChildLevel>{{
        trigger: () => <SelectMenuItem>Menu item 3</SelectMenuItem>,
        default: () => (
          <SelectMenuSection>
            {createMenuItems('Child item 2-', 2)}
            <SelectMenuChildLevel>{{
              trigger: () => <SelectMenuItem>Child item 2-3</SelectMenuItem>,
              default: () => (
                <SelectMenuSection>
                  {createMenuItems('Grandson item 3-', 3)}
                </SelectMenuSection>
              )
            }}</SelectMenuChildLevel>
            <SelectMenuItem>Child item 2-4</SelectMenuItem>
          </SelectMenuSection>
        )
      }}</SelectMenuChildLevel>
      {createMenuItems(undefined, 2, 4)}
    </SelectMenuBody>
  )
}