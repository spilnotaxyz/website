import { Box, BoxProps } from '@mui/system'
import merge from 'lodash.merge'

export type DividerProps = BoxProps

export const Divider = (rest: DividerProps) => {
  return (
    <Box
      component="hr"
      borderColor="secondary.main"
      height={0}
      width="100%"
      {...rest}
      sx={merge(
        {
          borderStyle: 'solid'
        },
        rest.sx ?? {}
      )}
    />
  )
}
