import React from 'react';

function IndianPlayers() {
  const players = [
    'Rohit Sharma', 'Shubman Gill', 'Virat Kohli', 'Shreyas Iyer',
    'KL Rahul', 'Hardik Pandya', 'Ravindra Jadeja', 'Axar Patel',
    'Kuldeep Yadav', 'Mohammed Shami', 'Jasprit Bumrah',
];

  // Destructuring to pick the Odd Team players (index 0,2,4...) and Even Team players (index 1,3,5...)
  const [
    p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11,
  ] = players;

  const oddTeamPlayers = [p1, p3, p5, p7, p9, p11];
  const evenTeamPlayers = [p2, p4, p6, p8, p10];

  // Two arrays merged using the ES6 spread/merge feature
  const T20players = ['Suryakumar Yadav', 'Arshdeep Singh', 'Yashasvi Jaiswal'];
  const RanjiTrophyPlayers = ['Sarfaraz Khan', 'Tilak Varma', 'Rinku Singh'];
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Indian Players</h2>

      <h3>Odd Team Players</h3>
      <ul>
        {oddTeamPlayers.map((name, index) => <li key={index}>{name}</li>)}
      </ul>

      <h3>Even Team Players</h3>
      <ul>
        {evenTeamPlayers.map((name, index) => <li key={index}>{name}</li>)}
      </ul>

      <h3>T20 &amp; Ranji Trophy Players (Merged)</h3>
      <ul>
        {mergedPlayers.map((name, index) => <li key={index}>{name}</li>)}
      </ul>
    </div>
  );
}

export default IndianPlayers;
