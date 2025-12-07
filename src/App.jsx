import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Histogram from "./Histogram";

function App() {
  const [characterCount, setCharacterCount] = useState([]);
  const [submit, setSubmit] = useState(false);

  var enteredWord;

  const handleClick = (word) => {
    if (!word) return;

    setSubmit(!submit);
    extractCharacters(word);
  };

  const extractCharacters = (word) => {
    const splitString = word.split("");
    // ['a', 'b', 'c']
    // this is retuning thr ASCII value of the character at 0th index in the split string.
    // when i remove 97 from the ASCII value that is giving the corresponding index for that character
    // i can then use the index to store the count of that particular character which can then be used by the Histogram component.
    const newArray = Array(26).fill(0);

    for (let i = 0; i < splitString.length; i++) {
      var charIndex = splitString[i].charCodeAt(0) - 97;
      var charCount = 0;

      for (let j = 0; j < splitString.length; j++) {
        if (splitString[i] === splitString[j]) charCount++;
      }
      newArray[charIndex] = charCount;
    }

    setCharacterCount(newArray);
  };

  return (
    <>
      <h1 className="m-3">Alphabet Histogram</h1>
      {console.log(characterCount)}
      {!submit ? (
        <div>
          <input
            className="rounded-md m-2 p-2 h-11 bg-zinc-900"
            onChange={(e) => (enteredWord = e.target.value.toLowerCase())}
          />
          <button onClick={() => handleClick(enteredWord)}>Generate</button>
        </div>
      ) : (
        <div>
          <div className="h-100 w-300 border border-white grid grid-flow-col place-items-end grid-cols-26">
            {characterCount.map((count, index) => (
              <Histogram key={index} count={count} index={index}/>
            ))}
          </div>
          <div className='m-3'>
            <button onClick={() => setSubmit(!submit)}>Edit word</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
