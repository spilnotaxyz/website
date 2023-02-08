import { Box, BoxProps } from '@mui/system'
import { Text } from '@ui'

export type VisionProps = BoxProps

export const Vision = (props: VisionProps) => (
  <Box
    display="flex"
    justifyContent="space-between"
    alignItems="flex-end"
    {...props}
  >
    <Box maxWidth={613}>
      <Text component="span" variant="h1">
        {'[ '}
      </Text>
      <Text component="span" variant="h1" display="inline">
        Synergising ideas and{' '}
        <Box component="span" ml="223px">
          communities&nbsp;{']'}
        </Box>
      </Text>
    </Box>
    <Text variant="bigger">Building Organically</Text>
  </Box>
)
