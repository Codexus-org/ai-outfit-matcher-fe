import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './select';

const meta: Meta<typeof Select> = {
  component: Select,
}

export default meta;
type Story = StoryObj<typeof Select>;

export const defaultSelect: Story = {
  args: {
    caption: 'Contents',
    options: [
      {value : '1', label: 'Option 1'},
      {value : '2', label: 'Option 2'},
      {value : '3', label: 'Option 3'},
    ]
  },
}

export const selectWidth: Story = {
  args: {
    caption: 'Contents',
    options: [
      {value : '1', label: 'Option 1'},
      {value : '2', label: 'Option 2'},
      {value : '3', label: 'Option 3'},
    ],
    className: 'w-40'
  },
}