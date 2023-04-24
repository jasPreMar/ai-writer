// desc: This file contains the TextEditor component, which is the central part of the application where users write, edit, and format their documents. It is designed to provide a focused and distraction-free environment, with emphasis on simplicity, readability, and functionality.

// UI and Visual Elements:

  //  1. Text Area: The Text Editor features a large, clean text area with ample whitespace, occupying the majority of the screen. This design choice allows users to concentrate on their writing without any visual distractions.

  //  2. Monospaced Font: iA Writer uses a monospaced font called Roboto Mono (font-family: Roboto Mono; font-size: 21px; font-weight: 400; line-height: 36px; letter-spacing: 0.01em;) to display text. Monospaced fonts ensure consistent character width, improving readability and making it easier to spot formatting issues.

  //  3. Syntax Highlighting: The Text Editor supports syntax highlighting for markup languages like Markdown, MultiMarkdown, and TaskPaper. Different formatting elements (e.g., headings, links, bold, italic) are visually distinguished through subtle color coding or font styles, making the document's structure more apparent.

  //  4. Line Numbers and Indicators: On the left margin of the Text Editor, line numbers and formatting indicators (such as bullet points, checkboxes, or code blocks) may appear, depending on the markup language used and user preferences.

  //  5. Cursor: The cursor is a vertical line that indicates the current position in the text where users can type or make edits. In Focus and Typewriter modes, the cursor is more prominently displayed, and the surrounding text is dimmed or centered to minimize distractions.

// Functionality:

  //  1. Writing and Editing: The primary function of the Text Editor is to provide a space for users to write and edit their documents. Users can type, delete, and modify text as needed, with the Editor automatically handling line breaks, indentation, and other formatting aspects.

  //  2. Markdown and Markup Support: iA Writer's Text Editor supports Markdown, MultiMarkdown, and TaskPaper markup languages, allowing users to apply consistent formatting and structure to their documents with simple, plain-text syntax.

  //  3. Focus Mode: Focus Mode is an optional feature that highlights the current sentence or paragraph, dimming the surrounding text to minimize distractions and help users concentrate on their writing.

  //  4. Typewriter Mode: Typewriter Mode is another optional feature that keeps the cursor at the vertical center of the screen while typing, maintaining a consistent eye level and reducing the need to scroll.

  //  5. Auto-save: The Text Editor automatically saves changes to documents, preventing data loss in case of unexpected events like power outages or application crashes.

  //  6. Spellcheck and Grammar Check: iA Writer's Text Editor integrates spellcheck and grammar check tools that underline potential errors in the text. Users can right-click on the underlined words or phrases to see suggested corrections and apply changes as needed.

  //  7. Find and Replace: The Text Editor includes a Find and Replace feature, accessible via the Toolbar or keyboard shortcuts. Users can search for specific words or phrases, navigate between occurrences, and replace text as desired.

  // In summary, iA Writer's Text Editor component offers a clean, focused, and functional workspace for users to write, edit, and format their documents. Its design emphasizes readability and simplicity, while the integration of markup support, focus-enhancing features, and editing tools ensures a seamless and efficient writing experience.

import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { saveFile, loadFile } from '../services/fileService';

const TextEditor = ({
  document,
  onContentChange,
  isPreview,
  setIsToolbarVisible
}) => {
  const [content, setContent] = useState(document.content);
  const [filename, setFilename] = useState(document.title || 'Untitled');
  
  useEffect(() => {
    const savedContent = loadFile(filename);
    if (savedContent) {
      setContent(savedContent);
    }
  }, [filename]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      saveFile(filename, content);
    }, 1000);
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, [content, filename]);

  useEffect(() => {
    onContentChange(content);
  }, [content]);

  useEffect(() => {
    setContent(document.content);
  }, [document]);

  const handleMouseMove = (e) => {
    if (e.clientY < 50) {
      setIsToolbarVisible(true);
    } else {
      setIsToolbarVisible(false);
    }
  };

  return (
    <div className="TextEditor">
      {isPreview ? (
        <ReactMarkdown>{content}</ReactMarkdown>
      ) : (
        <textarea
          className="w-full h-full bg-transparent resize-none focus:outline-none"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder=""
          onMouseMove={handleMouseMove} // Add the onMouseMove event listener
        />
      )}
    </div>
  );
};

export default TextEditor;