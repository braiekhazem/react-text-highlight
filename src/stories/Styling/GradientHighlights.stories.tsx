import type { Meta, StoryObj } from "@storybook/react";
import { TextHighlight } from "@src/index";

const meta: Meta<typeof TextHighlight> = {
  title: "Styling/Gradient Highlights",
  component: TextHighlight,
  args: {
    text: "Beautiful gradient highlights make your text stand out with stunning visual effects.",
    highlightWords: ["Beautiful", "gradient", "stunning"],
  },
};

export default meta;
type Story = StoryObj<typeof TextHighlight>;

export const WarmGradient: Story = {
  args: {
    highlightStyle: {
      background: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
      padding: "2px 6px",
      borderRadius: "4px",
      fontWeight: 600,
    },
  },
};

export const CoolGradient: Story = {
  args: {
    highlightStyle: {
      background: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
      padding: "2px 6px",
      borderRadius: "4px",
      fontWeight: 600,
    },
  },
};

export const NeonGlow: Story = {
  args: {
    highlightStyle: {
      backgroundColor: "#0f0f0f",
      color: "#39ff14",
      padding: "2px 6px",
      borderRadius: "4px",
      fontWeight: 700,
      boxShadow: "0 0 8px #39ff14",
    },
  },
};
