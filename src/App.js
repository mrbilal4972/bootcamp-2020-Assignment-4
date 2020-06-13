import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const [state, setState] = useState({
    glow: true,
    temp: 22
  });

  function increment(){
    setState((prevState) => {
      return {
        ...state,
      temp: prevState.temp + 1
      }
    })
  }

  function decrement(){
    setState((prevState) => {
      return {
        ...state,
      temp: prevState.temp - 1
      }
    })
  }

  return (
    <div className={`App ${state.glow ? 'glow' : 'off'}`}>
      <div>
      <h2>
      The Light is {state.glow ? 'Glowing' : 'Turned off'}
      </h2>
      <button onClick={() => setState({...state, glow: true})}>ON</button>
      <button onClick={() => setState({...state, glow: false})}>OFF</button>
      </div>
      
      <div className='mt-5'>
          <button onClick= {increment} type="button" className="btn btn-secondary">+</button>
          <button type="button" className="btn btn-light" disabled><span className= 'tempText'>Temperture: {state.temp}℃</span></button>
          <button onClick= {decrement} type="button" className="btn btn-secondary">-</button>
      </div>
    </div>
  );
}

export default App;
