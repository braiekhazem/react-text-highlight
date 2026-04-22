import { DynamicWrapperTag, IChunk } from "@src/types/textHighlight";
import React, { JSX, ReactNode } from "react";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap_white.css";
import { TextHighlightProps } from "@src/components/TextHighlight/@types";
import { concatPrefixCls } from "./concatPrefixCls";
import { REACT_TEXT_HIGHLIGHT_PREFIX } from "@src/components/TextHighlight/TextHighlight";

export const renderWrapperTag = (
  tag: string | DynamicWrapperTag,
  props: any,
  content: string,
) => {
  if (typeof tag === "string") return React.createElement(tag, props, content);
  return tag(content, props.index, props);
};

const renderTooltip = (
  tooltip: TextHighlightProps["tooltip"],
  text: string,
  children: ReactNode,
) => {
  if (!tooltip || tooltip.enabled === false) return children;

  const classNamesObj = { ...tooltip.classNames };
  if (classNamesObj.root) {
    classNamesObj.root += ` ${concatPrefixCls(
      REACT_TEXT_HIGHLIGHT_PREFIX,
      "tooltip",
    )}`;
  }

  return (
    <Tooltip
      placement="bottomRight"
      trigger={["hover"]}
      classNames={{
        root: concatPrefixCls(REACT_TEXT_HIGHLIGHT_PREFIX, "tooltip"),
        ...classNamesObj,
      }}
      {...(typeof tooltip === "object" ? tooltip : {})}
      overlay={() => tooltip?.content?.(text) || text}
    >
      <span>{children}</span>
    </Tooltip>
  );
};

export const getHighlightedText = (
  chunks: IChunk[],
  HighlightTag: string | DynamicWrapperTag,
  highlightClassName: string,
  highlightStyle: React.CSSProperties,
  tooltip: TextHighlightProps["tooltip"],
  onHighlightClick?: (e: React.MouseEvent, word: string, index: number) => void,
  unhighlightTag: keyof JSX.IntrinsicElements | DynamicWrapperTag = "span",
  unhighlightClassName: string = "",
  unhighlightStyle: React.CSSProperties = {},
): ReactNode[] => {
  return chunks.map((chunk, index) =>
    chunk?.highlight
      ? renderTooltip(
          tooltip,
          chunk.text,
          renderWrapperTag(
            HighlightTag,
            {
              key: index,
              index,
              className: highlightClassName,
              style: highlightStyle,
              onClick: (e: React.MouseEvent) =>
                onHighlightClick?.(e, chunk.text, index),
            },
            chunk.text,
          ),
        )
      : renderWrapperTag(
          unhighlightTag,
          {
            key: index,
            index,
            className: unhighlightClassName,
            style: unhighlightStyle,
          },
          chunk.text,
        ),
  );
};
