import type { Meta, StoryObj } from "@storybook/react-vite";
import { keycrunchModes } from "@/lib/modes";
import { Cart } from "./Cart";
import { filledCart, smallCart } from "./fixtures";
import { withShell } from "./story-chrome";

const meta = {
  title: "Pages/Cart",
  component: Cart,
  decorators: [withShell],
  parameters: { layout: "fullscreen", chromatic: { modes: keycrunchModes } },
} satisfies Meta<typeof Cart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = { parameters: { cart: filledCart } };

export const BelowFreeShipping: Story = { parameters: { cart: smallCart } };

export const Empty: Story = {};
