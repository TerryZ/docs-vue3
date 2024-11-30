import {
  SelectMenuBody,
  SelectMenuHeader,
  SelectMenuSubHeader,
  SelectMenuRow,
  SelectMenuColumn,
  SelectMenuDivider
} from 'v-selectmenu'

import { createMenuItems, createDropdownWithTrigger } from './base'

export function MenuLayoutMultipleColumn () {
  return createDropdownWithTrigger(
    <SelectMenuBody>
      <SelectMenuHeader>Multiple columns layout</SelectMenuHeader>
      <SelectMenuDivider />
      <SelectMenuRow>
        <SelectMenuColumn>
          {createMenuItems('Menu item 1-', 3)}
        </SelectMenuColumn>
        <SelectMenuDivider horizontal={false} />
        <SelectMenuColumn>
          {createMenuItems('Menu item 2-', 3)}
        </SelectMenuColumn>
        <SelectMenuDivider horizontal={false} />
        <SelectMenuColumn>
          {createMenuItems('Menu item 3-', 3)}
        </SelectMenuColumn>
      </SelectMenuRow>
    </SelectMenuBody>
  )
}
export function MenuLayoutComplicated () {
  return createDropdownWithTrigger(
    <SelectMenuBody>
      <SelectMenuRow>
        <SelectMenuColumn>
          <SelectMenuHeader>Complicated layout</SelectMenuHeader>
          {createMenuItems(undefined, 3)}
          <SelectMenuDivider />
          <SelectMenuRow>
            <SelectMenuColumn>
              <SelectMenuSubHeader>Column 1</SelectMenuSubHeader>
              {createMenuItems('Menu item 1-', 3)}
            </SelectMenuColumn>
            <SelectMenuDivider horizontal={false} />
            <SelectMenuColumn>
              <SelectMenuSubHeader>Column 2</SelectMenuSubHeader>
              {createMenuItems('Menu item 2-', 3)}
            </SelectMenuColumn>
          </SelectMenuRow>
          <SelectMenuDivider />
          <SelectMenuSubHeader>Sub header</SelectMenuSubHeader>
          {createMenuItems(undefined, 3, 4)}
        </SelectMenuColumn>
        <SelectMenuDivider horizontal={false} />
        <SelectMenuColumn>
          <SelectMenuSubHeader>Side menu items</SelectMenuSubHeader>
          {createMenuItems(undefined, 10, 100)}
        </SelectMenuColumn>
      </SelectMenuRow>
    </SelectMenuBody>
  )
}