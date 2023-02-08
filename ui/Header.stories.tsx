import { Box } from '@mui/system'
import { Story, Meta } from '@storybook/react'
import { Button, Icon, Link, Header, HeaderProps } from '@ui'

export default {
  title: 'ui/Header',
  component: Header
} as Meta

export const HeaderStory: Story<HeaderProps> = (args) => (
  <Box width="100%" display="flex" justifyContent="center" alignItems="center">
    <Header
      startAdorsement={<Icon name="logo" height={23} width={110} />}
      endAdorsement={<Button>Twitter</Button>}
      {...args}
    >
      <Link href="/">Home</Link>
      <Link href="/">About</Link>
      <Link href="/">Contact</Link>
    </Header>
  </Box>
)
