import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TextHighlight } from "@src/index";

const meta: Meta<typeof TextHighlight> = {
  title: "Advanced/Badges",
  component: TextHighlight,
};

export default meta;
type Story = StoryObj<typeof TextHighlight>;

export const Default: Story = {
  args: {
    text: "Deploy the API gateway behind the load balancer with TLS termination enabled. Each microservice authenticates via OAuth tokens issued by the central API gateway.",
    highlightWords: ["API", "gateway", "TLS", "OAuth", "microservice"],
    tooltip: { enabled: false },
    highlightTag: (word: string, index: number, props: any) =>
      React.createElement(
        "span",
        {
          key: props.key ?? index,
          style: {
            display: "inline-flex",
            alignItems: "center",
            backgroundColor: "#e0e7ff",
            color: "#3730a3",
            padding: "2px 10px",
            borderRadius: "9999px",
            fontSize: "0.875em",
            fontWeight: 600,
            border: "1px solid #a5b4fc",
            lineHeight: "1.5",
          },
        },
        word,
      ),
  },
};
