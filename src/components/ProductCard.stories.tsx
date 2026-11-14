import type { Meta, StoryObj } from "@storybook/react-vite";
import { requireProduct } from "@/lib/products";
import { ProductCard } from "./ProductCard";

const meta = {
  title: "Components/ProductCard",
  component: ProductCard,
  decorators: [(Story) => <div style={{ width: 280 }}><Story /></div>],
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { product: requireProduct("keycrunch-75") } };

export const New: Story = { args: { product: requireProduct("keycrunch-tkl-pro") } };

export const SoldOut: Story = { args: { product: requireProduct("keycrunch-leather-mat") } };

export const LongName: Story = { args: { product: requireProduct("keycrunch-65-low-profile") } };
