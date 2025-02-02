import { useTextHighlight } from "@src/hooks/useTextHighlight";
import {
  HighlightElement,
  TextHighlightProps,
  TextHighlightRef,
} from "@src/types/textHighlight";
import { concatPrefixCls } from "@src/utils/concatPrefixCls";
import mergeRefs from "@src/utils/mergeRefs";
import { getHighlightedText } from "@src/utils/textHightlightUtils";
import React, {
  createElement,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";

const REACT_TEXT_HIGHLIGHT_PREFIX = "react-text-highlight";

export const TextHighlight = forwardRef<TextHighlightRef, TextHighlightProps>(
  (
    {
      text = "",
      highlightWords,
      caseSensitive = false,
      highlightClassName = "",
      highlightStyle = { backgroundColor: "yellow", fontWeight: "bold" },
      onHighlightClick,
      onHighlightCountChange,
      onCurrentHighlightChange,
      tooltip = false,
      tooltipClassName = "",
      tooltipStyle = { backgroundColor: "#000000", padding: "5px" },
      tooltipContent,
      wrapperTag: WrapperTag = "div",
      highlightTag: HighlightTag = "mark",
      unhighlightClassName = "",
      unhighlightStyle = { backgroundColor: "", fontWeight: "" },
      unhighlightTag = "span",
      className = "",
      enableAutoScroll = true,
      activeHighlightClassName = concatPrefixCls(
        REACT_TEXT_HIGHLIGHT_PREFIX,
        "active"
      ),
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
    const internalRef = useRef<TextHighlightRef>(null);

    const {
      chunks,
      highlightedElements,
      highlightedElementsCount,
      currentHighlightIndex,
      setCurrentHighlightIndex,
    } = useTextHighlight(text, {
      highlightWords,
      caseSensitive,
      exactWord,
      autoEscape,
      ignoreWords,
      onHighlightCountChange,
      onCurrentHighlightChange,
    });

    useImperativeHandle(ref, () => ({
      ...((ref as React.MutableRefObject<HTMLDivElement>)?.current ?? {}),
      scrollToHighlight: (index: number = 0) => {
        if (internalRef.current) {
          Array.from(internalRef.current.children).forEach((element) => {
            (element as HTMLElement).classList.remove(activeHighlightClassName);
          });

          const highlightElement = internalRef.current.children[index];
          if (highlightElement) {
            (highlightElement as HTMLElement).classList.add(
              activeHighlightClassName
            );

            if (enableAutoScroll)
              highlightElement.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "center",
              });

            const indexInChunks = highlightedElements?.findIndex(
              (chunk) => chunk.index === index
            );

            setCurrentHighlightIndex(indexInChunks);
          }
        }
      },
      currentHighlightIndex,
      highlightedElements: highlightedElements as HighlightElement[],
      highlightedElementsCount: highlightedElementsCount,
      chunks,
      chunksCount: chunks?.length || 0,
    }));

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
      getHighlightedText(
        chunks,
        HighlightTag,
        highlightClassName,
        highlightStyle,
        onHighlightClick,
        unhighlightTag,
        unhighlightClassName,
        unhighlightStyle
      )
    );
  }
);
