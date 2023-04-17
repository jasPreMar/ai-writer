const FILE_PREFIX = 'text_editor_file_'; // This is a prefix used for the keys in the local storage. It's used to avoid conflicts with other keys in the local storage.

export const saveFile = (filename, content) => { // This function takes a filename and content and saves them to the local storage.
  localStorage.setItem(`${FILE_PREFIX}${filename}`, content);
};

export const loadFile = (filename) => { // This function takes a filename and loads the content from the local storage.
  return localStorage.getItem(`${FILE_PREFIX}${filename}`);
};

export const deleteFile = (filename) => { // This function takes a filename and deletes the corresponding file from the local storage.
  localStorage.removeItem(`${FILE_PREFIX}${filename}`);
};