import mergeRefs from "@src/utils/mergeRefs";
import React, { forwardRef, useImperativeHandle, useRef } from "react";

// Import the prop types
interface TextHighlightProps {
  text: string;
  highlightWords: string[];
  caseSensitive?: boolean;
  highlightClassName?: string;
  highlightStyle?: React.CSSProperties;
  highlightTag?: string;
  onHighlightClick?: (word: string) => void;
  wrapperTag?: keyof JSX.IntrinsicElements;
  autoEscape?: boolean;
  sanitize?: boolean;
  ignoreWords?: string[];
}

// ReactTextHighlight Component
export const TextHighlight = forwardRef<HTMLDivElement, TextHighlightProps>(
  (
    {
      text = "",
      highlightWords,
      caseSensitive = false,
      highlightClassName = "",
      highlightStyle = { backgroundColor: "yellow", fontWeight: "bold" },
      onHighlightClick,
      wrapperTag: WrapperTag = "span",
      highlightTag: HighlightTag = "mark",
      autoEscape = true,
      sanitize = false,
      ignoreWords = [],
    },
    ref
  ) => {
    const internalRef = useRef<any>(null);

    // Expose methods to parent via the ref
    // useImperativeHandle(ref, () => ({
    //   scrollToHighlight: () => {
    //     if (internalRef.current) {
    //       internalRef.current.scrollIntoView({ behavior: "smooth" });
    //     }
    //   },
    // }));

    const escapeRegex = (word: string) =>
      autoEscape ? word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") : word;

    const generateRegex = () => {
      const words = highlightWords
        .filter((word) => !ignoreWords.includes(word))
        .map(escapeRegex)
        .join("|");
      return new RegExp(`(${words})`, caseSensitive ? "g" : "gi");
    };

    const getHighlightedText = () => {
      if (!highlightWords?.length) return text;

      const regex = generateRegex();
      const parts = text.split(regex);

      return parts.map((part, index) =>
        regex.test(part)
          ? React.createElement(
              HighlightTag,
              {
                key: index,
                className: highlightClassName,
                style: highlightStyle,
                onClick: () => onHighlightClick?.(part),
              },
              part
            )
          : React.createElement(WrapperTag, { key: index }, part)
      );
    };

    return React.createElement(
      WrapperTag,
      { ref: mergeRefs(internalRef, ref) },
      getHighlightedText()
    );
  }
);
