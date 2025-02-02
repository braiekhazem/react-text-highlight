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

export interface TextHighlightProps
  extends React.HTMLAttributes<HTMLDivElement> {
  text: string;

  highlightWords: string[];

  caseSensitive?: boolean;

  highlightClassName?: string;

  highlightStyle?: React.CSSProperties;

  highlightTag?: keyof JSX.IntrinsicElements | DynamicWrapperTag;

  unhighlightClassName?: string;

  unhighlightStyle?: React.CSSProperties;

  unhighlightTag?: keyof JSX.IntrinsicElements | DynamicWrapperTag;

  className?: string;

  style?: React.CSSProperties;

  ellipsis?: boolean;

  activeHighlightClassName?: string;

  enableAutoScroll?: boolean;

  //-----------------

  tooltip?: boolean;

  tooltipClassName?: string;

  tooltipStyle?: React.CSSProperties;

  tooltipContent?: (word: string) => React.ReactNode;

  tooltipPosition?: "top" | "bottom" | "left" | "right";

  //-----------------

  onHighlightClick?: (e: React.MouseEvent, word: string, index: number) => void;

  onHighlightCountChange?: (count: number) => void;

  onCurrentHighlightChange?: (index: number) => void;

  wrapperTag?: keyof JSX.IntrinsicElements;

  autoEscape?: boolean;

  exactWord?: boolean;

  sanitize?: boolean;

  ignoreWords?: string[];
}

export interface HighlightElement {
  text: string;
  index: number;
}

export interface TextHighlightRef extends HTMLDivElement {
  scrollToHighlight: (index?: number) => void;
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
