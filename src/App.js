//app.js
import React from 'react';
//import Song from './Components/Song'; 
//import Podcast from './Components/Podcast';
import Playlist from './Components/Playlist';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Your assignment-related components */}
        <Playlist />
      </header>
    </div>
  );
}

export default App;

