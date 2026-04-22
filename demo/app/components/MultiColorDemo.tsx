import React from "react";
import { Palette } from "lucide-react";
import { TextHighlight } from "@hazembraiek/react-text-highlight";
import { Section } from "./Section";

const colorMap: Record<string, { bg: string; text: string }> = {
  react: { bg: "#dbeafe", text: "#1d4ed8" },
  component: { bg: "#fce7f3", text: "#be185d" },
  hooks: { bg: "#d1fae5", text: "#065f46" },
  state: { bg: "#fef3c7", text: "#92400e" },
  props: { bg: "#e0e7ff", text: "#3730a3" },
  render: { bg: "#ffe4e6", text: "#9f1239" },
};

export function MultiColorDemo() {
  const words = Object.keys(colorMap);

  return (
    <Section
      id="multi-color"
      icon={<Palette className="h-5 w-5 text-white" />}
      title="Multi-Color Highlights"
      description="Assign different colors to each search term using a custom highlightTag"
      sourceFile="MultiColorDemo.tsx"
    >
      <div className="flex flex-wrap gap-2 mb-4">
        {words.map((word) => (
          <span
            key={word}
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{
              backgroundColor: colorMap[word]!.bg,
              color: colorMap[word]!.text,
            }}
          >
            {word}
          </span>
        ))}
      </div>
      <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 text-base leading-relaxed text-gray-800">
        <TextHighlight
          text="React is a library for building user interfaces using component trees. React hooks like useState manage state, while props flow data between each component. Every render cycle reconciles the virtual DOM efficiently."
          highlightWords={words}
          highlightTag={(word, index, props) => (
            <mark
              key={props.key ?? index}
              style={{
                backgroundColor:
                  colorMap[word.toLowerCase()]?.bg || "#fef9c3",
                color: colorMap[word.toLowerCase()]?.text || "#854d0e",
                padding: "2px 6px",
                borderRadius: "4px",
                fontWeight: 600,
              }}
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
