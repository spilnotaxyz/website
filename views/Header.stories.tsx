import { Box } from '@mui/system'
import { Meta, Story } from '@storybook/react'

import { Header, HeaderProps } from '~views'

export default {
  title: 'views/Header',
  component: Header
} as Meta

export const HeaderView: Story<HeaderProps> = () => (
  <Box width="100%" display="flex" justifyContent="center" alignItems="center">
    <Header />
  </Box>
)
