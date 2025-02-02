import { DynamicWrapperTag, IChunk } from "@src/types/textHighlight";
import React, { ReactNode } from "react";

export const renderWrapperTag = (
  tag: string | DynamicWrapperTag,
  props: any,
  content: string
) => {
  const { key, ...rest } = props;
  return typeof tag === "string"
    ? React.createElement(tag, props, content)
    : tag(content, key, rest);
};

export const getHighlightedText = (
  chunks: IChunk[],
  HighlightTag: string | DynamicWrapperTag,
  highlightClassName: string,
  highlightStyle: React.CSSProperties,
  onHighlightClick?: (e: React.MouseEvent, word: string, index: number) => void,
  unhighlightTag: keyof JSX.IntrinsicElements | DynamicWrapperTag = "span",
  unhighlightClassName: string = "",
  unhighlightStyle: React.CSSProperties = {}
): ReactNode[] => {
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
