import type { Meta, StoryObj } from "@storybook/react-vite";
import { keycrunchModes } from "@/lib/modes";
import { Category } from "./Category";
import { withShell } from "./story-chrome";

const meta = {
  title: "Pages/Category",
  component: Category,
  decorators: [withShell],
  parameters: { layout: "fullscreen", chromatic: { modes: keycrunchModes } },
} satisfies Meta<typeof Category>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllProducts: Story = { parameters: { route: { path: "/shop", pattern: "/shop" } } };

export const Keyboards: Story = { parameters: { route: { path: "/shop/keyboards", pattern: "/shop/:category" } } };

export const Keycaps: Story = { parameters: { route: { path: "/shop/keycaps", pattern: "/shop/:category" } } };
