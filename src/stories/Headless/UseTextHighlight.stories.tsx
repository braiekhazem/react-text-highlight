import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useTextHighlight } from "@src/index";

const meta: Meta = {
  title: "Headless/useTextHighlight Hook",
};

export default meta;
type Story = StoryObj;

const sampleText =
  "React hooks revolutionized how developers build React components. Custom hooks let you extract and reuse stateful logic across components. The useEffect hook handles side effects, while useState manages local component state.";

const HookDemo = () => {
  const [search, setSearch] = useState("React hooks");
  const words = search.split(" ").filter((w) => w.trim());

  const { chunks, highlightedElements, highlightedElementsCount } = useTextHighlight(sampleText, {
    highlightWords: words,
  });

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search terms..."
        style={{ width: "100%", padding: "8px 12px", borderRadius: 8, border: "1px solid #d1d5db", fontSize: 14, marginBottom: 16 }}
      />

      <div style={{ marginBottom: 12, fontSize: 14, color: "#374151" }}>
        <strong>{highlightedElementsCount}</strong> matches found
      </div>

      <div style={{ padding: 16, backgroundColor: "#f9fafb", borderRadius: 8, border: "1px solid #e5e7eb", lineHeight: 1.8, marginBottom: 16 }}>
        {chunks.map((chunk, i) =>
          chunk.highlight ? (
            <span key={i} style={{ backgroundColor: "#fef3c7", fontWeight: 600, padding: "1px 3px", borderRadius: 3 }}>
              {chunk.text}
            </span>
          ) : (
            <span key={i}>{chunk.text}</span>
          ),
        )}
      </div>

      <details>
        <summary style={{ cursor: "pointer", fontSize: 14, fontWeight: 600, color: "#374151", marginBottom: 8 }}>
          Raw chunks data
        </summary>
        <pre style={{ backgroundColor: "#111827", color: "#d1d5db", padding: 16, borderRadius: 8, fontSize: 12, overflow: "auto", maxHeight: 300 }}>
          {JSON.stringify({ chunks, highlightedElements, highlightedElementsCount }, null, 2)}
        </pre>
      </details>
    </div>
  );
};

export const Default: Story = {
  render: () => <HookDemo />,
};
