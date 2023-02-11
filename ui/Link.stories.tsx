import { Meta, Story } from '@storybook/react'

import { Link, LinkProps } from '~ui'

export default {
  title: 'UI/Link',
  component: Link
} as Meta

export const LinkStory: Story<LinkProps> = () => (
  <Link href="/">Hello there!</Link>
)
