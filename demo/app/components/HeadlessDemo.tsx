import { useState } from "react";
import { Layers, Search } from "lucide-react";
import {
  useTextHighlight,
  findAllChunks,
} from "@hazembraiek/react-text-highlight";
import { Section } from "./Section";

const sampleText =
  "React hooks revolutionized how developers build React components. Custom hooks let you extract and reuse stateful logic across components. The useEffect hook handles side effects, while useState manages local component state. React Server Components bring hooks to a new level.";

export function HeadlessDemo() {
  const [search, setSearch] = useState("React hooks");
  const [tab, setTab] = useState<"hook" | "function">("hook");

  const words = search.split(" ").filter((w) => w.trim());

  const { chunks, highlightedElementsCount } = useTextHighlight(sampleText, {
    highlightWords: words,
  });

  const functionChunks = findAllChunks({
    text: sampleText,
    highlightWords: words,
    autoEscape: true,
  });

  const activeChunks = tab === "hook" ? chunks : functionChunks;
  const matchCount =
    tab === "hook"
      ? highlightedElementsCount
      : functionChunks.filter((c) => c.highlight).length;

  return (
    <Section
      id="headless"
      icon={<Layers className="h-5 w-5 text-white" />}
      title="Headless Usage"
      description="Use the hook or core function directly  bring your own rendering"
      sourceFile="HeadlessDemo.tsx"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="relative flex-1 min-w-[200px]">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="Search terms..."
          />
          <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
        </div>
        <span className="text-sm font-medium text-gray-600">
          {matchCount} matches
        </span>
      </div>

      <div className="flex gap-2 mb-4">
        {(["hook", "function"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
              tab === t
                ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {t === "hook" ? "useTextHighlight" : "findAllChunks"}
          </button>
        ))}
      </div>

      <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 text-base leading-relaxed text-gray-800">
        {activeChunks.map((chunk, i) =>
          chunk.highlight ? (
            <span
              key={i}
              className="bg-amber-200 text-amber-900 font-semibold px-1 rounded"
            >
              {chunk.text}
            </span>
          ) : (
            <span key={i}>{chunk.text}</span>
          ),
        )}
      </div>

      <div className="mt-4 bg-gray-900 rounded-xl p-4 overflow-x-auto">
        <pre className="text-sm text-gray-300 leading-relaxed">
          <code>
            {tab === "hook"
              ? `import { useTextHighlight } from "@hazembraiek/react-text-highlight";

const { chunks, highlightedElementsCount } = useTextHighlight(text, {
  highlightWords: ["React", "hooks"],
});

// chunks: [{ text: "React", highlight: true }, { text: " ", highlight: false }, ...]
// Render however you want!`
              : `import { findAllChunks } from "@hazembraiek/react-text-highlight";

const chunks = findAllChunks({
  text,
  highlightWords: ["React", "hooks"],
  autoEscape: true,
});

// Pure function  works outside React (Node.js, tests, SSR)`}
          </code>
        </pre>
      </div>

      <p className="text-xs text-gray-500 mt-3">
        <strong>useTextHighlight</strong> React hook with state tracking and
        callbacks. <strong>findAllChunks</strong> pure function, no React
        dependency, works anywhere.
      </p>
    </Section>
  );
}
