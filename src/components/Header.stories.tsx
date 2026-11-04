import type { Meta, StoryObj } from "@storybook/react-vite";
import { keycrunchModes } from "@/lib/modes";
import { filledCart } from "@/pages/fixtures";
import { Header } from "./Chrome";

const meta = {
  title: "Components/Header",
  component: Header,
  parameters: { layout: "fullscreen", chromatic: { modes: keycrunchModes } },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmptyCart: Story = {};

export const WithItems: Story = { parameters: { cart: filledCart } };
