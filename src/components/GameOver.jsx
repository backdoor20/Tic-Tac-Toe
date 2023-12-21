export default function GameOver({ winner, restart }) {
  return (
    <div id="game-over">
      <h2>Game Over !</h2>
      {winner && <p>{winner} Won</p>}
      {!winner && <p>It's a Draw</p>}
      <button onClick={restart}>Restart</button>
    </div>
  );
}
