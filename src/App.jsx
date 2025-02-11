import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Guess2 from "./Pages/Guess2/Guess2.jsx";
import Hangman from "./Pages/Hangman/Hangman.jsx";
import TicTacToe from "./Pages/TicTacToe/TicTacToe.jsx";
import RockPaperScissors from "./Pages/RockPaperScissors/rockPaperScissors.jsx";
import PageNotFound from './Pages/PageNotFound/PageNotFound.jsx';
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Licenses from './Pages/Licenses/Licenses.jsx';
function App() {

  return (
   
      <div>
          <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/guess2" element={<Guess2/>}/>
          <Route path="/hangman" element={<Hangman/>}/>
          <Route path="/tictactoe" element={<TicTacToe/>}/>
          <Route path="/rockpaperscissors" element={<RockPaperScissors/>}/>
          <Route path="/licenses" element={<Licenses/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
        <Footer/>
      </div>
   
  )
}

export default App
