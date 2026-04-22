import React, { useRef, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TextHighlight } from "@src/index";
import type { TextHighlightRef } from "@src/index";

const meta: Meta<typeof TextHighlight> = {
  title: "Navigation/Next & Previous",
  component: TextHighlight,
};

export default meta;
type Story = StoryObj<typeof TextHighlight>;

const NavigationDemo = () => {
  const ref = useRef<TextHighlightRef>(null);
  const [matchCount, setMatchCount] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const text =
    "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. TypeScript adds optional static typing and class-based object-oriented programming to the language. The TypeScript compiler transpiles TypeScript code to plain JavaScript. Many popular frameworks like Angular, Vue, and React have first-class TypeScript support.";

  return (
    <div>
      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 16 }}>
        <button
          onClick={() => ref.current?.previous()}
          style={{ padding: "6px 12px", borderRadius: 6, border: "1px solid #d1d5db", cursor: "pointer" }}
        >
          Previous
        </button>
        <button
          onClick={() => ref.current?.next()}
          style={{ padding: "6px 12px", borderRadius: 6, border: "1px solid #d1d5db", cursor: "pointer" }}
        >
          Next
        </button>
        <span style={{ fontSize: 14, color: "#6b7280" }}>
          {matchCount > 0 ? `${currentIndex + 1} / ${matchCount}` : "0 / 0"}
        </span>
      </div>
      <TextHighlight
        ref={ref}
        text={text}
        highlightWords={["TypeScript"]}
        onHighlightCountChange={setMatchCount}
        onCurrentHighlightChange={setCurrentIndex}
        highlightStyle={{
          backgroundColor: "#fef3c7",
          borderBottom: "2px solid #f59e0b",
          padding: "1px 2px",
          borderRadius: 2,
        }}
        tooltip={{ enabled: false }}
      />
      <style>{`.react-text-highlight-active { background-color: #f97316 !important; color: white !important; border-radius: 3px; }`}</style>
    </div>
  );
};

export const Default: Story = {
  render: () => <NavigationDemo />,
};
