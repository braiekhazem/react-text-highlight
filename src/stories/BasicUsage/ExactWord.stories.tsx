import type { Meta, StoryObj } from "@storybook/react";
import { TextHighlight } from "@src/index";

const meta: Meta<typeof TextHighlight> = {
  title: "Basic Usage/Exact Word",
  component: TextHighlight,
  args: {
    text: 'This is a test. Testing is important for development. The test suite passed. Do not protest the test results.',
    highlightWords: ["test"],
  },
};

export default meta;
type Story = StoryObj<typeof TextHighlight>;

export const PartialMatch: Story = {
  name: "Partial Match (default)",
  args: {
    exactWord: false,
  },
};

export const ExactMatchOnly: Story = {
  name: "Exact Word Match",
  args: {
    exactWord: true,
  },
};
