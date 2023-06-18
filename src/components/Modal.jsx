import Confetti from "./Confetti";

const Modal = ({ isCorrect, turn, solution }) => {
  return (
    <>
      {isCorrect && (
        <div className='modal'>
          <Confetti />
          <div>
            <h1>You won! 🥳</h1>
            <p>You found the solution in {turn} guesses.</p>
          </div>
        </div>
      )}
      {!isCorrect && (
        <div className='modal'>
          <div>
            <h1
              className='title'
              style={{ color: "black", marginBottom: "2px" }}
            >
              Guess The Word
            </h1>
            <h1>You lost!</h1>
            <p>The solution was:</p>
            <p className='solution'>{solution}</p>
            <p>Better luck next time.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
