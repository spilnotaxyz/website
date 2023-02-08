import { Box } from '@mui/system'
import { Story, Meta } from '@storybook/react'
import { Divider, DividerProps } from '@ui'

export default {
  title: 'ui/Divider',
  component: Divider
} as Meta

export const DividerStory: Story<DividerProps> = (args) => (
  <Box
    width="100%"
    height={100}
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <Divider {...args} />
  </Box>
)
