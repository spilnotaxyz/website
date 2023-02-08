import { Text, TextProps } from './Text'
import NextLink from 'next/link'

export type LinkProps = Omit<TextProps, 'variant'> & { href: string }

export const Link = ({ href, ...rest }: LinkProps) => (
  <NextLink href={href} style={{ textDecoration: 'none' }}>
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
