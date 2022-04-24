/* eslint-disable prettier/prettier */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ComponentA } from './components/ComponentA';

function App() {
  const y = 1;
  const z = y + 2;
  console.log('z', z);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <>
          <ComponentA parameter1='AbC' className='colorMain'></ComponentA>
        </>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
