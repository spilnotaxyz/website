import { Story, Meta } from '@storybook/react'
import { Icon, IconProps } from './Icon'

export default {
  title: 'UI/Icon',
  component: Icon
} as Meta

export const ExternalIcon: Story<IconProps> = () => <Icon name="external" />
