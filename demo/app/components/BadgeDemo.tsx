import React from "react";
import { Tag } from "lucide-react";
import { TextHighlight } from "@hazembraiek/react-text-highlight";
import { Section } from "./Section";

const keywords = ["API", "gateway", "TLS", "OAuth", "microservice"];

export function BadgeDemo() {
  return (
    <Section
      id="badges"
      icon={<Tag className="h-5 w-5 text-white" />}
      title="Badge Highlights"
      description="Render matched terms as pill-shaped badges using a custom component"
      sourceFile="BadgeDemo.tsx"
    >
      <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 text-base leading-loose text-gray-800">
        <TextHighlight
          text="Deploy the API gateway behind the load balancer with TLS termination enabled. Each microservice authenticates via OAuth tokens issued by the central API gateway. The TLS certificates are rotated automatically by the microservice mesh controller."
          highlightWords={keywords}
          highlightTag={(word, index, props) => (
            <span
              key={props.key ?? index}
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "#e0e7ff",
                color: "#3730a3",
                padding: "2px 10px",
                borderRadius: "9999px",
                fontSize: "0.875em",
                fontWeight: 600,
                border: "1px solid #a5b4fc",
                lineHeight: "1.5",
              }}
            >
              {word}
            </span>
          )}
          tooltip={{ enabled: false }}
        />
      </div>
    </Section>
  );
}
