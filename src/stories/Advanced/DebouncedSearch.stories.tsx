import React, { useState, useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TextHighlight } from "@src/index";

const meta: Meta<typeof TextHighlight> = {
  title: "Advanced/Debounced Search",
  component: TextHighlight,
};

export default meta;
type Story = StoryObj<typeof TextHighlight>;

function useDebouncedValue<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
}

const DebouncedSearchDemo = () => {
  const [input, setInput] = useState("");
  const debouncedSearch = useDebouncedValue(input, 300);
  const [matchCount, setMatchCount] = useState(0);

  const content =
    "React Text Highlight is a flexible library for highlighting search terms in large blocks of text content. It supports multiple search terms, case sensitivity, exact word matching, and custom rendering of highlighted segments. The library is lightweight, fully typed with TypeScript, and works with React 18 and React 19.";

  return (
    <div>
      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 16 }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type fast - highlights debounce at 300ms..."
          style={{ flex: 1, padding: "8px 12px", borderRadius: 8, border: "1px solid #d1d5db", fontSize: 14 }}
        />
        {matchCount > 0 && (
          <span style={{ fontSize: 14, fontWeight: 600, color: "#4f46e5" }}>{matchCount} matches</span>
        )}
      </div>
      <TextHighlight
        text={content}
        highlightWords={debouncedSearch ? [debouncedSearch] : []}
        onHighlightCountChange={setMatchCount}
        highlightStyle={{ backgroundColor: "#d1fae5", fontWeight: 600, borderRadius: 3, padding: "1px 3px" }}
        tooltip={{ enabled: false }}
      />
    </div>
  );
};

export const Default: Story = {
  render: () => <DebouncedSearchDemo />,
};
