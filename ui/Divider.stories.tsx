import { Box } from '@mui/system'
import { Meta, Story } from '@storybook/react'

import { Divider, DividerProps } from '~ui'

export default {
  title: 'ui/Divider',
  component: Divider
} as Meta

export const DividerStory: Story<DividerProps> = () => (
  <Box
    width="100%"
    height={100}
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <Divider />
  </Box>
)
