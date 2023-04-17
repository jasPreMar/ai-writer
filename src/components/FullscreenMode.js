// The Fullscreen mode in iA Writer is a feature designed to provide users with an immersive, distraction-free writing environment. By expanding the Text Editor to occupy the entire screen, Fullscreen mode eliminates any visual distractions, allowing users to fully concentrate on their work.

// UI and Visual Elements:

//  1. Fullscreen Background: When Fullscreen mode is activated, the entire screen is covered by a solid background color (usually dark gray or black), effectively hiding any other applications, desktop icons, or system notifications.

//  2. Text Area: The Text Editor's text area is centered in the Fullscreen mode, with ample whitespace on all sides. This maintains a comfortable reading width and creates a visually calming space for users to focus on their writing.

//  3. Monospaced Font and Syntax Highlighting: As in the standard Text Editor, a monospaced font is used for displaying text in Fullscreen mode, ensuring consistent character width and improved readability. Syntax highlighting for supported markup languages is also preserved, allowing users to easily discern different formatting elements.

//  4. Minimized Toolbar: The Toolbar in Fullscreen mode is minimized to display only essential functions, such as creating or opening documents, undoing or redoing changes, exporting, and accessing settings. These functions are accessible via the top of the screen when the cursor is moved close to it, keeping the interface clean and minimal.

// Functionality:

//  1. Writing and Editing: Similar to the Text Editor, the primary function of Fullscreen mode is to provide a space for users to write and edit their documents without distractions. Users can type, delete, and modify text while enjoying an enhanced sense of focus.

//  2. Focus and Typewriter Modes: In Fullscreen mode, users can also enable Focus and Typewriter modes to further enhance their writing experience. Focus Mode highlights the current sentence or paragraph, while Typewriter Mode keeps the cursor at the vertical center of the screen.

//  3. Accessing Library Panel and Toolbar: While the Library Panel and Toolbar are hidden by default in Fullscreen mode, users can access them by moving the cursor to the left edge or the top of the screen, respectively. This allows users to manage documents, access settings, and perform essential functions without leaving the Fullscreen environment.

//  4. Exiting Fullscreen Mode: To exit Fullscreen mode, users can press the 'Escape' key or use a designated keyboard shortcut (usually 'Cmd+Ctrl+F' on macOS or 'F11' on Windows). This returns the user to the standard iA Writer interface, with the Library Panel and Toolbar visible.

// In summary, iA Writer's Fullscreen mode offers an immersive, distraction-free writing experience by expanding the Text Editor to occupy the entire screen and hiding non-essential UI elements. Combined with the clean and minimal design, as well as the optional Focus and Typewriter modes, Fullscreen mode provides users with an environment that fosters creativity and productivity.

import React from 'react'; // This line imports the React library.

function FullscreenMode({ isFullscreen, toggleFullscreen }) { // This line defines the `FullscreenMode` component as a functional component. It receives two props: `isFullscreen` and `toggleFullscreen`. The `isFullscreen` prop is a boolean value indicating whether the app is in fullscreen mode or not. The `toggleFullscreen` prop is a callback function used to toggle the fullscreen mode.
  return (
    // This statement starts the JSX structure of the `FullscreenMode` component. It contains:
      // - a `button` with the class name `FullscreenMode p-4 focus:outline-none`. It's the main element of the `FullscreenMode` component.
    <button
      className="FullscreenMode p-4 focus:outline-none"
      onClick={toggleFullscreen}
    >
      {isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen' /* This line uses a ternary operator to display different button text based on the value of the `isFullscreen` prop. If `isFullscreen` is true, the button text will be "Exit Fullscreen", otherwise, it will be "Enter Fullscreen". */}
    </button> // closes the `button` element.
  ); // closes the `return` statement.
} // closes the `FullscreenMode` function.

export default FullscreenMode; // This line exports the `FullscreenMode` component as the default export, which can be imported in other parts of the app.