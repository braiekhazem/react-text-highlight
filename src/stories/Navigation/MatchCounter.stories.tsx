import React, { useRef, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TextHighlight } from "@src/index";
import type { TextHighlightRef } from "@src/index";

const meta: Meta<typeof TextHighlight> = {
  title: "Navigation/Match Counter",
  component: TextHighlight,
};

export default meta;
type Story = StoryObj<typeof TextHighlight>;

const MatchCounterDemo = () => {
  const ref = useRef<TextHighlightRef>(null);
  const [search, setSearch] = useState("React");
  const [matchCount, setMatchCount] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const text =
    "React is a JavaScript library for building user interfaces. React lets you compose complex UIs from small, isolated pieces of code called components. With React, you can build single-page applications. React Native extends React to mobile platforms. The React ecosystem includes tools like React Router and React Query.";

  return (
    <div>
      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 16, flexWrap: "wrap" }}>
        <input
          type="text"
          value={search}
          onChange={(e) => { setSearch(e.target.value); setCurrentIndex(-1); }}
          placeholder="Search..."
          style={{ flex: 1, minWidth: 200, padding: "8px 12px", borderRadius: 8, border: "1px solid #d1d5db", fontSize: 14 }}
        />
        <button
          onClick={() => ref.current?.previous()}
          style={{ padding: "6px 12px", borderRadius: 6, border: "1px solid #d1d5db", cursor: "pointer" }}
        >
          Prev
        </button>
        <button
          onClick={() => ref.current?.next()}
          style={{ padding: "6px 12px", borderRadius: 6, border: "1px solid #d1d5db", cursor: "pointer" }}
        >
          Next
        </button>
        <div
          style={{
            padding: "6px 14px",
            borderRadius: 8,
            backgroundColor: matchCount > 0 ? "#dbeafe" : "#f3f4f6",
            color: matchCount > 0 ? "#1d4ed8" : "#6b7280",
            fontWeight: 600,
            fontSize: 14,
          }}
        >
          {matchCount > 0 ? `${currentIndex + 1} of ${matchCount}` : "No matches"}
        </div>
      </div>
      <TextHighlight
        ref={ref}
        text={text}
        highlightWords={search ? [search] : []}
        onHighlightCountChange={setMatchCount}
        onCurrentHighlightChange={setCurrentIndex}
        highlightStyle={{ backgroundColor: "#fef3c7", fontWeight: 600, padding: "1px 3px", borderRadius: 2 }}
        tooltip={{ enabled: false }}
      />
      <style>{`.react-text-highlight-active { background-color: #f97316 !important; color: white !important; border-radius: 3px; }`}</style>
    </div>
  );
};

export const Default: Story = {
  render: () => <MatchCounterDemo />,
};
