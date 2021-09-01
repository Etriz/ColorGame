import React from 'react';
import './App.css';

import AllSquares from 'components/AllSquares';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hex of color here
        </p>
        <AllSquares/>
      </header>
    </div>
  );
}

export default App;
