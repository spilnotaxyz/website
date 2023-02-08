import { Story, Meta } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
  title: 'UI/Text',
  component: Text
} as Meta

const Template: Story<TextProps> = (args) => <Text {...args}>Hello there!</Text>

export const H1 = Template.bind({})
H1.args = {
  variant: 'h1',
  fontWeight: 400
}

export const H2 = Template.bind({})
H2.args = {
  variant: 'h2',
  fontWeight: 400
}

export const H3 = Template.bind({})
H3.args = {
  variant: 'h3',
  fontWeight: 400
}

export const Big = Template.bind({})
Big.args = {
  variant: 'big',
  fontWeight: 400
}

export const Bigger = Template.bind({})
Bigger.args = {
  variant: 'bigger',
  fontWeight: 400
}

export const Body = Template.bind({})
Body.args = {
  variant: 'body',
  fontWeight: 400
}

export const Smaller = Template.bind({})
Smaller.args = {
  variant: 'smaller',
  fontWeight: 400
}
