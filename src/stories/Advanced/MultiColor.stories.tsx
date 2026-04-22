import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TextHighlight } from "@src/index";

const colorMap: Record<string, { bg: string; text: string }> = {
  react: { bg: "#dbeafe", text: "#1d4ed8" },
  component: { bg: "#fce7f3", text: "#be185d" },
  hooks: { bg: "#d1fae5", text: "#065f46" },
  state: { bg: "#fef3c7", text: "#92400e" },
  props: { bg: "#e0e7ff", text: "#3730a3" },
  render: { bg: "#ffe4e6", text: "#9f1239" },
};

const meta: Meta<typeof TextHighlight> = {
  title: "Advanced/Multi-Color Per Word",
  component: TextHighlight,
};

export default meta;
type Story = StoryObj<typeof TextHighlight>;

export const Default: Story = {
  args: {
    text: "React is a library for building user interfaces using component trees. React hooks like useState manage state, while props flow data between each component. Every render cycle reconciles the virtual DOM efficiently.",
    highlightWords: Object.keys(colorMap),
    tooltip: { enabled: false },
    highlightTag: (word: string, index: number, props: any) => {
      const colors = colorMap[word.toLowerCase()] || { bg: "#fef9c3", text: "#854d0e" };
      return React.createElement(
        "mark",
        {
          key: props.key ?? index,
          style: {
            backgroundColor: colors.bg,
            color: colors.text,
            padding: "2px 6px",
            borderRadius: "4px",
            fontWeight: 600,
          },
        },
        word,
      );
    },
  },
};
