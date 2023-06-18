import { useEffect, useState } from "react";
import data from "./data/db.json";

import Wordle from "./components/Wordle";

function App() {
  const [solution, setSolution] = useState("");

  useEffect(() => {
    const random = Math.floor(Math.random() * 30);
    const randomWord = data.solutions.at(random);
    setSolution(randomWord.word);
  }, [setSolution, ]);

  return (
    <div className='App'>
      <h1 className='title'>Guess The Word</h1>
      {solution && (
        <Wordle solution={solution} />
      )}
    </div>
  );
}

export default App;
