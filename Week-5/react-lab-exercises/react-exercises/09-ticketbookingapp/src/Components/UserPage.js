import React from 'react';

function UserPage({ onLogout }) {
  return (
    <div>
      <h2>Welcome back!</h2>
      <p>You are logged in. You can now book flight tickets.</p>
      <ul>
        <li>AI 202 — Delhi to Mumbai — 06:00 AM <button>Book</button></li>
        <li>6E 305 — Bengaluru to Hyderabad — 09:30 AM <button>Book</button></li>
        <li>SG 118 — Chennai to Kolkata — 02:15 PM <button>Book</button></li>
      </ul>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default UserPage;
