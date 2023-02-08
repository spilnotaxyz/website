import { Box, BoxProps } from '@mui/system'

export type DividerProps = BoxProps

export const Divider = (rest: DividerProps) => {
  return (
    <Box
      component="hr"
      borderColor="secondary.main"
      height={0}
      width="100%"
      {...rest}
      sx={{
        borderStyle: 'solid',
        ...(rest.sx ?? {})
      }}
    />
  )
}
