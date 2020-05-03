import React, {useReducer, useEffect} from 'react';
import './App.css';
import {initialState, reducer} from './reducer/reducer';
import {fetchVid} from './actions/actions';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)


  useEffect(() => {
    const videos = fetchVid()
    console.log("here", videos)
  }, [])
  return (
    <div className="App">
      <h1> Soccer is Life</h1>
      <button onClick={fetchVid()}>Here</button>
    </div>
  );
}

export default App;
