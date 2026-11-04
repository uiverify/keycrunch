import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { QuantityStepper } from "./QuantityStepper";

function Stateful({ initial, large }: { initial: number; large?: boolean }) {
  const [value, setValue] = useState(initial);
  return <QuantityStepper value={value} onChange={setValue} large={large} />;
}

const meta = { title: "Components/QuantityStepper", component: Stateful } satisfies Meta<typeof Stateful>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { initial: 1 } };

export const Large: Story = { args: { initial: 2, large: true } };

export const AtMaximum: Story = { args: { initial: 9 } };
