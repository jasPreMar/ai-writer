// Desc: This component is a modal that displays a list of files to select from when the filename dropdown button is clicked. It receives the following props: `isOpen`, `onClose`, `files`, and `selectFile`. The `isOpen` prop is a boolean that determines whether the modal is open or closed. The `onClose` prop is a callback function that closes the modal when called. The `files` prop is an array of filenames. The `selectFile` prop is a callback function that selects a file when called.

// CurrentFileModal.js
import React from 'react';

const CurrentFileModal = ({ isOpen, onClose, files, selectFile }) => {
  return (
    <div
      className={`current-file-modal fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 ${
        isOpen ? 'block' : 'hidden'
      }`}
      onClick={onClose}
    >
      <div
        className="modal-content bg-white p-4 rounded-md m-auto w-1/3"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-bold mb-4">Select a file</h3>
        <ul>
          {files.map((file, index) => (
            <li
              key={index}
              className="cursor-pointer hover:bg-gray-200 p-2"
              onClick={() => selectFile(index)}
            >
              {file.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CurrentFileModal;