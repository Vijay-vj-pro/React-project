import { useState } from 'react';
import './App.css';
import Result from './components/result';

function App() {
  return (
    // const [term, setTerm] = useState("")
    // const handleChange = (e) => {
    //   setTerm(e.target.value)
    // }
    // for testing //
    <div className="container">
      <div id="small-container" >
        <h2>Guess the number between 1 to 10</h2>
        <input id="num-input" type="number" onChange={handleChange} />
        <Result/>
      </div>
    </div>
  );
}

export default App;
