import React from "react";
import { TextHighlight } from "../../src/index";

const App = () => {
  return (
    <div>
      <TextHighlight
        text="Hello there this is the new one of me"
        highlightWords={["t", "one"]}
        highlightTag="p"
      />
    </div>
  );
};

export default App;
