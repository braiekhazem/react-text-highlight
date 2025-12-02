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

## Features

- **Multiple search terms** - Highlight multiple words at once
- **Case-sensitive matching** - Optional case-sensitive search
- **Exact word matching** - Match whole words only
- **Custom styling** - Full control over highlight appearance
- **Click handlers** - Interact with highlighted text
- **Tooltips** - Built-in tooltip support
- **TypeScript ready** - Full type definitions included
- **Zero config** - Works out of the box with sensible defaults
- **Lightweight** - Minimal dependencies
- **React 18 & 19** - Compatible with latest React versions

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

### Ref Methods

Access component methods using a ref:

```tsx
import { useRef } from "react";
import { TextHighlight } from "@hazembraiek/react-text-highlight";

function MyComponent() {
  const highlightRef = useRef(null);

  const goToNext = () => {
    highlightRef.current?.next();
  };

  const goToPrevious = () => {
    highlightRef.current?.previous();
  };

  return (
    <div>
      <button onClick={goToPrevious}>Previous</button>
      <button onClick={goToNext}>Next</button>
      <TextHighlight
        ref={highlightRef}
        text="Navigate through highlighted words"
        highlightWords={["Navigate", "highlighted", "words"]}
      />
    </div>
  );
}
```

#### Available Ref Methods

- `next()` - Navigate to next highlighted word
- `previous()` - Navigate to previous highlighted word

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
