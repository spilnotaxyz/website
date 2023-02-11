import { Meta, Story } from '@storybook/react'

import { Products } from '~views'

export default {
  title: 'views/Products',
  component: Products
} as Meta

export const ProductsView: Story = () => <Products />
