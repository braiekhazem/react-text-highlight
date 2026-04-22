import { useTextHighlight } from "@src/hooks/useTextHighlight";
import { useTextHighlightRef } from "@src/hooks/useTextHighlightRef";
import { concatPrefixCls } from "@src/utils/concatPrefixCls";
import { getHighlightedText } from "@src/utils/textHightlightUtils";
import { createElement, forwardRef } from "react";
import classNames from "classnames";
import { TextHighlightProps } from "./@types";
import { TextHighlightRef } from "@src/types/textHighlight";

export const REACT_TEXT_HIGHLIGHT_PREFIX = "react-text-highlight";

const InternalTextHighlight = forwardRef<
  TextHighlightRef,
  Omit<TextHighlightProps, "ref">
>(
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
      tooltip,
      wrapperTag: WrapperTag = "div",
      highlightTag: HighlightTag = "mark",
      unhighlightClassName = "",
      unhighlightStyle = { backgroundColor: "", fontWeight: "" },
      unhighlightTag = "span",
      className = "",
      enableAutoScroll = true,
      activeHighlightClassName = concatPrefixCls(
        REACT_TEXT_HIGHLIGHT_PREFIX,
        "active",
      ),
      style,
      ellipsis = false,
      sanitize = true,
      exactWord = false,
      autoEscape = true,
      ignoreWords = [],
      ...rest
    },
    ref,
  ) => {
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
      setCurrentHighlightIndex,
    );

    const wrapperClassName = classNames(className, {
      [concatPrefixCls(REACT_TEXT_HIGHLIGHT_PREFIX, "ellipsis")]: ellipsis,
    });

    const elementProps = {
      ref: internalRef,
      ...rest,
      style,
      ...(typeof WrapperTag === "string"
        ? { className: wrapperClassName }
        : {}),
    };

    return createElement(
      WrapperTag,
      elementProps,
      getHighlightedText(
        chunks,
        HighlightTag,
        highlightClassName,
        highlightStyle,
        tooltip,
        onHighlightClick,
        unhighlightTag,
        unhighlightClassName,
        unhighlightStyle,
      ),
    );
  },
);

InternalTextHighlight.displayName = "TextHighlight";

export const TextHighlight = InternalTextHighlight;
