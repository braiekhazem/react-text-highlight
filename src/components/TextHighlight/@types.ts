import { TextHighlightRef } from "@src/types/textHighlight";
import { TooltipProps } from "rc-tooltip/lib/Tooltip";
import { JSX, ReactNode } from "react";

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

  ref?: React.Ref<TextHighlightRef>;

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

  tooltip?: Omit<Partial<TooltipProps>, "overlay"> & {
    content?: (text: string) => ReactNode;
    enabled?: boolean;
  };

  onHighlightClick?: (e: React.MouseEvent, word: string, index: number) => void;

  onHighlightCountChange?: (count: number) => void;

  onCurrentHighlightChange?: (index: number) => void;

  wrapperTag?: keyof JSX.IntrinsicElements;

  autoEscape?: boolean;

  exactWord?: boolean;

  sanitize?: boolean;

  ignoreWords?: string[];
}
