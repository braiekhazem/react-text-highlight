import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TextHighlight } from "@src/index";

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
[INFO] Health check passed - uptime 99.97%
[ERROR] Connection to Redis cache failed: ECONNREFUSED 127.0.0.1:6379
[WARN] Rate limit approaching for client 192.168.1.42 (450/500 req/min)
[DEBUG] GC pause: 12ms - heap usage 67%
[ERROR] Unhandled promise rejection in worker thread #3
[INFO] Graceful shutdown initiated - draining connections`;

const meta: Meta<typeof TextHighlight> = {
  title: "Advanced/Log Viewer",
  component: TextHighlight,
};

export default meta;
type Story = StoryObj<typeof TextHighlight>;

export const Default: Story = {
  args: {
    text: logLines,
    highlightWords: Object.keys(severityColors),
    wrapperTag: "pre",
    style: {
      fontFamily: "ui-monospace, monospace",
      fontSize: 13,
      lineHeight: "1.9",
      color: "#d1d5db",
      margin: 0,
      backgroundColor: "#111827",
      padding: 20,
      borderRadius: 8,
    },
    unhighlightStyle: { color: "#d1d5db" },
    tooltip: { enabled: false },
    highlightTag: (word: string, index: number, props: any) => {
      const severity = severityColors[word.toLowerCase()] || severityColors.info;
      return React.createElement(
        "span",
        {
          key: props.key ?? index,
          style: {
            backgroundColor: severity.bg,
            color: severity.color,
            padding: "1px 8px",
            borderRadius: "4px",
            fontWeight: 700,
          },
        },
        word,
      );
    },
  },
};
