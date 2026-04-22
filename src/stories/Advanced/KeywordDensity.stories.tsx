import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TextHighlight } from "@src/index";

const meta: Meta<typeof TextHighlight> = {
  title: "Advanced/Keyword Density",
  component: TextHighlight,
};

export default meta;
type Story = StoryObj<typeof TextHighlight>;

const content =
  "React performance optimization starts with understanding how React renders components. Use React.memo for expensive components and useMemo for costly computations. Performance profiling with React DevTools helps identify bottlenecks. Optimization should be measured, not guessed.";

const totalWords = content.split(/\s+/).filter(Boolean).length;

const KeywordDensityDemo = () => {
  const [keywords, setKeywords] = useState("React performance optimization");
  const [matchCount, setMatchCount] = useState(0);

  const density = totalWords > 0 ? ((matchCount / totalWords) * 100).toFixed(1) : "0.0";

  return (
    <div>
      <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16, flexWrap: "wrap" }}>
        <input
          type="text"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          placeholder="Keywords..."
          style={{ flex: 1, minWidth: 200, padding: "8px 12px", borderRadius: 8, border: "1px solid #d1d5db", fontSize: 14 }}
        />
        <div style={{ display: "flex", gap: 8 }}>
          <span style={{ padding: "4px 12px", borderRadius: 6, backgroundColor: "#dbeafe", color: "#1d4ed8", fontWeight: 600, fontSize: 14 }}>
            {matchCount} matches
          </span>
          <span style={{ padding: "4px 12px", borderRadius: 6, backgroundColor: parseFloat(density) > 5 ? "#fee2e2" : "#d1fae5", color: parseFloat(density) > 5 ? "#991b1b" : "#065f46", fontWeight: 600, fontSize: 14 }}>
            {density}% density
          </span>
          <span style={{ padding: "4px 12px", borderRadius: 6, backgroundColor: "#f3f4f6", color: "#374151", fontWeight: 600, fontSize: 14 }}>
            {totalWords} words
          </span>
        </div>
      </div>
      <TextHighlight
        text={content}
        highlightWords={keywords.split(" ").filter((k) => k.trim())}
        onHighlightCountChange={setMatchCount}
        highlightStyle={{
          backgroundColor: parseFloat(density) > 5 ? "#fecaca" : "#bbf7d0",
          padding: "1px 4px",
          borderRadius: 3,
          fontWeight: 600,
        }}
        tooltip={{ enabled: false }}
      />
      <p style={{ fontSize: 12, color: "#6b7280", marginTop: 12 }}>
        Highlight turns red when density exceeds 5%.
      </p>
    </div>
  );
};

export const Default: Story = {
  render: () => <KeywordDensityDemo />,
};
