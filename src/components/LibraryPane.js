// This file defines the LibraryPane component, which is used to display the list of documents in the library. It receives four props: `documents`, `currentDocument`, `openDocument`, and `deleteDocument`. The `documents` prop is an array of document objects, each with a title, content, and filename. `currentDocument` is the index of the currently displayed document. The `openDocument` and `deleteDocument` props are callback functions that open and delete documents, respectively.

import React from 'react'; // This line imports the React library.

function LibraryPane({ documents, currentDocument, openDocument, deleteDocument }) { // This line defines the LibraryPane component as a functional component. It receives four props: `documents`, `currentDocument`, `openDocument`, and `deleteDocument`. The `documents` prop is an array of document objects, each with a title, content, and filename. `currentDocument` is the index of the currently displayed document. The `openDocument` and `deleteDocument` props are callback functions that open and delete documents, respectively.
  
  return (
    // starts the JSX structure of the LibraryPane component. It contains:
    // 
      // - a `div` with the class name `LibraryPane p-4 w-64 h-full border-r border-gray-300 bg-gray-100`. It contains:
      // 
        // - an `h2` with the text `Library` and the class name `mb-4 font-semibold text-xl`
        // - a button with the text `New Document` and the class name `mt-4 p-2 bg-blue-500 text-white rounded`. It calls the `openDocument` callback function with the length of the `documents` array as an argument when clicked.
        // - The ul element creates an unordered list to display the list of documents. The map function is used to iterate over the documents array and create a list item (li) for each document. The list item contains two buttons:
        // 
          //   - The first button displays the document's `title`. When clicked, it calls the `openDocument` function with the current `index` to open the selected document. It also adds the class name `bg-gray-200` if the active document is the selected document.
          //   - The second button is a "Delete" button. When clicked, it calls the `deleteDocument` function with the current `index` to delete the selected document.
          // 
    <div className="LibraryPane p-4 w-64 h-full border-r border-gray-300 bg-gray-100">
      <h2 className="mb-4 font-semibold text-xl">Library</h2>
      <button
        className="mt-4 p-2 bg-blue-500 text-white rounded"
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
              className="text-sm text-red-500 ml-2"
              onClick={() => deleteDocument(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div> // closes the `div` element for the `LibraryPane` component.
  ); // closes the return statement.
} // closes the `LibraryPane` function.

export default LibraryPane; // This line exports the `LibraryPane` component as the default export, which can be imported in other partrs of the app.