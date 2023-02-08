import { Box, BoxProps } from '@mui/system'

export type TextProps = {
  variant: 'h1' | 'h2' | 'h3' | 'big' | 'bigger' | 'body' | 'smaller'
  fontWeight: 300 | 400 | 500 | 600 | 700
} & BoxProps

const Base = (props: BoxProps) => {
  return <Box color="primary.main" {...props} />
}

export const Text = ({ variant, ...rest }: TextProps) => {
  if (variant === 'h1')
    return (
      <Base component="h1" fontSize={90} fontFamily="Inter Tight" {...rest} />
    )
  if (variant === 'h2')
    return (
      <Base component="h2" fontSize={70} fontFamily="Inter Tight" {...rest} />
    )
  if (variant === 'h3')
    return (
      <Base component="h3" fontSize={32} fontFamily="Neue Machina" {...rest} />
    )

  if (variant === 'big')
    return (
      <Base component="p" fontSize={24} fontFamily="Inter Tight" {...rest} />
    )
  if (variant === 'bigger')
    return (
      <Base component="p" fontSize={18} fontFamily="Inter Tight" {...rest} />
    )

  if (variant === 'body')
    return (
      <Base component="p" fontSize={16} fontFamily="Inter Tight" {...rest} />
    )
  if (variant === 'smaller')
    return (
      <Base component="p" fontSize={14} fontFamily="Inter Tight" {...rest} />
    )

  throw new Error('Invalid variant')
}
