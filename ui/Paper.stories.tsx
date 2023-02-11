import { Meta, Story } from '@storybook/react'

import { Paper, PaperProps, Text } from '~ui'

export default {
  title: 'UI/Paper',
  component: Paper
} as Meta

export const PaperStory: Story<PaperProps> = () => (
  <Paper p={2}>
    <Text variant="body">
      Lorem ipsum ipsum lorem lorem lorem ipsum <br /> lorem lorem iupsum ipsum
    </Text>
  </Paper>
)

export const GradientPaperStory: Story<PaperProps> = () => (
  <Paper
    borderGradient="linear-gradient(180deg, #68A1F6 0%, rgba(154, 154, 154, 0) 100%)"
    borderGradientWidth={1}
    p={2}
  >
    <Text variant="body">
      Lorem ipsum ipsum lorem lorem lorem ipsum <br /> lorem lorem iupsum ipsum
    </Text>
  </Paper>
)
