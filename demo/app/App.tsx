import React, { useEffect, useRef, useState } from "react";
import { TextHighlight } from "../../src/index";

const App = () => {
  const highlightRef = useRef<HTMLDivElement>(null);
  const [seach, setSearch] = useState("");
  const [value, setValue] = React.useState(`
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    `);

  useEffect(() => {
    console.log(highlightRef.current);
  }, [highlightRef.current]);

  console.log(seach.split(" "));

  return (
    <div>
      <div>
        <input
          value={seach}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            marginBottom: "10px",
            padding: "5px",
            width: "500px",
          }}
        />
        <button onClick={() => highlightRef.current?.scrollToHighlight(0)}>
          Scroll to highlight
        </button>

        <button
          onClick={() => {
            const elements = highlightRef.current?.highlightedElements;
            const count = highlightRef.current?.highlightedElementsCount || 0;
            if (!elements || count === 0) return;

            const currentIndex = elements.findIndex(
              (el) => el?.index === highlightRef.current?.currentHighlightIndex
            );

            const nextIndex = currentIndex === count - 1 ? 0 : currentIndex + 1;
            highlightRef.current.currentHighlightIndex =
              elements[nextIndex]?.index;
            highlightRef.current?.scrollToHighlight(elements[nextIndex]?.index);
          }}
        >
          Next Word
        </button>
      </div>
      <TextHighlight
        ref={highlightRef}
        text={value}
        highlightWords={seach.split(" ")}
        // highlightTag={(word, index) => {
        //   return (
        //     <a href="#" style={{ color: "blue" }}>
        //       {word} / {index}
        //     </a>
        //   );
        // }}
        exactWord={false}
        highlightTag={"p"}
        autoEscape={true}
        caseSensitive={true}
        unhighlightTag={"a"}
        highlightStyle={{
          color: "yellow",
          background: "red",
          display: "inline",
          borderRadius: "3px",
        }}
        onHighlightClick={(_, _2, index) =>
          highlightRef.current?.scrollToHighlight(index)
        }
        style={{
          whiteSpace: "nowrap",
        }}
        ellipsis={false}
        className="text-highlight-ellipsis2"
      />
    </div>
  );
};

export default App;
