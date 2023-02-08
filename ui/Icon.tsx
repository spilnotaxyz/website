import { Box, BoxProps, useTheme } from '@mui/system'
import * as assets from './assets'
import merge from 'lodash.merge'
import { SVGAttributes } from 'react'

export type IconProps = {
  name: keyof typeof assets
} & BoxProps &
  Pick<SVGAttributes<SVGSVGElement>, 'width' | 'height'>

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
