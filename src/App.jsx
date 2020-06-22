import React, { useState } from 'react';
import logo from './logo.svg';
import csz from 'csz';

function App() {
  return (
    <div className={csz`text-align:center;`}>
      <header className={csz`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
      `}>
        <img src={logo} className={csz`

  height: 40vmin;
  pointer-events: none;

@media (prefers-reduced-motion: no-preference) {
  & {
    animation: App-logo-spin infinite 20s linear;
  }
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
        `}alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          className={csz`color:#61dafb;`}
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
