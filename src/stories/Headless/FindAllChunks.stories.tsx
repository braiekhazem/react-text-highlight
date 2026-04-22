import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { findAllChunks } from "@src/index";

const meta: Meta = {
  title: "Headless/findAllChunks Function",
};

export default meta;
type Story = StoryObj;

const sampleText =
  "The quick brown fox jumps over the lazy dog. The fox was quick and the dog was lazy. Testing test cases is important.";

const FindAllChunksDemo = () => {
  const [search, setSearch] = useState("fox dog");
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [exactWord, setExactWord] = useState(false);
  const [autoEscape, setAutoEscape] = useState(true);

  const words = search.split(" ").filter((w) => w.trim());

  const chunks = findAllChunks({
    text: sampleText,
    highlightWords: words,
    caseSensitive,
    exactWord,
    autoEscape,
  });

  const matchCount = chunks.filter((c) => c.highlight).length;

  return (
    <div>
      <div style={{ display: "flex", gap: 12, marginBottom: 16, flexWrap: "wrap", alignItems: "center" }}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search terms..."
          style={{ flex: 1, minWidth: 200, padding: "8px 12px", borderRadius: 8, border: "1px solid #d1d5db", fontSize: 14 }}
        />
        <label style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 14 }}>
          <input type="checkbox" checked={caseSensitive} onChange={(e) => setCaseSensitive(e.target.checked)} />
          Case Sensitive
        </label>
        <label style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 14 }}>
          <input type="checkbox" checked={exactWord} onChange={(e) => setExactWord(e.target.checked)} />
          Exact Word
        </label>
        <label style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 14 }}>
          <input type="checkbox" checked={autoEscape} onChange={(e) => setAutoEscape(e.target.checked)} />
          Auto Escape
        </label>
      </div>

      <div style={{ marginBottom: 12, fontSize: 14, color: "#374151" }}>
        <strong>{matchCount}</strong> matches in <strong>{chunks.length}</strong> chunks
      </div>

      <div style={{ padding: 16, backgroundColor: "#f9fafb", borderRadius: 8, border: "1px solid #e5e7eb", lineHeight: 1.8, marginBottom: 16 }}>
        {chunks.map((chunk, i) =>
          chunk.highlight ? (
            <span key={i} style={{ backgroundColor: "#bbf7d0", fontWeight: 600, padding: "1px 3px", borderRadius: 3 }}>
              {chunk.text}
            </span>
          ) : (
            <span key={i}>{chunk.text}</span>
          ),
        )}
      </div>

      <details>
        <summary style={{ cursor: "pointer", fontSize: 14, fontWeight: 600, color: "#374151", marginBottom: 8 }}>
          Raw chunks array
        </summary>
        <pre style={{ backgroundColor: "#111827", color: "#d1d5db", padding: 16, borderRadius: 8, fontSize: 12, overflow: "auto", maxHeight: 300 }}>
          {JSON.stringify(chunks, null, 2)}
        </pre>
      </details>

      <p style={{ fontSize: 12, color: "#6b7280", marginTop: 12 }}>
        <code>findAllChunks</code> is a pure function with no React dependency. Use it in Node.js, tests, or SSR.
      </p>
    </div>
  );
};

export const Default: Story = {
  render: () => <FindAllChunksDemo />,
};
