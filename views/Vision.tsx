import { Box, BoxProps } from '@mui/system'

import { Text } from '~ui'

export type VisionProps = BoxProps

export const Vision = (props: VisionProps) => (
  <Box
    display="flex"
    flexDirection={{ xs: 'column', md: 'row' }}
    justifyContent="space-between"
    alignItems={{ xs: 'flex-start', md: 'flex-end' }}
    {...props}
  >
    <Box maxWidth={{ xs: 'auto', md: 613 }}>
      <Text component="span" variant="h1">
        {'[ '}
      </Text>
      <Text component="span" variant="h1" display="inline">
        Synergising ideas and{' '}
        <Box component="span" ml={{ xs: 0, lg: '223px' }}>
          communities&nbsp;{']'}
        </Box>
      </Text>
    </Box>
    <Text mt={{ xs: 3.75, md: 0 }} variant="bigger">
      Coming Soon...
    </Text>
  </Box>
)
