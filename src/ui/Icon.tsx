import { Box, BoxProps, useTheme } from '@mui/system'
import * as assets from './assets'
import merge from 'lodash.merge'

export type IconProps = {
  name: keyof typeof assets
  width?: number
  height?: number
} & BoxProps

export const Icon = ({ name, width = 12, height = 12, ...rest }: IconProps) => {
  const theme = useTheme()
  const Component = assets[name]
  return (
    <Box
      {...rest}
      sx={merge({ stroke: theme.palette.primary.main }, rest.sx ?? {})}
    >
      <Component width={width} height={height} />
    </Box>
  )
}
