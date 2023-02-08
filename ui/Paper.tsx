import { Box, BoxProps } from '@mui/system'

export type PaperProps = BoxProps & {
  borderGradientWidth?: number
  borderGradient?: string
}

export const Paper = ({
  borderGradientWidth,
  borderGradient,
  borderRadius = 7.5,
  ...rest
}: PaperProps) => (
  <Box
    position="relative"
    borderRadius={borderRadius}
    sx={{
      // before
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius,
        border: `${borderGradientWidth}px solid transparent`,
        background: `${borderGradient} border-box`,
        '-webkit-mask': `linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)`,
        '-webkit-mask-composite': 'destination-out',
        'mask-composite': 'exclude'
      }
    }}
    {...rest}
  />
)
