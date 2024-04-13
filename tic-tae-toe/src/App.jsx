import { useState } from "react";
import "./style.scss";
import Board from "./components/Board";
import StatusMessage from "./components/StatusMessage";
import { calculateWinner } from "./winner";
import History from "./components/History";

const NEW_GAME = [
  { squares: Array(9).fill(null), isXNext: true }
]
function App() {
  const [history, setHistory] = useState(NEW_GAME);
  const [currentMove, setcurrentMove] = useState(0);

  const gamingBoard = history[currentMove];

  const winner = calculateWinner(gamingBoard.squares);

  console.log("currentmove", currentMove);

  const handleSquareClick = (clickedPosition) => {
    // value can be null 'X' or 'O'

    if (gamingBoard.squares[clickedPosition] || winner) {
      return;
    }
    setHistory((currentHistory) => {
      const isTraversing = currentMove + 1 !== currentHistory.length;

      const lastGamingState = isTraversing
      ? currentHistory[currentMove]
      : currentHistory[currentHistory.length-1];

      const nextSquareState = lastGamingState.squares.map(
        (squareValue, position) => {
          if (clickedPosition === position) {
            return lastGamingState.isXNext ? "X" : "O";
          }
          return squareValue;
        }
      );

      const base = isTraversing
      ? currentHistory.slice(0,currentHistory.indexOf(lastGamingState)+1)
      :currentHistory;
      return base.concat({
        squares: nextSquareState,
        isXNext: !lastGamingState.isXNext,
      });
    });

    setcurrentMove((move) => move + 1);
  };

  const moveTo = (move) => {
    setcurrentMove(move);
  };

  const onNewGameStart = () => {
    setHistory(NEW_GAME)
    setcurrentMove(0)
  }
  return (
    <div className="app">
      <StatusMessage winner={winner} gamingBoard={gamingBoard} />
      <Board
        squares={gamingBoard.squares}
        handleSquareClick={handleSquareClick}
      />
      <button type="button" onClick={onNewGameStart} className={`btn-reset ${winner ? 'active' : ''}`}
      >Start New Game</button>
      <h2>Game History</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
}

export default App;
