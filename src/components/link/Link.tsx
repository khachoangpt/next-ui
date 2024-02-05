import { Link as LinkNextUI, LinkProps } from '@nextui-org/link'
import NextLink from 'next/link'

export const Link = (props: LinkProps) => {
  return <LinkNextUI as={NextLink} {...props} />
}
