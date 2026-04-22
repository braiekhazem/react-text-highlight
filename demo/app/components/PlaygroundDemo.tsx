import React, { useState } from "react";
import { Search } from "lucide-react";
import { TextHighlight } from "@hazembraiek/react-text-highlight";
import { Section } from "./Section";

const examples = [
  {
    label: "Simple Search",
    terms: "powerful flexible",
    text: "Welcome to React Text Highlight! This powerful component makes it incredibly easy to highlight text in your React applications. Whether you're building a search feature, documentation site, or content management system, this tool has you covered with flexible options and beautiful defaults.",
  },
  {
    label: "Multiple Words",
    terms: "React component search feature",
    text: "Welcome to React Text Highlight! This powerful component makes it incredibly easy to highlight text in your React applications. Whether you're building a search feature, documentation site, or content management system, this tool has you covered with flexible options and beautiful defaults.",
  },
  {
    label: "Technical Content",
    terms: "JavaScript TypeScript performance",
    text: "Modern JavaScript and TypeScript development requires tools that enhance developer experience. Performance optimization, code splitting, and efficient rendering are crucial for building fast web applications. This component integrates seamlessly with your existing React codebase.",
  },
];

export function PlaygroundDemo() {
  const [searchTerms, setSearchTerms] = useState("powerful flexible");
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [exactWord, setExactWord] = useState(false);
  const [matchCount, setMatchCount] = useState(0);
  const [text, setText] = useState(examples[0]!.text);

  const loadExample = (example: (typeof examples)[0]) => {
    setSearchTerms(example.terms);
    setText(example.text);
    setCaseSensitive(false);
    setExactWord(false);
  };

  return (
    <Section
      id="playground"
      icon={<Search className="h-5 w-5 text-white" />}
      title="Interactive Playground"
      description="Type search terms, toggle options, and see highlighting in real time"
      sourceFile="PlaygroundDemo.tsx"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Search Terms
            </label>
            <div className="relative group">
              <input
                type="text"
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm transition-all duration-200 hover:border-gray-300"
                value={searchTerms}
                onChange={(e) => setSearchTerms(e.target.value)}
                placeholder="powerful flexible amazing..."
              />
              <Search className="absolute right-3 top-3.5 h-4 w-4 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
            </div>
            <p className="text-xs text-gray-500 mt-1.5">
              Separate words with spaces
            </p>
          </div>

          {[
            {
              label: "Case Sensitive",
              value: caseSensitive,
              setter: setCaseSensitive,
            },
            { label: "Exact Word", value: exactWord, setter: setExactWord },
          ].map((toggle) => (
            <label
              key={toggle.label}
              className="flex items-center justify-between cursor-pointer bg-gray-50 rounded-xl p-3 border border-gray-200 hover:bg-gray-100 transition-colors"
            >
              <span className="text-sm font-medium text-gray-700">
                {toggle.label}
              </span>
              <div
                className={`w-10 h-6 rounded-full transition-all duration-300 relative ${
                  toggle.value
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600"
                    : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full shadow-md absolute top-1 transition-transform duration-300 ${
                    toggle.value ? "left-5" : "left-1"
                  }`}
                />
              </div>
              <input
                type="checkbox"
                className="sr-only"
                checked={toggle.value}
                onChange={(e) => toggle.setter(e.target.checked)}
              />
            </label>
          ))}

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200/50">
            <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">
              Matches Found
            </div>
            <div className="text-3xl font-black text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
              {matchCount}
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <div className="text-sm font-semibold text-gray-700 mb-2">
              Quick Examples
            </div>
            <div className="space-y-2">
              {examples.map((example, idx) => (
                <button
                  key={idx}
                  onClick={() => loadExample(example)}
                  className="w-full text-left px-3 py-2.5 text-sm font-medium border border-gray-200 rounded-xl hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-200"
                >
                  {example.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-700">
                Your Text
              </span>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                {text.length} chars
              </span>
            </div>
            <textarea
              className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none text-sm text-gray-700 leading-relaxed transition-all duration-200 hover:border-gray-300"
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={4}
              placeholder="Type or paste your text here..."
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-700">
                Highlighted Result
              </span>
              {matchCount > 0 && (
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                  {matchCount} {matchCount === 1 ? "match" : "matches"}
                </span>
              )}
            </div>
            <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50 rounded-xl p-5 border border-amber-200/50 min-h-[120px]">
              <div className="text-base text-gray-800 leading-relaxed">
                <TextHighlight
                  text={text || "Start typing to see highlights..."}
                  highlightWords={searchTerms
                    .split(" ")
                    .filter((t) => t.trim())}
                  caseSensitive={caseSensitive}
                  exactWord={exactWord}
                  onHighlightCountChange={setMatchCount}
                  tooltip={{ enabled: false }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
