import React from 'react';

function ViewFlashcards({ flashcards }) {
  return (
    <div>
      <h2>View Flashcards</h2>
      {flashcards.length > 0 ? (
        <ul>
          {flashcards.map((flashcard, index) => (
            <li key={index}>
              <h3>{flashcard.question}</h3>
              <p>Correct Answer: {flashcard.correctAnswer}</p>
              <p>Wrong Answers: {flashcard.wrongAnswers.join(', ')}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No flashcards available</p>
      )}
    </div>
  );
}

export default ViewFlashcards;
