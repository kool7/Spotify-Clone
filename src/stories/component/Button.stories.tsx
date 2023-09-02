import type { Meta, StoryObj } from "@storybook/react";
import Button from "../../components/Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LogIn: Story = {
  args: {
    children: <p>Log In</p>,
  },
};

export const SignUp: Story = {
  args: {
    children: <p>Sign Up</p>,
    className:"bg-transparent text-neutral-300 font-medium"
  },
};