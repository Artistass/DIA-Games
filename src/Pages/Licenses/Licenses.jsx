import "bootstrap/dist/css/bootstrap.min.css";
import './Licenses.css';

export default function Licenses() {
  return (
    <div className="licenses-container py-5">
      <div className="text-center">
        <h1 className="display-4 fw-bold licenses-title">Licenses</h1>
        <p className="lead text-muted mt-3 licenses-text">
          Disclaimer: The following small games - Guess 2 Pictures, Hangman, Rock Paper Scissors, and Tic-Tac-Toe - 
          are not my original creations. I do not own or sell licenses for these games.
        </p>
        <p className="text-muted licenses-text">
          This project was made solely for learning purposes to enhance my skills in front-end web development using React.js. 
          The goal is to train my individual skills and improve as a developer.
        </p>
        <hr className="my-4" />
        <a href="/" className="btn mt-3">
          Back to Home
        </a>
      </div>
    </div>
  );
}
