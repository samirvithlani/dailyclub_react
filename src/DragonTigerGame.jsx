import React, { useState } from 'react';

const initialDeck = [
  { suit: 'Hearts', value: 1 },
  { suit: 'Hearts', value: 2 },
  { suit: 'Hearts', value: 3 },
  { suit: 'Hearts', value: 4 },
  { suit: 'Hearts', value: 5 },
  { suit: 'Hearts', value: 6 },
  { suit: 'Hearts', value: 7 },
  { suit: 'Hearts', value: 8 },
  { suit: 'Hearts', value: 9 },
  { suit: 'Hearts', value: 10 },
  { suit: 'Spades', value: 1 },
  { suit: 'Spades', value: 2 },
  { suit: 'Spades', value: 3 },
  { suit: 'Spades', value: 4 },
  { suit: 'Spades', value: 5 },
  { suit: 'Spades', value: 6 },
  { suit: 'Spades', value: 7 },
  { suit: 'Spades', value: 8 },
  { suit: 'Spades', value: 9 },
  { suit: 'Spades', value: 10 }
  // For simplicity, using 20 cards total.
];

const getRandomCard = (deck) => {
  const index = Math.floor(Math.random() * deck.length);
  return deck[index];
};

const DragonTigerGame = () => {
  // State for bet: 'dragon' or 'tiger'
  const [bet, setBet] = useState('');
  // States for drawn cards
  const [dragonCard, setDragonCard] = useState(null);
  const [tigerCard, setTigerCard] = useState(null);
  // State for game result message
  const [message, setMessage] = useState('');

  // Function to handle betting selection
  const handleBet = (side) => {
    setBet(side);
    // Clear previous results
    setDragonCard(null);
    setTigerCard(null);
    setMessage('');
  };

  // Function to deal cards
  const dealCards = () => {
    if (!bet) {
      setMessage('Please place your bet on Dragon or Tiger first.');
      return;
    }
    // Draw a card for Dragon and Tiger from the deck
    const dragon = getRandomCard(initialDeck);
    const tiger = getRandomCard(initialDeck);
    setDragonCard(dragon);
    setTigerCard(tiger);

    // Determine winner
    if (dragon.value === tiger.value) {
      setMessage("It's a Tie!");
    } else if (
      (dragon.value > tiger.value && bet === 'dragon') ||
      (tiger.value > dragon.value && bet === 'tiger')
    ) {
      setMessage('You win!');
    } else {
      setMessage('You lose!');
    }
  };

  return (
    <div style={{ fontFamily: 'Arial', textAlign: 'center', marginTop: '20px' }}>
      <h2>Dragon Tiger Game</h2>
      <p>Place your bet on Dragon or Tiger, then click "Deal"!</p>

      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={() => handleBet('dragon')}
          style={{
            padding: '10px 20px',
            margin: '10px',
            backgroundColor: bet === 'dragon' ? 'lightblue' : 'white',
            cursor: 'pointer'
          }}
        >
          Dragon
        </button>
        <button
          onClick={() => handleBet('tiger')}
          style={{
            padding: '10px 20px',
            margin: '10px',
            backgroundColor: bet === 'tiger' ? 'lightcoral' : 'white',
            cursor: 'pointer'
          }}
        >
          Tiger
        </button>
      </div>

      <button
        onClick={dealCards}
        style={{
          padding: '10px 30px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: 'orange',
          border: 'none'
        }}
      >
        Deal
      </button>

      {dragonCard && tigerCard && (
        <div style={{ marginTop: '20px' }}>
          <h3>Results:</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '50px' }}>
            <div>
              <h4>Dragon's Card</h4>
              <p>
                {dragonCard.value} of {dragonCard.suit}
              </p>
            </div>
            <div>
              <h4>Tiger's Card</h4>
              <p>
                {tigerCard.value} of {tigerCard.suit}
              </p>
            </div>
          </div>
        </div>
      )}

      {message && <h3 style={{ marginTop: '20px' }}>{message}</h3>}
    </div>
  );
};

export default DragonTigerGame;
