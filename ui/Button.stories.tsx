import { Story, Meta } from '@storybook/react'
import { Button, ButtonProps } from './Button'

export default {
  title: 'UI/Button',
  component: Button
} as Meta

export const ButtonStory: Story<ButtonProps> = (args) => (
  <Button {...args}>ClickMe</Button>
)

export const ButtonLinkStory: Story<ButtonProps> = (args) => (
  <Button link href="https://twitter.com" {...args}>
    Twitter
  </Button>
)
