import React, { useState, useRef } from "react";
import { Shield } from "lucide-react";
import { TextHighlight } from "@hazembraiek/react-text-highlight";
import type { TextHighlightRef } from "@hazembraiek/react-text-highlight";
import { Section } from "./Section";

export function AccessibleDemo() {
  const ref = useRef<TextHighlightRef>(null);
  const [current, setCurrent] = useState(-1);
  const [total, setTotal] = useState(0);

  return (
    <Section
      id="accessible"
      icon={<Shield className="h-5 w-5 text-white" />}
      title="Accessible Highlighting"
      description="ARIA labels, live regions, and keyboard-navigable matches"
      sourceFile="AccessibleDemo.tsx"
    >
      <div
        role="search"
        aria-label="Highlight navigation"
        className="flex items-center gap-3 mb-4"
      >
        <button
          onClick={() => ref.current?.previous()}
          className="px-3 py-2 text-sm font-medium rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
          aria-label="Previous match"
        >
          Previous
        </button>
        <button
          onClick={() => ref.current?.next()}
          className="px-3 py-2 text-sm font-medium rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
          aria-label="Next match"
        >
          Next
        </button>
        <span aria-live="polite" className="text-sm font-medium text-gray-600">
          {total > 0 ? `Match ${current + 1} of ${total}` : "No matches"}
        </span>
      </div>
      <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 text-base leading-relaxed text-gray-800">
        <TextHighlight
          ref={ref}
          text="Accessibility matters. Building accessible components makes the web better for everyone. Screen readers can announce each accessible highlight as users navigate through accessible search results."
          highlightWords={["accessible", "Accessibility"]}
          onHighlightCountChange={setTotal}
          onCurrentHighlightChange={setCurrent}
          highlightStyle={{
            backgroundColor: "#dbeafe",
            fontWeight: 600,
            padding: "2px 4px",
            borderRadius: "3px",
          }}
          activeHighlightClassName="active-highlight"
          highlightTag={(word, index, props) => (
            <mark
              key={props.key ?? index}
              style={props.style}
              className={props.className}
              role="mark"
              aria-label={`Highlighted: ${word}`}
            >
              {word}
            </mark>
          )}
          tooltip={{ enabled: false }}
        />
      </div>
    </Section>
  );
}
