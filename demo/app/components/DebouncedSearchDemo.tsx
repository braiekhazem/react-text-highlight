import React, { useState } from "react";
import { Zap, Search } from "lucide-react";
import { TextHighlight } from "@hazembraiek/react-text-highlight";
import { Section } from "./Section";
import { useDebouncedValue } from "./useDebouncedValue";

const content =
  "React Text Highlight is a flexible library for highlighting search terms in large blocks of text content. It supports multiple search terms, case sensitivity, exact word matching, and custom rendering of highlighted segments. The library is lightweight, fully typed with TypeScript, and works with React 18 and React 19. Use it to build search interfaces, documentation viewers, log analyzers, and more.";

export function DebouncedSearchDemo() {
  const [input, setInput] = useState("");
  const debouncedSearch = useDebouncedValue(input, 300);
  const [matchCount, setMatchCount] = useState(0);

  return (
    <Section
      id="debounced"
      icon={<Zap className="h-5 w-5 text-white" />}
      title="Debounced Live Search"
      description="300ms debounce prevents excessive re-renders while typing fast"
      sourceFile="DebouncedSearchDemo.tsx"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="relative flex-1">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="Type fast  highlights debounce at 300ms..."
          />
          <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
        </div>
        {matchCount > 0 && (
          <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full whitespace-nowrap">
            {matchCount} matches
          </span>
        )}
      </div>
      <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 text-base leading-relaxed text-gray-800">
        <TextHighlight
          text={content}
          highlightWords={debouncedSearch ? [debouncedSearch] : []}
          onHighlightCountChange={setMatchCount}
          highlightStyle={{
            backgroundColor: "#d1fae5",
            fontWeight: 600,
            borderRadius: "3px",
            padding: "1px 3px",
          }}
          tooltip={{ enabled: false }}
        />
      </div>
    </Section>
  );
}
