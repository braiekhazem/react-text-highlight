import React from "react";
import { Terminal } from "lucide-react";
import { TextHighlight } from "@hazembraiek/react-text-highlight";
import { Section } from "./Section";

const severityColors: Record<string, { bg: string; color: string }> = {
  error: { bg: "#fee2e2", color: "#991b1b" },
  warn: { bg: "#fef3c7", color: "#92400e" },
  info: { bg: "#dbeafe", color: "#1e40af" },
  debug: { bg: "#f3e8ff", color: "#6b21a8" },
};

const logLines = `[INFO] Server started on port 3000
[INFO] Connected to database cluster (3 replicas)
[DEBUG] Loading configuration from /etc/app/config.yaml
[WARN] Deprecated API endpoint called: GET /v1/users
[INFO] Health check passed  uptime 99.97%
[ERROR] Connection to Redis cache failed: ECONNREFUSED 127.0.0.1:6379
[WARN] Rate limit approaching for client 192.168.1.42 (450/500 req/min)
[DEBUG] GC pause: 12ms  heap usage 67%
[ERROR] Unhandled promise rejection in worker thread #3
[INFO] Graceful shutdown initiated  draining connections`;

export function LogViewerDemo() {
  return (
    <Section
      id="log-viewer"
      icon={<Terminal className="h-5 w-5 text-white" />}
      title="Log Viewer"
      description="Color-code log severity levels with custom highlight rendering"
      sourceFile="LogViewerDemo.tsx"
    >
      <div className="flex flex-wrap gap-2 mb-4">
        {Object.entries(severityColors).map(([level, colors]) => (
          <span
            key={level}
            className="text-xs font-bold px-2.5 py-1 rounded uppercase tracking-wide"
            style={{ backgroundColor: colors.bg, color: colors.color }}
          >
            {level}
          </span>
        ))}
      </div>
      <div className="bg-gray-900 rounded-xl p-5 border border-gray-700 overflow-x-auto">
        <TextHighlight
          text={logLines}
          highlightWords={Object.keys(severityColors)}
          wrapperTag="pre"
          style={{
            fontFamily: "ui-monospace, monospace",
            fontSize: 13,
            lineHeight: "1.9",
            color: "#d1d5db",
            margin: 0,
          }}
          unhighlightStyle={{ color: "#d1d5db" }}
          highlightTag={(word, index, props) => {
            const severity =
              severityColors[word.toLowerCase()] ?? severityColors["info"]!;
            return (
              <span
                key={props.key ?? index}
                style={{
                  backgroundColor: severity.bg,
                  color: severity.color,
                  padding: "1px 8px",
                  borderRadius: "4px",
                  fontWeight: 700,
                }}
              >
                {word}
              </span>
            );
          }}
          tooltip={{ enabled: false }}
        />
      </div>
    </Section>
  );
}
