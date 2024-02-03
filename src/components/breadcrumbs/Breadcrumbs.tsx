'use client'

import {
  BreadcrumbItem,
  BreadcrumbItemProps,
  BreadcrumbsProps,
} from '@nextui-org/react'

import { BreadcrumbsRoot } from './BreadcrumbsRoot'

type Props = {
  breadcrumbItems: Omit<BreadcrumbItemProps, 'children'>[]
} & BreadcrumbsProps

export const Breadcrumbs = ({ breadcrumbItems = [], ...rest }: Props) => {
  return (
    <BreadcrumbsRoot {...rest}>
      {breadcrumbItems.map((item) => (
        <BreadcrumbItem key={item.id} {...item}>
          {item.value}
        </BreadcrumbItem>
      ))}
    </BreadcrumbsRoot>
  )
}
