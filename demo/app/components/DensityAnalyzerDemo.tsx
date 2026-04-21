import React, { useState } from "react";
import { BarChart3 } from "lucide-react";
import { TextHighlight } from "@hazembraiek/react-text-highlight";
import { Section } from "./Section";

const content =
  "React performance optimization starts with understanding how React renders components. Use React.memo for expensive components and useMemo for costly computations. Performance profiling with React DevTools helps identify bottlenecks. Optimization should be measured, not guessed. React's virtual DOM diffing algorithm is already an optimization, but knowing when to prevent unnecessary re-renders through proper state management is key to peak performance.";

const totalWords = content.split(/\s+/).filter(Boolean).length;

export function DensityAnalyzerDemo() {
  const [keywords, setKeywords] = useState("React performance optimization");
  const [matchCount, setMatchCount] = useState(0);

  const density =
    totalWords > 0 ? ((matchCount / totalWords) * 100).toFixed(1) : "0.0";

  return (
    <Section
      id="density"
      icon={<BarChart3 className="h-5 w-5 text-white" />}
      title="Keyword Density Analyzer"
      description="Track how frequently keywords appear in your content"
      sourceFile="DensityAnalyzerDemo.tsx"
    >
      <div className="flex flex-wrap items-center gap-4 mb-4">
        <div className="relative flex-1 min-w-[200px]">
          <input
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="Keywords to analyze..."
          />
        </div>
        <div className="flex items-center gap-4 text-sm">
          <div className="bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200">
            <span className="text-blue-600 font-bold">{matchCount}</span>
            <span className="text-blue-500 ml-1">matches</span>
          </div>
          <div className="bg-purple-50 px-3 py-1.5 rounded-lg border border-purple-200">
            <span className="text-purple-600 font-bold">{density}%</span>
            <span className="text-purple-500 ml-1">density</span>
          </div>
          <div className="bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
            <span className="text-gray-600 font-bold">{totalWords}</span>
            <span className="text-gray-500 ml-1">words</span>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 text-base leading-relaxed text-gray-800">
        <TextHighlight
          text={content}
          highlightWords={keywords.split(" ").filter((k) => k.trim())}
          onHighlightCountChange={setMatchCount}
          highlightStyle={{
            backgroundColor: parseFloat(density) > 5 ? "#fecaca" : "#bbf7d0",
            padding: "1px 4px",
            borderRadius: "3px",
            fontWeight: 600,
          }}
          tooltip={{ enabled: false }}
        />
      </div>
      <p className="text-xs text-gray-500 mt-3">
        Highlight turns red when density exceeds 5% useful for SEO content
        analysis.
      </p>
    </Section>
  );
}
