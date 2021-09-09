import React,{useState} from 'react';
import './App.css';

import AllSquares from 'components/AllSquares'
import ColorGuess from 'components/ColorGuess'

function App() {
  const [guess,setGuess]=useState('')

  const generateColors=():string=>{
    const a:number=Math.floor(Math.random()*255)
    const b:number=Math.floor(Math.random()*255)
    const c:number=Math.floor(Math.random()*255)
    const color=[a,b,c].join(',')
    
    return color
  }


  return (
    <div className="App">
      <header className="App-header">

        <ColorGuess guess={guess} />
        <AllSquares generateColors={generateColors} guess={guess} setGuess={setGuess}/>
      </header>
    </div>
  );
}

export default App;
