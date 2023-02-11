import { Meta, Story } from '@storybook/react'

import { IconButton, IconButtonProps } from '~ui'

export default {
  title: 'UI/IconButton',
  component: IconButton
} as Meta

export const IconButtonStory: Story<IconButtonProps> = () => (
  <IconButton name="external" />
)
