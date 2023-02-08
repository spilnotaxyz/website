import { Box } from '@mui/system'
import { Story, Meta } from '@storybook/react'
import { Text, Link, Footer, FooterProps } from '@ui'

export default {
  title: 'ui/Footer',
  component: Footer
} as Meta

export const FooterStory: Story<FooterProps> = (args) => (
  <Box width="100%" display="flex" justifyContent="center" alignItems="center">
    <Footer
      startAdorsement={<Text variant="body">spilnota.xyz © 2023</Text>}
      endAdorsement={<Link href="/">Privacy Policy</Link>}
      {...args}
    />
  </Box>
)
