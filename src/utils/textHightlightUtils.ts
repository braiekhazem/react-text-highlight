import { DynamicWrapperTag } from "@src/components/TextHighlight/TextHighlight";
import React from "react";

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
