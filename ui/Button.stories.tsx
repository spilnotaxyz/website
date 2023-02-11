import { Meta, Story } from '@storybook/react'

import { Button, ButtonProps } from '~ui'

export default {
  title: 'UI/Button',
  component: Button
} as Meta

export const ButtonStory: Story<ButtonProps> = () => <Button>ClickMe</Button>

export const ButtonLinkStory: Story<ButtonProps> = () => (
  <Button link href="https://twitter.com">
    Twitter
  </Button>
)
