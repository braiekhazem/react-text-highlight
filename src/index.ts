import "./components/_index.scss";

export type { TextHighlightRef } from "./types/textHighlight";
export type { TextHighlightProps } from "./components/TextHighlight/@types";

export { TextHighlight } from "./components/TextHighlight";

export { useTextHighlight } from "./hooks/useTextHighlight";

export { findAllChunks } from "./utils/textHightlightCore";
