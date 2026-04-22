import { ReactNode } from "react";

export type DynamicWrapperTag = (
  word: string,
  index: number,
  props: {
    className: string;
    style: React.CSSProperties;
    onClick?: () => void;
  }
) => ReactNode;

export interface HighlightElement {
  text: string;
  index: number;
}

export interface TextHighlightRef extends HTMLDivElement {
  scrollToHighlight: (index?: number) => void;
  next: () => void;
  previous: () => void;
  currentHighlightIndex: number;
  highlightedElements: HighlightElement[] | [];
  highlightedElementsCount: number;
  chunks: { text: string; highlight: boolean }[];
  chunksCount: number;
}

export interface IChunk {
  text: string;
  highlight: boolean;
}
