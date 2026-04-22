import type { Meta, StoryObj } from "@storybook/react";
import { TextHighlight } from "@src/index";

const definitions: Record<string, string> = {
  closure: "A function that retains access to its outer scope.",
  hoisting: "Moving declarations to the top of their scope before execution.",
  prototype: "The mechanism by which JS objects inherit from other objects.",
  promise: "An object representing the eventual completion of an async operation.",
};

const meta: Meta<typeof TextHighlight> = {
  title: "Tooltips/Custom Content",
  component: TextHighlight,
  args: {
    text: "JavaScript has key concepts: a closure captures variables from outer scope. Hoisting moves declarations up. The prototype chain enables inheritance. A promise represents an async value.",
    highlightWords: Object.keys(definitions),
    tooltip: {
      enabled: true,
      content: (text: string) => definitions[text.toLowerCase()] || text,
    },
    highlightStyle: {
      backgroundColor: "#dbeafe",
      borderBottom: "2px dashed #3b82f6",
      padding: "1px 3px",
      borderRadius: 2,
      fontWeight: 600,
      cursor: "help",
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextHighlight>;

export const Definitions: Story = {};
