import React from 'react';
import './App.css';
import wands from './wanda.js';
import WandaList from './WandaList';

function App() {
  return (
    <div id="app" className="container-fluid">

      <div className="row image">


        <nav class="navbar navbar-light bg-dark">
          <span class="navbar-brand mb-0 h1"></span>
        </nav>
        <div className="content col-10">
          <WandaList wands={wands} />

        </div>
      </div>
    </div >
  );
}

export default App;
