<div align="center">
  <img src="https://dl.dropboxusercontent.com/scl/fi/uw8egqxrme5kpdhkjdexa/1764693415455_1740222307936-New-svg.svg?rlkey=rkii4v4a8v8jwnvd5qfomdkse&dl=0" alt="React Text Highlight Logo" width="150" height="150" />
  
  # React Text Highlight

A powerful, flexible, and easy-to-use React component for highlighting text. Perfect for search features, documentation sites, and content management systems.

[![npm version](https://img.shields.io/npm/v/@hazembraiek/react-text-highlight.svg)](https://www.npmjs.com/package/@hazembraiek/react-text-highlight)
[![npm downloads](https://img.shields.io/npm/dm/@hazembraiek/react-text-highlight.svg)](https://www.npmjs.com/package/@hazembraiek/react-text-highlight)
[![license](https://img.shields.io/npm/l/@hazembraiek/react-text-highlight.svg)](https://github.com/braiekhazem/react-text-highlight/blob/main/LICENSE)

[Demo](https://react-text-highlight-demo.netlify.app/) | [NPM](https://www.npmjs.com/package/@hazembraiek/react-text-highlight) | [GitHub](https://github.com/braiekhazem/react-text-highlight)

</div>

---

## Video Demo

See React Text Highlight in action:

<div align="center">
  <video src="https://dl.dropboxusercontent.com/scl/fi/4j2926t5c6hvwey6zlxpn/1764693315297_Screen-Recording-2025-12-02-at-5.33.10-PM.mov?rlkey=qswnld2mbk1d018mtuof9glw3&dl=0" width="800" controls>
    Your browser does not support the video tag.
  </video>
  
  
</div>

**Can't see the video?** [Click here to watch the demo](https://dl.dropboxusercontent.com/scl/fi/4j2926t5c6hvwey6zlxpn/1764693315297_Screen-Recording-2025-12-02-at-5.33.10-PM.mov?rlkey=qswnld2mbk1d018mtuof9glw3&dl=0) or visit the [live demo site](https://react-text-highlight-demo.netlify.app/)

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Basic Examples](#basic-examples)
- [API Reference](#api-reference)
- [Advanced Usage](#advanced-usage)
- [Headless Hook (`useTextHighlight`)](#keyword-density-analyzer)
- [TypeScript](#typescript)
- [Browser Support](#browser-support)
- [Contributing](#contributing)

---

## Features

| Feature | Description |
| --- | --- |
| **Multi-term search** | Highlight multiple words or phrases at once |
| **Case-sensitive** | Optional case-sensitive matching |
| **Exact word matching** | Match whole words only using word boundaries |
| **Custom rendering** | Use any HTML tag or custom React component for highlights |
| **Per-word styling** | Assign different colors/styles per search term via `highlightTag` |
| **Click handlers** | Respond to clicks on highlighted text |
| **Navigation** | Programmatically navigate between matches with `next()` / `previous()` |
| **Auto-scroll** | Automatically scroll active highlight into view |
| **Tooltips** | Built-in tooltip support via `rc-tooltip` |
| **Match count** | Track total matches and current active index |
| **Ignore list** | Exclude specific words from highlighting |
| **Headless hook** | Use `useTextHighlight` directly for custom UIs or analytics |
| **Ellipsis** | Truncate overflowing text with CSS ellipsis |
| **TypeScript** | Full type definitions for props, ref, and hook |
| **Lightweight** | Only `classnames` as runtime dependency |
| **React 18 & 19** | Compatible with latest React versions |

## Installation

```bash
npm install @hazembraiek/react-text-highlight
```

```bash
yarn add @hazembraiek/react-text-highlight
```

```bash
pnpm add @hazembraiek/react-text-highlight
```

## Quick Start

```tsx
import { TextHighlight } from "@hazembraiek/react-text-highlight";

function App() {
  return (
    <TextHighlight
      text="React Text Highlight makes it easy to highlight text in your applications"
      highlightWords={["React", "highlight", "text"]}
    />
  );
}
```

## Basic Examples

### Simple Highlighting

```tsx
<TextHighlight
  text="The quick brown fox jumps over the lazy dog"
  highlightWords={["quick", "fox", "lazy"]}
/>
```

### Case-Sensitive Search

```tsx
<TextHighlight
  text="React is awesome. react makes development easy."
  highlightWords={["React"]}
  caseSensitive={true}
/>
```

### Exact Word Matching

```tsx
<TextHighlight
  text="This is a test. Testing is important."
  highlightWords={["test"]}
  exactWord={true}
  // Will match "test" but not "Testing"
/>
```

### Custom Styling

```tsx
<TextHighlight
  text="Highlight this text with custom colors"
  highlightWords={["Highlight", "custom"]}
  highlightStyle={{
    backgroundColor: "#ffeb3b",
    color: "#000",
    fontWeight: "bold",
    padding: "2px 4px",
    borderRadius: "3px",
  }}
/>
```

### With Click Handler

```tsx
<TextHighlight
  text="Click on any highlighted word"
  highlightWords={["Click", "highlighted", "word"]}
  onHighlightClick={(e, word, index) => {
    console.log(`Clicked: ${word} at index ${index}`);
  }}
/>
```

### Track Match Count

```tsx
function SearchComponent() {
  const [matchCount, setMatchCount] = useState(0);

  return (
    <div>
      <p>Found {matchCount} matches</p>
      <TextHighlight
        text="Search text to find matches in this text"
        highlightWords={["text", "matches"]}
        onHighlightCountChange={setMatchCount}
      />
    </div>
  );
}
```

## API Reference

### Props

#### Required Props

| Prop             | Type       | Description                                   |
| ---------------- | ---------- | --------------------------------------------- |
| `text`           | `string`   | The text content to display and search within |
| `highlightWords` | `string[]` | Array of words/phrases to highlight           |

#### Optional Props

| Prop            | Type       | Default | Description                                     |
| --------------- | ---------- | ------- | ----------------------------------------------- |
| `caseSensitive` | `boolean`  | `false` | Enable case-sensitive matching                  |
| `exactWord`     | `boolean`  | `false` | Match whole words only (word boundaries)        |
| `autoEscape`    | `boolean`  | `true`  | Escape special regex characters in search terms |
| `sanitize`      | `boolean`  | `true`  | Sanitize HTML in text content                   |
| `ignoreWords`   | `string[]` | `[]`    | Words to exclude from highlighting              |

#### Styling Props

| Prop                   | Type                 | Default                                             | Description                                 |
| ---------------------- | -------------------- | --------------------------------------------------- | ------------------------------------------- |
| `highlightStyle`       | `CSSProperties`      | `{ backgroundColor: 'yellow', fontWeight: 'bold' }` | Inline styles for highlighted text          |
| `highlightClassName`   | `string`             | `''`                                                | CSS class for highlighted text              |
| `highlightTag`         | `string \| function` | `'mark'`                                            | HTML tag or custom component for highlights |
| `unhighlightStyle`     | `CSSProperties`      | `{}`                                                | Inline styles for non-highlighted text      |
| `unhighlightClassName` | `string`             | `''`                                                | CSS class for non-highlighted text          |
| `unhighlightTag`       | `string \| function` | `'span'`                                            | HTML tag for non-highlighted text           |
| `className`            | `string`             | `''`                                                | CSS class for wrapper element               |
| `style`                | `CSSProperties`      | `{}`                                                | Inline styles for wrapper element           |
| `wrapperTag`           | `string`             | `'div'`                                             | HTML tag for wrapper element                |

#### Advanced Props

| Prop                       | Type      | Default                         | Description                              |
| -------------------------- | --------- | ------------------------------- | ---------------------------------------- |
| `ellipsis`                 | `boolean` | `false`                         | Enable text ellipsis for overflow        |
| `enableAutoScroll`         | `boolean` | `true`                          | Auto-scroll to active highlight          |
| `activeHighlightClassName` | `string`  | `'react-text-highlight-active'` | CSS class for currently active highlight |

#### Callback Props

| Prop                       | Type                           | Description                                    |
| -------------------------- | ------------------------------ | ---------------------------------------------- |
| `onHighlightClick`         | `(event, word, index) => void` | Called when a highlighted word is clicked      |
| `onHighlightCountChange`   | `(count) => void`              | Called when the number of matches changes      |
| `onCurrentHighlightChange` | `(index) => void`              | Called when the active highlight index changes |

#### Tooltip Props

| Prop              | Type                  | Description                     |
| ----------------- | --------------------- | ------------------------------- |
| `tooltip`         | `object`              | Tooltip configuration object    |
| `tooltip.enabled` | `boolean`             | Enable/disable tooltips         |
| `tooltip.content` | `(text) => ReactNode` | Custom tooltip content renderer |

### Ref Methods & Properties

Access component methods and state using a ref:

```tsx
import { useRef } from "react";
import {
  TextHighlight,
  TextHighlightRef,
} from "@hazembraiek/react-text-highlight";

function MyComponent() {
  const highlightRef = useRef<TextHighlightRef>(null);

  return (
    <div>
      <button onClick={() => highlightRef.current?.previous()}>
        Previous
      </button>
      <button onClick={() => highlightRef.current?.next()}>
        Next
      </button>
      <button onClick={() => highlightRef.current?.scrollToHighlight(0)}>
        Jump to first
      </button>
      <TextHighlight
        ref={highlightRef}
        text="Navigate through highlighted words in this sentence"
        highlightWords={["Navigate", "highlighted", "words"]}
      />
    </div>
  );
}
```

#### Available Ref Methods

| Method | Type | Description |
| --- | --- | --- |
| `next()` | `() => void` | Navigate to next highlighted word |
| `previous()` | `() => void` | Navigate to previous highlighted word |
| `scrollToHighlight(index)` | `(index: number) => void` | Jump directly to a specific highlight by index |

#### Available Ref Properties

| Property | Type | Description |
| --- | --- | --- |
| `currentHighlightIndex` | `number` | Index of the currently active highlight (`-1` if none) |
| `highlightedElements` | `Array<{ text: string; index: number }>` | All highlighted elements with their chunk indices |
| `highlightedElementsCount` | `number` | Total number of highlighted matches |
| `chunks` | `Array<{ text: string; highlight: boolean }>` | All text chunks (highlighted and non-highlighted) |
| `chunksCount` | `number` | Total number of chunks |

## Advanced Usage

### Custom Highlight Component

```tsx
<TextHighlight
  text="Custom component for each highlight"
  highlightWords={["Custom", "highlight"]}
  highlightTag={(word, index, props) => (
    <strong
      {...props}
      style={{ ...props.style, color: "blue" }}
      data-index={index}
    >
      {word}
    </strong>
  )}
/>
```

### With Tooltips

```tsx
<TextHighlight
  text="Hover over highlighted words to see tooltips"
  highlightWords={["Hover", "highlighted", "tooltips"]}
  tooltip={{
    enabled: true,
    content: (text) => `You clicked: ${text}`,
  }}
/>
```

### Ignore Specific Words

```tsx
<TextHighlight
  text="Highlight all words except the ignored ones"
  highlightWords={["all", "words", "the", "ones"]}
  ignoreWords={["the"]}
  // Will highlight "all", "words", "ones" but not "the"
/>
```

### Multiple Styling Classes

```tsx
// In your CSS
.custom-highlight {
  background: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: 600;
}

// In your component
<TextHighlight
  text="Beautiful gradient highlights"
  highlightWords={['Beautiful', 'gradient', 'highlights']}
  highlightClassName="custom-highlight"
/>
```

### Real-World Search Example

```tsx
function SearchableContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [matchCount, setMatchCount] = useState(0);

  const content = `
    React is a JavaScript library for building user interfaces.
    It makes creating interactive UIs painless.
    Design simple views for each state in your application.
  `;

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <p>{matchCount} matches found</p>
      <TextHighlight
        text={content}
        highlightWords={searchTerm.split(" ").filter(Boolean)}
        onHighlightCountChange={setMatchCount}
        highlightStyle={{
          backgroundColor: "#ffeb3b",
          padding: "2px 4px",
          borderRadius: "3px",
        }}
      />
    </div>
  );
}
```

### Multi-Color Highlights Per Word

Use `highlightTag` as a function to assign different colors to different search terms:

```tsx
const colorMap: Record<string, string> = {
  react: "#61dafb",
  component: "#ff6b6b",
  hooks: "#51cf66",
};

function MultiColorHighlight() {
  const words = Object.keys(colorMap);

  return (
    <TextHighlight
      text="React lets you build component trees using hooks for state management"
      highlightWords={words}
      highlightTag={(word, index, props) => (
        <mark
          key={props.key}
          style={{
            backgroundColor: colorMap[word.toLowerCase()] || "yellow",
            padding: "2px 4px",
            borderRadius: "3px",
            color: "#000",
          }}
        >
          {word}
        </mark>
      )}
    />
  );
}
```

### Find-and-Replace UI

Combine navigation ref methods with match count to build a find-and-replace bar:

```tsx
function FindAndNavigate() {
  const [search, setSearch] = useState("");
  const [matchCount, setMatchCount] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const ref = useRef<TextHighlightRef>(null);

  const article = `
    TypeScript is a strongly typed programming language that builds on
    JavaScript, giving you better tooling at any scale. TypeScript adds
    optional static typing and class-based object-oriented programming
    to the language. TypeScript is developed by Microsoft.
  `;

  return (
    <div>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Find in text..."
        />
        <button onClick={() => ref.current?.previous()}>Previous</button>
        <button onClick={() => ref.current?.next()}>Next</button>
        <span>
          {currentIndex + 1} / {matchCount}
        </span>
      </div>
      <TextHighlight
        ref={ref}
        text={article}
        highlightWords={search ? [search] : []}
        onHighlightCountChange={setMatchCount}
        onCurrentHighlightChange={setCurrentIndex}
        highlightStyle={{
          backgroundColor: "#ffeaa7",
          borderBottom: "2px solid #fdcb6e",
        }}
        activeHighlightClassName="active-match"
      />
    </div>
  );
}
```

```css
.active-match {
  background-color: #fd79a8 !important;
  border-bottom: 2px solid #e84393 !important;
  color: #fff;
}
```

### Highlight with Badges

Render highlighted words as pill-shaped badges:

```tsx
<TextHighlight
  text="Deploy the API gateway behind the load balancer with TLS enabled"
  highlightWords={["API", "gateway", "TLS"]}
  highlightTag={(word, index, props) => (
    <span
      key={props.key}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        backgroundColor: "#e3f2fd",
        color: "#1565c0",
        padding: "2px 8px",
        borderRadius: "12px",
        fontSize: "0.9em",
        fontWeight: 600,
        border: "1px solid #90caf9",
      }}
    >
      {word}
    </span>
  )}
/>
```

### Log Viewer with Severity Highlighting

Use `highlightTag` to color-code log levels:

```tsx
const severityColors: Record<string, { bg: string; color: string }> = {
  error: { bg: "#ffebee", color: "#c62828" },
  warn: { bg: "#fff8e1", color: "#f57f17" },
  info: { bg: "#e3f2fd", color: "#1565c0" },
  debug: { bg: "#f3e5f5", color: "#6a1b9a" },
};

function LogViewer({ logs }: { logs: string }) {
  return (
    <TextHighlight
      text={logs}
      highlightWords={Object.keys(severityColors)}
      wrapperTag="pre"
      style={{ fontFamily: "monospace", fontSize: 13, lineHeight: 1.8 }}
      highlightTag={(word, index, props) => {
        const severity = severityColors[word.toLowerCase()];
        return (
          <span
            key={props.key}
            style={{
              backgroundColor: severity?.bg || "yellow",
              color: severity?.color || "#000",
              padding: "1px 6px",
              borderRadius: "3px",
              fontWeight: 700,
            }}
          >
            {word}
          </span>
        );
      }}
    />
  );
}

// Usage
<LogViewer
  logs={`[INFO] Server started on port 3000
[WARN] Deprecated API called at /v1/users
[ERROR] Connection to database failed
[DEBUG] Request payload: { id: 42 }`}
/>
```

### Debounced Live Search

Avoid excessive re-renders on fast typing:

```tsx
function useDebouncedValue<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
}

function DebouncedSearch() {
  const [input, setInput] = useState("");
  const debouncedSearch = useDebouncedValue(input, 300);

  const content = `
    React Text Highlight is a flexible library for highlighting
    search terms in large blocks of text content. It supports
    multiple search terms, case sensitivity, exact word matching,
    and custom rendering of highlighted segments.
  `;

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type to search (debounced)..."
      />
      <TextHighlight
        text={content}
        highlightWords={debouncedSearch ? [debouncedSearch] : []}
        highlightStyle={{
          backgroundColor: "#c8e6c9",
          fontWeight: "bold",
          borderRadius: "2px",
        }}
      />
    </div>
  );
}
```

### Keyword Density Analyzer

Use the `useTextHighlight` hook directly for analytics:

```tsx
import { useTextHighlight } from "@hazembraiek/react-text-highlight";

function KeywordDensity({ text, keywords }: { text: string; keywords: string[] }) {
  const { chunks, highlightedElementsCount } = useTextHighlight(text, {
    highlightWords: keywords,
  });

  const totalWords = text.split(/\s+/).filter(Boolean).length;
  const density = ((highlightedElementsCount / totalWords) * 100).toFixed(1);

  return (
    <div>
      <div style={{ marginBottom: 12, fontSize: 14, color: "#666" }}>
        <strong>{highlightedElementsCount}</strong> matches in{" "}
        <strong>{totalWords}</strong> words ({density}% density)
      </div>
      <TextHighlight
        text={text}
        highlightWords={keywords}
        highlightStyle={{
          backgroundColor:
            parseFloat(density) > 5 ? "#ffcdd2" : "#c8e6c9",
          padding: "1px 3px",
          borderRadius: "2px",
        }}
      />
    </div>
  );
}
```

### Accessible Highlighting with ARIA

Announce highlight navigation to screen readers:

```tsx
function AccessibleHighlight() {
  const ref = useRef<TextHighlightRef>(null);
  const [current, setCurrent] = useState(-1);
  const [total, setTotal] = useState(0);

  return (
    <div>
      <div role="search" aria-label="Text search navigation">
        <button
          onClick={() => ref.current?.previous()}
          aria-label="Previous match"
        >
          Previous
        </button>
        <button
          onClick={() => ref.current?.next()}
          aria-label="Next match"
        >
          Next
        </button>
        <span aria-live="polite">
          {total > 0
            ? `Match ${current + 1} of ${total}`
            : "No matches found"}
        </span>
      </div>
      <TextHighlight
        ref={ref}
        text="Accessibility matters. Accessible components make the web better for everyone."
        highlightWords={["Accessibility", "Accessible"]}
        onHighlightCountChange={setTotal}
        onCurrentHighlightChange={setCurrent}
        highlightTag={(word, index, props) => (
          <mark
            key={props.key}
            {...props}
            role="mark"
            aria-label={`Highlighted: ${word}`}
          >
            {word}
          </mark>
        )}
      />
    </div>
  );
}
```

## TypeScript

The package includes full TypeScript definitions. Import types as needed:

```tsx
import {
  TextHighlight,
  TextHighlightProps,
  TextHighlightRef,
} from "@hazembraiek/react-text-highlight";

const MyComponent: React.FC = () => {
  const ref = useRef<TextHighlightRef>(null);

  const props: TextHighlightProps = {
    text: "TypeScript support included",
    highlightWords: ["TypeScript", "support"],
  };

  return <TextHighlight {...props} ref={ref} />;
};
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- React 18+
- React 19+

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT © [Hazem Braiek](https://github.com/braiekhazem)

## Links

- [Live Demo](https://react-text-highlight-demo.netlify.app/)
- [NPM Package](https://www.npmjs.com/package/@hazembraiek/react-text-highlight)
- [GitHub Repository](https://github.com/braiekhazem/react-text-highlight)
- [Issue Tracker](https://github.com/braiekhazem/react-text-highlight/issues)

## Support

If you find this package helpful, please consider:

- Starring the [GitHub repository](https://github.com/braiekhazem/react-text-highlight)
- Reporting issues on [GitHub](https://github.com/braiekhazem/react-text-highlight/issues)
- Contributing to the project

---

Made with ❤️ by [Hazem Braiek](https://github.com/braiekhazem)
