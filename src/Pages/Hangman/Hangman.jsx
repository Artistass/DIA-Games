import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Hangman.css';


const words = ['apple', 'banana', 'cherry', 'grape', 'orange'];

export default function Hangman() {
  const [word, setWord] = useState(words[Math.floor(Math.random() * words.length)]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [winMessage, setWinMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const displayWord = word
    .split('')
    .map((letter) => (guessedLetters.includes(letter) ? letter : '_'))
    .join(' ');

  useEffect(() => {
    if (displayWord.replace(/\s/g, '') === word) {
      setGameOver(true);
      setWinMessage('You won! Congratulations!');
    } else if (incorrectGuesses === 10) {
      setGameOver(true);
      setWinMessage(`Game Over! The word was "${word}".`);
    }
  }, [guessedLetters, incorrectGuesses, word, displayWord]);

  const handleGuess = (e) => {
    e.preventDefault();
    const letter = e.target.elements.letter.value.toLowerCase();

    // Validate input: Only allow letters
    if (!/^[a-z]$/.test(letter)) {
      setErrorMessage('Please enter a single letter (a-z).');
      e.target.reset();
      return;
    }

    setErrorMessage(''); // Clear previous error messages

    if (!guessedLetters.includes(letter) && !gameOver) {
      setGuessedLetters([...guessedLetters, letter]);
      if (!word.includes(letter)) {
        setIncorrectGuesses(incorrectGuesses + 1);
      }
    }

    e.target.reset();
  };

  const handleRestart = () => {
    setWord(words[Math.floor(Math.random() * words.length)]);
    setGuessedLetters([]);
    setIncorrectGuesses(0);
    setGameOver(false);
    setWinMessage('');
    setErrorMessage(''); // Reset error message
  };

  return (
    <div className="hangman-container">
      <div className="row m-0 p-0">
        <div className="col text-center">
          <h1>Hangman Game</h1>
          <h4>Guess the word by suggesting one letter at a time.</h4>

          <div className="div-center mt-5">
            <div>
              <div className="hangman-block">
                {/* Render lines dynamically */}
                {Array.from({ length: incorrectGuesses }).map((_, idx) => (
                  <div key={idx} className={`line line-${idx + 1}`}></div>
                ))}
              </div>
              <h5>{displayWord}</h5>
            </div>

            <div className="div-center-2">
              {/* Display game status messages */}
              {gameOver && (
                <div
                  className={`alert ${
                    incorrectGuesses === 10 ? 'alert-danger' : 'alert-success'
                  }`}
                  role="alert"
                >
                  {winMessage}
                </div>
              )}

              {/* Display input error message */}
              {errorMessage && (
                <div className="alert alert-warning" role="alert">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleGuess} className="form-group">
                <input
                  type="text"
                  name="letter"
                  maxLength="1"
                  className="form-control"
                  disabled={gameOver}
                  placeholder="Enter a letter"
                  autoComplete="off"
                />
                <button
                  type="submit"
                  disabled={gameOver}
                  className="btn btn-secondary mt-3"
                >
                  Guess
                </button>
              </form>

              <div className="div-center-3">
                <h6>Guessed Letters:</h6>
                <div className="alert alert-info" role="alert">
                  {guessedLetters.join(', ') || 'No letters guessed yet.'}
                </div>
              </div>

              <h5>Incorrect Guesses: {incorrectGuesses} / 10</h5>

              {gameOver && (
                <button onClick={handleRestart} className="btn btn-secondary mt-3 restart-btn">
                  Restart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
