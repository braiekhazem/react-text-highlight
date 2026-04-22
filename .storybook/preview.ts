import type { Preview } from "@storybook/react";
import "../src/components/_index.scss";

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    layout: "padded",
  },
};

export default preview;
