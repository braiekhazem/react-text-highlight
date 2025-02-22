import React, { useState } from "react";
import { Search, Sparkles } from "lucide-react";
import Logo from "../assets/logo.svg";
import { TextHighlight } from "../../src/index";

function App() {
  const [searchTerms, setSearchTerms] = useState("");
  const [activeIndex, setActiveIndex] = useState("-1");
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [text, setText] = useState(
    "When in the Course of human events it becomes necessary for one people to dissolve the political bands which have connected them with another and to assume among the powers of the earth, the separate and equal station to which the Laws of Nature and of Nature's God entitle them, a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation."
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <img src={Logo} alt="Logo" className="w-40 h-40" />
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center justify-center gap-2">
            <Sparkles className="h-8 w-8 text-yellow-400" />
            <span>Text Highlighter</span>
          </h1>
          <p className="text-gray-300">Highlight words and phrases with ease</p>
        </div>

        {/* Main Content */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
          <div className="space-y-6">
            {/* Search Controls */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search terms
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    value={searchTerms}
                    onChange={(e) => setSearchTerms(e.target.value)}
                    placeholder="and or the"
                  />
                  <Search className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Active Index
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={activeIndex}
                  onChange={(e) => setActiveIndex(e.target.value)}
                />
              </div>

              <div className="flex items-end">
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded transition-colors"
                    checked={caseSensitive}
                    onChange={(e) => setCaseSensitive(e.target.checked)}
                  />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                    Case Sensitive?
                  </span>
                </label>
              </div>
            </div>

            {/* Text Area */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Body of Text
              </label>
              <textarea
                className="w-full border border-gray-300 rounded-lg px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>

            {/* Output */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Output
              </label>
              <TextHighlight
                text={text}
                searchTerms={searchTerms}
                caseSensitive={caseSensitive}
                activeIndex={activeIndex}
              />
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-6 border-t border-gray-200">
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center space-x-1 transition-colors"
                onClick={(e) => e.preventDefault()}
              >
                <span>View documentation</span>
              </a>
              <div className="text-sm text-gray-500">
                Open source under the MIT license
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
