import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CreateFlashcards from './components/CreateFlashcards';
import ViewFlashcards from './components/ViewFlashcards';
import QuizMode from './components/QuizMode';
import ProgressTracking from './components/ProgressTracking';
import './App.css';

function App() {
  const [flashcards, setFlashcards] = useState([]);

  return (
    <Router>
      <div className="App">
        <Header />
        <main className="App__content">
          <Routes>
            <Route path='/' element={<CreateFlashcards flashcards={flashcards} setFlashcards={setFlashcards} />} />
            <Route path='/view' element={<ViewFlashcards flashcards={flashcards} />} />
            <Route path='/quiz' element={<QuizMode flashcards={flashcards} />} />
            <Route path='/progressTracking' element={<ProgressTracking flashcards={flashcards} />} />
            
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
