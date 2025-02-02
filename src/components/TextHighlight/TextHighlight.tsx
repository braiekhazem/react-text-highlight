import { useTextHighlight } from "@src/hooks/useTextHighlight";
import { useTextHighlightRef } from "@src/hooks/useTextHighlightRef";
import { TextHighlightProps } from "@src/types/textHighlight";
import { concatPrefixCls } from "@src/utils/concatPrefixCls";
import mergeRefs from "@src/utils/mergeRefs";
import { getHighlightedText } from "@src/utils/textHightlightUtils";
import { createElement, JSX } from "react";
import classNames from "classnames";

const REACT_TEXT_HIGHLIGHT_PREFIX = "react-text-highlight";

export const TextHighlight = ({
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
  ref = null,
  ...rest
}: TextHighlightProps): JSX.Element => {
  const {
    chunks,
    highlightedElements,
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

  const internalRef = useTextHighlightRef(
    ref,
    highlightedElements,
    activeHighlightClassName,
    enableAutoScroll,
    currentHighlightIndex,
    chunks,
    setCurrentHighlightIndex
  );

  const wrapperClassName = classNames(className, {
    [concatPrefixCls("react-text-highlight", "ellipsis")]: ellipsis,
  });

  const elementProps = {
    ref: mergeRefs(internalRef, ref),
    ...rest,
    style,
    ...(typeof WrapperTag === "string" ? { className: wrapperClassName } : {}),
  };

  return createElement(
    WrapperTag,
    elementProps,
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
};
