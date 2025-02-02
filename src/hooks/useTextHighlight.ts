import { useEffect, useState } from "react";
import { findAllChunks } from "@src/utils/textHightlightCore";

interface TextHighlightOptions {
  highlightWords: string[];
  caseSensitive?: boolean;
  exactWord?: boolean;
  autoEscape?: boolean;
  ignoreWords?: string[];
  onHighlightCountChange?: ((count: number) => void) | undefined;
  onCurrentHighlightChange?: ((count: number) => void) | undefined;
}

export const useTextHighlight = (
  text: string,
  {
    highlightWords,
    caseSensitive = false,
    exactWord = false,
    autoEscape = true,
    ignoreWords = [],
    onHighlightCountChange,
    onCurrentHighlightChange,
  }: TextHighlightOptions
) => {
  const [currentHighlightIndex, setCurrentHighlightIndex] =
    useState<number>(-1);

  const chunks = findAllChunks({
    autoEscape,
    caseSensitive,
    highlightWords,
    ignoreWords,
    text,
    exactWord,
  });

  const highlightedElements = chunks
    .map((chunk, index) =>
      chunk.highlight ? { text: chunk.text, index } : null
    )
    .filter(Boolean) as { text: string; index: number }[];

  const highlightedElementsCount = highlightedElements.length;

  useEffect(() => {
    onHighlightCountChange?.(highlightedElementsCount);
  }, [highlightedElementsCount, onHighlightCountChange]);

  useEffect(() => {
    onCurrentHighlightChange?.(currentHighlightIndex ?? -1);
  }, [currentHighlightIndex, onCurrentHighlightChange]);

  return {
    chunks,
    highlightedElements,
    highlightedElementsCount,
    currentHighlightIndex,
    setCurrentHighlightIndex,
  };
};
