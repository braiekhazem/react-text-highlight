import { concatPrefixCls } from "@src/utils/concatPrefixCls";
import mergeRefs from "@src/utils/mergeRefs";
import { findAllChunks } from "@src/utils/textHightlightCore";
import { renderWrapperTag } from "@src/utils/textHightlightUtils";
import React, { createElement, forwardRef, ReactNode, useRef } from "react";

const REACT_TEXT_HIGHLIGHT_PREFIX = "react-text-highlight";

export type DynamicWrapperTag = (
  word: string,
  index: number,
  props: {
    className: string;
    style: React.CSSProperties;
    onClick?: () => void;
  }
) => ReactNode;

interface TextHighlightProps extends React.HTMLAttributes<HTMLDivElement> {
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

  //-----------------

  tooltip?: boolean;

  tooltipClassName?: string;

  tooltipStyle?: React.CSSProperties;

  tooltipContent?: (word: string) => React.ReactNode;

  tooltipPosition?: "top" | "bottom" | "left" | "right";

  //-----------------

  onHighlightClick?: (word: string) => void;

  wrapperTag?: keyof JSX.IntrinsicElements;

  autoEscape?: boolean;

  sanitize?: boolean;

  ignoreWords?: string[];
}

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
      unhighlightClassName = "",
      unhighlightStyle = { backgroundColor: "", fontWeight: "" },
      unhighlightTag = "span",
      className = "",
      style,
      ellipsis = false,
      sanitize = true,
      autoEscape = true,
      ignoreWords = [],
      ...rest
    },
    ref
  ) => {
    const internalRef = useRef<any>(null);

    const getHighlightedText = () => {
      if (!highlightWords?.length) return text;
      const chunks = findAllChunks({
        autoEscape,
        caseSensitive,
        highlightWords,
        ignoreWords,
        text,
      });

      return chunks.map((chunk, index) =>
        chunk?.highlight
          ? renderWrapperTag(
              HighlightTag,
              {
                key: index,
                className: highlightClassName,
                style: highlightStyle,
                onClick: () => onHighlightClick?.(chunk.text),
              },
              chunk.text
            )
          : renderWrapperTag(
              unhighlightTag,
              {
                key: index,
                className: unhighlightClassName,
                style: unhighlightStyle,
              },
              chunk.text
            )
      );
    };

    return createElement(
      WrapperTag,
      {
        ref: mergeRefs(internalRef, ref),
        ...rest,
        className: `${className} ${
          ellipsis
            ? concatPrefixCls(REACT_TEXT_HIGHLIGHT_PREFIX, "ellipsis")
            : ""
        }`,
        style,
      },
      getHighlightedText()
    );
  }
);
