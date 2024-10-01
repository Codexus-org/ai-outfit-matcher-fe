import { Meta, StoryObj } from "@storybook/react"
import { Checkbox } from "./checkbox"

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
}

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const defaultCheckbox: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Checkbox'
  },
}

export const checkboxSecondary: Story = {
  args: {
    variant: 'secondary',
    size: 'lg',
    label: 'Checkbox secondary'
  }
}

export const checkboxViolet: Story = {
  args: {
    variant: 'violet',
    size: 'sm',
    label: 'Checkbox violet'
  }
}