import { Story, Meta } from '@storybook/react'
import { IconButton, IconButtonProps } from './IconButton'

export default {
  title: 'UI/IconButton',
  component: IconButton
} as Meta

export const IconButtonStory: Story<IconButtonProps> = () => (
  <IconButton name="external" />
)
