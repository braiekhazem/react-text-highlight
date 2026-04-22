import type { Meta, StoryObj } from "@storybook/react";
import { TextHighlight } from "@src/index";

const meta: Meta<typeof TextHighlight> = {
  title: "Tooltips/Basic Tooltip",
  component: TextHighlight,
  args: {
    text: "Hover over highlighted words to see tooltips appear with the matched text.",
    highlightWords: ["Hover", "highlighted", "tooltips"],
    tooltip: {
      enabled: true,
    },
    highlightStyle: {
      backgroundColor: "#dbeafe",
      borderBottom: "2px dashed #3b82f6",
      padding: "1px 3px",
      borderRadius: 2,
      fontWeight: 600,
      cursor: "pointer",
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextHighlight>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    tooltip: { enabled: false },
  },
};
