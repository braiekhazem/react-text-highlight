import { DynamicWrapperTag, IChunk } from "@src/types/textHighlight";
import React, { JSX, ReactNode } from "react";

export const renderWrapperTag = (
  tag: string | DynamicWrapperTag,
  props: any,
  content: string
) => {
  if (typeof tag === "string") return React.createElement(tag, props, content);
  return tag(content, props.index, props);
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
            index,
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
            index,
            className: unhighlightClassName,
            style: unhighlightStyle,
          },
          chunk.text
        )
  );
};
