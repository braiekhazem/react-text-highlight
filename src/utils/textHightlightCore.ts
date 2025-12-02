import { IChunk } from "@src/types/textHighlight";

interface IFindAllChunks {
  autoEscape?: boolean;
  caseSensitive?: boolean;
  highlightWords: string[];
  ignoreWords?: string[];
  text: string;
  exactWord?: boolean;
}

export const findAllChunks = ({
  autoEscape = false,
  caseSensitive = false,
  highlightWords = [],
  ignoreWords = [],
  text,
  exactWord = false,
}: IFindAllChunks): IChunk[] => {
  if (highlightWords.length === 1 && highlightWords[0] === "")
    return [
      {
        text,
        highlight: false,
      },
    ];

  const escapeRegex = (word: string) =>
    autoEscape ? word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") : word;

  const generateRegex = () => {
    const words = highlightWords
      .filter((word) => word && !ignoreWords.includes(word))
      .map(escapeRegex)
      .join("|");

    if (!words) return null;

    const pattern = exactWord
      ? words
          .split("|")
          .map((w) => `\\b${w}\\b`)
          .join("|")
      : words;
    return new RegExp(`(${pattern})`, caseSensitive ? "g" : "gi");
  };

  const regex = generateRegex();

  if (!regex) {
    return [
      {
        text,
        highlight: false,
      },
    ];
  }

  const chunks = text.split(regex);

  return chunks.map((chunk) => ({
    text: chunk,
    highlight: regex.test(chunk),
  }));
};
