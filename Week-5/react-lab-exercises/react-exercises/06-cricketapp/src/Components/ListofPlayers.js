import React from 'react';

function ListofPlayers() {
  // Array of 11 players with name and score
  const players = [
    { name: 'Rohit Sharma', score: 85 },
    { name: 'Shubman Gill', score: 65 },
    { name: 'Virat Kohli', score: 92 },
    { name: 'Shreyas Iyer', score: 58 },
    { name: 'KL Rahul', score: 74 },
    { name: 'Hardik Pandya', score: 45 },
    { name: 'Ravindra Jadeja', score: 60 },
    { name: 'Axar Patel', score: 30 },
    { name: 'Kuldeep Yadav', score: 15 },
    { name: 'Mohammed Shami', score: 8 },
    { name: 'Jasprit Bumrah', score: 5 },
  ];

  // Using ES6 map() to render player list
  const allPlayers = players.map((player, index) => (
    <li key={index}>{player.name} - {player.score}</li>
  ));

  // Using ES6 arrow function to filter players with scores below 70
  const lowScorePlayers = players
    .filter((player) => player.score < 70)
    .map((player, index) => (
      <li key={index}>{player.name} - {player.score}</li>
    ));

  return (
    <div>
      <h2>List of Players</h2>
      <ul>{allPlayers}</ul>

      <h2>Players with Score Below 70</h2>
      <ul>{lowScorePlayers}</ul>
    </div>
  );
}

export default ListofPlayers;
