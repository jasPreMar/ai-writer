// desc: This file contains the App component, which is the root component of the application. It contains the state variables and functions that are passed down to the child components as props.

import React, { useState, useEffect } from 'react';

import TextEditor from './components/TextEditor';
import Toolbar from './components/Toolbar';
import LibraryPane from './components/LibraryPane';
import WordAndCharacterCount from './components/WordAndCharacterCount';

import './styles/app.css';

function App() {

  // The next lines define state variables and their respective setters using the useState hook. The useState hook takes an initial value as an argument and returns an array containing the state variable and its setter. A state variable is a variable that can be changed by the application. A setter is a function that updates the state variable.

  const [isLibraryPaneVisible, setIsLibraryPaneVisible] = useState(false);
  const [isCurrentFileModalOpen, setIsCurrentFileModalOpen] = useState(false);
  const [isEditorSettingsDropdownOpen, setIsEditorSettingsDropdownOpen] = useState(false);
  const [isPreview, setIsPreview] = useState(false);
  const [inputText, setInputText] = useState('');
  const [documents, setDocuments] = useState([{ title: 'Untitled', content: '', filename: 'Unititled' }]);
  const [currentDocument, setCurrentDocument] = useState(0);
  const [isToolbarVisible, setIsToolbarVisible] = useState(false);
  const [appearance, setAppearance] = useState('System');

  useEffect(() => {
    const storedAppearance = localStorage.getItem('appearance');
    if (storedAppearance) {
      setAppearance(storedAppearance);
    } else {
      setAppearance('System');
    }

    const handleSystemColorChange = (e) => {
      if (appearance === 'System') {
        setAppearance(e.matches ? 'Dark' : 'Light');
      }
    };

    const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: Dark)');
    colorSchemeQuery.addEventListener('change', handleSystemColorChange);

    return () => {
      colorSchemeQuery.removeEventListener('change', handleSystemColorChange);
    };
  }, [appearance]);

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
  const toggleCurrentFileModal = () => {
    setIsCurrentFileModalOpen(!isCurrentFileModalOpen);
  }; // This function toggles the visibility of the current file modal.
  const toggleEditorSettingsDropdown = () => {
    setIsEditorSettingsDropdownOpen(!isEditorSettingsDropdownOpen);
  }; // This function toggles the visibility of the editor settings dropdown.
  const togglePreview = () => {
    setIsPreview(!isPreview);
  }; // This function toggles the visibility of the preview overlay.
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
    <div className={`App ${appearance}`}>
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
        togglePreview={togglePreview}
        isToolbarVisible={isToolbarVisible} // Pass the isToolbarVisible state to Toolbar
        setIsToolbarVisible={setIsToolbarVisible} // Pass the setIsToolbarVisible setter to Toolbar
      />
      <div className='main flex flex-row'>
        {isLibraryPaneVisible && (
          <LibraryPane
            documents={documents}
            currentDocument={currentDocument}
            openDocument={openDocument}
            deleteDocument={deleteDocument}
            appearance={appearance}
            setAppearance={setAppearance}
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
            isPreview={isPreview} // Pass isPreview as a prop to TextEditor
            isToolbarVisible={isToolbarVisible} // Pass the isToolbarVisible state to Toolbar
            setIsToolbarVisible={setIsToolbarVisible} // Pass the setIsToolbarVisible setter to Toolbar
          />
          <WordAndCharacterCount text={inputText} />
        </div>
      </div>
    </div>
  );
}

export default App;