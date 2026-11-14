import type { Meta, StoryObj } from "@storybook/react-vite";
import { keycrunchModes } from "@/lib/modes";
import { Confirmation } from "./Confirmation";
import { withShell } from "./story-chrome";

const meta = {
  title: "Pages/Order confirmed",
  component: Confirmation,
  decorators: [withShell],
  parameters: { layout: "fullscreen", chromatic: { modes: keycrunchModes } },
} satisfies Meta<typeof Confirmation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
