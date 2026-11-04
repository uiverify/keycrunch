import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta = { title: "Components/Button", component: Button, args: { children: "Add to cart" } } satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Accent: Story = { args: { variant: "accent", children: "Shop Keycrunch 75" } };

export const Outline: Story = { args: { variant: "outline", children: "Continue shopping" } };

export const Disabled: Story = { args: { disabled: true, children: "Sold out" } };
