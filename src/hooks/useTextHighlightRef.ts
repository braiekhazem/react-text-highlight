import { useRef, useImperativeHandle, MutableRefObject } from "react";
import {
  TextHighlightRef,
  HighlightElement,
  IChunk,
} from "@src/types/textHighlight";

export const useTextHighlightRef = (
  ref: React.Ref<TextHighlightRef>,
  highlightedElements: HighlightElement[],
  activeHighlightClassName: string,
  enableAutoScroll: boolean,
  currentHighlightIndex: number,
  chunks: IChunk[],
  setCurrentHighlightIndex: (index: number) => void
) => {
  const internalRef = useRef<TextHighlightRef>(null);

  const clearHighlights = () => {
    if (!internalRef.current) return;
    Array.from(internalRef.current.children).forEach((element) =>
      (element as HTMLElement).classList.remove(activeHighlightClassName)
    );
  };

  const scrollToHighlight = (index: number = 0) => {
    if (!internalRef.current || index < 0) return;

    clearHighlights();

    const highlightElement = internalRef.current.children[index] as HTMLElement;
    if (highlightElement) {
      highlightElement.classList.add(activeHighlightClassName);

      if (enableAutoScroll)
        highlightElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });

      const indexInChunks = highlightedElements.findIndex(
        (chunk) => chunk.index === index
      );
      setCurrentHighlightIndex(indexInChunks);
    }
  };

  const next = () => {
    if (highlightedElements.length === 0) return;
    const nextIndex =
      currentHighlightIndex + 1 >= highlightedElements.length
        ? 0
        : currentHighlightIndex + 1;
    scrollToHighlight(highlightedElements[nextIndex]!.index);
  };

  const previous = () => {
    if (highlightedElements.length === 0) return;
    const prevIndex =
      currentHighlightIndex - 1 < 0
        ? highlightedElements.length - 1
        : currentHighlightIndex - 1;
    scrollToHighlight(highlightedElements[prevIndex]!.index);
  };

  useImperativeHandle(ref, () => ({
    ...((ref as MutableRefObject<HTMLDivElement>)?.current ?? {}),
    scrollToHighlight,
    next,
    previous,
    currentHighlightIndex,
    highlightedElements,
    highlightedElementsCount: highlightedElements.length,
    chunks,
    chunksCount: chunks.length || 0,
  }));

  return internalRef;
};
