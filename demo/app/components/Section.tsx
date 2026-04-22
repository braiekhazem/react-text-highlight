import React from "react";
import { Code2 } from "lucide-react";

const GITHUB_BASE =
  "https://github.com/braiekhazem/react-text-highlight/blob/main/demo/app/components";

interface SectionProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  sourceFile: string;
  children: React.ReactNode;
}

export function Section({
  id,
  icon,
  title,
  description,
  sourceFile,
  children,
}: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl border border-gray-200/50 p-6 sm:p-8 shadow-xl">
        <div className="flex items-start justify-between gap-3 mb-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
              {icon}
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">{title}</h2>
              <p className="text-sm text-gray-500 mt-0.5">{description}</p>
            </div>
          </div>
          <a
            href={`${GITHUB_BASE}/${sourceFile}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors shrink-0"
          >
            <Code2 className="h-3.5 w-3.5" />
            Source
          </a>
        </div>
        {children}
      </div>
    </section>
  );
}
