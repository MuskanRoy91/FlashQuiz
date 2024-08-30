import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">FlashCard Quiz App</div>
      <nav className="header__nav">
        <Link to="/">Create</Link>
        <Link to="/view">View</Link>
        <Link to="/quiz">Quiz</Link>
        <Link to="/progressTracking">Progress</Link>
      </nav>
    </header>
  );
}

export default Header;
