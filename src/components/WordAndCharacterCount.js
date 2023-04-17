// This file contains the `WordAndCharacterCount` component, which is used to display the word and character counts of the text in the editor. It receives one prop: `text`, which is a string containing the text for which the word and character counts will be calculated. The `WordAndCharacterCount` component is used in the `FullscreenMode` component.

import React from 'react'; // This line imports the React library.

function WordAndCharacterCount({ text }) { // This line defines the `WordAndCharacterCount` component as a functional component. It receives one prop: `text`, which is a string containing the text for which the word and character counts will be calculated.
  const characterCount = text.length; // This line calculates the character count of the `text` prop by simply getting the length of the string.
  const withoutSpaces = text.replace(/\s+/g, '').length; // This line calculates the character count without spaces by replacing all whitespace characters with an empty string and getting the length of the resulting string.
  const wordCount = text.trim().split(/\s+/).filter((word) => word.length > 0).length; // This line calculates the word count of the `text` prop. First, it trims any leading or trailing whitespace from the text. Then, it splits the text into an array of words using a regular expression to match one or more whitespace characters (`/\s+/`). After that, it filters out any empty strings in the array and calculates the length of the resulting array, which represents the word count.
  const sentenceCount = text.split(/[.!?]+/).filter((sentence) => sentence.length > 0).length; // This line calculates the sentence count of the `text` prop. First, it splits the text into an array of sentences using a regular expression to match one or more sentence-ending punctuation marks (`/[.!?]+/`). After that, it filters out any empty strings in the array and calculates the length of the resulting array, which represents the sentence count.

  const readingTimeSeconds = Math.floor(wordCount / 200 * 60);
  // This line calculates the reading time in seconds by multiplying the reading time in minutes by 60.
  const readingTimeMinutes = Math.floor(readingTimeSeconds / 60);
  // This line calculates the reading time in minutes by dividing the word count by 200 and rounding up to the nearest integer.
  const readingTimeHours = Math.floor(readingTimeMinutes / 60);
  // This line calculates the reading time in hours by dividing the reading time in minutes by 60 and rounding down to the nearest integer.
  
  
  
  // This statement starts the JSX structure of the `FullscreenMode` component. It contains:
    // - a `span` element with the class name `mr-4`. It contains the character count of the `text` prop.
    // - a `span` element with the class name `mr-4`. It contains the character count without spaces of the `text` prop.
    // - a `span` element with the class name `mr-4`. It contains the word count of the `text` prop.
    // - a `span` element with the class name `mr-4`. It contains the sentence count of the `text` prop.
    // - a `span` element with the class name `mr-4`. It contains the reading time in seconds and turns it into the human readable formay of hh:mm:ss.

  return (
    // This statement starts the JSX structure of the `WordAndCharacterCount` component. It contains:
      // - a `div` element with the class name `WordAndCharacterCount text-gray-600`. It contains:
        // - a `span` element with the class name `mr-4`. It contains the character count of the `text` prop.
        // - a `span` element with the class name `mr-4`. It contains the character count without spaces of the `text` prop.
        // - a `span` element with the class name `mr-4`. It contains the word count of the `text` prop.
        // - a `span` element with the class name `mr-4`. It contains the sentence count of the `text` prop.
        // - a `span` element with the class name `mr-4`. It contains the reading time in seconds and turns it into the human readable format of hh:mm:ss.
    <div className="WordAndCharacterCount text-gray-600">
      <span className="mr-4">{characterCount} characters</span>
      <span className="mr-4">{withoutSpaces} without spaces</span>
      <span className="mr-4">{wordCount} words</span>
      <span className="mr-4">{sentenceCount} sentences</span>
      <span className="mr-4">
        {String(readingTimeHours).padStart(2, '0')}:
        {String(readingTimeMinutes % 60).padStart(2, '0')}:
        {String(readingTimeSeconds % 60).padStart(2, '0')} reading time
      </span>

    </div>
  ); // closes the `return` statement.
} // closes the `WordAndCharacterCount` function.

export default WordAndCharacterCount; // This line exports the `WordAndCharacterCount` component as the default export, which can be imported in other parts of the app.