import type { Meta, StoryObj } from "@storybook/react-vite";
import { ShippingProgress } from "./ShippingProgress";

const meta = {
  title: "Components/ShippingProgress",
  component: ShippingProgress,
  decorators: [(Story) => <div style={{ width: 360 }}><Story /></div>],
} satisfies Meta<typeof ShippingProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Halfway: Story = { args: { subtotal: 59 } };

export const Unlocked: Story = { args: { subtotal: 188 } };
