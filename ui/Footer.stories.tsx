import { Box } from '@mui/system'
import { Meta, Story } from '@storybook/react'

import { Footer, FooterProps, Link, Text } from '~ui'

export default {
  title: 'ui/Footer',
  component: Footer
} as Meta

export const FooterStory: Story<FooterProps> = () => (
  <Box width="100%" display="flex" justifyContent="center" alignItems="center">
    <Footer
      startAdorsement={<Text variant="body">spilnota.xyz © 2023</Text>}
      endAdorsement={<Link href="/">Privacy Policy</Link>}
    />
  </Box>
)
