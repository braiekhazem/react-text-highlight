import type { Meta, StoryObj } from "@storybook/react";
import { TextHighlight } from "@src/index";

const meta: Meta<typeof TextHighlight> = {
  title: "Styling/Custom Styles",
  component: TextHighlight,
  args: {
    text: "Highlight this text with custom colors and beautiful styling options.",
    highlightWords: ["Highlight", "custom", "beautiful"],
  },
};

export default meta;
type Story = StoryObj<typeof TextHighlight>;

export const YellowBackground: Story = {
  args: {
    highlightStyle: {
      backgroundColor: "#ffeb3b",
      color: "#000",
      fontWeight: "bold",
      padding: "2px 4px",
      borderRadius: "3px",
    },
  },
};

export const BlueBadge: Story = {
  args: {
    highlightStyle: {
      backgroundColor: "#dbeafe",
      color: "#1d4ed8",
      fontWeight: 600,
      padding: "2px 8px",
      borderRadius: "12px",
      border: "1px solid #93c5fd",
    },
  },
};

export const Underline: Story = {
  args: {
    highlightStyle: {
      backgroundColor: "transparent",
      borderBottom: "2px solid #ef4444",
      fontWeight: "bold",
      color: "#ef4444",
    },
  },
};

export const UnhighlightedStyle: Story = {
  args: {
    highlightStyle: {
      backgroundColor: "#fef3c7",
      fontWeight: "bold",
    },
    unhighlightStyle: {
      color: "#9ca3af",
    },
  },
};
