export interface TextHighlightProps {
  text: string;
  highlightWords: string[];
  caseSensitive?: boolean;
  highlightClassName?: string;
  highlightStyle?: React.CSSProperties;
  onHighlightClick?: (word: string) => void;
  wrapperTag?: keyof JSX.IntrinsicElements;
  autoEscape?: boolean;
  sanitize?: boolean;
  ignoreWords?: string[];
}
