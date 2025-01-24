import { concatPrefixCls } from "@src/utils/concatPrefixCls";
import mergeRefs from "@src/utils/mergeRefs";
import { findAllChunks } from "@src/utils/textHightlightCore";
import { renderWrapperTag } from "@src/utils/textHightlightUtils";
import React, {
  createElement,
  forwardRef,
  ReactNode,
  useImperativeHandle,
  useRef,
} from "react";

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

  onHighlightClick?: (e: React.MouseEvent, word: string, index: number) => void;

  wrapperTag?: keyof JSX.IntrinsicElements;

  autoEscape?: boolean;

  exactWord?: boolean;

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
      wrapperTag: WrapperTag = "div",
      highlightTag: HighlightTag = "mark",
      unhighlightClassName = "",
      unhighlightStyle = { backgroundColor: "", fontWeight: "" },
      unhighlightTag = "span",
      className = "",
      style,
      ellipsis = false,
      sanitize = true,
      exactWord = false,
      autoEscape = true,
      ignoreWords = [],
      ...rest
    },
    ref
  ) => {
    const internalRef = useRef<HTMLDivElement>(null);

    const chunks = findAllChunks({
      autoEscape,
      caseSensitive,
      highlightWords,
      ignoreWords,
      text,
      exactWord,
    });

    useImperativeHandle(ref, () => ({
      ...((ref as React.MutableRefObject<HTMLDivElement>)?.current ?? {}),
      scrollToHighlight: (index: number = 0) => {
        if (internalRef.current) {
          // Remove previous highlight style from all elements
          Array.from(internalRef.current.children).forEach((element) => {
            (element as HTMLElement).style.outline = "";
          });

          const highlightElement = internalRef.current.children[index];
          if (highlightElement) {
            (highlightElement as HTMLElement).style.outline = "2px solid blue";
            highlightElement.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center",
            });
          }
        }
      },
      highlightedElements: chunks
        .map((chunk, index) =>
          chunk.highlight ? { text: chunk.text, index } : null
        )
        .filter(Boolean),
      highlightedElementsCount: chunks.filter((chunk) => chunk.highlight)
        ?.length,
      chunks,
      chunksCount: chunks?.length || 0,
    }));

    console.log(internalRef.current, ref);
    const getHighlightedText = () => {
      return chunks.map((chunk, index) =>
        chunk?.highlight
          ? renderWrapperTag(
              HighlightTag,
              {
                key: index,
                className: highlightClassName,
                style: highlightStyle,
                onClick: (e: React.MouseEvent) =>
                  onHighlightClick?.(e, chunk.text, index),
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

    const wrapperClassName = `${className} ${
      ellipsis ? concatPrefixCls(REACT_TEXT_HIGHLIGHT_PREFIX, "ellipsis") : ""
    }`;

    return createElement(
      WrapperTag,
      {
        ref: mergeRefs(internalRef, ref),
        ...rest,
        className: wrapperClassName,
        style,
      },
      getHighlightedText()
    );
  }
);
