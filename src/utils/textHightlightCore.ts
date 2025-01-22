interface IFindAllChunks {
  autoEscape?: boolean;
  caseSensitive?: boolean;
  highlightWords: string[];
  ignoreWords?: string[];
  text: string;
}

export const findAllChunks = ({
  autoEscape = false,
  caseSensitive = false,
  highlightWords = [],
  ignoreWords = [],
  text,
}: IFindAllChunks): { text: string; highlight: boolean }[] => {
  const escapeRegex = (word: string) =>
    autoEscape ? word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") : word;

  const generateRegex = () => {
    const words = highlightWords
      .filter((word) => !ignoreWords.includes(word))
      .map(escapeRegex)
      .join("|");
    return new RegExp(`(${words})`, caseSensitive ? "g" : "gi");
  };

  const regex = generateRegex();
  const chunks = text.split(regex);

  return chunks.map((chunk) => ({
    text: chunk,
    highlight: regex.test(chunk),
  }));
};
