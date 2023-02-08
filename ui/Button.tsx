import { Box, BoxProps } from '@mui/system'
import merge from 'lodash.merge'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

export type ButtonProps = BoxProps &
  (
    | {
        link?: false
        href?: never
      }
    | {
        link: boolean
        href: string
      }
  )

export const Button = ({ link, href, ...rest }: ButtonProps) => {
  const Wrapper = link
    ? (props: PropsWithChildren) => (
        <Link
          style={{ textDecoration: 'none' }}
          href={href}
          target="_blank"
          {...props}
        />
      )
    : ({ children }: PropsWithChildren) => <>{children}</>
  return (
    <Wrapper>
      <Box
        component="button"
        borderRadius={40}
        borderColor="primary.main"
        color="primary.main"
        backgroundColor="transparent"
        fontSize={16}
        fontWeight={500}
        fontFamily="Inter Tight"
        lineHeight="22.4px"
        py={1.25}
        px={2.5}
        {...rest}
        sx={merge(
          {
            borderStyle: 'solid',
            transition: 'all 0.1s ease-in-out',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'primary.main',
              color: 'primary.dark',
              borderColor: 'primary.dark'
            }
          },
          rest.sx ?? {}
        )}
      />
    </Wrapper>
  )
}
