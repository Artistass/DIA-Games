import { useState, useEffect } from "react";
import "./Guess2.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Guess2() {
  const cardsArray = [
    { id: 1, name: "🐶", matched: false, hidden: false },
    { id: 2, name: "🐱", matched: false, hidden: false },
    { id: 3, name: "🐼", matched: false, hidden: false },
    { id: 4, name: "🐰", matched: false, hidden: false },
    { id: 5, name: "🦊", matched: false, hidden: false },
    { id: 6, name: "🐻", matched: false, hidden: false },
    { id: 7, name: "🐸", matched: false, hidden: false },
    { id: 8, name: "🦄", matched: false, hidden: false },
    //
    { id: 1, name: "🐶", matched: false, hidden: false },
    { id: 2, name: "🐱", matched: false, hidden: false },
    { id: 3, name: "🐼", matched: false, hidden: false },
    { id: 4, name: "🐰", matched: false, hidden: false },
    { id: 5, name: "🦊", matched: false, hidden: false },
    { id: 6, name: "🐻", matched: false, hidden: false },
    { id: 7, name: "🐸", matched: false, hidden: false },
    { id: 8, name: "🦄", matched: false, hidden: false },
  ];

  const [cards, setCards] = useState(shuffle(cardsArray));
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [timer, setTimer] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [flipCount, setFlipCount] = useState(0);
  const [showPopup, setShowPopup] = useState(true); // Popup visibility state
  const [showWinPopup, setShowWinPopup] = useState(false); // Win popup visibility state

  // Shuffle function
  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  // Reset game
  function resetGame() {
    setCards(shuffle(cardsArray.map((card) => ({ ...card, hidden: false }))));
    setFlippedCards([]);
    setMatchedPairs([]);
    setTimer(0);
    setFlipCount(0);
    setIsPlaying(false);
    setShowPopup(true); // Show welcome popup again
    setShowWinPopup(false); // Hide win popup
  }

  // Start game
  function startGame() {
    setShowPopup(false); // Hide welcome popup
    setIsPlaying(true); // Start game
  }

  // Handle card click
  function handleCardClick(index) {
    if (
      !isPlaying ||
      flippedCards.length === 2 ||
      flippedCards.includes(index) ||
      matchedPairs.includes(cards[index].id)
    )
      return;

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setFlipCount((prev) => prev + 1);
      const [firstIndex, secondIndex] = newFlippedCards;

      if (cards[firstIndex].id === cards[secondIndex].id) {
        setMatchedPairs([...matchedPairs, cards[firstIndex].id]);

        // Hide matched cards after delay
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card, i) =>
              i === firstIndex || i === secondIndex
                ? { ...card, hidden: true }
                : card
            )
          );
        }, 500);
      }
      setTimeout(() => setFlippedCards([]), 500);
    }
  }

  function isFlipped(index) {
    return (
      flippedCards.includes(index) || matchedPairs.includes(cards[index].id)
    );
  }

  // Timer logic
  useEffect(() => {
    let interval;
    if (isPlaying && matchedPairs.length !== cardsArray.length / 2) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying, matchedPairs]);

  // Stop timer on win
  useEffect(() => {
    if (matchedPairs.length === cardsArray.length / 2) {
      setIsPlaying(false);
      setShowWinPopup(true); // Show win popup
    }
  }, [matchedPairs]);

  // Format timer as MM:SS
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div className="guess-2-container text-center">
      {showPopup && (
        <div className="popup">
          <h2>Welcome to the Memory Game!</h2>
          <p>Press the "Start" button to begin.</p>
          <button
            className="btn border border-3 border-dark rounded mt-4 px-4 py-2 fw-bold popup-btn"
            onClick={startGame}
          >
            Start
          </button>
        </div>
      )}

      {showWinPopup && (
        <div className="popup">
          <h2>Congratulations!</h2>
          <p>You have matched all cards.</p>
          <button
            className="btn border border-3 border-dark rounded mt-4 px-4 py-2 fw-bold popup-btn"
            onClick={resetGame}
          >
            Play Again
          </button>
        </div>
      )}

      <h1 className="mb-5">Find Match Game</h1>

      <div className="row row-cols-4 g-3 justify-content-center custom-card-container">
        {cards.map((card, index) => (
          <div
            className={`col ${card.hidden ? "hidden-card" : ""}`}
            key={index}
          >
            <div
              className={`card ${isFlipped(index) ? "flipped" : ""} ${
                card.hidden ? "hidden-card" : ""
              } custom-card`}
              onClick={() => handleCardClick(index)}
            >
              {isFlipped(index) ? card.name : ""}
            </div>
          </div>
        ))}

        {/* Reset Button */}
        <button
          className="btn border border-3 border-dark rounded mt-4 px-4 py-2 fw-bold popup-btn"
          onClick={resetGame}
        >
          Reset
        </button>
        {/* Timer Display */}
        <h2 className="mb-0">Time: {formatTime(timer)}</h2>

        {/* Flip Count Display */}
        <h2 className="mb-0">Flips: {flipCount}</h2>
      </div>
    </div>
  );
}
