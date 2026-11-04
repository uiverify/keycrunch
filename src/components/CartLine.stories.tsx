import type { Meta, StoryObj } from "@storybook/react-vite";
import { filledCart } from "@/pages/fixtures";
import { CartLine } from "./CartLine";

const [keyboard] = filledCart;
if (!keyboard) throw new Error("expected a keyboard in the cart fixture");

const meta = {
  title: "Components/CartLine",
  component: CartLine,
  decorators: [(Story) => <div style={{ width: 360 }}><Story /></div>],
  parameters: { cart: filledCart },
} satisfies Meta<typeof CartLine>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { item: keyboard } };

export const MultipleUnits: Story = { args: { item: { ...keyboard, qty: 2 } } };
