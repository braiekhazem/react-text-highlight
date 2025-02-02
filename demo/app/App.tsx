import React, { useEffect, useRef, useState } from "react";
import {
  TextHighlight,
  TextHighlightRef,
  useTextHighlight,
} from "../../src/index";

const App = () => {
  const highlightRef = useRef<TextHighlightRef>(null);
  const [seach, setSearch] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [value, setValue] = React.useState(`
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    `);

  const { chunks, highlightedElements } = useTextHighlight(value, {
    highlightWords: seach.split(" "),
    onHighlightCountChange: setTotalCount,
    onCurrentHighlightChange: setActiveIndex,
  });

  console.log({
    chunks,
    highlightedElements,
  });

  // useEffect(() => {
  //   console.log(highlightRef.current);
  // }, [highlightRef.current]);

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
            const newIndex =
              highlightRef.current?.highlightedElements[
                highlightRef.current?.currentHighlightIndex + 1
              ]?.index;
            console.log({ newIndex });
            highlightRef.current?.scrollToHighlight(newIndex);
          }}
        >
          Next Word
        </button>

        <b>
          {activeIndex} /{totalCount}
        </b>
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

        tooltip={{
          content: (text) => {
            return (
              <div>
                Tooltip: ${text}
                <a href="#">{text}</a>
              </div>
            );
          },
        }}
        exactWord={false}
        highlightTag={"p"}
        autoEscape={true}
        caseSensitive={false}
        onHighlightCountChange={setTotalCount}
        onCurrentHighlightChange={setActiveIndex}
        unhighlightTag={"a"}
        highlightStyle={{
          background: "yellow",
          display: "inline",
        }}
        activeHighlightClassName="active-highlight"
        onHighlightClick={(_, _2, index) =>
          highlightRef.current?.scrollToHighlight(index)
        }
        ellipsis={false}
        className="text-highlight-ellipsis2"
      />
    </div>
  );
};

export default App;
