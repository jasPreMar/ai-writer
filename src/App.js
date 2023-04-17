// This file contains the main `App` component, which is the root component of the application.

import React, { useState } from 'react';
// This line imports the React library and the `useState` hook.
// A library is a collection of code that can be used in other programs.
// React is a popular JavaScript library for building user interfaces. Learn more: https://react.dev/learn. 
// A hook is a function that lets you use React features from within functional components. Learn more: https://react.dev/reference/react
// `useState` is a function that lets you add state to functional components. Learn more: https://react.dev/reference/react/useState

import './styles/app.css'; // This imports the CSS file containing the styles for the application.

// The next five lines import custom components that are used later in the code. These components are defined in separate files in the `src/components` directory::
import TextEditor from './components/TextEditor'; // the main text editor component. It contains the textarea where the user can type their text.
import Toolbar from './components/Toolbar'; // a component that contains the toolbar buttons. It also allows the user to toggle fullscreen mode.
import LibraryPane from './components/LibraryPane'; // a component that shows the list of documents. It also allows the user to open and delete documents.
import WordAndCharacterCount from './components/WordAndCharacterCount'; // a component that shows the word and character count of the current document. It also allows the user to toggle between word and character count.
import FullscreenMode from './components/FullscreenMode'; // a component that allows the user to toggle fullscreen mode.

function App() { // Opening line defining the main `App` component as a function. In React, components are the building blocks of the user interface. They are reusable pieces of code that can be composed together to build more complex components.

  // The next four lines define state variables and their respective setters using the useState hook. The useState hook takes an initial value as an argument and returns an array containing the state variable and its setter. The `useState` hook is used to add state to functional components:

  // Add this state to manage the visibility of the LibraryPane
  const [isLibraryPaneVisible, setIsLibraryPaneVisible] = useState(true);

  // Modify the toggleLibraryPane function
  const toggleLibraryPane = () => {
    setIsLibraryPaneVisible(!isLibraryPaneVisible);
  };

  
  const toggleFocusMode = () => {
    // Add functionality to toggle focus mode
  };
  
  const togglePreviewOverlay = () => {
    // Add functionality to toggle the preview overlay
  };

  const toggleSyntaxHighlighting = () => {
    // Add functionality to toggle syntax highlighting
  };
  
  const toggleStyleCheck = () => {
    // Add functionality to toggle style check
  };  

  const [isCurrentFileModalOpen, setIsCurrentFileModalOpen] = useState(false);
  const [isEditorSettingsDropdownOpen, setIsEditorSettingsDropdownOpen] = useState(false);

  const toggleCurrentFileModal = () => {
    setIsCurrentFileModalOpen(!isCurrentFileModalOpen);
  };

  const toggleEditorSettingsDropdown = () => {
    setIsEditorSettingsDropdownOpen(!isEditorSettingsDropdownOpen);
  };

  const [isFullscreen, setIsFullscreen] = useState(true); // a boolean state indicating if the app is in fullscreen mode. The initial value is `true`.
  const [documents, setDocuments] = useState([{ title: 'Untitled', content: '', filename: 'Unititled' }]); // an array of document objects, each with a title, content, and filename. The initial value is an array with one document object. Later, I need to figure out if there's a difference between title and filename.
  const [currentDocument, setCurrentDocument] = useState(0); // - `currentDocument`: the index of the currently displayed document. The initial value is `0`.
  const [inputText, setInputText] = useState(''); // the text input of the current document. The initial value is an empty string.

  const toggleFullscreen = () => {  // This function toggles the isFullscreen state between true and false. It's passed as a prop to the `FullscreenMode` component.
    setIsFullscreen(!isFullscreen);
  };

  const openDocument = (index) => { // This function takes an index and opens the document at that index. If the index is greater or equal to the length of the documents array, it adds a new untitled document to the array.
    setCurrentDocument(index);
    if (index >= documents.length) {
      setDocuments([...documents, { title: 'Untitled', content: '', filename: 'Untitled' }]);
    }
    setInputText(documents[index].content || ''); // This sets the `inputText` state to the content of the current document. If the content is undefined, it sets the `inputText` state to an empty string.
  };

  const deleteDocument = (index) => { // This function takes an index and deletes the document at that index, as long as there's more than one document in the list. It also adjusts the `currentDocument` index accordingly.
    if (documents.length > 1) {
      setDocuments(documents.filter((_, i) => i !== index));
      setCurrentDocument(Math.max(index - 1, 0));
    }
  };

  return (
    <div className={`App ${isFullscreen ? 'fullscreen' : ''}`}>
      <Toolbar
        toggleLibraryPane={toggleLibraryPane}
        toggleFocusMode={toggleFocusMode}
        togglePreviewOverlay={togglePreviewOverlay}
        currentFile={documents[currentDocument]}
        toggleCurrentFileModal={toggleCurrentFileModal}
        isCurrentFileModalOpen={isCurrentFileModalOpen}
        files={documents}
        selectFile={openDocument}
        isEditorSettingsDropdownOpen={isEditorSettingsDropdownOpen}
        toggleEditorSettingsDropdown={toggleEditorSettingsDropdown}
        toggleSyntaxHighlighting={toggleSyntaxHighlighting}
        toggleStyleCheck={toggleStyleCheck}
      />
      <div className='main flex flex-row'>
        {isLibraryPaneVisible && (
          <LibraryPane
            documents={documents}
            currentDocument={currentDocument}
            openDocument={openDocument}
            deleteDocument={deleteDocument}
          />
        )}
        <div className="text-editor-container">
          <TextEditor
            document={documents[currentDocument]}
            onContentChange={(content) => {
              const newDocuments = [...documents];
              newDocuments[currentDocument].content = content;
              setDocuments(newDocuments);
              setInputText(content);
            }}
          />
          <WordAndCharacterCount text={inputText} />
        </div>
        <FullscreenMode isFullscreen={isFullscreen} toggleFullscreen={toggleFullscreen} />
      </div>
    </div>
  ); // Closing the return statement.
  
  

} // Closing the `App` component function.

export default App; // This exports the `App` component as the default export, which can then be imported and used in other parts of the application (other files).