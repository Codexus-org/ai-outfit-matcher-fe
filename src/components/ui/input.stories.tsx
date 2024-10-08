import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";
import { AtSign, EyeOffIcon, Lock } from "lucide-react";
const meta: Meta<typeof Input> = {
  component: Input,
};
export default meta;
type Story = StoryObj<typeof Input>;
export const InputStandard: Story = {
  args: {
    size: "medium",
    placeholder: "Input your name",
  },
};
export const InputWithIcon: Story = {
  args: {
    withIcon: true,
    size: "medium",
    placeholder: "Input your email",
    icon: <AtSign size={16} />,
  },
};
export const InputPassword: Story = {
  args: {
    withIcon: true,
    size: "medium",
    placeholder: "Input your password",
    type: "password",
    icon: <Lock size={16} />,
  },
};

export const InputPasswordWithIcon: Story = {
  args: {
    withIcon: true,
    size: "medium",
    placeholder: "Input your password",
    type: "password",
    icon: <EyeOffIcon size={16} />,
  },
};
