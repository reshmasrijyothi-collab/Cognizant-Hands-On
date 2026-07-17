import React from 'react';
import '../Stylesheets/mystyle.css';

// Function component that accepts Name, School, Total marks and goal (number of subjects)
// and calculates + displays the average score of a student.
function CalculateScore(props) {
  const { name, school, total, goal } = props;
  const average = (total / goal).toFixed(2);

  return (
    <div className="score-card">
      <h2>Student Score Card</h2>
      <p><span className="label">Name:</span> {name}</p>
      <p><span className="label">School:</span> {school}</p>
      <p><span className="label">Total Marks:</span> {total}</p>
      <p><span className="label">Number of Subjects:</span> {goal}</p>
      <p className="average"><span className="label">Average Score:</span> {average}</p>
    </div>
  );
}

export default CalculateScore;
