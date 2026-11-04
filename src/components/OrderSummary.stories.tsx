import type { Meta, StoryObj } from "@storybook/react-vite";
import { totals } from "@/lib/cart";
import { filledCart, smallCart } from "@/pages/fixtures";
import { OrderSummary } from "./OrderSummary";

const meta = {
  title: "Components/OrderSummary",
  component: OrderSummary,
  decorators: [(Story) => <div style={{ width: 360 }}><Story /></div>],
} satisfies Meta<typeof OrderSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FreeShipping: Story = { args: { totals: totals(filledCart) } };

export const PaidShipping: Story = { args: { totals: totals(smallCart) } };
