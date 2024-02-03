'use client'

import { CardProps } from '@nextui-org/react'
import { PropsWithChildren } from 'react'

import { CardBody } from './CardBody'
import { CardRoot } from './CardRoot'

type Props = PropsWithChildren<Omit<CardProps, 'children'>>

const Card = ({ children, ...rest }: Props) => {
  return (
    <CardRoot {...rest}>
      <CardBody>{children}</CardBody>
    </CardRoot>
  )
}

export default Card
