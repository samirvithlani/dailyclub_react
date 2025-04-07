import React, { useEffect, useRef, useState } from 'react';
import aviator from "../assets/images/aviator.svg";

const AviatorGame = () => {
  // === Config ===
  const containerWidth = window.innerWidth;
  const containerHeight = 600;
  const maxFlightWidth = containerWidth * 2;
  const planeSize = 50;
  const speed = 1;
  const curveExponent = 2.2;
  const bottomOffset = 80;
  const crashMin = 1;
  const crashMax = 4000;

  // === State ===
  const [path, setPath] = useState([]);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [multiplier, setMultiplier] = useState(1.0);
  const [crashed, setCrashed] = useState(false);
  const [running, setRunning] = useState(false);
  const [cashedOut, setCashedOut] = useState(false);
  const [bet, setBet] = useState();
  const [balance, setBalance] = useState(500);
  const [history, setHistory] = useState([]);

  const animationRef = useRef(null);
  const crashTimeRef = useRef(0);
  const startTimeRef = useRef(0);

  // === Start Game ===
  const handleStart = () => {
    if (running || bet <= 0 || bet > balance) return;

    // Reset game state
    setPath([]);
    setPosition({ x: 0, y: 0 });
    setMultiplier(1.0);
    setCrashed(false);
    setCashedOut(false);
    setRunning(true);

    // Deduct balance
    setBalance(prev => prev - bet);

    const crashTime = Math.random() * (crashMax - crashMin);
    crashTimeRef.current = crashTime;
    startTimeRef.current = Date.now();

    animate();
  };

  // === Animate Loop ===
  const animate = () => {
    const elapsed = Date.now() - startTimeRef.current;

    if (elapsed > crashTimeRef.current) {
      setCrashed(true);
      cancelAnimationFrame(animationRef.current);

      if (!cashedOut) {
        setHistory(prev => [
          ...prev,
          {
            bet,
            multiplier: multiplier.toFixed(2),
            result: 0,
            status: 'Crashed',
          }
        ]);
      }

      setRunning(false);
      return;
    }

    setPosition(prev => {
      const newX = prev.x + speed;
      const rawY = Math.pow(newX / 100, curveExponent);
      const newY = Math.min(rawY + bottomOffset, containerHeight - planeSize);

      const newMultiplier = (newX + newY) / 100 + 1;
      setMultiplier(newMultiplier);
      setPath(old => [...old, { x: newX, y: newY }]);

      return { x: newX, y: newY };
    });

    animationRef.current = requestAnimationFrame(animate);
  };

  // === Cash Out Logic ===
  const handleCashOut = () => {
    if (!running || cashedOut || crashed) return;

    const winAmount = bet * multiplier;
    setBalance(prev => prev + winAmount);
    setCashedOut(true);

    setHistory(prev => [
      ...prev,
      {
        bet,
        multiplier: multiplier.toFixed(2),
        result: winAmount.toFixed(2),
        status: 'Cashed Out',
      }
    ]);

    // Continue animation until crash
  };

  // === SVG Path Generation ===
  const pathD = path
    .map((point, index) =>
      `${index === 0 ? 'M' : 'L'} ${point.x} ${containerHeight - point.y}`
    )
    .join(' ');

  const progressPercent = Math.min((position.x / maxFlightWidth) * 100, 100).toFixed(1);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>🛩️ Aviator Game</h2>
      <p>💰 Balance: ₹{balance.toFixed(2)}</p>

      <div style={{ marginBottom: '10px' }}>
        <input
          type="number"
          placeholder="Enter your bet"
          value={bet}
          onChange={(e) => setBet(Number(e.target.value))}
          disabled={running}
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <button onClick={handleStart} disabled={running || bet <= 0 || bet > balance}>
          ▶️ Start
        </button>
        <button onClick={handleCashOut} disabled={!running || crashed || cashedOut}>
          💸 Cashout
        </button>
      </div>

      <div
        style={{
          position: 'relative',
          width: '100%',
          height: `${containerHeight}px`,
          border: '2px solid #ccc',
          overflow: 'hidden',
          background: '#e0f7fa',
          marginBottom: '20px'
        }}
      >
        {/* Trail */}
        <svg style={{ position: 'absolute', top: 0, left: 0, width: `${maxFlightWidth}px`, height: '100%' }}>
          <path d={pathD} stroke="#ccc" strokeWidth="5" fill="none" />
          <path d={pathD} stroke="red" strokeWidth="5" fill="none" strokeDasharray="100000" strokeDashoffset="0" />
        </svg>

        {/* Plane */}
        {!crashed && running && (
          <img
            src={aviator}
            alt="Aviator"
            style={{
              position: 'absolute',
              left: `${position.x}px`,
              bottom: `${position.y}px`,
              width: `${planeSize}px`,
              height: `${planeSize}px`,
              transform: `rotate(${position.y / 10}deg)`,
              transition: 'transform 0.1s',
            }}
          />
        )}

        {/* Multiplier Tag */}
        {running && !crashed && (
          <div
            style={{
              position: 'absolute',
              left: `${position.x + planeSize + 10}px`,
              bottom: `${position.y + 10}px`,
              fontSize: '14px',
              fontWeight: 'bold',
              color: 'green',
              background: '#fff',
              padding: '4px 8px',
              borderRadius: '6px',
              boxShadow: '0px 0px 5px rgba(0,0,0,0.2)',
              whiteSpace: 'nowrap',
            }}
          >
            🚀 {multiplier.toFixed(2)}x
          </div>
        )}

        {/* Crashed Info */}
        {crashed && (
          <div
            style={{
              position: 'absolute',
              top: 20,
              left: 20,
              fontSize: '18px',
              fontWeight: 'bold',
              color: 'red',
              background: '#fff',
              padding: '8px 16px',
              borderRadius: '10px',
            }}
          >
            💥 Crashed at {multiplier.toFixed(2)}x<br />
            📉 Progress: {progressPercent}%
          </div>
        )}
      </div>

      {/* Bet History */}
      <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
        <h3>📜 Bet History</h3>
        <table border="1" cellPadding="10" style={{ width: '100%', background: '#f9f9f9' }}>
          <thead>
            <tr>
              <th>Bet (₹)</th>
              <th>Multiplier</th>
              <th>Result (₹)</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {history.slice().reverse().map((item, idx) => (
              <tr key={idx}>
                <td>{item.bet}</td>
                <td>{item.multiplier}x</td>
                <td>{item.result}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AviatorGame;
