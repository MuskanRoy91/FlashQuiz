import React from 'react';

function ProgressTracking({ flashcards, score }) {
  return (
    <div>
      <h2>Progress Tracking</h2>
      <p>{`You have answered ${score} out of ${flashcards.length} correctly.`}</p>
    </div>
  );
}

export default ProgressTracking;
