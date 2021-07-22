import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import logo from './logo.svg';

import * as serviceWorker from './serviceWorker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a className="App-link"href="https://reactjs.org"target="_blank"rel="noopener noreferrer" >
          Learn React
        </a>
      </header>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister()

export default App;
