import React, { useMemo, useState } from "react";

export const FIndBomb1 = () => {
  const gridSize = 7;
  const totalTiles = gridSize * gridSize;

  const [points, setPoints] = useState(5000);
  const [clickedTiles, setClickedTiles] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("Find the bomb!");
  const [multiplier, setMultiplier] = useState(1);
  const [history, setHistory] = useState([]);
  const [bombPositions, setBombPositions] = useState([]);

  // Function to generate bomb positions avoiding clicked tiles
  const generateBombs = (multiplier) => {
    let bombsCount =
      multiplier === 1 ? 3 :
      multiplier === 2 ? 4 :
      multiplier === 4 ? 6 : 10;

    const positions = new Set();
    while (positions.size < bombsCount) {
      let randomTile = Math.floor(Math.random() * totalTiles);
      if (!clickedTiles.includes(randomTile)) {
        positions.add(randomTile);
      }
    }
    return Array.from(positions);
  };

  // Update bombs when the multiplier changes
  React.useEffect(() => {
    setBombPositions(generateBombs(multiplier));
  }, [multiplier]);

  console.log("Bombs at:", bombPositions); // Debugging

  const handleClick = (index) => {
    if (gameOver || clickedTiles.includes(index)) return;

    let betAmountInput = prompt("How much do you want to bet? Available: " + points);
    if (betAmountInput === null) return; // user cancelled
    const betAmount = parseInt(betAmountInput, 10);
    if (isNaN(betAmount) || betAmount < 1) {
      alert("Please enter a valid number greater than 0");
      return;
    }
    if (betAmount > points) {
      alert("Not enough Rs to bet! Available: " + points);
      return;
    }

    if (bombPositions.includes(index)) {
      const loss = betAmount * multiplier;
      setMessage(`💣 Boom! You lost ${loss} Rs!`);
      setPoints((prev) => prev - loss);
      setHistory((prev) => [
        ...prev,
        { tile: index + 1, bet: betAmount, multiplier, outcome: "Loss", result: -loss }
      ]);
      setGameOver(true);
    } else {
      const win = betAmount * multiplier;
      setMessage(`✅ Safe! You won ${win} Rs!`);
      setPoints((prev) => prev + win);
      setHistory((prev) => [
        ...prev,
        { tile: index + 1, bet: betAmount, multiplier, outcome: "Win", result: win }
      ]);
      setClickedTiles([...clickedTiles, index]);
    }
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", background: "#f0f4f8", minHeight: "100vh", padding: "20px" }}>
      <div style={{ background: "#fff", padding: "20px", borderRadius: "8px", maxWidth: "600px", margin: "0 auto", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
        <h1 style={{ color: "#333" }}>{message}</h1>
        <h2 style={{ color: "#555" }}>💰 Rs: {points}</h2>

        <div style={{ margin: "20px 0" }}>
          <label style={{ marginRight: "10px", fontWeight: "bold" }}>Risk Multiplier:</label>
          <select
            value={multiplier}
            onChange={(e) => setMultiplier(parseInt(e.target.value, 10))}
            style={{ padding: "5px", fontSize: "16px" }}
          >
            <option value={1}>1x (3 Bombs)</option>
            <option value={2}>2x (4 Bombs)</option>
            <option value={4}>4x (6 Bombs)</option>
            <option value={5}>5x (10 Bombs)</option>
          </select>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${gridSize}, 60px)`,
            gap: "10px",
            justifyContent: "center",
            margin: "20px 0",
          }}
        >
          {Array.from({ length: totalTiles }).map((_, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              style={{
                width: "60px",
                height: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid #ccc",
                backgroundColor: clickedTiles.includes(index) ? "#e0e0e0" : "#fff",
                cursor: "pointer",
                fontSize: "18px",
                borderRadius: "4px",
                transition: "background-color 0.3s, border-color 0.3s",
              }}
            >
              {gameOver && bombPositions.includes(index) ? "💣" : index + 1}
            </div>
          ))}
        </div>

        {gameOver && (
          <div style={{ margin: "20px 0" }}>
            <h2 style={{ color: "#d9534f" }}>Game Over! Final Rs: {points}</h2>
            <button
              onClick={() => window.location.reload()}
              style={{ padding: "10px 20px", fontSize: "16px", borderRadius: "4px", background: "#0275d8", color: "#fff", border: "none", cursor: "pointer" }}
            >
              Restart
            </button>
          </div>
        )}

        {history.length > 0 && (
          <div style={{ marginTop: "30px", textAlign: "left" }}>
            <h3>History</h3>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>Tile</th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>Bet</th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>Multiplier</th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>Outcome</th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>Result (Rs)</th>
                </tr>
              </thead>
              <tbody>
                {history.map((entry, idx) => (
                  <tr key={idx}>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>{entry.tile}</td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>{entry.bet}</td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>{entry.multiplier}x</td>
                    <td style={{ border: "1px solid #ddd", padding: "8px", color: entry.outcome === "Win" ? "#5cb85c" : "#d9534f" }}>{entry.outcome}</td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>{entry.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
