import { Story, Meta } from '@storybook/react'
import { Button, ButtonProps } from './Button'

export default {
  title: 'UI/Button',
  component: Button
} as Meta

export const ButtonStory: Story<ButtonProps> = (args) => (
  <Button {...args}>Twitter</Button>
)
