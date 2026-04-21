import React from "react";
import { MessageSquare } from "lucide-react";
import { TextHighlight } from "@hazembraiek/react-text-highlight";
import { Section } from "./Section";

const definitions: Record<string, string> = {
  closure:
    "A function that retains access to its outer scope even after that scope has returned.",
  hoisting:
    "JavaScript's behavior of moving declarations to the top of their scope before execution.",
  prototype:
    "The mechanism by which JavaScript objects inherit properties from other objects.",
  promise:
    "An object representing the eventual completion or failure of an async operation.",
};

export function TooltipDemo() {
  return (
    <Section
      id="tooltips"
      icon={<MessageSquare className="h-5 w-5 text-white" />}
      title="Tooltips"
      description="Hover over highlighted terms to see their definitions"
      sourceFile="TooltipDemo.tsx"
    >
      <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 text-base leading-relaxed text-gray-800">
        <TextHighlight
          text="JavaScript has several key concepts every developer should understand. A closure captures variables from its surrounding scope. Hoisting moves function and variable declarations before code runs. The prototype chain enables inheritance between objects. A promise represents an async value that resolves in the future."
          highlightWords={Object.keys(definitions)}
          highlightStyle={{
            backgroundColor: "#dbeafe",
            borderBottom: "2px dashed #3b82f6",
            padding: "1px 3px",
            borderRadius: "2px",
            fontWeight: 600,
            cursor: "help",
          }}
          tooltip={{
            enabled: true,
            content: (text: string) =>
              definitions[text.toLowerCase()] || text,
          }}
        />
      </div>
      <p className="text-xs text-gray-500 mt-3">
        Hover over the blue highlighted terms above to see definitions.
      </p>
    </Section>
  );
}
