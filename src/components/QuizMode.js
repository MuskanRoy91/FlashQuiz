import React, { useState } from 'react';

function QuizMode({ flashcards }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // Check if there are no flashcards
  if (flashcards.length === 0) {
    return (
      <div>
        <h2>Quiz Mode</h2>
        <p>No quiz available. Please create some flashcards first.</p>
      </div>
    );
  }

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    const nextIndex = currentIndex + 1;
    if (nextIndex < flashcards.length) {
      setCurrentIndex(nextIndex);
    } else {
      setShowResult(true);
    }
  };

  const shuffleAnswers = (correctAnswer, wrongAnswers) => {
    const answers = [...wrongAnswers, correctAnswer];
    return answers.sort(() => Math.random() - 0.5);
  };

  if (showResult) {
    return (
      <div>
        <h2>Quiz Completed!</h2>
        <p>Your score: {score} / {flashcards.length}</p>
      </div>
    );
  }

  const currentFlashcard = flashcards[currentIndex];
  const shuffledAnswers = shuffleAnswers(
    currentFlashcard.correctAnswer,
    currentFlashcard.wrongAnswers
  );

  return (
    <div>
      <h2>Quiz Mode</h2>
      <p>{currentFlashcard.question}</p>
      <div>
        {shuffledAnswers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(answer === currentFlashcard.correctAnswer)}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuizMode;
