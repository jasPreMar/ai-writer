// The toolbar component is the top bar of the app where users can access various functions, such as opening/closing the library pane, navigating back and forward, and toggling fullscreen mode. It also contains the current file dropdown, which allows users to switch between documents.

// UI and Visual Elements:

  // 1. Toolbar Container: The Toolbar is contained in a narrow horizontal bar at the top of the app. It is fixed in place, allowing users to access it at all times.

  // 2. Left, Center, and Right Groups: The Toolbar is divided into three groups: left, center, and right. The left group contains a library button. The center group contains the current file name and a filename dropdown button. The right group contains the focus button, editor settings button, and preview button.

  // 3. Modals and dropdowns: The Toolbar opens and closes modals and dropdowns when the corresponding buttons are clicked.

  // 3. Library button: The library button is a small icon button that, on hover, is highlighted with a grey rectuangular background with rounded corners. The icon is dark grey and represents an app window with a left pane open. The icon is made up of a small rectangle with a vertical line dividing the left third from the right two thirds, with 3 horizontal lines in the upper part of the left third. When clicked, the library button opens/closes the library pane.

  // 4. Current file name: The current file name is small, dark grey text that shows the name of the currently open file. It is displayed in the center of the toolbar.

  // 5. Filename dropdown button: The filename dropdown button is a small icon button that, when clicked, opens a modal that opens the current file modal. The icon is a small, dark grey downward pointing caret. When hovered over, the icon turns from dark grey to black.

  // 6. Focus button: The focus button is a small icon button that, on hover, is highlighted with a grey rectuangular background with rounded corners. The icon is dark grey and represents a body of text. The icon is made up of 5 horizontal lines, with the last line being shorter than the rest and left-aligned. The focus button, when clicked, toggles on or off focus mode.

  // 7. Editor settings button: The editor settings button is a small icon button that, on hover, is highlighted with a grey rectuangular background with rounded corners. The icon is a small, dark grey downward pointing caret. When clicked, the editor settings button opens the editor settings dropdown.

  // 8. Preview button: The preview button is a small icon button that, on hover, is highlighted with a grey rectuangular background with rounded corners. The icon is dark grey and represents a play button. The icon is made up of a right-facing triangle. When clicked, the preview button opens or closes the preview overlay.

  // 9. Current file modal: The current file modal is a component imported from another file that is described there.

  // 10. Editor settings dropdown: The focus settings dropdown is a dropdown menu that toggles on or off various functionality in the Text Editor. In the editor settings dropdown, there are three groups: Focus Settings, Syntax Settings, and Style Check Settings. Each group contains a button and either a single-select or multi-select list. The Focus Settings group contains a text button that lets a user enable or disable focus mode (described in the `TextEditor.js` file) and below that a single-select list that allows the user to select either Sentence, Paragraph, or Typewriter. The Syntax Settings group contains a text button that allows a user toggle on or off syntax highlighting (described in the `TextEditor.js` file) and below that a multi-select list that allows the user to select any combination of the following options: Adjectives, Nouns, Adverbs, Verbs, and Conjunctions. The Style Check Settings group contains a text button that allows a user to toggle on or off style check (described in the `TextEditor.js` file) and below that a multi-select list that allows the user to select any combination of the following options: Fillers, Cliches, Redundancies, and Custom.

// Functionality:

  // 1. Toggling the library pane: The library button toggles between opening or closing the library pane when clicked.

  // 2. Opening/closing the current file modal: The filename dropdown button opens/closes the current file modal when clicked. 

  // 3. Toggling focus mode: The focus button toggles focus mode on or off when clicked.

  // 4. Opening/closing the editor settings dropdown: The editor settings button opens/closes the editor settings dropdown when clicked.

  // 5. Opening/closing the preview overlay: The preview button opens/closes the preview overlay when clicked.

  // 6. Selecting a focus setting: The focus setting dropdown group allows a user to select one focus setting when clicked.

  // 7. Selecting syntax highlighting options: The syntax highlighting dropdown group allows a user to multi-select syntax highlighting options when clicked.

  // 8. Selecting style check options: The style check dropdown group allows a user to select style check options when clicked.

// Toolbar.js
import React from 'react';

import CurrentFileModal from './CurrentFileModal';
import EditorSettingsDropdown from './EditorSettingsDropdown';

import {
  Sidebar,
  CaretDown,
  TextAlignLeft,
  Play
} from "@phosphor-icons/react";

const Toolbar = ({
  toggleLibraryPane,
  currentFile,
  toggleFocusMode,
  togglePreviewOverlay,
  toggleCurrentFileModal,
  isCurrentFileModalOpen,
  files,
  selectFile,
  isEditorSettingsDropdownOpen,
  toggleEditorSettingsDropdown,
  toggleSyntaxHighlighting,
  toggleStyleCheck
}) => {
  return (
    <div className="Toolbar flex justify-between p-4 border-b bg-gray-100">
      <div className="left">
        <button
          className="library-btn mx-1 px-2 py-1 rounded transition-colors hover:bg-gray-300"
          onClick={toggleLibraryPane}
        >
          <Sidebar size={18} />        
        </button>
      </div>
      <div className="center">
        <span className="current-file-name mx-2">{currentFile?.title || 'Untitled'}</span>
        <button
          className="filename-dropdown-btn mx-1 px-2 py-1 rounded transition-colors hover:text-black"
          onClick={toggleCurrentFileModal}
        >
          <CaretDown size={18} />
        </button>
      </div>
      <div className="right">
        <button
          className="focus-btn mx-1 px-2 py-1 rounded transition-colors hover:bg-gray-300"
          onClick={toggleFocusMode}
        >
          <TextAlignLeft size={18} />
        </button>
        <button
          className="editor-settings-btn mx-1 px-2 py-1 rounded transition-colors hover:bg-gray-300"
          onClick={toggleEditorSettingsDropdown}
        >
          <CaretDown size={18} />
        </button>
        <button
          className="preview-btn mx-1 px-2 py-1 rounded transition-colors hover:bg-gray-300"
          onClick={togglePreviewOverlay}
        >
          <Play size={18} />
        </button>

      </div>
      <CurrentFileModal
        isOpen={isCurrentFileModalOpen}
        onClose={toggleCurrentFileModal}
        files={files}
        selectFile={selectFile}
      />
      <EditorSettingsDropdown
        isOpen={isEditorSettingsDropdownOpen}
        toggleFocusMode={toggleFocusMode}
        toggleSyntaxHighlighting={toggleSyntaxHighlighting}
        toggleStyleCheck={toggleStyleCheck}
      />
    </div> // closes the `div` element for the `Toolbar` component.
  );
};

export default Toolbar;
