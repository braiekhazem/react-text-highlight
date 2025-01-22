import React from "react";
import { TextHighlight } from "../../src/index";

const App = () => {
  const [value, setValue] = React.useState("I love coding in C++ and Node.js!");

  return (
    <div>
      <TextHighlight
        text={value}
        highlightWords={["C++", "Node.js"]}
        // highlightTag={(word, index) => {
        //   return (
        //     <a href="#" style={{ color: "blue" }}>
        //       {word} / {index}
        //     </a>
        //   );
        // }}
        highlightTag={"p"}
        autoEscape={true}
        unhighlightTag={"a"}
        highlightStyle={{ color: "red", display: "inline" }}
        onHighlightClick={(word) => console.log(word)}
        ellipsis={true}
      />
      <div>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{
            marginBottom: "10px",
            padding: "5px",
            width: "500px",
          }}
        />
      </div>
    </div>
  );
};

export default App;
