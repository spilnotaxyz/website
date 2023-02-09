import { Box, BoxProps } from '@mui/system'

export type TextProps = {
  variant: 'h1' | 'h2' | 'h3' | 'big' | 'bigger' | 'body' | 'smaller'
} & BoxProps

const Base = (props: BoxProps) => {
  return <Box color="primary.main" {...props} />
}

export const Text = ({ variant, ...rest }: TextProps) => {
  if (variant === 'h1')
    return (
      <Base
        component="h1"
        fontSize={{ xs: 45, md: 90 }}
        fontFamily="Inter Tight"
        {...rest}
      />
    )
  if (variant === 'h2')
    return (
      <Base
        component="h2"
        fontSize={{ xs: 30, md: 70 }}
        fontFamily="Inter Tight"
        {...rest}
      />
    )
  if (variant === 'h3')
    return (
      <Base
        component="h3"
        fontSize={{ xs: 22, md: 32 }}
        fontFamily="Neue Machina"
        fontWeight={400}
        {...rest}
      />
    )

  if (variant === 'big')
    return (
      <Base
        component="p"
        fontSize={{ xs: 18, md: 24 }}
        fontFamily="Inter Tight"
        {...rest}
      />
    )
  if (variant === 'bigger')
    return (
      <Base
        component="p"
        fontSize={{ xs: 14, md: 18 }}
        fontFamily="Inter Tight"
        {...rest}
      />
    )

  if (variant === 'body')
    return (
      <Base
        component="p"
        fontSize={{ xs: 12, md: 16 }}
        fontFamily="Inter Tight"
        {...rest}
      />
    )
  if (variant === 'smaller')
    return (
      <Base
        component="p"
        fontSize={{ xs: 12, md: 14 }}
        fontFamily="Inter Tight"
        {...rest}
      />
    )

  throw new Error('Invalid variant')
}
