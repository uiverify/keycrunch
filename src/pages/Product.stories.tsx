import type { Meta, StoryObj } from "@storybook/react-vite";
import { keycrunchModes } from "@/lib/modes";
import { Product } from "./Product";
import { withShell } from "./story-chrome";

const meta = {
  title: "Pages/Product",
  component: Product,
  decorators: [withShell],
  parameters: { layout: "fullscreen", chromatic: { modes: keycrunchModes } },
} satisfies Meta<typeof Product>;

export default meta;
type Story = StoryObj<typeof meta>;

const at = (id: string) => ({ route: { path: `/product/${id}`, pattern: "/product/:id" } });

export const Keyboard: Story = { parameters: at("keycrunch-75") };

export const Keycaps: Story = { parameters: at("keycrunch-keycaps") };

export const NotFound: Story = { parameters: at("keycrunch-100") };
