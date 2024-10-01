// src/App.tsx
import React from 'react';
import BeerList from './components/BeerList';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <BeerList />
    </div>
  );
};

export default App;
