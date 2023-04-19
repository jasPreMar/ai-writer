// This file defines the LibraryPane component, which is used to display the list of documents in the library. It receives four props: `documents`, `currentDocument`, `openDocument`, and `deleteDocument`. The `documents` prop is an array of document objects, each with a title, content, and filename. `currentDocument` is the index of the currently displayed document. The `openDocument` and `deleteDocument` props are callback functions that open and delete documents, respectively.

import React, { useState, useEffect } from 'react';

const LibraryPane = ({ 
  documents, 
  currentDocument, 
  openDocument, 
  deleteDocument,
  appearance,
  setAppearance
}) => {

  const changeAppearance = (newAppearance) => {
    setAppearance(newAppearance);
    localStorage.setItem('appearance', newAppearance);
  };
  
  return (
    <div className={`LibraryPane p-4 w-64 h-full border-r`}>
      <h2 className="mb-4 font-semibold text-xl">Library</h2>
      <button
        className="mt-4 p-2 rounded"
        onClick={() => openDocument(documents.length)}
      >
        New Document
      </button>
      <ul>
        {documents.map((document, index) => (
          <li key={index} className="mb-2">
            <button
              className={`block w-full text-left p-2 ${
                currentDocument === index ? 'bg-gray-200' : ''
              } rounded`}
              onClick={() => openDocument(index)}
            >
              {document.title}
            </button>
            <button
              className="text-sm ml-2"
              onClick={() => deleteDocument(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className="appearance-selector-container mt-4">
        <label htmlFor="appearance-selector">Appearance:</label>
        <select
          className="mt-4 mb-4"
          value={appearance}
          onChange={(e) => changeAppearance(e.target.value)}
        >
          <option value="System">System</option>
          <option value="Light">Light</option>
          <option value="Dark">Dark</option>
        </select>
      </div>
    </div>
  );
}

export default LibraryPane;