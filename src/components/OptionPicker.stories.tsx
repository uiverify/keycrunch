import type { Meta, StoryObj } from "@storybook/react-vite";
import { requireProduct } from "@/lib/products";
import { OptionPicker } from "./OptionPicker";

const [caseOption, switches] = requireProduct("keycrunch-75").options;
if (!caseOption || !switches) throw new Error("expected the Keycrunch 75 options");

const meta = { title: "Components/OptionPicker", component: OptionPicker, args: { onChange: () => {} } } satisfies Meta<typeof OptionPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Swatches: Story = { args: { option: caseOption, value: "Graphite" } };

export const Labels: Story = { args: { option: switches, value: "Tactile" } };
