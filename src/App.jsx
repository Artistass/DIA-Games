import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/home";
import Guess2 from "./Pages/Guess2/guess2";
import Hangman from "./Pages/Hangman/Hangman";
import TicTacToe from "./Pages/TicTacToe/TicTacToe";
import RockPaperScissors from "./Pages/RockPaperScissors/rockPaperScissors";
import PageNotFound from './Pages/PageNotFound/pageNotFound';
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Licenses from './Pages/Licenses/Licenses';
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
