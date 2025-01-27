import React, { useState, useMemo } from "react";

const FindTheBombGame = () => {
  const gridSize = 3; // Number of rows and columns
  const totalTiles = gridSize * gridSize;

  // Initialize the bomb position using useMemo to persist the value across renders
  const bombPosition = useMemo(() => Math.floor(Math.random() * totalTiles), [totalTiles]);

  const [clickedTiles, setClickedTiles] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("Find the bomb!");

  const handleTileClick = (index) => {
    if (gameOver) return;

    if (index === bombPosition) {
      setMessage("💣 Boom! You found the bomb!");
      setGameOver(true);
    } else {
      setMessage("Keep searching...");
      setClickedTiles([...clickedTiles, index]);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Find the Bomb Game</h1>
      <p>{message}</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${gridSize}, 50px)`,
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {Array.from({ length: totalTiles }).map((_, index) => (
          <div
            key={index}
            onClick={() => handleTileClick(index)}
            style={{
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid black",
              backgroundColor: clickedTiles.includes(index)
                ? "#ddd"
                : "#fff",
              cursor: "pointer",
            }}
          >
            {gameOver && index === bombPosition ? "💣" : ""}
          </div>
        ))}
      </div>
      {gameOver && (
        <button
          onClick={() => window.location.reload()}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Play Again
        </button>
      )}
    </div>
  );
};

export default FindTheBombGame;
