import React from 'react';
import CohortDetails from './CohortDetails';

const cohorts = [
  { name: 'React Batch 101', status: 'ongoing', startDate: '01-Jun-2026', endDate: '30-Jul-2026' },
  { name: 'Angular Batch 45', status: 'completed', startDate: '01-Mar-2026', endDate: '30-Apr-2026' },
  { name: 'Node.js Batch 22', status: 'ongoing', startDate: '15-Jun-2026', endDate: '15-Aug-2026' },
];

function App() {
  return (
    <div>
      <h1>Academy Cohort Dashboard</h1>
      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} {...cohort} />
      ))}
    </div>
  );
}

export default App;
