import { Box, BoxProps } from '@mui/system'
import { neueMachina, inter } from '@lib/fonts'

export type TextProps = {
  variant: 'h1' | 'h2' | 'h3' | 'big' | 'bigger' | 'body' | 'smaller'
} & BoxProps

const Base = (props: BoxProps) => {
  return <Box color="primary.main" {...props} />
}

export const Text = ({ variant, ...rest }: TextProps) => {
  if (variant === 'h1')
    return <Base component="h1" fontSize={{ xs: 45, md: 90 }} {...rest} />
  if (variant === 'h2')
    return <Base component="h2" fontSize={{ xs: 30, md: 70 }} {...rest} />
  if (variant === 'h3')
    return (
      <Base
        component="h3"
        className={neueMachina.className}
        fontSize={{ xs: 22, md: 32 }}
        fontWeight={400}
        {...rest}
      />
    )

  if (variant === 'big')
    return (
      <Base
        component="p"
        className={inter.className}
        fontSize={{ xs: 18, md: 24 }}
        fontFamily="Inter Tight"
        {...rest}
      />
    )
  if (variant === 'bigger')
    return (
      <Base
        component="p"
        className={inter.className}
        fontSize={{ xs: 14, md: 18 }}
        fontFamily="Inter Tight"
        {...rest}
      />
    )

  if (variant === 'body')
    return (
      <Base
        component="p"
        className={inter.className}
        fontSize={{ xs: 12, md: 16 }}
        fontFamily="Inter Tight"
        {...rest}
      />
    )
  if (variant === 'smaller')
    return (
      <Base
        component="p"
        className={inter.className}
        fontSize={{ xs: 12, md: 14 }}
        fontFamily="Inter Tight"
        {...rest}
      />
    )

  throw new Error('Invalid variant')
}
