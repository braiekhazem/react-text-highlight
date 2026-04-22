import React, { useRef, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TextHighlight } from "@src/index";
import type { TextHighlightRef } from "@src/index";

const meta: Meta<typeof TextHighlight> = {
  title: "Navigation/Scroll To Highlight",
  component: TextHighlight,
};

export default meta;
type Story = StoryObj<typeof TextHighlight>;

const ScrollDemo = () => {
  const ref = useRef<TextHighlightRef>(null);
  const [jumpIndex, setJumpIndex] = useState(0);
  const [matchCount, setMatchCount] = useState(0);

  const text = Array(10)
    .fill(
      "React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small, isolated pieces of code called components.",
    )
    .join(" ");

  return (
    <div>
      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 16 }}>
        <label style={{ fontSize: 14, color: "#374151" }}>Jump to match:</label>
        <input
          type="number"
          min={0}
          max={matchCount - 1}
          value={jumpIndex}
          onChange={(e) => setJumpIndex(Number(e.target.value))}
          style={{ width: 60, padding: "4px 8px", borderRadius: 6, border: "1px solid #d1d5db" }}
        />
        <button
          onClick={() => ref.current?.scrollToHighlight(jumpIndex)}
          style={{ padding: "6px 12px", borderRadius: 6, border: "1px solid #d1d5db", cursor: "pointer" }}
        >
          Go
        </button>
        <span style={{ fontSize: 14, color: "#6b7280" }}>{matchCount} total matches</span>
      </div>
      <div style={{ maxHeight: 300, overflow: "auto", border: "1px solid #e5e7eb", borderRadius: 8, padding: 16 }}>
        <TextHighlight
          ref={ref}
          text={text}
          highlightWords={["React", "components"]}
          onHighlightCountChange={setMatchCount}
          highlightStyle={{ backgroundColor: "#dbeafe", fontWeight: 600, padding: "1px 3px", borderRadius: 2 }}
          enableAutoScroll={true}
          tooltip={{ enabled: false }}
        />
      </div>
      <style>{`.react-text-highlight-active { background-color: #3b82f6 !important; color: white !important; border-radius: 3px; }`}</style>
    </div>
  );
};

export const Default: Story = {
  render: () => <ScrollDemo />,
};
