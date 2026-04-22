import type { Meta, StoryObj } from "@storybook/react";
import { TextHighlight } from "@src/index";

const meta: Meta<typeof TextHighlight> = {
  title: "Basic Usage/Case Sensitive",
  component: TextHighlight,
  args: {
    text: "React is awesome. react makes development easy. REACT is used worldwide. rEaCt has a large community.",
    highlightWords: ["React"],
  },
};

export default meta;
type Story = StoryObj<typeof TextHighlight>;

export const CaseInsensitive: Story = {
  name: "Case Insensitive (default)",
  args: {
    caseSensitive: false,
  },
};

export const CaseSensitiveOn: Story = {
  name: "Case Sensitive",
  args: {
    caseSensitive: true,
  },
};
