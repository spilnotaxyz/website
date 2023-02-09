import { Text, TextProps } from './Text'
import NextLink from 'next/link'

export type LinkProps = Omit<TextProps, 'variant'> & {
  href: string
}

export const Link = ({ href, ...rest }: LinkProps) => {
  const startsWithHash = href.startsWith('#')
  return (
    <NextLink
      href={href}
      style={{ textDecoration: 'none' }}
      {...(startsWithHash
        ? { scroll: false }
        : {
            target: '_blank'
          })}
    >
      <Text
        variant="body"
        sx={{
          '&:hover': {
            color: 'secondary.main'
          },
          transition: 'all 0.1s ease-in-out',
          cursor: 'pointer'
        }}
        {...rest}
      />
    </NextLink>
  )
}
