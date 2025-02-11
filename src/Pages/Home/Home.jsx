import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css"
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="position-relative text-center">
      <img
        src="/Header/pexels-pixabay-267355.jpg"
        alt="Header"
        className="img-fluid header-img"
      />
      <h1
        className="position-absolute top-50 start-50 translate-middle text-white header-text"
      >
        DIA Games
      </h1>
      </div>
      <div className='mx-auto main-content-container'>
      <div className="bg-secondary text-white py-4 px-3 mb-4">
        <h1 className="text-center display-1">Welcome to DIA Games</h1>
        <h2 className="text-center mt-3 display-6 main-content-text">
          Immerse Yourself in Exciting Adventures!
        </h2>
      </div>
      <div className="row row-cols-2 g-4 py-5 px-5">
        
        <div className="col">
  <div className="costume-card text-center h-100 pb-3 card-container rounded-top">
    <div className="d-flex flex-column align-items-center">
      <img
        src="/Game_1_Guess2/Guess2-Game.png"
        alt="Guess2-Game-Image"
        className="img-fluid mb-3 rounded-top"
      />
      <h3
        className="card-title fw-bold display-5 text-uppercase card-game-title">
        Find Match
      </h3>
      <hr className='card-hr'/>
      <p className="card-text text-muted px-3">
        "Find Match" games are fun puzzles that test your memory and observation skills. The goal is to match pairs of identical items, like images or cards, from a hidden or shuffled set.
      </p>
      <button
        className="btn btn-outline-secondary mt-auto"
        onClick={() => navigate("/guess2")}
      >
        Play Now
      </button>
    </div>
  </div>
</div>

<div className="col">
  <div className="costume-card text-center h-100 pb-3 card-container rounded-top">
    <div className="d-flex flex-column align-items-center">
      <img
        src="/Game_2_Hangman/Hangman-Game.png"
        alt="Hangman-Game-Image"
        className="img-fluid mb-3 rounded-top"
      />
      <h3
        className="card-title fw-bold display-5 text-uppercase card-game-title">
        Hangman
      </h3>
      <hr className='card-hr'/>
      <p className="card-text text-muted px-3">
      "Hangman" is a word-guessing game where players guess letters to reveal a hidden word. Each wrong guess adds to a drawing of a stick figure. The goal is to guess the word before the figure is fully drawn.
      </p>
      <button
        className="btn btn-outline-secondary mt-auto"
        onClick={() => navigate("/hangman")}
      >
        Play Now
      </button>
    </div>
  </div>
</div>

<div className="col">
  <div className="costume-card text-center h-100 pb-3 card-container rounded-top">
    <div className="d-flex flex-column align-items-center">
      <img
        src="/Game_3_TicTacToe/TicTacToe.png"
        alt="TicTacToe-Game-Image"
        className="img-fluid mb-3 rounded-top"
      />
      <h3
        className="card-title fw-bold display-5 text-uppercase card-game-title">
        Tic Tac Toe
      </h3>
      <hr className='card-hr'/>
      <p className="card-text text-muted px-3">
"Tic Tac Toe" is a classic two-player game where players take turns marking a 3x3 grid with either an X or an O. The goal is to get three of the same marks in a row, column, or diagonal before the opponent does.
      </p>
      <button
        className="btn btn-outline-secondary mt-auto"
        onClick={() => navigate("/tictactoe")}
      >
        Play Now
      </button>
    </div>
  </div>
</div>

<div className="col">
  <div className="costume-card text-center h-100 pb-3 card-container rounded-top">
    <div className="d-flex flex-column align-items-center">
      <img
        src="/Game_4_RockPaperScissors/rock-paper-scissors.png"
        alt="RockPaperScissors-Game-Image"
        className="img-fluid mb-3 rounded-top"
      />
      <h3
        className="card-title fw-bold display-5 text-uppercase card-game-title">
        Rock Paper Scissors!
      </h3>
      <hr className='card-hr'/>
      <p className="card-text text-muted px-3">
      "Rock Paper Scissors" is a simple hand game where players choose between rock, paper, or scissors. Rock crushes scissors, scissors cuts paper, and paper covers rock. The goal is to outsmart your opponent by choosing the winning option.
      </p>
      <button
        className="btn btn-outline-secondary mt-auto"
        onClick={() => navigate("/rockpaperscissors")}
      >
        Play Now
      </button>
    </div>
  </div>
</div>

      </div>
      </div>
    </div>
  );
}
