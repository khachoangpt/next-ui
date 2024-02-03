'use client'

import {
  DropdownItemProps,
  DropdownMenuProps,
  DropdownProps,
  DropdownTriggerProps,
} from '@nextui-org/react'
import { PropsWithChildren } from 'react'

import { DropdownItem } from './DropdownItem'
import { DropdownMenu } from './DropdownMenu'
import { DropDownRoot } from './DropdownRoot'
import { DropdownTrigger } from './DropdownTrigger'

type Props = PropsWithChildren<
  {
    triggerProps?: Omit<DropdownTriggerProps, 'children'>
    menuProps?: Omit<DropdownMenuProps, 'children'>
    dropdownItems: DropdownItemProps[]
  } & Omit<DropdownProps, 'children'>
>

export const Dropdown = ({
  children,
  triggerProps,
  menuProps,
  dropdownItems = [],
  ...rest
}: Props) => {
  return (
    <DropDownRoot {...rest}>
      <DropdownTrigger {...triggerProps}>{children}</DropdownTrigger>
      <DropdownMenu {...menuProps}>
        {dropdownItems.map((item) => (
          <DropdownItem key={item.id} {...item}>
            {item.title}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </DropDownRoot>
  )
}
