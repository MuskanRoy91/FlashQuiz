import React, { useState } from 'react';

function CreateFlashcards({ flashcards, setFlashcards }) {
  const [question, setQuestion] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [wrongAnswers, setWrongAnswers] = useState(['', '', '']);

  const handleWrongAnswerChange = (index, value) => {
    const newWrongAnswers = [...wrongAnswers];
    newWrongAnswers[index] = value;
    setWrongAnswers(newWrongAnswers);
  };

  const addFlashcard = () => {
    const newFlashcard = {
      question,
      correctAnswer,
      wrongAnswers
    };
    setFlashcards([...flashcards, newFlashcard]);
    setQuestion('');
    setCorrectAnswer('');
    setWrongAnswers(['', '', '']);
  };

  return (
    <div>
      <h2>Create Flashcards</h2>
      <input
        type="text"
        placeholder="Enter question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter correct answer"
        value={correctAnswer}
        onChange={(e) => setCorrectAnswer(e.target.value)}
      />
      {wrongAnswers.map((answer, index) => (
        <input
          key={index}
          type="text"
          placeholder={`Enter wrong answer ${index + 1}`}
          value={answer}
          onChange={(e) => handleWrongAnswerChange(index, e.target.value)}
        />
      ))}
      <button onClick={addFlashcard}>Add Flashcard</button>
    </div>
  );
}

export default CreateFlashcards;
