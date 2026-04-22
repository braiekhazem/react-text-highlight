import React, { useRef, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TextHighlight } from "@src/index";
import type { TextHighlightRef } from "@src/index";

const meta: Meta<typeof TextHighlight> = {
  title: "Advanced/Accessible Highlights",
  component: TextHighlight,
};

export default meta;
type Story = StoryObj<typeof TextHighlight>;

const AccessibleDemo = () => {
  const ref = useRef<TextHighlightRef>(null);
  const [current, setCurrent] = useState(-1);
  const [total, setTotal] = useState(0);

  return (
    <div>
      <div role="search" aria-label="Highlight navigation" style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 16 }}>
        <button
          onClick={() => ref.current?.previous()}
          aria-label="Previous match"
          style={{ padding: "6px 12px", borderRadius: 6, border: "1px solid #d1d5db", cursor: "pointer" }}
        >
          Previous
        </button>
        <button
          onClick={() => ref.current?.next()}
          aria-label="Next match"
          style={{ padding: "6px 12px", borderRadius: 6, border: "1px solid #d1d5db", cursor: "pointer" }}
        >
          Next
        </button>
        <span aria-live="polite" style={{ fontSize: 14, color: "#6b7280" }}>
          {total > 0 ? `Match ${current + 1} of ${total}` : "No matches"}
        </span>
      </div>
      <TextHighlight
        ref={ref}
        text="Accessibility matters. Building accessible components makes the web better for everyone. Screen readers can announce each accessible highlight as users navigate through accessible search results."
        highlightWords={["accessible", "Accessibility"]}
        onHighlightCountChange={setTotal}
        onCurrentHighlightChange={setCurrent}
        highlightStyle={{ backgroundColor: "#dbeafe", fontWeight: 600, padding: "2px 4px", borderRadius: 3 }}
        highlightTag={(word: string, index: number, props: any) =>
          React.createElement(
            "mark",
            {
              key: props.key ?? index,
              style: props.style,
              className: props.className,
              role: "mark",
              "aria-label": `Highlighted: ${word}`,
            },
            word,
          )
        }
        tooltip={{ enabled: false }}
      />
      <style>{`.react-text-highlight-active { background-color: #f97316 !important; color: white !important; border-radius: 3px; }`}</style>
    </div>
  );
};

export const Default: Story = {
  render: () => <AccessibleDemo />,
};
