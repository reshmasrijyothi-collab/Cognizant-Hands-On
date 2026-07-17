import React from 'react';

function GuestPage({ onLogin }) {
  return (
    <div>
      <h2>Guest Page</h2>
      <p>Flight Details:</p>
      <ul>
        <li>AI 202 — Delhi to Mumbai — 06:00 AM</li>
        <li>6E 305 — Bengaluru to Hyderabad — 09:30 AM</li>
        <li>SG 118 — Chennai to Kolkata — 02:15 PM</li>
      </ul>
      <p>Please login to book a ticket.</p>
      <button onClick={onLogin}>Login</button>
    </div>
  );
}

export default GuestPage;
