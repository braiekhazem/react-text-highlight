import type { Meta, StoryObj } from "@storybook/react";
import { TextHighlight } from "@src/index";

const meta: Meta<typeof TextHighlight> = {
  title: "Basic Usage/Simple Highlight",
  component: TextHighlight,
  args: {
    text: "The quick brown fox jumps over the lazy dog. The fox was very quick and the dog was very lazy.",
    highlightWords: ["quick", "fox", "lazy"],
  },
};

export default meta;
type Story = StoryObj<typeof TextHighlight>;

export const Default: Story = {};

export const SingleWord: Story = {
  args: {
    text: "React Text Highlight makes it easy to highlight text in your applications.",
    highlightWords: ["highlight"],
  },
};

export const LongText: Story = {
  args: {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    highlightWords: ["dolor", "ut", "elit"],
  },
};
