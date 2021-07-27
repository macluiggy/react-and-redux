import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Redux, { createStore } from 'react-redux'
//components
import Redux1 from './components/Redux1'
function App() {
  return (
    <>
  {/*
    <Counter />
  */}
      < Redux1 />
    </>
  );
}

export default App;
