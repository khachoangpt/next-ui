'use client'

import { AccordionItemProps, AccordionProps } from '@nextui-org/react'

import { AccordionItem } from './AccordionItem'
import { AccordionRoot } from './AccordionRoot'

type Props = {
  accordionItems: Omit<AccordionItemProps, 'key'>[]
} & Omit<AccordionProps, 'children'>

export const Accordion = ({ accordionItems = [], ...rest }: Props) => {
  return (
    <AccordionRoot {...rest}>
      {accordionItems.map((item) => {
        return (
          <AccordionItem key={item.id} {...item}>
            {item.content}
          </AccordionItem>
        )
      })}
    </AccordionRoot>
  )
}
