import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";

const getRandomMultiplier = () => {
  const values = [-1, -2, 0.2, 0.3, 0.5, 1, 1.5, 1, 2.2, 5];
  return values[Math.floor(Math.random() * values.length)];
};

// Generate obstacles as big white balls
const generateObstacles = (count) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    // Place them along the obstacle Y position
    top: 380 + Math.random() * 40, // between 380 and 420 px
    left: `${Math.random() * 90 + 5}%`, // random horizontal position
    size: Math.random() * 20 + 30, // size between 30 and 50px
  }));

const MultiplierGame = () => {
  const multipliers = useMemo(() => Array.from({ length: 20 }, getRandomMultiplier), []);
  const [balls, setBalls] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [bet, setBet] = useState(10);

  // Generate several obstacle balls
  const obstacles = useMemo(() => generateObstacles(5), []);

  const dropBalls = () => {
    const newBalls = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${i * 5}%`,
      multiplier: multipliers[i],
    }));
    setBalls(newBalls);

    setTimeout(() => {
      setTotalScore(newBalls.reduce((acc, ball) => acc + bet * ball.multiplier, 0));
      setGameOver(true);
    }, 4000);
  };

  // Obstacle region
  const obstacleRegionTop = 360; // start of obstacle effect
  const obstacleRegionBottom = 440; // end of obstacle effect

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "600px",
        backgroundColor: "black",
        color: "white",
        overflow: "hidden",
      }}
    >
      {/* Drop Button at the top */}
      <button
        onClick={dropBalls}
        style={{
          position: "absolute",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          border: "none",
          color: "white",
          cursor: "pointer",
        }}
      >
        Drop
      </button>

      {/* Bet Input at the top left */}
      <div style={{ position: "absolute", top: "10px", left: "10px" }}>
        <label style={{ marginRight: "5px" }}>Bet Amount:</label>
        <input
          type="number"
          value={bet}
          onChange={(e) =>
            setBet(Math.min(1000, Math.max(10, Number(e.target.value))))
          }
          style={{ width: "80px", padding: "5px" }}
        />
      </div>

      {/* Obstacles: Big white balls */}
      {obstacles.map((obs) => (
        <div
          key={obs.id}
          style={{
            position: "absolute",
            top: `${obs.top}px`,
            left: obs.left,
            width: `${obs.size}px`,
            height: `${obs.size}px`,
            backgroundColor: "white",
            borderRadius: "50%",
          }}
        />
      ))}

      {/* Falling Balls with obstacle interaction */}
      {balls.map((ball) => {
        // Check if the ball is aligned with any obstacle
        // (This is a simple approximation: if the ball's left percentage is close to any obstacle's left position)
        const ballLeftPercent = parseFloat(ball.left);
        const collision = obstacles.find((obs) => {
          // Convert obs.left from "%" to number roughly
          const obsLeftPercent = parseFloat(obs.left);
          return Math.abs(obsLeftPercent - ballLeftPercent) < 5;
        });
        // If collision occurs, we alter the animation:
        // First phase: fall to obstacle region
        // Second phase: bounce upward and slow down
        // Third phase: resume falling to bottom
        const keyframes = collision
          ? [
              "0%",
              `${obstacleRegionTop - 20}px`, // reach before obstacle region
              `${obstacleRegionTop - 40}px`, // bounce upward
              `${obstacleRegionBottom + 20}px`, // resume falling slowly
              "calc(100% - 40px)",
            ]
          : ["0%", "calc(100% - 40px)"];
        const durations = collision ? 4 : 2; // slower if collision

        return (
          <motion.div
            key={ball.id}
            animate={{ top: keyframes }}
            transition={{
              duration: durations,
              times: collision ? [0, 0.3, 0.5, 0.8, 1] : undefined,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              width: "20px",
              height: "20px",
              backgroundColor: "#007bff",
              borderRadius: "50%",
              left: ball.left,
            }}
          />
        );
      })}

      {/* Multiplier Buttons - Stuck to the Bottom */}
      <div
        style={{
          position: "absolute",
          bottom: "0",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "2px 0",
          backgroundColor: "#6c757d",
        }}
      >
        {multipliers.map((multiplier, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              margin: "2px",
              padding: "10px 26px",
              fontWeight: "bold",
              backgroundColor: multiplier > 0 ? "#ffc107" : "#dc3545",
              border: "none",
              borderRadius: "3px",
              cursor: "pointer",
              color: "black",
            }}
          >
            {multiplier}
          </motion.button>
        ))}
      </div>

      {/* Game Over Message */}
      {gameOver && (
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            fontSize: "1.2em",
            fontWeight: "bold",
          }}
        >
          Game Over! Total Score: {totalScore}
        </div>
      )}
    </div>
  );
};

export default MultiplierGame;
