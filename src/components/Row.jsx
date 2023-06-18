import React from "react";

const Row = ({ guess, currentGuess }) => {
  if (guess) {
    return (
      <div className='row past'>
        {guess.map((elem, index) => (
          <div key={index} className={elem.color}>
            {elem.key}
          </div>
        ))}
      </div>
    );
  }

  if (currentGuess) {
    let letters = currentGuess.split("");

    return (
      <div className='row current'>
        {letters.map((elem, index) => (
          <div key={index} className='filled'>
            {elem}
          </div>
        ))}
        {[...Array(5 - letters.length)].map((_, index) => (
          <div key={index}></div>
        ))}
      </div>
    );
  }

  return (
    <div className='row'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Row;
