import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RockPaperScissors.css";

export default function RockPaperScissors() {
  const choices = ["✊", "✋", "✌️"];
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  // Function to handle the player's choice
  const handlePlayerChoice = (choice) => {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    setPlayerChoice(choice);
    setComputerChoice(computerChoice);
    determineWinner(choice, computerChoice);
  };

  // Function to determine the winner and update the score
  const determineWinner = (player, computer) => {
    if (player === computer) {
      setResult("It's a tie!");
    } else if (
      (player === "✊" && computer === "✌️") ||
      (player === "✌️" && computer === "✋") ||
      (player === "✋" && computer === "✊")
    ) {
      setResult("You win!");
      setPlayerScore((prevScore) => prevScore + 1); // Increment player's score
    } else {
      setResult("Computer wins!");
      setComputerScore((prevScore) => prevScore + 1); // Increment computer's score
    }
  };

  return (
    <div className="container-fluid rock-paper-scissors-container">
      <h1 className="text-center mb-4 p-5">Rock Paper Scissors</h1>

      <div className="d-flex justify-content-center align-items-center flex-row text-center">
        <h3>
          Your choice <br /> <span className="choice">{playerChoice}</span>
        </h3>

        <div className="d-flex flex-column justify-content-center align-items-center choice-buttons-container">
          <button
            className="btn text-dark fw-bold border border-2 border-dark custom-bg m-2 choice-button"
            onClick={() => handlePlayerChoice("✊")}
          >
            Rock
          </button>
          <button
            className="btn text-dark fw-bold border border-2 border-dark custom-bg m-2 choice-button"
            onClick={() => handlePlayerChoice("✋")}
          >
            Paper
          </button>
          <button
            className="btn text-dark fw-bold border border-2 border-dark custom-bg m-2 choice-button"
            onClick={() => handlePlayerChoice("✌️")}
          >
            Scissors
          </button>
        </div>

        <h3>
          Computer choice <br />{" "}
          <span className="choice">{computerChoice}</span>
        </h3>
      </div>

      <h2 className="result text-center">{result}</h2>

      <div className="mt-5 text-center">
        <div className="d-flex align-items-center justify-content-between mt-4 mx-5 fs-2">
          <p>
            Your Score: <span className="score">{playerScore}</span>
          </p>
          <p>
            Computer Score: <span className="score">{computerScore}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
