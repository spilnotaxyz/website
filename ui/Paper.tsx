import { Box, BoxProps } from '@mui/system'
import merge from 'lodash.merge'

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
    {...rest}
    sx={merge(
      {
        // before
        '&::before': {
          zIndex: -9999,
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius,
          border: `${borderGradientWidth}px solid transparent`,
          background: `${borderGradient} border-box`,
          WebkitMask: `linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)`,
          WebkitMaskComposite: 'destination-out',
          maskComposite: 'exclude'
        },
        WebkitMask: `linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)`
      },
      rest.sx ?? {}
    )}
  />
)
