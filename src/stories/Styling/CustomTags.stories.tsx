import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TextHighlight } from "@src/index";

const meta: Meta<typeof TextHighlight> = {
  title: "Styling/Custom Tags",
  component: TextHighlight,
  args: {
    text: "Custom tags let you control the HTML elements used for highlights.",
    highlightWords: ["Custom", "HTML", "highlights"],
  },
};

export default meta;
type Story = StoryObj<typeof TextHighlight>;

export const StrongTag: Story = {
  args: {
    highlightTag: "strong",
    highlightStyle: { color: "#dc2626" },
  },
};

export const EmTag: Story = {
  args: {
    highlightTag: "em",
    highlightStyle: { backgroundColor: "#fef3c7" },
  },
};

export const CustomComponent: Story = {
  args: {
    highlightTag: (word: string, index: number, props: any) =>
      React.createElement(
        "span",
        {
          key: props.key ?? index,
          style: {
            backgroundColor: "#e0e7ff",
            color: "#3730a3",
            padding: "2px 8px",
            borderRadius: "9999px",
            fontWeight: 600,
            border: "1px solid #a5b4fc",
            fontSize: "0.9em",
          },
        },
        word,
      ),
  },
};

export const PreWrapper: Story = {
  args: {
    text: "Using a <pre> wrapper tag preserves whitespace and uses monospace font.",
    highlightWords: ["pre", "monospace"],
    wrapperTag: "pre",
    style: { fontFamily: "monospace", fontSize: 14 },
  },
};
