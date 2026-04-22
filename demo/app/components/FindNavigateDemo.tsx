import React, { useState, useRef } from "react";
import { Navigation, Search, ChevronUp, ChevronDown } from "lucide-react";
import { TextHighlight } from "@hazembraiek/react-text-highlight";
import type { TextHighlightRef } from "@hazembraiek/react-text-highlight";
import { Section } from "./Section";

const article =
  "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. TypeScript adds optional static typing and class-based object-oriented programming to the language. The TypeScript compiler transpiles TypeScript code to plain JavaScript. Many popular frameworks like Angular, Vue, and React have first-class TypeScript support. TypeScript helps catch errors at compile time rather than at runtime.";

export function FindNavigateDemo() {
  const [search, setSearch] = useState("TypeScript");
  const [matchCount, setMatchCount] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const ref = useRef<TextHighlightRef>(null);

  return (
    <Section
      id="find-navigate"
      icon={<Navigation className="h-5 w-5 text-white" />}
      title="Find & Navigate"
      description="Use ref methods to navigate between matches with Previous / Next"
      sourceFile="FindNavigateDemo.tsx"
    >
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <div className="relative flex-1 min-w-[200px]">
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentIndex(-1);
            }}
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="Search..."
          />
          <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => ref.current?.previous()}
            className="p-2 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
            aria-label="Previous match"
          >
            <ChevronUp className="h-4 w-4" />
          </button>
          <button
            onClick={() => ref.current?.next()}
            className="p-2 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
            aria-label="Next match"
          >
            <ChevronDown className="h-4 w-4" />
          </button>
          <span className="text-sm font-medium text-gray-600 min-w-[60px] text-center tabular-nums">
            {matchCount > 0
              ? `${currentIndex + 1} / ${matchCount}`
              : "0 / 0"}
          </span>
        </div>
      </div>
      <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 text-base leading-relaxed text-gray-800">
        <TextHighlight
          ref={ref}
          text={article}
          highlightWords={search ? [search] : []}
          onHighlightCountChange={setMatchCount}
          onCurrentHighlightChange={setCurrentIndex}
          highlightStyle={{
            backgroundColor: "#fef3c7",
            borderBottom: "2px solid #f59e0b",
            padding: "1px 2px",
            borderRadius: "2px",
          }}
          activeHighlightClassName="active-highlight"
          tooltip={{ enabled: false }}
        />
      </div>
    </Section>
  );
}
