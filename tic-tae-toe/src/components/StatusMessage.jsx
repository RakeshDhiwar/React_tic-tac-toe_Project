/* eslint-disable react/prop-types */

const StatusMessage = ({ winner,gamingBoard}) => {
 const {squares, isXNext} = gamingBoard;
  const noMovesLeft = squares.every(squareValue => squareValue !==null);
  const nextPlayer = isXNext ? "X" : "O";
  

  const renderStatusMessage = () => {
    if(winner) {
      return <div><span><span className={isXNext ? 'text-green' : 'text-orange'}>{winner} </span></span>wins</div>
    }

    if(!winner && noMovesLeft) {
      return <div>
          <span><span className="text-orange">O</span></span>
          {" "}and {" "}
          <span><span className="text-green">T</span></span>
          {" "}Tied
        </div>
    }

    if(!winner && !noMovesLeft) {
      return <div><span> <span className={isXNext ? 'text-green' : 'text-orange'}>{nextPlayer}s</span> </span>Move</div>
    }
  }

  return <div className="status-messsage">{renderStatusMessage()}</div>;
};

export default StatusMessage;
