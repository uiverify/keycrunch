import type { Meta, StoryObj } from "@storybook/react-vite";
import { keycrunchModes } from "@/lib/modes";
import { Checkout } from "./Checkout";
import { filledCart } from "./fixtures";
import { withShell } from "./story-chrome";

const meta = {
  title: "Pages/Checkout",
  component: Checkout,
  decorators: [withShell],
  parameters: { layout: "fullscreen", chromatic: { modes: keycrunchModes }, cart: filledCart },
} satisfies Meta<typeof Checkout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
