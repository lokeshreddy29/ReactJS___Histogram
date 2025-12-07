import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Histogram from "./Histogram";

function App() {
  const [characterCount, setCharacterCount] = useState(Array(26).fill(0));
  const [submit, setSubmit] = useState(false);

  const handleClick = (word) => {
    setSubmit(!submit);
    extractCharacters(word);
  };

  const extractCharacters = (word) => {
    
  }

  return (
    <>
      <h1 className="m-3">Alphabet Histogram</h1>

      {!submit ? (
        <div>
          <input className="rounded-md m-2 p-2 h-11 bg-zinc-900" />
          <button onClick={() => handleClick("word")}>Generate</button>
        </div>
      ) : (
        <div>
          <div className="h-100 w-300 border border-white grid grid-flow-col place-items-end grid-cols-26">
            <Histogram count={10} />
          </div>
          <button onClick={() => handleClick("word")}>Edit text</button>
        </div>
      )}
    </>
  );
}

export default App;
