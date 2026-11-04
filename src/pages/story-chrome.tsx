import type { Decorator } from "@storybook/react-vite";
import { Shell } from "@/components/Chrome";

/** Wraps a page story in the site chrome so it captures the full screen a visitor sees. */
export const withShell: Decorator = (Story) => (
  <Shell>
    <Story />
  </Shell>
);
