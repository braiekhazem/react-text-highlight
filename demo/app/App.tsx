import React from "react";
import { Sparkles, Github, Code2, BookOpen } from "lucide-react";
import Logo from "../assets/logo.svg";
import { SideNav } from "./components/SideNav";
import { PlaygroundDemo } from "./components/PlaygroundDemo";
import { MultiColorDemo } from "./components/MultiColorDemo";
import { FindNavigateDemo } from "./components/FindNavigateDemo";
import { LogViewerDemo } from "./components/LogViewerDemo";
import { BadgeDemo } from "./components/BadgeDemo";
import { TooltipDemo } from "./components/TooltipDemo";
import { DensityAnalyzerDemo } from "./components/DensityAnalyzerDemo";
import { DebouncedSearchDemo } from "./components/DebouncedSearchDemo";
import { AccessibleDemo } from "./components/AccessibleDemo";
import { HeadlessDemo } from "./components/HeadlessDemo";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <SideNav />

      <header className="relative bg-white/80 backdrop-blur-lg border-b border-gray-200/50 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src={Logo}
                  alt="React Text Highlight Logo"
                  className="w-14 h-14 drop-shadow-lg"
                />
                <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-amber-400 animate-pulse" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  React Text Highlight
                </h1>
                <p className="text-sm text-gray-500 mt-0.5">
                  Interactive demo showcasing all features
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://rtt-storybook.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200"
              >
                <BookOpen className="h-5 w-5" />
                <span className="text-sm font-medium hidden sm:inline">
                  Storybook
                </span>
              </a>
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
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg shadow-blue-500/30"
              >
                <Code2 className="h-4 w-4" />
                <span className="text-sm font-semibold">Install</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <PlaygroundDemo />
        <MultiColorDemo />
        <FindNavigateDemo />
        <LogViewerDemo />
        <BadgeDemo />
        <TooltipDemo />
        <DensityAnalyzerDemo />
        <DebouncedSearchDemo />
        <HeadlessDemo />
        <AccessibleDemo />
      </main>

      <footer className="relative mt-20 border-t border-gray-200/50 bg-white/60 backdrop-blur-lg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col items-center gap-6">
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
            <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
              <p className="text-gray-600">
                Open source under the{" "}
                <span className="font-semibold text-gray-900">MIT License</span>
              </p>
              <span className="hidden sm:inline text-gray-400">|</span>
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
