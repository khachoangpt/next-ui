'use client'

import { AutocompleteItemProps, AutocompleteProps } from '@nextui-org/react'

import { AutocompleteItem } from './AutocompleteItem'
import { AutocompleteRoot } from './AutocompleteRoot'

type Props = {
  autocompleteItems: (Omit<AutocompleteItemProps, 'key'> & { label: string })[]
} & Omit<AutocompleteProps, 'children'>

export const AutoComplete = ({ autocompleteItems = [], ...rest }: Props) => {
  return (
    <AutocompleteRoot {...rest}>
      {autocompleteItems.map((item) => (
        <AutocompleteItem key={item.id} {...item}>
          {item.label}
        </AutocompleteItem>
      ))}
    </AutocompleteRoot>
  )
}
