import type { Meta, StoryObj } from "@storybook/react";
import { TextHighlight } from "@src/index";

const meta: Meta<typeof TextHighlight> = {
  title: "Basic Usage/Multiple Words",
  component: TextHighlight,
  args: {
    text: "React is a JavaScript library for building user interfaces. TypeScript adds type safety to JavaScript. Vite provides fast build tooling for React and TypeScript projects.",
    highlightWords: ["React", "TypeScript", "JavaScript", "Vite"],
  },
};

export default meta;
type Story = StoryObj<typeof TextHighlight>;

export const Default: Story = {};

export const WithIgnoreWords: Story = {
  args: {
    highlightWords: ["React", "TypeScript", "JavaScript", "Vite"],
    ignoreWords: ["JavaScript"],
  },
};
