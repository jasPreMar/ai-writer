// Desc: Dropdown menu for editor settings. It receives the following props: `isOpen`, `toggleFocusMode`, `toggleSyntaxHighlighting`, and `toggleStyleCheck`. The `isOpen` prop is a boolean that determines whether the dropdown is open or closed. The `toggleFocusMode` prop is a callback function that toggles the focus mode when called. The `toggleSyntaxHighlighting` prop is a callback function that toggles the syntax highlighting when called. The `toggleStyleCheck` prop is a callback function that toggles the style check when called.

import React from 'react';

const EditorSettingsDropdown = ({
  isOpen,
  toggleFocusMode,
  toggleSyntaxHighlighting,
  toggleStyleCheck
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="editor-settings-dropdown absolute bg-white p-4 rounded-md shadow-md">
      <div className="focus-settings">
        <button onClick={toggleFocusMode}>Toggle Focus Mode</button>
        {/* Add single-select list for Sentence, Paragraph, or Typewriter */}
      </div>
      <div className="syntax-settings">
        <button onClick={toggleSyntaxHighlighting}>
          Toggle Syntax Highlighting
        </button>
        {/* Add multi-select list for Adjectives, Nouns, Adverbs, Verbs, and Conjunctions */}
      </div>
      <div className="style-check-settings">
        <button onClick={toggleStyleCheck}>Toggle Style Check</button>
        {/* Add multi-select list for Fillers, Cliches, Redundancies, and Custom */}
      </div>
    </div>
  );
};

export default EditorSettingsDropdown;
