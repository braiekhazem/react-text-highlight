import React, { useState } from "react";
import { Search, Github, Sparkles, Zap, Code2, Heart } from "lucide-react";
import { TextHighlight } from "@hazembraiek/react-text-highlight";
import Logo from "../assets/logo.svg";

function App() {
  const [searchTerms, setSearchTerms] = useState("powerful flexible");
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [matchCount, setMatchCount] = useState(0);
  const [text, setText] = useState(
    "Welcome to React Text Highlight! This powerful component makes it incredibly easy to highlight text in your React applications. Whether you're building a search feature, documentation site, or content management system, this tool has you covered with flexible options and beautiful defaults."
  );

  const examples = [
    {
      label: "🎯 Simple Search",
      terms: "powerful flexible",
      text: "Welcome to React Text Highlight! This powerful component makes it incredibly easy to highlight text in your React applications. Whether you're building a search feature, documentation site, or content management system, this tool has you covered with flexible options and beautiful defaults.",
      emoji: "🎯",
    },
    {
      label: "🌟 Multiple Words",
      terms: "React component search feature",
      text: "Welcome to React Text Highlight! This powerful component makes it incredibly easy to highlight text in your React applications. Whether you're building a search feature, documentation site, or content management system, this tool has you covered with flexible options and beautiful defaults.",
      emoji: "🌟",
    },
    {
      label: "📚 Documentation",
      terms: "JavaScript TypeScript performance",
      text: "Modern JavaScript and TypeScript development requires tools that enhance developer experience. Performance optimization, code splitting, and efficient rendering are crucial for building fast web applications. This component integrates seamlessly with your existing React codebase.",
      emoji: "📚",
    },
  ];

  const loadExample = (example: (typeof examples)[0]) => {
    setSearchTerms(example.terms);
    setText(example.text);
    setCaseSensitive(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <header className="relative bg-white/80 backdrop-blur-lg border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src={Logo}
                  alt="React Text Highlight Logo"
                  className="w-14 h-14 sm:w-16 sm:h-16 drop-shadow-lg"
                />
                <Sparkles className="absolute -top-1 -right-1 h-5 w-5 text-amber-400 animate-pulse" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  React Text Highlight
                </h1>
                <p className="text-sm text-gray-600 mt-1 flex items-center gap-2">
                  <Zap className="h-3.5 w-3.5 text-amber-500" />
                  Make your text shine with beautiful highlights
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/braiekhazem/react-text-highlight"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200"
              >
                <Github className="h-5 w-5" />
                <span className="text-sm font-medium hidden sm:inline">
                  GitHub
                </span>
              </a>
              <a
                href="https://www.npmjs.com/package/@hazembraiek/react-text-highlight"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40"
              >
                <Code2 className="h-4 w-4" />
                <span className="text-sm font-semibold">Install</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl border border-gray-200/50 p-6 shadow-xl sticky top-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Search className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  Configuration
                </h3>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    🔍 Search Terms
                  </label>
                  <div className="relative group">
                    <input
                      type="text"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm transition-all duration-200 hover:border-gray-300"
                      value={searchTerms}
                      onChange={(e) => setSearchTerms(e.target.value)}
                      placeholder="powerful flexible amazing..."
                    />
                    <Search className="absolute right-3 top-3.5 h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                  </div>
                  <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                    💡 Separate words with spaces
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl p-4 border border-gray-200">
                  <label className="flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-6 rounded-full transition-all duration-300 ${
                          caseSensitive
                            ? "bg-gradient-to-r from-blue-500 to-indigo-600"
                            : "bg-gray-300"
                        }`}
                      >
                        <div
                          className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 mt-1 ml-1 ${
                            caseSensitive ? "translate-x-4" : ""
                          }`}
                        ></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                        Aa Case Sensitive
                      </span>
                    </div>
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={caseSensitive}
                      onChange={(e) => setCaseSensitive(e.target.checked)}
                    />
                  </label>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border-2 border-blue-200/50 shadow-inner">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">
                        Matches Found
                      </div>
                      <div className="text-3xl font-black text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
                        {matchCount}
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t-2 border-gray-200">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                    <span>⚡ Quick Examples</span>
                  </div>
                  <div className="space-y-2">
                    {examples.map((example, idx) => (
                      <button
                        key={idx}
                        onClick={() => loadExample(example)}
                        className="w-full text-left px-4 py-3 text-sm font-medium border-2 border-gray-200 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:border-indigo-300 transition-all duration-200 transform hover:scale-105 hover:shadow-md"
                      >
                        {example.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl border border-gray-200/50 p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xl">📝</span>
                  <span className="text-base font-bold text-gray-900">
                    Your Text
                  </span>
                </div>
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {text.length} characters
                </span>
              </div>
              <textarea
                className="w-full border-2 border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none text-sm text-gray-700 leading-relaxed transition-all duration-200 hover:border-gray-300 bg-white"
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={5}
                placeholder="Type or paste your text here... ✍️"
              />
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-2xl border border-gray-200/50 p-6 shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">✨</span>
                <span className="text-base font-bold text-gray-900">
                  Highlighted Result
                </span>
                {matchCount > 0 && (
                  <span className="ml-auto text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full animate-pulse">
                    {matchCount} {matchCount === 1 ? "match" : "matches"} 🎯
                  </span>
                )}
              </div>
              <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50 rounded-xl p-6 border-2 border-amber-200/50 min-h-[180px] shadow-inner">
                <div className="text-base text-gray-800 leading-relaxed">
                  <TextHighlight
                    text={
                      text ||
                      "Your highlighted text will appear here... Start typing to see the magic! ✨"
                    }
                    highlightWords={searchTerms
                      .split(" ")
                      .filter((term) => term.trim())}
                    caseSensitive={caseSensitive}
                    onHighlightCountChange={(count) => setMatchCount(count)}
                    tooltip={{ enabled: false }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative mt-20 border-t border-gray-200/50 bg-white/60 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col items-center gap-6">
            {/* CTA Section */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Ready to get started?
              </h3>
              <p className="text-gray-600 mb-4">
                Install it now and start highlighting!
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <code className="px-4 py-2 bg-gray-900 text-green-400 rounded-lg font-mono text-sm">
                  npm install @hazembraiek/react-text-highlight
                </code>
                <a
                  href="https://www.npmjs.com/package/@hazembraiek/react-text-highlight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-semibold shadow-lg"
                >
                  View on NPM
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

            {/* Footer Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
              <span className="hidden sm:inline text-gray-400">•</span>
              <p className="text-gray-600">
                Open source under the{" "}
                <span className="font-semibold text-gray-900">MIT License</span>
              </p>
              <span className="hidden sm:inline text-gray-400">•</span>
              <a
                href="https://github.com/braiekhazem/react-text-highlight"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 transition-colors"
              >
                <Github className="h-4 w-4" />
                Star on GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
