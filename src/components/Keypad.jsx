import { useState } from "react";
import data from "../data/db.json";

const Keypad = ({ usedKeys }) => {
  // eslint-disable-next-line
  const [letters, setLetters] = useState(data.letters);

  return (
    <div className='keypad'>
      {letters &&
        letters.map((l) => {
          const color = usedKeys[l.key];
          return (
            <div key={l.key} className={color}>
              {l.key}
            </div>
          );
        })}
    </div>
  );
};

export default Keypad;
